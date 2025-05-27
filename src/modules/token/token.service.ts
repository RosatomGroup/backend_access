// import { Injectable } from '@nestjs/common';
// import { AccessTokenService } from './strategies/access-token.service';
// import { RefreshTokenService } from './strategies/refresh-token.service';
// import { PrismaService } from '../prisma/prisma.service';
// import { AccessLevel } from '../auth/enums/user-role.enum';

// interface GenerateTokensParams {
//   userId: number;
//   email: string;
//   rememberMe: boolean;
//   accessLevel: AccessLevel;
// }

// @Injectable()
// export class TokenService {
//   constructor(
//     private accessTokenService: AccessTokenService,
//     private refreshTokenService: RefreshTokenService,
//     private prisma: PrismaService,
//   ) { }

//   async generateTokens(params: GenerateTokensParams) {
//     const { userId, email, rememberMe, accessLevel } = params;

//     const accessToken = await this.accessTokenService.sign({
//       userId,
//       email,
//       accessLevel
//     });

//     const refreshToken = await this.refreshTokenService.sign({
//       userId,
//       email,
//       rememberMe
//     });

//     await this.prisma.$transaction([
//       this.prisma.accessToken.create({
//         data: {
//           token: accessToken,
//           userId,
//           expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 минут
//         },
//       }),
//       this.prisma.refreshToken.create({
//         data: {
//           token: refreshToken,
//           userId,
//           expiresAt: new Date(Date.now() + (rememberMe
//             ? 7 * 24 * 60 * 60 * 1000 // 7 дней для rememberMe
//             : 24 * 60 * 60 * 1000)),  // 1 день без rememberMe
//         },
//       }),
//     ]);

//     return { accessToken, refreshToken };
//   }

//   async verifyRefreshToken(token: string) {
//     return this.refreshTokenService.verify(token);
//   }

//   async verifyAccessToken(token: string) {
//     return this.accessTokenService.verify(token);
//   }
// }


import { Injectable } from '@nestjs/common';
import { AccessTokenService } from './strategies/access-token.service';
import { RefreshTokenService } from './strategies/refresh-token.service';
import { PrismaService } from '../prisma/prisma.service';
import { AccessLevel } from '../auth/enums/user-role.enum';

interface GenerateTokensParams {
  userId: number;
  email: string;
  rememberMe: boolean;
  accessLevel: AccessLevel;
}

@Injectable()
export class TokenService {
  constructor(
    private readonly accessTokenService: AccessTokenService,
    private readonly refreshTokenService: RefreshTokenService,
    private readonly prisma: PrismaService,
  ) {}

  async generateTokens(params: GenerateTokensParams) {
    const { userId, email, rememberMe, accessLevel } = params;

    // Для AccessToken (передаем объект)
    const accessToken = await this.accessTokenService.sign({ 
      userId, 
      email, 
      accessLevel 
    });

    // Для RefreshToken (передаем отдельные параметры)
    const refreshToken = await this.refreshTokenService.sign(
      userId,
      email,
      rememberMe
    );

    await this.prisma.$transaction([
      this.prisma.accessToken.create({
        data: {
          token: accessToken,
          userId,
          expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 минут
        },
      }),
      this.prisma.refreshToken.create({
        data: {
          token: refreshToken,
          userId,
          expiresAt: new Date(Date.now() + (rememberMe
            ? 7 * 24 * 60 * 60 * 1000 // 7 дней для rememberMe
            : 24 * 60 * 60 * 1000)),  // 1 день без rememberMe
        },
      }),
    ]);

    return { accessToken, refreshToken };
  }

  async verifyRefreshToken(token: string) {
    return this.refreshTokenService.verify(token);
  }

  async verifyAccessToken(token: string) {
    return this.accessTokenService.verify(token);
  }
}