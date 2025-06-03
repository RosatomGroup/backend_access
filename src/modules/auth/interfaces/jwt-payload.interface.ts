export interface JwtPayload {
    userId: number;
    email: string;
    // role?: string;
    accessLevel?: string;
  }