
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model access
 * 
 */
export type access = $Result.DefaultSelection<Prisma.$accessPayload>
/**
 * Model log
 * 
 */
export type log = $Result.DefaultSelection<Prisma.$logPayload>
/**
 * Model request
 * 
 */
export type request = $Result.DefaultSelection<Prisma.$requestPayload>
/**
 * Model resource
 * 
 */
export type resource = $Result.DefaultSelection<Prisma.$resourcePayload>
/**
 * Model resource_role
 * 
 */
export type resource_role = $Result.DefaultSelection<Prisma.$resource_rolePayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model user_request
 * 
 */
export type user_request = $Result.DefaultSelection<Prisma.$user_requestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accesses
 * const accesses = await prisma.access.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accesses
   * const accesses = await prisma.access.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.access`: Exposes CRUD operations for the **access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesses
    * const accesses = await prisma.access.findMany()
    * ```
    */
  get access(): Prisma.accessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.logDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.request`: Exposes CRUD operations for the **request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.requestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource`: Exposes CRUD operations for the **resource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resources
    * const resources = await prisma.resource.findMany()
    * ```
    */
  get resource(): Prisma.resourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resource_role`: Exposes CRUD operations for the **resource_role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resource_roles
    * const resource_roles = await prisma.resource_role.findMany()
    * ```
    */
  get resource_role(): Prisma.resource_roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_request`: Exposes CRUD operations for the **user_request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_requests
    * const user_requests = await prisma.user_request.findMany()
    * ```
    */
  get user_request(): Prisma.user_requestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    access: 'access',
    log: 'log',
    request: 'request',
    resource: 'resource',
    resource_role: 'resource_role',
    role: 'role',
    user: 'user',
    user_request: 'user_request'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "access" | "log" | "request" | "resource" | "resource_role" | "role" | "user" | "user_request"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      access: {
        payload: Prisma.$accessPayload<ExtArgs>
        fields: Prisma.accessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>
          }
          findFirst: {
            args: Prisma.accessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>
          }
          findMany: {
            args: Prisma.accessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>[]
          }
          create: {
            args: Prisma.accessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>
          }
          createMany: {
            args: Prisma.accessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>[]
          }
          delete: {
            args: Prisma.accessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>
          }
          update: {
            args: Prisma.accessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>
          }
          deleteMany: {
            args: Prisma.accessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>[]
          }
          upsert: {
            args: Prisma.accessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accessPayload>
          }
          aggregate: {
            args: Prisma.AccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccess>
          }
          groupBy: {
            args: Prisma.accessGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.accessCountArgs<ExtArgs>
            result: $Utils.Optional<AccessCountAggregateOutputType> | number
          }
        }
      }
      log: {
        payload: Prisma.$logPayload<ExtArgs>
        fields: Prisma.logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          findFirst: {
            args: Prisma.logFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          findMany: {
            args: Prisma.logFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>[]
          }
          create: {
            args: Prisma.logCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          createMany: {
            args: Prisma.logCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.logCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>[]
          }
          delete: {
            args: Prisma.logDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          update: {
            args: Prisma.logUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          deleteMany: {
            args: Prisma.logDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.logUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>[]
          }
          upsert: {
            args: Prisma.logUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.logGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.logCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
      request: {
        payload: Prisma.$requestPayload<ExtArgs>
        fields: Prisma.requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          findFirst: {
            args: Prisma.requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          findMany: {
            args: Prisma.requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[]
          }
          create: {
            args: Prisma.requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          createMany: {
            args: Prisma.requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.requestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[]
          }
          delete: {
            args: Prisma.requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          update: {
            args: Prisma.requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          deleteMany: {
            args: Prisma.requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.requestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>[]
          }
          upsert: {
            args: Prisma.requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.requestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      resource: {
        payload: Prisma.$resourcePayload<ExtArgs>
        fields: Prisma.resourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>
          }
          findFirst: {
            args: Prisma.resourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>
          }
          findMany: {
            args: Prisma.resourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>[]
          }
          create: {
            args: Prisma.resourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>
          }
          createMany: {
            args: Prisma.resourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.resourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>[]
          }
          delete: {
            args: Prisma.resourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>
          }
          update: {
            args: Prisma.resourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>
          }
          deleteMany: {
            args: Prisma.resourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.resourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>[]
          }
          upsert: {
            args: Prisma.resourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resourcePayload>
          }
          aggregate: {
            args: Prisma.ResourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource>
          }
          groupBy: {
            args: Prisma.resourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.resourceCountArgs<ExtArgs>
            result: $Utils.Optional<ResourceCountAggregateOutputType> | number
          }
        }
      }
      resource_role: {
        payload: Prisma.$resource_rolePayload<ExtArgs>
        fields: Prisma.resource_roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resource_roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resource_roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>
          }
          findFirst: {
            args: Prisma.resource_roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resource_roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>
          }
          findMany: {
            args: Prisma.resource_roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>[]
          }
          create: {
            args: Prisma.resource_roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>
          }
          createMany: {
            args: Prisma.resource_roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.resource_roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>[]
          }
          delete: {
            args: Prisma.resource_roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>
          }
          update: {
            args: Prisma.resource_roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>
          }
          deleteMany: {
            args: Prisma.resource_roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resource_roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.resource_roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>[]
          }
          upsert: {
            args: Prisma.resource_roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resource_rolePayload>
          }
          aggregate: {
            args: Prisma.Resource_roleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResource_role>
          }
          groupBy: {
            args: Prisma.resource_roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Resource_roleGroupByOutputType>[]
          }
          count: {
            args: Prisma.resource_roleCountArgs<ExtArgs>
            result: $Utils.Optional<Resource_roleCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.roleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.roleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      user_request: {
        payload: Prisma.$user_requestPayload<ExtArgs>
        fields: Prisma.user_requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>
          }
          findFirst: {
            args: Prisma.user_requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>
          }
          findMany: {
            args: Prisma.user_requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>[]
          }
          create: {
            args: Prisma.user_requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>
          }
          createMany: {
            args: Prisma.user_requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_requestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>[]
          }
          delete: {
            args: Prisma.user_requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>
          }
          update: {
            args: Prisma.user_requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>
          }
          deleteMany: {
            args: Prisma.user_requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_requestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>[]
          }
          upsert: {
            args: Prisma.user_requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_requestPayload>
          }
          aggregate: {
            args: Prisma.User_requestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_request>
          }
          groupBy: {
            args: Prisma.user_requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_requestGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_requestCountArgs<ExtArgs>
            result: $Utils.Optional<User_requestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    access?: accessOmit
    log?: logOmit
    request?: requestOmit
    resource?: resourceOmit
    resource_role?: resource_roleOmit
    role?: roleOmit
    user?: userOmit
    user_request?: user_requestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccessCountOutputType
   */

  export type AccessCountOutputType = {
    role: number
  }

  export type AccessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | AccessCountOutputTypeCountRoleArgs
  }

  // Custom InputTypes
  /**
   * AccessCountOutputType without action
   */
  export type AccessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCountOutputType
     */
    select?: AccessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccessCountOutputType without action
   */
  export type AccessCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
  }


  /**
   * Count Type RequestCountOutputType
   */

  export type RequestCountOutputType = {
    user_request: number
  }

  export type RequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_request?: boolean | RequestCountOutputTypeCountUser_requestArgs
  }

  // Custom InputTypes
  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeCountUser_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_requestWhereInput
  }


  /**
   * Count Type ResourceCountOutputType
   */

  export type ResourceCountOutputType = {
    request: number
    resource_role: number
  }

  export type ResourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | ResourceCountOutputTypeCountRequestArgs
    resource_role?: boolean | ResourceCountOutputTypeCountResource_roleArgs
  }

  // Custom InputTypes
  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResourceCountOutputType
     */
    select?: ResourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput
  }

  /**
   * ResourceCountOutputType without action
   */
  export type ResourceCountOutputTypeCountResource_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resource_roleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    request: number
    resource_role: number
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | RoleCountOutputTypeCountRequestArgs
    resource_role?: boolean | RoleCountOutputTypeCountResource_roleArgs
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountResource_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resource_roleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    log: number
    user_request: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | UserCountOutputTypeCountLogArgs
    user_request?: boolean | UserCountOutputTypeCountUser_requestArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_requestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model access
   */

  export type AggregateAccess = {
    _count: AccessCountAggregateOutputType | null
    _avg: AccessAvgAggregateOutputType | null
    _sum: AccessSumAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  export type AccessAvgAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type AccessSumAggregateOutputType = {
    id: number | null
    level: number | null
  }

  export type AccessMinAggregateOutputType = {
    id: number | null
    level: number | null
    description: string | null
  }

  export type AccessMaxAggregateOutputType = {
    id: number | null
    level: number | null
    description: string | null
  }

  export type AccessCountAggregateOutputType = {
    id: number
    level: number
    description: number
    _all: number
  }


  export type AccessAvgAggregateInputType = {
    id?: true
    level?: true
  }

  export type AccessSumAggregateInputType = {
    id?: true
    level?: true
  }

  export type AccessMinAggregateInputType = {
    id?: true
    level?: true
    description?: true
  }

  export type AccessMaxAggregateInputType = {
    id?: true
    level?: true
    description?: true
  }

  export type AccessCountAggregateInputType = {
    id?: true
    level?: true
    description?: true
    _all?: true
  }

  export type AccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which access to aggregate.
     */
    where?: accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesses to fetch.
     */
    orderBy?: accessOrderByWithRelationInput | accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accesses
    **/
    _count?: true | AccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessMaxAggregateInputType
  }

  export type GetAccessAggregateType<T extends AccessAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess[P]>
      : GetScalarType<T[P], AggregateAccess[P]>
  }




  export type accessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accessWhereInput
    orderBy?: accessOrderByWithAggregationInput | accessOrderByWithAggregationInput[]
    by: AccessScalarFieldEnum[] | AccessScalarFieldEnum
    having?: accessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessCountAggregateInputType | true
    _avg?: AccessAvgAggregateInputType
    _sum?: AccessSumAggregateInputType
    _min?: AccessMinAggregateInputType
    _max?: AccessMaxAggregateInputType
  }

  export type AccessGroupByOutputType = {
    id: number
    level: number
    description: string | null
    _count: AccessCountAggregateOutputType | null
    _avg: AccessAvgAggregateOutputType | null
    _sum: AccessSumAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  type GetAccessGroupByPayload<T extends accessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessGroupByOutputType[P]>
            : GetScalarType<T[P], AccessGroupByOutputType[P]>
        }
      >
    >


  export type accessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    description?: boolean
    role?: boolean | access$roleArgs<ExtArgs>
    _count?: boolean | AccessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access"]>

  export type accessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    description?: boolean
  }, ExtArgs["result"]["access"]>

  export type accessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    description?: boolean
  }, ExtArgs["result"]["access"]>

  export type accessSelectScalar = {
    id?: boolean
    level?: boolean
    description?: boolean
  }

  export type accessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "description", ExtArgs["result"]["access"]>
  export type accessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | access$roleArgs<ExtArgs>
    _count?: boolean | AccessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type accessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $accessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "access"
    objects: {
      role: Prisma.$rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      level: number
      description: string | null
    }, ExtArgs["result"]["access"]>
    composites: {}
  }

  type accessGetPayload<S extends boolean | null | undefined | accessDefaultArgs> = $Result.GetResult<Prisma.$accessPayload, S>

  type accessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessCountAggregateInputType | true
    }

  export interface accessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['access'], meta: { name: 'access' } }
    /**
     * Find zero or one Access that matches the filter.
     * @param {accessFindUniqueArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accessFindUniqueArgs>(args: SelectSubset<T, accessFindUniqueArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Access that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accessFindUniqueOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accessFindUniqueOrThrowArgs>(args: SelectSubset<T, accessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessFindFirstArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accessFindFirstArgs>(args?: SelectSubset<T, accessFindFirstArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessFindFirstOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accessFindFirstOrThrowArgs>(args?: SelectSubset<T, accessFindFirstOrThrowArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesses
     * const accesses = await prisma.access.findMany()
     * 
     * // Get first 10 Accesses
     * const accesses = await prisma.access.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessWithIdOnly = await prisma.access.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accessFindManyArgs>(args?: SelectSubset<T, accessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Access.
     * @param {accessCreateArgs} args - Arguments to create a Access.
     * @example
     * // Create one Access
     * const Access = await prisma.access.create({
     *   data: {
     *     // ... data to create a Access
     *   }
     * })
     * 
     */
    create<T extends accessCreateArgs>(args: SelectSubset<T, accessCreateArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accesses.
     * @param {accessCreateManyArgs} args - Arguments to create many Accesses.
     * @example
     * // Create many Accesses
     * const access = await prisma.access.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accessCreateManyArgs>(args?: SelectSubset<T, accessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accesses and returns the data saved in the database.
     * @param {accessCreateManyAndReturnArgs} args - Arguments to create many Accesses.
     * @example
     * // Create many Accesses
     * const access = await prisma.access.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accesses and only return the `id`
     * const accessWithIdOnly = await prisma.access.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accessCreateManyAndReturnArgs>(args?: SelectSubset<T, accessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Access.
     * @param {accessDeleteArgs} args - Arguments to delete one Access.
     * @example
     * // Delete one Access
     * const Access = await prisma.access.delete({
     *   where: {
     *     // ... filter to delete one Access
     *   }
     * })
     * 
     */
    delete<T extends accessDeleteArgs>(args: SelectSubset<T, accessDeleteArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Access.
     * @param {accessUpdateArgs} args - Arguments to update one Access.
     * @example
     * // Update one Access
     * const access = await prisma.access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accessUpdateArgs>(args: SelectSubset<T, accessUpdateArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accesses.
     * @param {accessDeleteManyArgs} args - Arguments to filter Accesses to delete.
     * @example
     * // Delete a few Accesses
     * const { count } = await prisma.access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accessDeleteManyArgs>(args?: SelectSubset<T, accessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accessUpdateManyArgs>(args: SelectSubset<T, accessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses and returns the data updated in the database.
     * @param {accessUpdateManyAndReturnArgs} args - Arguments to update many Accesses.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accesses and only return the `id`
     * const accessWithIdOnly = await prisma.access.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends accessUpdateManyAndReturnArgs>(args: SelectSubset<T, accessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Access.
     * @param {accessUpsertArgs} args - Arguments to update or create a Access.
     * @example
     * // Update or create a Access
     * const access = await prisma.access.upsert({
     *   create: {
     *     // ... data to create a Access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access we want to update
     *   }
     * })
     */
    upsert<T extends accessUpsertArgs>(args: SelectSubset<T, accessUpsertArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessCountArgs} args - Arguments to filter Accesses to count.
     * @example
     * // Count the number of Accesses
     * const count = await prisma.access.count({
     *   where: {
     *     // ... the filter for the Accesses we want to count
     *   }
     * })
    **/
    count<T extends accessCountArgs>(
      args?: Subset<T, accessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessAggregateArgs>(args: Subset<T, AccessAggregateArgs>): Prisma.PrismaPromise<GetAccessAggregateType<T>>

    /**
     * Group by Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accessGroupByArgs['orderBy'] }
        : { orderBy?: accessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the access model
   */
  readonly fields: accessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends access$roleArgs<ExtArgs> = {}>(args?: Subset<T, access$roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the access model
   */
  interface accessFieldRefs {
    readonly id: FieldRef<"access", 'Int'>
    readonly level: FieldRef<"access", 'Int'>
    readonly description: FieldRef<"access", 'String'>
  }
    

  // Custom InputTypes
  /**
   * access findUnique
   */
  export type accessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * Filter, which access to fetch.
     */
    where: accessWhereUniqueInput
  }

  /**
   * access findUniqueOrThrow
   */
  export type accessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * Filter, which access to fetch.
     */
    where: accessWhereUniqueInput
  }

  /**
   * access findFirst
   */
  export type accessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * Filter, which access to fetch.
     */
    where?: accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesses to fetch.
     */
    orderBy?: accessOrderByWithRelationInput | accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accesses.
     */
    cursor?: accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * access findFirstOrThrow
   */
  export type accessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * Filter, which access to fetch.
     */
    where?: accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesses to fetch.
     */
    orderBy?: accessOrderByWithRelationInput | accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accesses.
     */
    cursor?: accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * access findMany
   */
  export type accessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * Filter, which accesses to fetch.
     */
    where?: accessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accesses to fetch.
     */
    orderBy?: accessOrderByWithRelationInput | accessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accesses.
     */
    cursor?: accessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accesses.
     */
    skip?: number
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * access create
   */
  export type accessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * The data needed to create a access.
     */
    data: XOR<accessCreateInput, accessUncheckedCreateInput>
  }

  /**
   * access createMany
   */
  export type accessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accesses.
     */
    data: accessCreateManyInput | accessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * access createManyAndReturn
   */
  export type accessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * The data used to create many accesses.
     */
    data: accessCreateManyInput | accessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * access update
   */
  export type accessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * The data needed to update a access.
     */
    data: XOR<accessUpdateInput, accessUncheckedUpdateInput>
    /**
     * Choose, which access to update.
     */
    where: accessWhereUniqueInput
  }

  /**
   * access updateMany
   */
  export type accessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accesses.
     */
    data: XOR<accessUpdateManyMutationInput, accessUncheckedUpdateManyInput>
    /**
     * Filter which accesses to update
     */
    where?: accessWhereInput
    /**
     * Limit how many accesses to update.
     */
    limit?: number
  }

  /**
   * access updateManyAndReturn
   */
  export type accessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * The data used to update accesses.
     */
    data: XOR<accessUpdateManyMutationInput, accessUncheckedUpdateManyInput>
    /**
     * Filter which accesses to update
     */
    where?: accessWhereInput
    /**
     * Limit how many accesses to update.
     */
    limit?: number
  }

  /**
   * access upsert
   */
  export type accessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * The filter to search for the access to update in case it exists.
     */
    where: accessWhereUniqueInput
    /**
     * In case the access found by the `where` argument doesn't exist, create a new access with this data.
     */
    create: XOR<accessCreateInput, accessUncheckedCreateInput>
    /**
     * In case the access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accessUpdateInput, accessUncheckedUpdateInput>
  }

  /**
   * access delete
   */
  export type accessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
    /**
     * Filter which access to delete.
     */
    where: accessWhereUniqueInput
  }

  /**
   * access deleteMany
   */
  export type accessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accesses to delete
     */
    where?: accessWhereInput
    /**
     * Limit how many accesses to delete.
     */
    limit?: number
  }

  /**
   * access.role
   */
  export type access$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    where?: roleWhereInput
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    cursor?: roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * access without action
   */
  export type accessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the access
     */
    select?: accessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the access
     */
    omit?: accessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accessInclude<ExtArgs> | null
  }


  /**
   * Model log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type LogSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type LogMinAggregateOutputType = {
    id: number | null
    account_id: number | null
    action: string | null
    action_time: Date | null
  }

  export type LogMaxAggregateOutputType = {
    id: number | null
    account_id: number | null
    action: string | null
    action_time: Date | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    account_id: number
    action: number
    action_time: number
    _all: number
  }


  export type LogAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type LogSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type LogMinAggregateInputType = {
    id?: true
    account_id?: true
    action?: true
    action_time?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    account_id?: true
    action?: true
    action_time?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    account_id?: true
    action?: true
    action_time?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which log to aggregate.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logWhereInput
    orderBy?: logOrderByWithAggregationInput | logOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _avg?: LogAvgAggregateInputType
    _sum?: LogSumAggregateInputType
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: number
    account_id: number
    action: string
    action_time: Date
    _count: LogCountAggregateOutputType | null
    _avg: LogAvgAggregateOutputType | null
    _sum: LogSumAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    action?: boolean
    action_time?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type logSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    action?: boolean
    action_time?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type logSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    action?: boolean
    action_time?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type logSelectScalar = {
    id?: boolean
    account_id?: boolean
    action?: boolean
    action_time?: boolean
  }

  export type logOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "action" | "action_time", ExtArgs["result"]["log"]>
  export type logInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type logIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type logIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "log"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      account_id: number
      action: string
      action_time: Date
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type logGetPayload<S extends boolean | null | undefined | logDefaultArgs> = $Result.GetResult<Prisma.$logPayload, S>

  type logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['log'], meta: { name: 'log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {logFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logFindUniqueArgs>(args: SelectSubset<T, logFindUniqueArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logFindUniqueOrThrowArgs>(args: SelectSubset<T, logFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logFindFirstArgs>(args?: SelectSubset<T, logFindFirstArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logFindFirstOrThrowArgs>(args?: SelectSubset<T, logFindFirstOrThrowArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logFindManyArgs>(args?: SelectSubset<T, logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {logCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends logCreateArgs>(args: SelectSubset<T, logCreateArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logCreateManyArgs>(args?: SelectSubset<T, logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {logCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends logCreateManyAndReturnArgs>(args?: SelectSubset<T, logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {logDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends logDeleteArgs>(args: SelectSubset<T, logDeleteArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {logUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logUpdateArgs>(args: SelectSubset<T, logUpdateArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logDeleteManyArgs>(args?: SelectSubset<T, logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logUpdateManyArgs>(args: SelectSubset<T, logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {logUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends logUpdateManyAndReturnArgs>(args: SelectSubset<T, logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {logUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends logUpsertArgs>(args: SelectSubset<T, logUpsertArgs<ExtArgs>>): Prisma__logClient<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logCountArgs>(
      args?: Subset<T, logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logGroupByArgs['orderBy'] }
        : { orderBy?: logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the log model
   */
  readonly fields: logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the log model
   */
  interface logFieldRefs {
    readonly id: FieldRef<"log", 'Int'>
    readonly account_id: FieldRef<"log", 'Int'>
    readonly action: FieldRef<"log", 'String'>
    readonly action_time: FieldRef<"log", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * log findUnique
   */
  export type logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where: logWhereUniqueInput
  }

  /**
   * log findUniqueOrThrow
   */
  export type logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where: logWhereUniqueInput
  }

  /**
   * log findFirst
   */
  export type logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log findFirstOrThrow
   */
  export type logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * Filter, which log to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log findMany
   */
  export type logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * log create
   */
  export type logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * The data needed to create a log.
     */
    data: XOR<logCreateInput, logUncheckedCreateInput>
  }

  /**
   * log createMany
   */
  export type logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logCreateManyInput | logCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * log createManyAndReturn
   */
  export type logCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * The data used to create many logs.
     */
    data: logCreateManyInput | logCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * log update
   */
  export type logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * The data needed to update a log.
     */
    data: XOR<logUpdateInput, logUncheckedUpdateInput>
    /**
     * Choose, which log to update.
     */
    where: logWhereUniqueInput
  }

  /**
   * log updateMany
   */
  export type logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * log updateManyAndReturn
   */
  export type logUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * The data used to update logs.
     */
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * log upsert
   */
  export type logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * The filter to search for the log to update in case it exists.
     */
    where: logWhereUniqueInput
    /**
     * In case the log found by the `where` argument doesn't exist, create a new log with this data.
     */
    create: XOR<logCreateInput, logUncheckedCreateInput>
    /**
     * In case the log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logUpdateInput, logUncheckedUpdateInput>
  }

  /**
   * log delete
   */
  export type logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    /**
     * Filter which log to delete.
     */
    where: logWhereUniqueInput
  }

  /**
   * log deleteMany
   */
  export type logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * log without action
   */
  export type logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
  }


  /**
   * Model request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestAvgAggregateOutputType = {
    id: number | null
    resource_id: number | null
    role_id: number | null
  }

  export type RequestSumAggregateOutputType = {
    id: number | null
    resource_id: number | null
    role_id: number | null
  }

  export type RequestMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    middle_name: string | null
    email: string | null
    status: string | null
    create_date: Date | null
    complete_date: Date | null
    resource_id: number | null
    role_id: number | null
  }

  export type RequestMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    middle_name: string | null
    email: string | null
    status: string | null
    create_date: Date | null
    complete_date: Date | null
    resource_id: number | null
    role_id: number | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    middle_name: number
    email: number
    status: number
    create_date: number
    complete_date: number
    resource_id: number
    role_id: number
    _all: number
  }


  export type RequestAvgAggregateInputType = {
    id?: true
    resource_id?: true
    role_id?: true
  }

  export type RequestSumAggregateInputType = {
    id?: true
    resource_id?: true
    role_id?: true
  }

  export type RequestMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    middle_name?: true
    email?: true
    status?: true
    create_date?: true
    complete_date?: true
    resource_id?: true
    role_id?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    middle_name?: true
    email?: true
    status?: true
    create_date?: true
    complete_date?: true
    resource_id?: true
    role_id?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    middle_name?: true
    email?: true
    status?: true
    create_date?: true
    complete_date?: true
    resource_id?: true
    role_id?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which request to aggregate.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requestWhereInput
    orderBy?: requestOrderByWithAggregationInput | requestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _avg?: RequestAvgAggregateInputType
    _sum?: RequestSumAggregateInputType
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date
    complete_date: Date
    resource_id: number
    role_id: number
    _count: RequestCountAggregateOutputType | null
    _avg: RequestAvgAggregateOutputType | null
    _sum: RequestSumAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    email?: boolean
    status?: boolean
    create_date?: boolean
    complete_date?: boolean
    resource_id?: boolean
    role_id?: boolean
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
    user_request?: boolean | request$user_requestArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type requestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    email?: boolean
    status?: boolean
    create_date?: boolean
    complete_date?: boolean
    resource_id?: boolean
    role_id?: boolean
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type requestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    email?: boolean
    status?: boolean
    create_date?: boolean
    complete_date?: boolean
    resource_id?: boolean
    role_id?: boolean
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type requestSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    email?: boolean
    status?: boolean
    create_date?: boolean
    complete_date?: boolean
    resource_id?: boolean
    role_id?: boolean
  }

  export type requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "middle_name" | "email" | "status" | "create_date" | "complete_date" | "resource_id" | "role_id", ExtArgs["result"]["request"]>
  export type requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
    user_request?: boolean | request$user_requestArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type requestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type requestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "request"
    objects: {
      resource: Prisma.$resourcePayload<ExtArgs>
      role: Prisma.$rolePayload<ExtArgs>
      user_request: Prisma.$user_requestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      middle_name: string
      email: string
      status: string
      create_date: Date
      complete_date: Date
      resource_id: number
      role_id: number
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type requestGetPayload<S extends boolean | null | undefined | requestDefaultArgs> = $Result.GetResult<Prisma.$requestPayload, S>

  type requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['request'], meta: { name: 'request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {requestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends requestFindUniqueArgs>(args: SelectSubset<T, requestFindUniqueArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {requestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends requestFindUniqueOrThrowArgs>(args: SelectSubset<T, requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends requestFindFirstArgs>(args?: SelectSubset<T, requestFindFirstArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends requestFindFirstOrThrowArgs>(args?: SelectSubset<T, requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends requestFindManyArgs>(args?: SelectSubset<T, requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {requestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends requestCreateArgs>(args: SelectSubset<T, requestCreateArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {requestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends requestCreateManyArgs>(args?: SelectSubset<T, requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {requestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends requestCreateManyAndReturnArgs>(args?: SelectSubset<T, requestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {requestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends requestDeleteArgs>(args: SelectSubset<T, requestDeleteArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {requestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends requestUpdateArgs>(args: SelectSubset<T, requestUpdateArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {requestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends requestDeleteManyArgs>(args?: SelectSubset<T, requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends requestUpdateManyArgs>(args: SelectSubset<T, requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {requestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends requestUpdateManyAndReturnArgs>(args: SelectSubset<T, requestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {requestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends requestUpsertArgs>(args: SelectSubset<T, requestUpsertArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends requestCountArgs>(
      args?: Subset<T, requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: requestGroupByArgs['orderBy'] }
        : { orderBy?: requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the request model
   */
  readonly fields: requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resource<T extends resourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, resourceDefaultArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user_request<T extends request$user_requestArgs<ExtArgs> = {}>(args?: Subset<T, request$user_requestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the request model
   */
  interface requestFieldRefs {
    readonly id: FieldRef<"request", 'Int'>
    readonly name: FieldRef<"request", 'String'>
    readonly surname: FieldRef<"request", 'String'>
    readonly middle_name: FieldRef<"request", 'String'>
    readonly email: FieldRef<"request", 'String'>
    readonly status: FieldRef<"request", 'String'>
    readonly create_date: FieldRef<"request", 'DateTime'>
    readonly complete_date: FieldRef<"request", 'DateTime'>
    readonly resource_id: FieldRef<"request", 'Int'>
    readonly role_id: FieldRef<"request", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * request findUnique
   */
  export type requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request findUniqueOrThrow
   */
  export type requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request findFirst
   */
  export type requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requests.
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * request findFirstOrThrow
   */
  export type requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which request to fetch.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requests.
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * request findMany
   */
  export type requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter, which requests to fetch.
     */
    where?: requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requests to fetch.
     */
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing requests.
     */
    cursor?: requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * request create
   */
  export type requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * The data needed to create a request.
     */
    data: XOR<requestCreateInput, requestUncheckedCreateInput>
  }

  /**
   * request createMany
   */
  export type requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many requests.
     */
    data: requestCreateManyInput | requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * request createManyAndReturn
   */
  export type requestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * The data used to create many requests.
     */
    data: requestCreateManyInput | requestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * request update
   */
  export type requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * The data needed to update a request.
     */
    data: XOR<requestUpdateInput, requestUncheckedUpdateInput>
    /**
     * Choose, which request to update.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request updateMany
   */
  export type requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update requests.
     */
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyInput>
    /**
     * Filter which requests to update
     */
    where?: requestWhereInput
    /**
     * Limit how many requests to update.
     */
    limit?: number
  }

  /**
   * request updateManyAndReturn
   */
  export type requestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * The data used to update requests.
     */
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyInput>
    /**
     * Filter which requests to update
     */
    where?: requestWhereInput
    /**
     * Limit how many requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * request upsert
   */
  export type requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * The filter to search for the request to update in case it exists.
     */
    where: requestWhereUniqueInput
    /**
     * In case the request found by the `where` argument doesn't exist, create a new request with this data.
     */
    create: XOR<requestCreateInput, requestUncheckedCreateInput>
    /**
     * In case the request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<requestUpdateInput, requestUncheckedUpdateInput>
  }

  /**
   * request delete
   */
  export type requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    /**
     * Filter which request to delete.
     */
    where: requestWhereUniqueInput
  }

  /**
   * request deleteMany
   */
  export type requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requests to delete
     */
    where?: requestWhereInput
    /**
     * Limit how many requests to delete.
     */
    limit?: number
  }

  /**
   * request.user_request
   */
  export type request$user_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    where?: user_requestWhereInput
    orderBy?: user_requestOrderByWithRelationInput | user_requestOrderByWithRelationInput[]
    cursor?: user_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_requestScalarFieldEnum | User_requestScalarFieldEnum[]
  }

  /**
   * request without action
   */
  export type requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
  }


  /**
   * Model resource
   */

  export type AggregateResource = {
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  export type ResourceAvgAggregateOutputType = {
    id: number | null
  }

  export type ResourceSumAggregateOutputType = {
    id: number | null
  }

  export type ResourceMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    link: string | null
  }

  export type ResourceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    link: string | null
  }

  export type ResourceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    link: number
    _all: number
  }


  export type ResourceAvgAggregateInputType = {
    id?: true
  }

  export type ResourceSumAggregateInputType = {
    id?: true
  }

  export type ResourceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
  }

  export type ResourceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
  }

  export type ResourceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    link?: true
    _all?: true
  }

  export type ResourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resource to aggregate.
     */
    where?: resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourceOrderByWithRelationInput | resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resources
    **/
    _count?: true | ResourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResourceMaxAggregateInputType
  }

  export type GetResourceAggregateType<T extends ResourceAggregateArgs> = {
        [P in keyof T & keyof AggregateResource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource[P]>
      : GetScalarType<T[P], AggregateResource[P]>
  }




  export type resourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resourceWhereInput
    orderBy?: resourceOrderByWithAggregationInput | resourceOrderByWithAggregationInput[]
    by: ResourceScalarFieldEnum[] | ResourceScalarFieldEnum
    having?: resourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResourceCountAggregateInputType | true
    _avg?: ResourceAvgAggregateInputType
    _sum?: ResourceSumAggregateInputType
    _min?: ResourceMinAggregateInputType
    _max?: ResourceMaxAggregateInputType
  }

  export type ResourceGroupByOutputType = {
    id: number
    name: string
    description: string
    link: string
    _count: ResourceCountAggregateOutputType | null
    _avg: ResourceAvgAggregateOutputType | null
    _sum: ResourceSumAggregateOutputType | null
    _min: ResourceMinAggregateOutputType | null
    _max: ResourceMaxAggregateOutputType | null
  }

  type GetResourceGroupByPayload<T extends resourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResourceGroupByOutputType[P]>
            : GetScalarType<T[P], ResourceGroupByOutputType[P]>
        }
      >
    >


  export type resourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
    request?: boolean | resource$requestArgs<ExtArgs>
    resource_role?: boolean | resource$resource_roleArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource"]>

  export type resourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
  }, ExtArgs["result"]["resource"]>

  export type resourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
  }, ExtArgs["result"]["resource"]>

  export type resourceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    link?: boolean
  }

  export type resourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "link", ExtArgs["result"]["resource"]>
  export type resourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | resource$requestArgs<ExtArgs>
    resource_role?: boolean | resource$resource_roleArgs<ExtArgs>
    _count?: boolean | ResourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type resourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type resourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $resourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resource"
    objects: {
      request: Prisma.$requestPayload<ExtArgs>[]
      resource_role: Prisma.$resource_rolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      link: string
    }, ExtArgs["result"]["resource"]>
    composites: {}
  }

  type resourceGetPayload<S extends boolean | null | undefined | resourceDefaultArgs> = $Result.GetResult<Prisma.$resourcePayload, S>

  type resourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResourceCountAggregateInputType | true
    }

  export interface resourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resource'], meta: { name: 'resource' } }
    /**
     * Find zero or one Resource that matches the filter.
     * @param {resourceFindUniqueArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resourceFindUniqueArgs>(args: SelectSubset<T, resourceFindUniqueArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resourceFindUniqueOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resourceFindUniqueOrThrowArgs>(args: SelectSubset<T, resourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourceFindFirstArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resourceFindFirstArgs>(args?: SelectSubset<T, resourceFindFirstArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourceFindFirstOrThrowArgs} args - Arguments to find a Resource
     * @example
     * // Get one Resource
     * const resource = await prisma.resource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resourceFindFirstOrThrowArgs>(args?: SelectSubset<T, resourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resources
     * const resources = await prisma.resource.findMany()
     * 
     * // Get first 10 Resources
     * const resources = await prisma.resource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resourceWithIdOnly = await prisma.resource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends resourceFindManyArgs>(args?: SelectSubset<T, resourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource.
     * @param {resourceCreateArgs} args - Arguments to create a Resource.
     * @example
     * // Create one Resource
     * const Resource = await prisma.resource.create({
     *   data: {
     *     // ... data to create a Resource
     *   }
     * })
     * 
     */
    create<T extends resourceCreateArgs>(args: SelectSubset<T, resourceCreateArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resources.
     * @param {resourceCreateManyArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resourceCreateManyArgs>(args?: SelectSubset<T, resourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resources and returns the data saved in the database.
     * @param {resourceCreateManyAndReturnArgs} args - Arguments to create many Resources.
     * @example
     * // Create many Resources
     * const resource = await prisma.resource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends resourceCreateManyAndReturnArgs>(args?: SelectSubset<T, resourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource.
     * @param {resourceDeleteArgs} args - Arguments to delete one Resource.
     * @example
     * // Delete one Resource
     * const Resource = await prisma.resource.delete({
     *   where: {
     *     // ... filter to delete one Resource
     *   }
     * })
     * 
     */
    delete<T extends resourceDeleteArgs>(args: SelectSubset<T, resourceDeleteArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource.
     * @param {resourceUpdateArgs} args - Arguments to update one Resource.
     * @example
     * // Update one Resource
     * const resource = await prisma.resource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resourceUpdateArgs>(args: SelectSubset<T, resourceUpdateArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resources.
     * @param {resourceDeleteManyArgs} args - Arguments to filter Resources to delete.
     * @example
     * // Delete a few Resources
     * const { count } = await prisma.resource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resourceDeleteManyArgs>(args?: SelectSubset<T, resourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resourceUpdateManyArgs>(args: SelectSubset<T, resourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resources and returns the data updated in the database.
     * @param {resourceUpdateManyAndReturnArgs} args - Arguments to update many Resources.
     * @example
     * // Update many Resources
     * const resource = await prisma.resource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resources and only return the `id`
     * const resourceWithIdOnly = await prisma.resource.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends resourceUpdateManyAndReturnArgs>(args: SelectSubset<T, resourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource.
     * @param {resourceUpsertArgs} args - Arguments to update or create a Resource.
     * @example
     * // Update or create a Resource
     * const resource = await prisma.resource.upsert({
     *   create: {
     *     // ... data to create a Resource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource we want to update
     *   }
     * })
     */
    upsert<T extends resourceUpsertArgs>(args: SelectSubset<T, resourceUpsertArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourceCountArgs} args - Arguments to filter Resources to count.
     * @example
     * // Count the number of Resources
     * const count = await prisma.resource.count({
     *   where: {
     *     // ... the filter for the Resources we want to count
     *   }
     * })
    **/
    count<T extends resourceCountArgs>(
      args?: Subset<T, resourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResourceAggregateArgs>(args: Subset<T, ResourceAggregateArgs>): Prisma.PrismaPromise<GetResourceAggregateType<T>>

    /**
     * Group by Resource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends resourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resourceGroupByArgs['orderBy'] }
        : { orderBy?: resourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, resourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resource model
   */
  readonly fields: resourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends resource$requestArgs<ExtArgs> = {}>(args?: Subset<T, resource$requestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resource_role<T extends resource$resource_roleArgs<ExtArgs> = {}>(args?: Subset<T, resource$resource_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the resource model
   */
  interface resourceFieldRefs {
    readonly id: FieldRef<"resource", 'Int'>
    readonly name: FieldRef<"resource", 'String'>
    readonly description: FieldRef<"resource", 'String'>
    readonly link: FieldRef<"resource", 'String'>
  }
    

  // Custom InputTypes
  /**
   * resource findUnique
   */
  export type resourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * Filter, which resource to fetch.
     */
    where: resourceWhereUniqueInput
  }

  /**
   * resource findUniqueOrThrow
   */
  export type resourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * Filter, which resource to fetch.
     */
    where: resourceWhereUniqueInput
  }

  /**
   * resource findFirst
   */
  export type resourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * Filter, which resource to fetch.
     */
    where?: resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourceOrderByWithRelationInput | resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resources.
     */
    cursor?: resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * resource findFirstOrThrow
   */
  export type resourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * Filter, which resource to fetch.
     */
    where?: resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourceOrderByWithRelationInput | resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resources.
     */
    cursor?: resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resources.
     */
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * resource findMany
   */
  export type resourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * Filter, which resources to fetch.
     */
    where?: resourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resources to fetch.
     */
    orderBy?: resourceOrderByWithRelationInput | resourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resources.
     */
    cursor?: resourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resources.
     */
    skip?: number
    distinct?: ResourceScalarFieldEnum | ResourceScalarFieldEnum[]
  }

  /**
   * resource create
   */
  export type resourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * The data needed to create a resource.
     */
    data: XOR<resourceCreateInput, resourceUncheckedCreateInput>
  }

  /**
   * resource createMany
   */
  export type resourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resources.
     */
    data: resourceCreateManyInput | resourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resource createManyAndReturn
   */
  export type resourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * The data used to create many resources.
     */
    data: resourceCreateManyInput | resourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resource update
   */
  export type resourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * The data needed to update a resource.
     */
    data: XOR<resourceUpdateInput, resourceUncheckedUpdateInput>
    /**
     * Choose, which resource to update.
     */
    where: resourceWhereUniqueInput
  }

  /**
   * resource updateMany
   */
  export type resourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resources.
     */
    data: XOR<resourceUpdateManyMutationInput, resourceUncheckedUpdateManyInput>
    /**
     * Filter which resources to update
     */
    where?: resourceWhereInput
    /**
     * Limit how many resources to update.
     */
    limit?: number
  }

  /**
   * resource updateManyAndReturn
   */
  export type resourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * The data used to update resources.
     */
    data: XOR<resourceUpdateManyMutationInput, resourceUncheckedUpdateManyInput>
    /**
     * Filter which resources to update
     */
    where?: resourceWhereInput
    /**
     * Limit how many resources to update.
     */
    limit?: number
  }

  /**
   * resource upsert
   */
  export type resourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * The filter to search for the resource to update in case it exists.
     */
    where: resourceWhereUniqueInput
    /**
     * In case the resource found by the `where` argument doesn't exist, create a new resource with this data.
     */
    create: XOR<resourceCreateInput, resourceUncheckedCreateInput>
    /**
     * In case the resource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resourceUpdateInput, resourceUncheckedUpdateInput>
  }

  /**
   * resource delete
   */
  export type resourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
    /**
     * Filter which resource to delete.
     */
    where: resourceWhereUniqueInput
  }

  /**
   * resource deleteMany
   */
  export type resourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resources to delete
     */
    where?: resourceWhereInput
    /**
     * Limit how many resources to delete.
     */
    limit?: number
  }

  /**
   * resource.request
   */
  export type resource$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    where?: requestWhereInput
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    cursor?: requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * resource.resource_role
   */
  export type resource$resource_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    where?: resource_roleWhereInput
    orderBy?: resource_roleOrderByWithRelationInput | resource_roleOrderByWithRelationInput[]
    cursor?: resource_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Resource_roleScalarFieldEnum | Resource_roleScalarFieldEnum[]
  }

  /**
   * resource without action
   */
  export type resourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource
     */
    select?: resourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource
     */
    omit?: resourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resourceInclude<ExtArgs> | null
  }


  /**
   * Model resource_role
   */

  export type AggregateResource_role = {
    _count: Resource_roleCountAggregateOutputType | null
    _avg: Resource_roleAvgAggregateOutputType | null
    _sum: Resource_roleSumAggregateOutputType | null
    _min: Resource_roleMinAggregateOutputType | null
    _max: Resource_roleMaxAggregateOutputType | null
  }

  export type Resource_roleAvgAggregateOutputType = {
    role_id: number | null
    resources_id: number | null
  }

  export type Resource_roleSumAggregateOutputType = {
    role_id: number | null
    resources_id: number | null
  }

  export type Resource_roleMinAggregateOutputType = {
    role_id: number | null
    resources_id: number | null
  }

  export type Resource_roleMaxAggregateOutputType = {
    role_id: number | null
    resources_id: number | null
  }

  export type Resource_roleCountAggregateOutputType = {
    role_id: number
    resources_id: number
    _all: number
  }


  export type Resource_roleAvgAggregateInputType = {
    role_id?: true
    resources_id?: true
  }

  export type Resource_roleSumAggregateInputType = {
    role_id?: true
    resources_id?: true
  }

  export type Resource_roleMinAggregateInputType = {
    role_id?: true
    resources_id?: true
  }

  export type Resource_roleMaxAggregateInputType = {
    role_id?: true
    resources_id?: true
  }

  export type Resource_roleCountAggregateInputType = {
    role_id?: true
    resources_id?: true
    _all?: true
  }

  export type Resource_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resource_role to aggregate.
     */
    where?: resource_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resource_roles to fetch.
     */
    orderBy?: resource_roleOrderByWithRelationInput | resource_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resource_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resource_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resource_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned resource_roles
    **/
    _count?: true | Resource_roleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Resource_roleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Resource_roleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Resource_roleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Resource_roleMaxAggregateInputType
  }

  export type GetResource_roleAggregateType<T extends Resource_roleAggregateArgs> = {
        [P in keyof T & keyof AggregateResource_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResource_role[P]>
      : GetScalarType<T[P], AggregateResource_role[P]>
  }




  export type resource_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resource_roleWhereInput
    orderBy?: resource_roleOrderByWithAggregationInput | resource_roleOrderByWithAggregationInput[]
    by: Resource_roleScalarFieldEnum[] | Resource_roleScalarFieldEnum
    having?: resource_roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Resource_roleCountAggregateInputType | true
    _avg?: Resource_roleAvgAggregateInputType
    _sum?: Resource_roleSumAggregateInputType
    _min?: Resource_roleMinAggregateInputType
    _max?: Resource_roleMaxAggregateInputType
  }

  export type Resource_roleGroupByOutputType = {
    role_id: number
    resources_id: number
    _count: Resource_roleCountAggregateOutputType | null
    _avg: Resource_roleAvgAggregateOutputType | null
    _sum: Resource_roleSumAggregateOutputType | null
    _min: Resource_roleMinAggregateOutputType | null
    _max: Resource_roleMaxAggregateOutputType | null
  }

  type GetResource_roleGroupByPayload<T extends resource_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Resource_roleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Resource_roleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Resource_roleGroupByOutputType[P]>
            : GetScalarType<T[P], Resource_roleGroupByOutputType[P]>
        }
      >
    >


  export type resource_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    resources_id?: boolean
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource_role"]>

  export type resource_roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    resources_id?: boolean
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource_role"]>

  export type resource_roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    resources_id?: boolean
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resource_role"]>

  export type resource_roleSelectScalar = {
    role_id?: boolean
    resources_id?: boolean
  }

  export type resource_roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "resources_id", ExtArgs["result"]["resource_role"]>
  export type resource_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type resource_roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }
  export type resource_roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resource?: boolean | resourceDefaultArgs<ExtArgs>
    role?: boolean | roleDefaultArgs<ExtArgs>
  }

  export type $resource_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "resource_role"
    objects: {
      resource: Prisma.$resourcePayload<ExtArgs>
      role: Prisma.$rolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      resources_id: number
    }, ExtArgs["result"]["resource_role"]>
    composites: {}
  }

  type resource_roleGetPayload<S extends boolean | null | undefined | resource_roleDefaultArgs> = $Result.GetResult<Prisma.$resource_rolePayload, S>

  type resource_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resource_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Resource_roleCountAggregateInputType | true
    }

  export interface resource_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['resource_role'], meta: { name: 'resource_role' } }
    /**
     * Find zero or one Resource_role that matches the filter.
     * @param {resource_roleFindUniqueArgs} args - Arguments to find a Resource_role
     * @example
     * // Get one Resource_role
     * const resource_role = await prisma.resource_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resource_roleFindUniqueArgs>(args: SelectSubset<T, resource_roleFindUniqueArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resource_role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resource_roleFindUniqueOrThrowArgs} args - Arguments to find a Resource_role
     * @example
     * // Get one Resource_role
     * const resource_role = await prisma.resource_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resource_roleFindUniqueOrThrowArgs>(args: SelectSubset<T, resource_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resource_roleFindFirstArgs} args - Arguments to find a Resource_role
     * @example
     * // Get one Resource_role
     * const resource_role = await prisma.resource_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resource_roleFindFirstArgs>(args?: SelectSubset<T, resource_roleFindFirstArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resource_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resource_roleFindFirstOrThrowArgs} args - Arguments to find a Resource_role
     * @example
     * // Get one Resource_role
     * const resource_role = await prisma.resource_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resource_roleFindFirstOrThrowArgs>(args?: SelectSubset<T, resource_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resource_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resource_roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resource_roles
     * const resource_roles = await prisma.resource_role.findMany()
     * 
     * // Get first 10 Resource_roles
     * const resource_roles = await prisma.resource_role.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const resource_roleWithRole_idOnly = await prisma.resource_role.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends resource_roleFindManyArgs>(args?: SelectSubset<T, resource_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resource_role.
     * @param {resource_roleCreateArgs} args - Arguments to create a Resource_role.
     * @example
     * // Create one Resource_role
     * const Resource_role = await prisma.resource_role.create({
     *   data: {
     *     // ... data to create a Resource_role
     *   }
     * })
     * 
     */
    create<T extends resource_roleCreateArgs>(args: SelectSubset<T, resource_roleCreateArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resource_roles.
     * @param {resource_roleCreateManyArgs} args - Arguments to create many Resource_roles.
     * @example
     * // Create many Resource_roles
     * const resource_role = await prisma.resource_role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resource_roleCreateManyArgs>(args?: SelectSubset<T, resource_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resource_roles and returns the data saved in the database.
     * @param {resource_roleCreateManyAndReturnArgs} args - Arguments to create many Resource_roles.
     * @example
     * // Create many Resource_roles
     * const resource_role = await prisma.resource_role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resource_roles and only return the `role_id`
     * const resource_roleWithRole_idOnly = await prisma.resource_role.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends resource_roleCreateManyAndReturnArgs>(args?: SelectSubset<T, resource_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resource_role.
     * @param {resource_roleDeleteArgs} args - Arguments to delete one Resource_role.
     * @example
     * // Delete one Resource_role
     * const Resource_role = await prisma.resource_role.delete({
     *   where: {
     *     // ... filter to delete one Resource_role
     *   }
     * })
     * 
     */
    delete<T extends resource_roleDeleteArgs>(args: SelectSubset<T, resource_roleDeleteArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resource_role.
     * @param {resource_roleUpdateArgs} args - Arguments to update one Resource_role.
     * @example
     * // Update one Resource_role
     * const resource_role = await prisma.resource_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resource_roleUpdateArgs>(args: SelectSubset<T, resource_roleUpdateArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resource_roles.
     * @param {resource_roleDeleteManyArgs} args - Arguments to filter Resource_roles to delete.
     * @example
     * // Delete a few Resource_roles
     * const { count } = await prisma.resource_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resource_roleDeleteManyArgs>(args?: SelectSubset<T, resource_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resource_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resource_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resource_roles
     * const resource_role = await prisma.resource_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resource_roleUpdateManyArgs>(args: SelectSubset<T, resource_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resource_roles and returns the data updated in the database.
     * @param {resource_roleUpdateManyAndReturnArgs} args - Arguments to update many Resource_roles.
     * @example
     * // Update many Resource_roles
     * const resource_role = await prisma.resource_role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resource_roles and only return the `role_id`
     * const resource_roleWithRole_idOnly = await prisma.resource_role.updateManyAndReturn({
     *   select: { role_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends resource_roleUpdateManyAndReturnArgs>(args: SelectSubset<T, resource_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resource_role.
     * @param {resource_roleUpsertArgs} args - Arguments to update or create a Resource_role.
     * @example
     * // Update or create a Resource_role
     * const resource_role = await prisma.resource_role.upsert({
     *   create: {
     *     // ... data to create a Resource_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resource_role we want to update
     *   }
     * })
     */
    upsert<T extends resource_roleUpsertArgs>(args: SelectSubset<T, resource_roleUpsertArgs<ExtArgs>>): Prisma__resource_roleClient<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resource_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resource_roleCountArgs} args - Arguments to filter Resource_roles to count.
     * @example
     * // Count the number of Resource_roles
     * const count = await prisma.resource_role.count({
     *   where: {
     *     // ... the filter for the Resource_roles we want to count
     *   }
     * })
    **/
    count<T extends resource_roleCountArgs>(
      args?: Subset<T, resource_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Resource_roleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resource_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Resource_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Resource_roleAggregateArgs>(args: Subset<T, Resource_roleAggregateArgs>): Prisma.PrismaPromise<GetResource_roleAggregateType<T>>

    /**
     * Group by Resource_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resource_roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends resource_roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resource_roleGroupByArgs['orderBy'] }
        : { orderBy?: resource_roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, resource_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResource_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the resource_role model
   */
  readonly fields: resource_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for resource_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resource_roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resource<T extends resourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, resourceDefaultArgs<ExtArgs>>): Prisma__resourceClient<$Result.GetResult<Prisma.$resourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends roleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, roleDefaultArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the resource_role model
   */
  interface resource_roleFieldRefs {
    readonly role_id: FieldRef<"resource_role", 'Int'>
    readonly resources_id: FieldRef<"resource_role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * resource_role findUnique
   */
  export type resource_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * Filter, which resource_role to fetch.
     */
    where: resource_roleWhereUniqueInput
  }

  /**
   * resource_role findUniqueOrThrow
   */
  export type resource_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * Filter, which resource_role to fetch.
     */
    where: resource_roleWhereUniqueInput
  }

  /**
   * resource_role findFirst
   */
  export type resource_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * Filter, which resource_role to fetch.
     */
    where?: resource_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resource_roles to fetch.
     */
    orderBy?: resource_roleOrderByWithRelationInput | resource_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resource_roles.
     */
    cursor?: resource_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resource_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resource_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resource_roles.
     */
    distinct?: Resource_roleScalarFieldEnum | Resource_roleScalarFieldEnum[]
  }

  /**
   * resource_role findFirstOrThrow
   */
  export type resource_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * Filter, which resource_role to fetch.
     */
    where?: resource_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resource_roles to fetch.
     */
    orderBy?: resource_roleOrderByWithRelationInput | resource_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for resource_roles.
     */
    cursor?: resource_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resource_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resource_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of resource_roles.
     */
    distinct?: Resource_roleScalarFieldEnum | Resource_roleScalarFieldEnum[]
  }

  /**
   * resource_role findMany
   */
  export type resource_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * Filter, which resource_roles to fetch.
     */
    where?: resource_roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of resource_roles to fetch.
     */
    orderBy?: resource_roleOrderByWithRelationInput | resource_roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing resource_roles.
     */
    cursor?: resource_roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` resource_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` resource_roles.
     */
    skip?: number
    distinct?: Resource_roleScalarFieldEnum | Resource_roleScalarFieldEnum[]
  }

  /**
   * resource_role create
   */
  export type resource_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * The data needed to create a resource_role.
     */
    data: XOR<resource_roleCreateInput, resource_roleUncheckedCreateInput>
  }

  /**
   * resource_role createMany
   */
  export type resource_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many resource_roles.
     */
    data: resource_roleCreateManyInput | resource_roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * resource_role createManyAndReturn
   */
  export type resource_roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * The data used to create many resource_roles.
     */
    data: resource_roleCreateManyInput | resource_roleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * resource_role update
   */
  export type resource_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * The data needed to update a resource_role.
     */
    data: XOR<resource_roleUpdateInput, resource_roleUncheckedUpdateInput>
    /**
     * Choose, which resource_role to update.
     */
    where: resource_roleWhereUniqueInput
  }

  /**
   * resource_role updateMany
   */
  export type resource_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update resource_roles.
     */
    data: XOR<resource_roleUpdateManyMutationInput, resource_roleUncheckedUpdateManyInput>
    /**
     * Filter which resource_roles to update
     */
    where?: resource_roleWhereInput
    /**
     * Limit how many resource_roles to update.
     */
    limit?: number
  }

  /**
   * resource_role updateManyAndReturn
   */
  export type resource_roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * The data used to update resource_roles.
     */
    data: XOR<resource_roleUpdateManyMutationInput, resource_roleUncheckedUpdateManyInput>
    /**
     * Filter which resource_roles to update
     */
    where?: resource_roleWhereInput
    /**
     * Limit how many resource_roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * resource_role upsert
   */
  export type resource_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * The filter to search for the resource_role to update in case it exists.
     */
    where: resource_roleWhereUniqueInput
    /**
     * In case the resource_role found by the `where` argument doesn't exist, create a new resource_role with this data.
     */
    create: XOR<resource_roleCreateInput, resource_roleUncheckedCreateInput>
    /**
     * In case the resource_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resource_roleUpdateInput, resource_roleUncheckedUpdateInput>
  }

  /**
   * resource_role delete
   */
  export type resource_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    /**
     * Filter which resource_role to delete.
     */
    where: resource_roleWhereUniqueInput
  }

  /**
   * resource_role deleteMany
   */
  export type resource_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which resource_roles to delete
     */
    where?: resource_roleWhereInput
    /**
     * Limit how many resource_roles to delete.
     */
    limit?: number
  }

  /**
   * resource_role without action
   */
  export type resource_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    access_id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    access_id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    access_id: number | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    access_id: number | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    access_id: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    access_id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    access_id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    access_id?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    access_id?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    access_id?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string
    access_id: number
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    access_id?: boolean
    request?: boolean | role$requestArgs<ExtArgs>
    resource_role?: boolean | role$resource_roleArgs<ExtArgs>
    access?: boolean | accessDefaultArgs<ExtArgs>
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    access_id?: boolean
    access?: boolean | accessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    access_id?: boolean
    access?: boolean | accessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type roleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    access_id?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "access_id", ExtArgs["result"]["role"]>
  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | role$requestArgs<ExtArgs>
    resource_role?: boolean | role$resource_roleArgs<ExtArgs>
    access?: boolean | accessDefaultArgs<ExtArgs>
    user?: boolean | role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type roleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access?: boolean | accessDefaultArgs<ExtArgs>
  }
  export type roleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    access?: boolean | accessDefaultArgs<ExtArgs>
  }

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {
      request: Prisma.$requestPayload<ExtArgs>[]
      resource_role: Prisma.$resource_rolePayload<ExtArgs>[]
      access: Prisma.$accessPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      access_id: number
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {roleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {roleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends role$requestArgs<ExtArgs> = {}>(args?: Subset<T, role$requestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resource_role<T extends role$resource_roleArgs<ExtArgs> = {}>(args?: Subset<T, role$resource_roleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resource_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    access<T extends accessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accessDefaultArgs<ExtArgs>>): Prisma__accessClient<$Result.GetResult<Prisma.$accessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends role$userArgs<ExtArgs> = {}>(args?: Subset<T, role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<"role", 'Int'>
    readonly name: FieldRef<"role", 'String'>
    readonly description: FieldRef<"role", 'String'>
    readonly access_id: FieldRef<"role", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role createManyAndReturn
   */
  export type roleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role updateManyAndReturn
   */
  export type roleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role.request
   */
  export type role$requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the request
     */
    select?: requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the request
     */
    omit?: requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requestInclude<ExtArgs> | null
    where?: requestWhereInput
    orderBy?: requestOrderByWithRelationInput | requestOrderByWithRelationInput[]
    cursor?: requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * role.resource_role
   */
  export type role$resource_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the resource_role
     */
    select?: resource_roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the resource_role
     */
    omit?: resource_roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: resource_roleInclude<ExtArgs> | null
    where?: resource_roleWhereInput
    orderBy?: resource_roleOrderByWithRelationInput | resource_roleOrderByWithRelationInput[]
    cursor?: resource_roleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Resource_roleScalarFieldEnum | Resource_roleScalarFieldEnum[]
  }

  /**
   * role.user
   */
  export type role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    service_number: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    service_number: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    surname: string | null
    middle_name: string | null
    subdivision: string | null
    rang: string | null
    service_number: number | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    surname: string | null
    middle_name: string | null
    subdivision: string | null
    rang: string | null
    service_number: number | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    surname: number
    middle_name: number
    subdivision: number
    rang: number
    service_number: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    service_number?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    service_number?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    middle_name?: true
    subdivision?: true
    rang?: true
    service_number?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    middle_name?: true
    subdivision?: true
    rang?: true
    service_number?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    surname?: true
    middle_name?: true
    subdivision?: true
    rang?: true
    service_number?: true
    role_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    surname: string | null
    middle_name: string | null
    subdivision: string | null
    rang: string | null
    service_number: number | null
    role_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    subdivision?: boolean
    rang?: boolean
    service_number?: boolean
    role_id?: boolean
    log?: boolean | user$logArgs<ExtArgs>
    role?: boolean | user$roleArgs<ExtArgs>
    user_request?: boolean | user$user_requestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    subdivision?: boolean
    rang?: boolean
    service_number?: boolean
    role_id?: boolean
    role?: boolean | user$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    subdivision?: boolean
    rang?: boolean
    service_number?: boolean
    role_id?: boolean
    role?: boolean | user$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    surname?: boolean
    middle_name?: boolean
    subdivision?: boolean
    rang?: boolean
    service_number?: boolean
    role_id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "surname" | "middle_name" | "subdivision" | "rang" | "service_number" | "role_id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | user$logArgs<ExtArgs>
    role?: boolean | user$roleArgs<ExtArgs>
    user_request?: boolean | user$user_requestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | user$roleArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | user$roleArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      log: Prisma.$logPayload<ExtArgs>[]
      role: Prisma.$rolePayload<ExtArgs> | null
      user_request: Prisma.$user_requestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      surname: string | null
      middle_name: string | null
      subdivision: string | null
      rang: string | null
      service_number: number | null
      role_id: number | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    log<T extends user$logArgs<ExtArgs> = {}>(args?: Subset<T, user$logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends user$roleArgs<ExtArgs> = {}>(args?: Subset<T, user$roleArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user_request<T extends user$user_requestArgs<ExtArgs> = {}>(args?: Subset<T, user$user_requestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly surname: FieldRef<"user", 'String'>
    readonly middle_name: FieldRef<"user", 'String'>
    readonly subdivision: FieldRef<"user", 'String'>
    readonly rang: FieldRef<"user", 'String'>
    readonly service_number: FieldRef<"user", 'Int'>
    readonly role_id: FieldRef<"user", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.log
   */
  export type user$logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the log
     */
    select?: logSelect<ExtArgs> | null
    /**
     * Omit specific fields from the log
     */
    omit?: logOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logInclude<ExtArgs> | null
    where?: logWhereInput
    orderBy?: logOrderByWithRelationInput | logOrderByWithRelationInput[]
    cursor?: logWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * user.role
   */
  export type user$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: roleInclude<ExtArgs> | null
    where?: roleWhereInput
  }

  /**
   * user.user_request
   */
  export type user$user_requestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    where?: user_requestWhereInput
    orderBy?: user_requestOrderByWithRelationInput | user_requestOrderByWithRelationInput[]
    cursor?: user_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_requestScalarFieldEnum | User_requestScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model user_request
   */

  export type AggregateUser_request = {
    _count: User_requestCountAggregateOutputType | null
    _avg: User_requestAvgAggregateOutputType | null
    _sum: User_requestSumAggregateOutputType | null
    _min: User_requestMinAggregateOutputType | null
    _max: User_requestMaxAggregateOutputType | null
  }

  export type User_requestAvgAggregateOutputType = {
    user_id: number | null
    request_id: number | null
  }

  export type User_requestSumAggregateOutputType = {
    user_id: number | null
    request_id: number | null
  }

  export type User_requestMinAggregateOutputType = {
    user_id: number | null
    request_id: number | null
  }

  export type User_requestMaxAggregateOutputType = {
    user_id: number | null
    request_id: number | null
  }

  export type User_requestCountAggregateOutputType = {
    user_id: number
    request_id: number
    _all: number
  }


  export type User_requestAvgAggregateInputType = {
    user_id?: true
    request_id?: true
  }

  export type User_requestSumAggregateInputType = {
    user_id?: true
    request_id?: true
  }

  export type User_requestMinAggregateInputType = {
    user_id?: true
    request_id?: true
  }

  export type User_requestMaxAggregateInputType = {
    user_id?: true
    request_id?: true
  }

  export type User_requestCountAggregateInputType = {
    user_id?: true
    request_id?: true
    _all?: true
  }

  export type User_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_request to aggregate.
     */
    where?: user_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_requests to fetch.
     */
    orderBy?: user_requestOrderByWithRelationInput | user_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_requests
    **/
    _count?: true | User_requestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_requestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_requestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_requestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_requestMaxAggregateInputType
  }

  export type GetUser_requestAggregateType<T extends User_requestAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_request[P]>
      : GetScalarType<T[P], AggregateUser_request[P]>
  }




  export type user_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_requestWhereInput
    orderBy?: user_requestOrderByWithAggregationInput | user_requestOrderByWithAggregationInput[]
    by: User_requestScalarFieldEnum[] | User_requestScalarFieldEnum
    having?: user_requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_requestCountAggregateInputType | true
    _avg?: User_requestAvgAggregateInputType
    _sum?: User_requestSumAggregateInputType
    _min?: User_requestMinAggregateInputType
    _max?: User_requestMaxAggregateInputType
  }

  export type User_requestGroupByOutputType = {
    user_id: number
    request_id: number
    _count: User_requestCountAggregateOutputType | null
    _avg: User_requestAvgAggregateOutputType | null
    _sum: User_requestSumAggregateOutputType | null
    _min: User_requestMinAggregateOutputType | null
    _max: User_requestMaxAggregateOutputType | null
  }

  type GetUser_requestGroupByPayload<T extends user_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_requestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_requestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_requestGroupByOutputType[P]>
            : GetScalarType<T[P], User_requestGroupByOutputType[P]>
        }
      >
    >


  export type user_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    request_id?: boolean
    request?: boolean | requestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_request"]>

  export type user_requestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    request_id?: boolean
    request?: boolean | requestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_request"]>

  export type user_requestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    request_id?: boolean
    request?: boolean | requestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_request"]>

  export type user_requestSelectScalar = {
    user_id?: boolean
    request_id?: boolean
  }

  export type user_requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "request_id", ExtArgs["result"]["user_request"]>
  export type user_requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | requestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_requestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | requestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type user_requestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | requestDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $user_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_request"
    objects: {
      request: Prisma.$requestPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      request_id: number
    }, ExtArgs["result"]["user_request"]>
    composites: {}
  }

  type user_requestGetPayload<S extends boolean | null | undefined | user_requestDefaultArgs> = $Result.GetResult<Prisma.$user_requestPayload, S>

  type user_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_requestCountAggregateInputType | true
    }

  export interface user_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_request'], meta: { name: 'user_request' } }
    /**
     * Find zero or one User_request that matches the filter.
     * @param {user_requestFindUniqueArgs} args - Arguments to find a User_request
     * @example
     * // Get one User_request
     * const user_request = await prisma.user_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_requestFindUniqueArgs>(args: SelectSubset<T, user_requestFindUniqueArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_requestFindUniqueOrThrowArgs} args - Arguments to find a User_request
     * @example
     * // Get one User_request
     * const user_request = await prisma.user_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_requestFindUniqueOrThrowArgs>(args: SelectSubset<T, user_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_requestFindFirstArgs} args - Arguments to find a User_request
     * @example
     * // Get one User_request
     * const user_request = await prisma.user_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_requestFindFirstArgs>(args?: SelectSubset<T, user_requestFindFirstArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_requestFindFirstOrThrowArgs} args - Arguments to find a User_request
     * @example
     * // Get one User_request
     * const user_request = await prisma.user_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_requestFindFirstOrThrowArgs>(args?: SelectSubset<T, user_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_requests
     * const user_requests = await prisma.user_request.findMany()
     * 
     * // Get first 10 User_requests
     * const user_requests = await prisma.user_request.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_requestWithUser_idOnly = await prisma.user_request.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_requestFindManyArgs>(args?: SelectSubset<T, user_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_request.
     * @param {user_requestCreateArgs} args - Arguments to create a User_request.
     * @example
     * // Create one User_request
     * const User_request = await prisma.user_request.create({
     *   data: {
     *     // ... data to create a User_request
     *   }
     * })
     * 
     */
    create<T extends user_requestCreateArgs>(args: SelectSubset<T, user_requestCreateArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_requests.
     * @param {user_requestCreateManyArgs} args - Arguments to create many User_requests.
     * @example
     * // Create many User_requests
     * const user_request = await prisma.user_request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_requestCreateManyArgs>(args?: SelectSubset<T, user_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_requests and returns the data saved in the database.
     * @param {user_requestCreateManyAndReturnArgs} args - Arguments to create many User_requests.
     * @example
     * // Create many User_requests
     * const user_request = await prisma.user_request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_requests and only return the `user_id`
     * const user_requestWithUser_idOnly = await prisma.user_request.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_requestCreateManyAndReturnArgs>(args?: SelectSubset<T, user_requestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_request.
     * @param {user_requestDeleteArgs} args - Arguments to delete one User_request.
     * @example
     * // Delete one User_request
     * const User_request = await prisma.user_request.delete({
     *   where: {
     *     // ... filter to delete one User_request
     *   }
     * })
     * 
     */
    delete<T extends user_requestDeleteArgs>(args: SelectSubset<T, user_requestDeleteArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_request.
     * @param {user_requestUpdateArgs} args - Arguments to update one User_request.
     * @example
     * // Update one User_request
     * const user_request = await prisma.user_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_requestUpdateArgs>(args: SelectSubset<T, user_requestUpdateArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_requests.
     * @param {user_requestDeleteManyArgs} args - Arguments to filter User_requests to delete.
     * @example
     * // Delete a few User_requests
     * const { count } = await prisma.user_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_requestDeleteManyArgs>(args?: SelectSubset<T, user_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_requests
     * const user_request = await prisma.user_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_requestUpdateManyArgs>(args: SelectSubset<T, user_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_requests and returns the data updated in the database.
     * @param {user_requestUpdateManyAndReturnArgs} args - Arguments to update many User_requests.
     * @example
     * // Update many User_requests
     * const user_request = await prisma.user_request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_requests and only return the `user_id`
     * const user_requestWithUser_idOnly = await prisma.user_request.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_requestUpdateManyAndReturnArgs>(args: SelectSubset<T, user_requestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_request.
     * @param {user_requestUpsertArgs} args - Arguments to update or create a User_request.
     * @example
     * // Update or create a User_request
     * const user_request = await prisma.user_request.upsert({
     *   create: {
     *     // ... data to create a User_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_request we want to update
     *   }
     * })
     */
    upsert<T extends user_requestUpsertArgs>(args: SelectSubset<T, user_requestUpsertArgs<ExtArgs>>): Prisma__user_requestClient<$Result.GetResult<Prisma.$user_requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_requestCountArgs} args - Arguments to filter User_requests to count.
     * @example
     * // Count the number of User_requests
     * const count = await prisma.user_request.count({
     *   where: {
     *     // ... the filter for the User_requests we want to count
     *   }
     * })
    **/
    count<T extends user_requestCountArgs>(
      args?: Subset<T, user_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_requestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_requestAggregateArgs>(args: Subset<T, User_requestAggregateArgs>): Prisma.PrismaPromise<GetUser_requestAggregateType<T>>

    /**
     * Group by User_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_requestGroupByArgs['orderBy'] }
        : { orderBy?: user_requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_request model
   */
  readonly fields: user_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends requestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, requestDefaultArgs<ExtArgs>>): Prisma__requestClient<$Result.GetResult<Prisma.$requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_request model
   */
  interface user_requestFieldRefs {
    readonly user_id: FieldRef<"user_request", 'Int'>
    readonly request_id: FieldRef<"user_request", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_request findUnique
   */
  export type user_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * Filter, which user_request to fetch.
     */
    where: user_requestWhereUniqueInput
  }

  /**
   * user_request findUniqueOrThrow
   */
  export type user_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * Filter, which user_request to fetch.
     */
    where: user_requestWhereUniqueInput
  }

  /**
   * user_request findFirst
   */
  export type user_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * Filter, which user_request to fetch.
     */
    where?: user_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_requests to fetch.
     */
    orderBy?: user_requestOrderByWithRelationInput | user_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_requests.
     */
    cursor?: user_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_requests.
     */
    distinct?: User_requestScalarFieldEnum | User_requestScalarFieldEnum[]
  }

  /**
   * user_request findFirstOrThrow
   */
  export type user_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * Filter, which user_request to fetch.
     */
    where?: user_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_requests to fetch.
     */
    orderBy?: user_requestOrderByWithRelationInput | user_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_requests.
     */
    cursor?: user_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_requests.
     */
    distinct?: User_requestScalarFieldEnum | User_requestScalarFieldEnum[]
  }

  /**
   * user_request findMany
   */
  export type user_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * Filter, which user_requests to fetch.
     */
    where?: user_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_requests to fetch.
     */
    orderBy?: user_requestOrderByWithRelationInput | user_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_requests.
     */
    cursor?: user_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_requests.
     */
    skip?: number
    distinct?: User_requestScalarFieldEnum | User_requestScalarFieldEnum[]
  }

  /**
   * user_request create
   */
  export type user_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * The data needed to create a user_request.
     */
    data: XOR<user_requestCreateInput, user_requestUncheckedCreateInput>
  }

  /**
   * user_request createMany
   */
  export type user_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_requests.
     */
    data: user_requestCreateManyInput | user_requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_request createManyAndReturn
   */
  export type user_requestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * The data used to create many user_requests.
     */
    data: user_requestCreateManyInput | user_requestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_request update
   */
  export type user_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * The data needed to update a user_request.
     */
    data: XOR<user_requestUpdateInput, user_requestUncheckedUpdateInput>
    /**
     * Choose, which user_request to update.
     */
    where: user_requestWhereUniqueInput
  }

  /**
   * user_request updateMany
   */
  export type user_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_requests.
     */
    data: XOR<user_requestUpdateManyMutationInput, user_requestUncheckedUpdateManyInput>
    /**
     * Filter which user_requests to update
     */
    where?: user_requestWhereInput
    /**
     * Limit how many user_requests to update.
     */
    limit?: number
  }

  /**
   * user_request updateManyAndReturn
   */
  export type user_requestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * The data used to update user_requests.
     */
    data: XOR<user_requestUpdateManyMutationInput, user_requestUncheckedUpdateManyInput>
    /**
     * Filter which user_requests to update
     */
    where?: user_requestWhereInput
    /**
     * Limit how many user_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_request upsert
   */
  export type user_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * The filter to search for the user_request to update in case it exists.
     */
    where: user_requestWhereUniqueInput
    /**
     * In case the user_request found by the `where` argument doesn't exist, create a new user_request with this data.
     */
    create: XOR<user_requestCreateInput, user_requestUncheckedCreateInput>
    /**
     * In case the user_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_requestUpdateInput, user_requestUncheckedUpdateInput>
  }

  /**
   * user_request delete
   */
  export type user_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
    /**
     * Filter which user_request to delete.
     */
    where: user_requestWhereUniqueInput
  }

  /**
   * user_request deleteMany
   */
  export type user_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_requests to delete
     */
    where?: user_requestWhereInput
    /**
     * Limit how many user_requests to delete.
     */
    limit?: number
  }

  /**
   * user_request without action
   */
  export type user_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_request
     */
    select?: user_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_request
     */
    omit?: user_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_requestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccessScalarFieldEnum: {
    id: 'id',
    level: 'level',
    description: 'description'
  };

  export type AccessScalarFieldEnum = (typeof AccessScalarFieldEnum)[keyof typeof AccessScalarFieldEnum]


  export const LogScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    action: 'action',
    action_time: 'action_time'
  };

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const RequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    middle_name: 'middle_name',
    email: 'email',
    status: 'status',
    create_date: 'create_date',
    complete_date: 'complete_date',
    resource_id: 'resource_id',
    role_id: 'role_id'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const ResourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    link: 'link'
  };

  export type ResourceScalarFieldEnum = (typeof ResourceScalarFieldEnum)[keyof typeof ResourceScalarFieldEnum]


  export const Resource_roleScalarFieldEnum: {
    role_id: 'role_id',
    resources_id: 'resources_id'
  };

  export type Resource_roleScalarFieldEnum = (typeof Resource_roleScalarFieldEnum)[keyof typeof Resource_roleScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    access_id: 'access_id'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    surname: 'surname',
    middle_name: 'middle_name',
    subdivision: 'subdivision',
    rang: 'rang',
    service_number: 'service_number',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const User_requestScalarFieldEnum: {
    user_id: 'user_id',
    request_id: 'request_id'
  };

  export type User_requestScalarFieldEnum = (typeof User_requestScalarFieldEnum)[keyof typeof User_requestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type accessWhereInput = {
    AND?: accessWhereInput | accessWhereInput[]
    OR?: accessWhereInput[]
    NOT?: accessWhereInput | accessWhereInput[]
    id?: IntFilter<"access"> | number
    level?: IntFilter<"access"> | number
    description?: StringNullableFilter<"access"> | string | null
    role?: RoleListRelationFilter
  }

  export type accessOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    description?: SortOrderInput | SortOrder
    role?: roleOrderByRelationAggregateInput
  }

  export type accessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    level?: number
    AND?: accessWhereInput | accessWhereInput[]
    OR?: accessWhereInput[]
    NOT?: accessWhereInput | accessWhereInput[]
    description?: StringNullableFilter<"access"> | string | null
    role?: RoleListRelationFilter
  }, "id" | "level">

  export type accessOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: accessCountOrderByAggregateInput
    _avg?: accessAvgOrderByAggregateInput
    _max?: accessMaxOrderByAggregateInput
    _min?: accessMinOrderByAggregateInput
    _sum?: accessSumOrderByAggregateInput
  }

  export type accessScalarWhereWithAggregatesInput = {
    AND?: accessScalarWhereWithAggregatesInput | accessScalarWhereWithAggregatesInput[]
    OR?: accessScalarWhereWithAggregatesInput[]
    NOT?: accessScalarWhereWithAggregatesInput | accessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"access"> | number
    level?: IntWithAggregatesFilter<"access"> | number
    description?: StringNullableWithAggregatesFilter<"access"> | string | null
  }

  export type logWhereInput = {
    AND?: logWhereInput | logWhereInput[]
    OR?: logWhereInput[]
    NOT?: logWhereInput | logWhereInput[]
    id?: IntFilter<"log"> | number
    account_id?: IntFilter<"log"> | number
    action?: StringFilter<"log"> | string
    action_time?: DateTimeFilter<"log"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type logOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    action?: SortOrder
    action_time?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type logWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: logWhereInput | logWhereInput[]
    OR?: logWhereInput[]
    NOT?: logWhereInput | logWhereInput[]
    account_id?: IntFilter<"log"> | number
    action?: StringFilter<"log"> | string
    action_time?: DateTimeFilter<"log"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type logOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    action?: SortOrder
    action_time?: SortOrder
    _count?: logCountOrderByAggregateInput
    _avg?: logAvgOrderByAggregateInput
    _max?: logMaxOrderByAggregateInput
    _min?: logMinOrderByAggregateInput
    _sum?: logSumOrderByAggregateInput
  }

  export type logScalarWhereWithAggregatesInput = {
    AND?: logScalarWhereWithAggregatesInput | logScalarWhereWithAggregatesInput[]
    OR?: logScalarWhereWithAggregatesInput[]
    NOT?: logScalarWhereWithAggregatesInput | logScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"log"> | number
    account_id?: IntWithAggregatesFilter<"log"> | number
    action?: StringWithAggregatesFilter<"log"> | string
    action_time?: DateTimeWithAggregatesFilter<"log"> | Date | string
  }

  export type requestWhereInput = {
    AND?: requestWhereInput | requestWhereInput[]
    OR?: requestWhereInput[]
    NOT?: requestWhereInput | requestWhereInput[]
    id?: IntFilter<"request"> | number
    name?: StringFilter<"request"> | string
    surname?: StringFilter<"request"> | string
    middle_name?: StringFilter<"request"> | string
    email?: StringFilter<"request"> | string
    status?: StringFilter<"request"> | string
    create_date?: DateTimeFilter<"request"> | Date | string
    complete_date?: DateTimeFilter<"request"> | Date | string
    resource_id?: IntFilter<"request"> | number
    role_id?: IntFilter<"request"> | number
    resource?: XOR<ResourceScalarRelationFilter, resourceWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    user_request?: User_requestListRelationFilter
  }

  export type requestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    complete_date?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
    resource?: resourceOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
    user_request?: user_requestOrderByRelationAggregateInput
  }

  export type requestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: requestWhereInput | requestWhereInput[]
    OR?: requestWhereInput[]
    NOT?: requestWhereInput | requestWhereInput[]
    name?: StringFilter<"request"> | string
    surname?: StringFilter<"request"> | string
    middle_name?: StringFilter<"request"> | string
    email?: StringFilter<"request"> | string
    status?: StringFilter<"request"> | string
    create_date?: DateTimeFilter<"request"> | Date | string
    complete_date?: DateTimeFilter<"request"> | Date | string
    resource_id?: IntFilter<"request"> | number
    role_id?: IntFilter<"request"> | number
    resource?: XOR<ResourceScalarRelationFilter, resourceWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
    user_request?: User_requestListRelationFilter
  }, "id">

  export type requestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    complete_date?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
    _count?: requestCountOrderByAggregateInput
    _avg?: requestAvgOrderByAggregateInput
    _max?: requestMaxOrderByAggregateInput
    _min?: requestMinOrderByAggregateInput
    _sum?: requestSumOrderByAggregateInput
  }

  export type requestScalarWhereWithAggregatesInput = {
    AND?: requestScalarWhereWithAggregatesInput | requestScalarWhereWithAggregatesInput[]
    OR?: requestScalarWhereWithAggregatesInput[]
    NOT?: requestScalarWhereWithAggregatesInput | requestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"request"> | number
    name?: StringWithAggregatesFilter<"request"> | string
    surname?: StringWithAggregatesFilter<"request"> | string
    middle_name?: StringWithAggregatesFilter<"request"> | string
    email?: StringWithAggregatesFilter<"request"> | string
    status?: StringWithAggregatesFilter<"request"> | string
    create_date?: DateTimeWithAggregatesFilter<"request"> | Date | string
    complete_date?: DateTimeWithAggregatesFilter<"request"> | Date | string
    resource_id?: IntWithAggregatesFilter<"request"> | number
    role_id?: IntWithAggregatesFilter<"request"> | number
  }

  export type resourceWhereInput = {
    AND?: resourceWhereInput | resourceWhereInput[]
    OR?: resourceWhereInput[]
    NOT?: resourceWhereInput | resourceWhereInput[]
    id?: IntFilter<"resource"> | number
    name?: StringFilter<"resource"> | string
    description?: StringFilter<"resource"> | string
    link?: StringFilter<"resource"> | string
    request?: RequestListRelationFilter
    resource_role?: Resource_roleListRelationFilter
  }

  export type resourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    request?: requestOrderByRelationAggregateInput
    resource_role?: resource_roleOrderByRelationAggregateInput
  }

  export type resourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: resourceWhereInput | resourceWhereInput[]
    OR?: resourceWhereInput[]
    NOT?: resourceWhereInput | resourceWhereInput[]
    name?: StringFilter<"resource"> | string
    description?: StringFilter<"resource"> | string
    link?: StringFilter<"resource"> | string
    request?: RequestListRelationFilter
    resource_role?: Resource_roleListRelationFilter
  }, "id">

  export type resourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
    _count?: resourceCountOrderByAggregateInput
    _avg?: resourceAvgOrderByAggregateInput
    _max?: resourceMaxOrderByAggregateInput
    _min?: resourceMinOrderByAggregateInput
    _sum?: resourceSumOrderByAggregateInput
  }

  export type resourceScalarWhereWithAggregatesInput = {
    AND?: resourceScalarWhereWithAggregatesInput | resourceScalarWhereWithAggregatesInput[]
    OR?: resourceScalarWhereWithAggregatesInput[]
    NOT?: resourceScalarWhereWithAggregatesInput | resourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"resource"> | number
    name?: StringWithAggregatesFilter<"resource"> | string
    description?: StringWithAggregatesFilter<"resource"> | string
    link?: StringWithAggregatesFilter<"resource"> | string
  }

  export type resource_roleWhereInput = {
    AND?: resource_roleWhereInput | resource_roleWhereInput[]
    OR?: resource_roleWhereInput[]
    NOT?: resource_roleWhereInput | resource_roleWhereInput[]
    role_id?: IntFilter<"resource_role"> | number
    resources_id?: IntFilter<"resource_role"> | number
    resource?: XOR<ResourceScalarRelationFilter, resourceWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }

  export type resource_roleOrderByWithRelationInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
    resource?: resourceOrderByWithRelationInput
    role?: roleOrderByWithRelationInput
  }

  export type resource_roleWhereUniqueInput = Prisma.AtLeast<{
    role_id_resources_id?: resource_roleRole_idResources_idCompoundUniqueInput
    AND?: resource_roleWhereInput | resource_roleWhereInput[]
    OR?: resource_roleWhereInput[]
    NOT?: resource_roleWhereInput | resource_roleWhereInput[]
    role_id?: IntFilter<"resource_role"> | number
    resources_id?: IntFilter<"resource_role"> | number
    resource?: XOR<ResourceScalarRelationFilter, resourceWhereInput>
    role?: XOR<RoleScalarRelationFilter, roleWhereInput>
  }, "role_id_resources_id">

  export type resource_roleOrderByWithAggregationInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
    _count?: resource_roleCountOrderByAggregateInput
    _avg?: resource_roleAvgOrderByAggregateInput
    _max?: resource_roleMaxOrderByAggregateInput
    _min?: resource_roleMinOrderByAggregateInput
    _sum?: resource_roleSumOrderByAggregateInput
  }

  export type resource_roleScalarWhereWithAggregatesInput = {
    AND?: resource_roleScalarWhereWithAggregatesInput | resource_roleScalarWhereWithAggregatesInput[]
    OR?: resource_roleScalarWhereWithAggregatesInput[]
    NOT?: resource_roleScalarWhereWithAggregatesInput | resource_roleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"resource_role"> | number
    resources_id?: IntWithAggregatesFilter<"resource_role"> | number
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    description?: StringFilter<"role"> | string
    access_id?: IntFilter<"role"> | number
    request?: RequestListRelationFilter
    resource_role?: Resource_roleListRelationFilter
    access?: XOR<AccessScalarRelationFilter, accessWhereInput>
    user?: UserListRelationFilter
  }

  export type roleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    access_id?: SortOrder
    request?: requestOrderByRelationAggregateInput
    resource_role?: resource_roleOrderByRelationAggregateInput
    access?: accessOrderByWithRelationInput
    user?: userOrderByRelationAggregateInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    description?: StringFilter<"role"> | string
    access_id?: IntFilter<"role"> | number
    request?: RequestListRelationFilter
    resource_role?: Resource_roleListRelationFilter
    access?: XOR<AccessScalarRelationFilter, accessWhereInput>
    user?: UserListRelationFilter
  }, "id" | "name">

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    access_id?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"role"> | number
    name?: StringWithAggregatesFilter<"role"> | string
    description?: StringWithAggregatesFilter<"role"> | string
    access_id?: IntWithAggregatesFilter<"role"> | number
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    surname?: StringNullableFilter<"user"> | string | null
    middle_name?: StringNullableFilter<"user"> | string | null
    subdivision?: StringNullableFilter<"user"> | string | null
    rang?: StringNullableFilter<"user"> | string | null
    service_number?: IntNullableFilter<"user"> | number | null
    role_id?: IntNullableFilter<"user"> | number | null
    log?: LogListRelationFilter
    role?: XOR<RoleNullableScalarRelationFilter, roleWhereInput> | null
    user_request?: User_requestListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    middle_name?: SortOrderInput | SortOrder
    subdivision?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    service_number?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    log?: logOrderByRelationAggregateInput
    role?: roleOrderByWithRelationInput
    user_request?: user_requestOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    service_number?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    surname?: StringNullableFilter<"user"> | string | null
    middle_name?: StringNullableFilter<"user"> | string | null
    subdivision?: StringNullableFilter<"user"> | string | null
    rang?: StringNullableFilter<"user"> | string | null
    role_id?: IntNullableFilter<"user"> | number | null
    log?: LogListRelationFilter
    role?: XOR<RoleNullableScalarRelationFilter, roleWhereInput> | null
    user_request?: User_requestListRelationFilter
  }, "id" | "email" | "service_number">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    middle_name?: SortOrderInput | SortOrder
    subdivision?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    service_number?: SortOrderInput | SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    surname?: StringNullableWithAggregatesFilter<"user"> | string | null
    middle_name?: StringNullableWithAggregatesFilter<"user"> | string | null
    subdivision?: StringNullableWithAggregatesFilter<"user"> | string | null
    rang?: StringNullableWithAggregatesFilter<"user"> | string | null
    service_number?: IntNullableWithAggregatesFilter<"user"> | number | null
    role_id?: IntNullableWithAggregatesFilter<"user"> | number | null
  }

  export type user_requestWhereInput = {
    AND?: user_requestWhereInput | user_requestWhereInput[]
    OR?: user_requestWhereInput[]
    NOT?: user_requestWhereInput | user_requestWhereInput[]
    user_id?: IntFilter<"user_request"> | number
    request_id?: IntFilter<"user_request"> | number
    request?: XOR<RequestScalarRelationFilter, requestWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type user_requestOrderByWithRelationInput = {
    user_id?: SortOrder
    request_id?: SortOrder
    request?: requestOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type user_requestWhereUniqueInput = Prisma.AtLeast<{
    user_id_request_id?: user_requestUser_idRequest_idCompoundUniqueInput
    AND?: user_requestWhereInput | user_requestWhereInput[]
    OR?: user_requestWhereInput[]
    NOT?: user_requestWhereInput | user_requestWhereInput[]
    user_id?: IntFilter<"user_request"> | number
    request_id?: IntFilter<"user_request"> | number
    request?: XOR<RequestScalarRelationFilter, requestWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "user_id_request_id">

  export type user_requestOrderByWithAggregationInput = {
    user_id?: SortOrder
    request_id?: SortOrder
    _count?: user_requestCountOrderByAggregateInput
    _avg?: user_requestAvgOrderByAggregateInput
    _max?: user_requestMaxOrderByAggregateInput
    _min?: user_requestMinOrderByAggregateInput
    _sum?: user_requestSumOrderByAggregateInput
  }

  export type user_requestScalarWhereWithAggregatesInput = {
    AND?: user_requestScalarWhereWithAggregatesInput | user_requestScalarWhereWithAggregatesInput[]
    OR?: user_requestScalarWhereWithAggregatesInput[]
    NOT?: user_requestScalarWhereWithAggregatesInput | user_requestScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_request"> | number
    request_id?: IntWithAggregatesFilter<"user_request"> | number
  }

  export type accessCreateInput = {
    level: number
    description?: string | null
    role?: roleCreateNestedManyWithoutAccessInput
  }

  export type accessUncheckedCreateInput = {
    id?: number
    level: number
    description?: string | null
    role?: roleUncheckedCreateNestedManyWithoutAccessInput
  }

  export type accessUpdateInput = {
    level?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUpdateManyWithoutAccessNestedInput
  }

  export type accessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    role?: roleUncheckedUpdateManyWithoutAccessNestedInput
  }

  export type accessCreateManyInput = {
    id?: number
    level: number
    description?: string | null
  }

  export type accessUpdateManyMutationInput = {
    level?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type logCreateInput = {
    action: string
    action_time: Date | string
    user: userCreateNestedOneWithoutLogInput
  }

  export type logUncheckedCreateInput = {
    id?: number
    account_id: number
    action: string
    action_time: Date | string
  }

  export type logUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLogNestedInput
  }

  export type logUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logCreateManyInput = {
    id?: number
    account_id: number
    action: string
    action_time: Date | string
  }

  export type logUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    account_id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestCreateInput = {
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource: resourceCreateNestedOneWithoutRequestInput
    role: roleCreateNestedOneWithoutRequestInput
    user_request?: user_requestCreateNestedManyWithoutRequestInput
  }

  export type requestUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource_id: number
    role_id: number
    user_request?: user_requestUncheckedCreateNestedManyWithoutRequestInput
  }

  export type requestUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: resourceUpdateOneRequiredWithoutRequestNestedInput
    role?: roleUpdateOneRequiredWithoutRequestNestedInput
    user_request?: user_requestUpdateManyWithoutRequestNestedInput
  }

  export type requestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    user_request?: user_requestUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type requestCreateManyInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource_id: number
    role_id: number
  }

  export type requestUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type resourceCreateInput = {
    name: string
    description: string
    link: string
    request?: requestCreateNestedManyWithoutResourceInput
    resource_role?: resource_roleCreateNestedManyWithoutResourceInput
  }

  export type resourceUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    link: string
    request?: requestUncheckedCreateNestedManyWithoutResourceInput
    resource_role?: resource_roleUncheckedCreateNestedManyWithoutResourceInput
  }

  export type resourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    request?: requestUpdateManyWithoutResourceNestedInput
    resource_role?: resource_roleUpdateManyWithoutResourceNestedInput
  }

  export type resourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    request?: requestUncheckedUpdateManyWithoutResourceNestedInput
    resource_role?: resource_roleUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type resourceCreateManyInput = {
    id?: number
    name: string
    description: string
    link: string
  }

  export type resourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type resourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type resource_roleCreateInput = {
    resource: resourceCreateNestedOneWithoutResource_roleInput
    role: roleCreateNestedOneWithoutResource_roleInput
  }

  export type resource_roleUncheckedCreateInput = {
    role_id: number
    resources_id: number
  }

  export type resource_roleUpdateInput = {
    resource?: resourceUpdateOneRequiredWithoutResource_roleNestedInput
    role?: roleUpdateOneRequiredWithoutResource_roleNestedInput
  }

  export type resource_roleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    resources_id?: IntFieldUpdateOperationsInput | number
  }

  export type resource_roleCreateManyInput = {
    role_id: number
    resources_id: number
  }

  export type resource_roleUpdateManyMutationInput = {

  }

  export type resource_roleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    resources_id?: IntFieldUpdateOperationsInput | number
  }

  export type roleCreateInput = {
    name: string
    description: string
    request?: requestCreateNestedManyWithoutRoleInput
    resource_role?: resource_roleCreateNestedManyWithoutRoleInput
    access: accessCreateNestedOneWithoutRoleInput
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    access_id: number
    request?: requestUncheckedCreateNestedManyWithoutRoleInput
    resource_role?: resource_roleUncheckedCreateNestedManyWithoutRoleInput
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    request?: requestUpdateManyWithoutRoleNestedInput
    resource_role?: resource_roleUpdateManyWithoutRoleNestedInput
    access?: accessUpdateOneRequiredWithoutRoleNestedInput
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    access_id?: IntFieldUpdateOperationsInput | number
    request?: requestUncheckedUpdateManyWithoutRoleNestedInput
    resource_role?: resource_roleUncheckedUpdateManyWithoutRoleNestedInput
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleCreateManyInput = {
    id?: number
    name: string
    description: string
    access_id: number
  }

  export type roleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    access_id?: IntFieldUpdateOperationsInput | number
  }

  export type userCreateInput = {
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    log?: logCreateNestedManyWithoutUserInput
    role?: roleCreateNestedOneWithoutUserInput
    user_request?: user_requestCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    role_id?: number | null
    log?: logUncheckedCreateNestedManyWithoutUserInput
    user_request?: user_requestUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    log?: logUpdateManyWithoutUserNestedInput
    role?: roleUpdateOneWithoutUserNestedInput
    user_request?: user_requestUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    log?: logUncheckedUpdateManyWithoutUserNestedInput
    user_request?: user_requestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    role_id?: number | null
  }

  export type userUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_requestCreateInput = {
    request: requestCreateNestedOneWithoutUser_requestInput
    user: userCreateNestedOneWithoutUser_requestInput
  }

  export type user_requestUncheckedCreateInput = {
    user_id: number
    request_id: number
  }

  export type user_requestUpdateInput = {
    request?: requestUpdateOneRequiredWithoutUser_requestNestedInput
    user?: userUpdateOneRequiredWithoutUser_requestNestedInput
  }

  export type user_requestUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_requestCreateManyInput = {
    user_id: number
    request_id: number
  }

  export type user_requestUpdateManyMutationInput = {

  }

  export type user_requestUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoleListRelationFilter = {
    every?: roleWhereInput
    some?: roleWhereInput
    none?: roleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accessCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    description?: SortOrder
  }

  export type accessAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type accessMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    description?: SortOrder
  }

  export type accessMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    description?: SortOrder
  }

  export type accessSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type logCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    action?: SortOrder
    action_time?: SortOrder
  }

  export type logAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type logMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    action?: SortOrder
    action_time?: SortOrder
  }

  export type logMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    action?: SortOrder
    action_time?: SortOrder
  }

  export type logSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ResourceScalarRelationFilter = {
    is?: resourceWhereInput
    isNot?: resourceWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: roleWhereInput
    isNot?: roleWhereInput
  }

  export type User_requestListRelationFilter = {
    every?: user_requestWhereInput
    some?: user_requestWhereInput
    none?: user_requestWhereInput
  }

  export type user_requestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type requestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    complete_date?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
  }

  export type requestAvgOrderByAggregateInput = {
    id?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
  }

  export type requestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    complete_date?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
  }

  export type requestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    email?: SortOrder
    status?: SortOrder
    create_date?: SortOrder
    complete_date?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
  }

  export type requestSumOrderByAggregateInput = {
    id?: SortOrder
    resource_id?: SortOrder
    role_id?: SortOrder
  }

  export type RequestListRelationFilter = {
    every?: requestWhereInput
    some?: requestWhereInput
    none?: requestWhereInput
  }

  export type Resource_roleListRelationFilter = {
    every?: resource_roleWhereInput
    some?: resource_roleWhereInput
    none?: resource_roleWhereInput
  }

  export type requestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type resource_roleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type resourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
  }

  export type resourceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type resourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
  }

  export type resourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    link?: SortOrder
  }

  export type resourceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type resource_roleRole_idResources_idCompoundUniqueInput = {
    role_id: number
    resources_id: number
  }

  export type resource_roleCountOrderByAggregateInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
  }

  export type resource_roleAvgOrderByAggregateInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
  }

  export type resource_roleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
  }

  export type resource_roleMinOrderByAggregateInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
  }

  export type resource_roleSumOrderByAggregateInput = {
    role_id?: SortOrder
    resources_id?: SortOrder
  }

  export type AccessScalarRelationFilter = {
    is?: accessWhereInput
    isNot?: accessWhereInput
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    access_id?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id?: SortOrder
    access_id?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    access_id?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    access_id?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id?: SortOrder
    access_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LogListRelationFilter = {
    every?: logWhereInput
    some?: logWhereInput
    none?: logWhereInput
  }

  export type RoleNullableScalarRelationFilter = {
    is?: roleWhereInput | null
    isNot?: roleWhereInput | null
  }

  export type logOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    subdivision?: SortOrder
    rang?: SortOrder
    service_number?: SortOrder
    role_id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    service_number?: SortOrder
    role_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    subdivision?: SortOrder
    rang?: SortOrder
    service_number?: SortOrder
    role_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    middle_name?: SortOrder
    subdivision?: SortOrder
    rang?: SortOrder
    service_number?: SortOrder
    role_id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    service_number?: SortOrder
    role_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RequestScalarRelationFilter = {
    is?: requestWhereInput
    isNot?: requestWhereInput
  }

  export type user_requestUser_idRequest_idCompoundUniqueInput = {
    user_id: number
    request_id: number
  }

  export type user_requestCountOrderByAggregateInput = {
    user_id?: SortOrder
    request_id?: SortOrder
  }

  export type user_requestAvgOrderByAggregateInput = {
    user_id?: SortOrder
    request_id?: SortOrder
  }

  export type user_requestMaxOrderByAggregateInput = {
    user_id?: SortOrder
    request_id?: SortOrder
  }

  export type user_requestMinOrderByAggregateInput = {
    user_id?: SortOrder
    request_id?: SortOrder
  }

  export type user_requestSumOrderByAggregateInput = {
    user_id?: SortOrder
    request_id?: SortOrder
  }

  export type roleCreateNestedManyWithoutAccessInput = {
    create?: XOR<roleCreateWithoutAccessInput, roleUncheckedCreateWithoutAccessInput> | roleCreateWithoutAccessInput[] | roleUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: roleCreateOrConnectWithoutAccessInput | roleCreateOrConnectWithoutAccessInput[]
    createMany?: roleCreateManyAccessInputEnvelope
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[]
  }

  export type roleUncheckedCreateNestedManyWithoutAccessInput = {
    create?: XOR<roleCreateWithoutAccessInput, roleUncheckedCreateWithoutAccessInput> | roleCreateWithoutAccessInput[] | roleUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: roleCreateOrConnectWithoutAccessInput | roleCreateOrConnectWithoutAccessInput[]
    createMany?: roleCreateManyAccessInputEnvelope
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type roleUpdateManyWithoutAccessNestedInput = {
    create?: XOR<roleCreateWithoutAccessInput, roleUncheckedCreateWithoutAccessInput> | roleCreateWithoutAccessInput[] | roleUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: roleCreateOrConnectWithoutAccessInput | roleCreateOrConnectWithoutAccessInput[]
    upsert?: roleUpsertWithWhereUniqueWithoutAccessInput | roleUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: roleCreateManyAccessInputEnvelope
    set?: roleWhereUniqueInput | roleWhereUniqueInput[]
    disconnect?: roleWhereUniqueInput | roleWhereUniqueInput[]
    delete?: roleWhereUniqueInput | roleWhereUniqueInput[]
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[]
    update?: roleUpdateWithWhereUniqueWithoutAccessInput | roleUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: roleUpdateManyWithWhereWithoutAccessInput | roleUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: roleScalarWhereInput | roleScalarWhereInput[]
  }

  export type roleUncheckedUpdateManyWithoutAccessNestedInput = {
    create?: XOR<roleCreateWithoutAccessInput, roleUncheckedCreateWithoutAccessInput> | roleCreateWithoutAccessInput[] | roleUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: roleCreateOrConnectWithoutAccessInput | roleCreateOrConnectWithoutAccessInput[]
    upsert?: roleUpsertWithWhereUniqueWithoutAccessInput | roleUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: roleCreateManyAccessInputEnvelope
    set?: roleWhereUniqueInput | roleWhereUniqueInput[]
    disconnect?: roleWhereUniqueInput | roleWhereUniqueInput[]
    delete?: roleWhereUniqueInput | roleWhereUniqueInput[]
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[]
    update?: roleUpdateWithWhereUniqueWithoutAccessInput | roleUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: roleUpdateManyWithWhereWithoutAccessInput | roleUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: roleScalarWhereInput | roleScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutLogInput = {
    create?: XOR<userCreateWithoutLogInput, userUncheckedCreateWithoutLogInput>
    connectOrCreate?: userCreateOrConnectWithoutLogInput
    connect?: userWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateOneRequiredWithoutLogNestedInput = {
    create?: XOR<userCreateWithoutLogInput, userUncheckedCreateWithoutLogInput>
    connectOrCreate?: userCreateOrConnectWithoutLogInput
    upsert?: userUpsertWithoutLogInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLogInput, userUpdateWithoutLogInput>, userUncheckedUpdateWithoutLogInput>
  }

  export type resourceCreateNestedOneWithoutRequestInput = {
    create?: XOR<resourceCreateWithoutRequestInput, resourceUncheckedCreateWithoutRequestInput>
    connectOrCreate?: resourceCreateOrConnectWithoutRequestInput
    connect?: resourceWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutRequestInput = {
    create?: XOR<roleCreateWithoutRequestInput, roleUncheckedCreateWithoutRequestInput>
    connectOrCreate?: roleCreateOrConnectWithoutRequestInput
    connect?: roleWhereUniqueInput
  }

  export type user_requestCreateNestedManyWithoutRequestInput = {
    create?: XOR<user_requestCreateWithoutRequestInput, user_requestUncheckedCreateWithoutRequestInput> | user_requestCreateWithoutRequestInput[] | user_requestUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutRequestInput | user_requestCreateOrConnectWithoutRequestInput[]
    createMany?: user_requestCreateManyRequestInputEnvelope
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
  }

  export type user_requestUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<user_requestCreateWithoutRequestInput, user_requestUncheckedCreateWithoutRequestInput> | user_requestCreateWithoutRequestInput[] | user_requestUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutRequestInput | user_requestCreateOrConnectWithoutRequestInput[]
    createMany?: user_requestCreateManyRequestInputEnvelope
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
  }

  export type resourceUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<resourceCreateWithoutRequestInput, resourceUncheckedCreateWithoutRequestInput>
    connectOrCreate?: resourceCreateOrConnectWithoutRequestInput
    upsert?: resourceUpsertWithoutRequestInput
    connect?: resourceWhereUniqueInput
    update?: XOR<XOR<resourceUpdateToOneWithWhereWithoutRequestInput, resourceUpdateWithoutRequestInput>, resourceUncheckedUpdateWithoutRequestInput>
  }

  export type roleUpdateOneRequiredWithoutRequestNestedInput = {
    create?: XOR<roleCreateWithoutRequestInput, roleUncheckedCreateWithoutRequestInput>
    connectOrCreate?: roleCreateOrConnectWithoutRequestInput
    upsert?: roleUpsertWithoutRequestInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutRequestInput, roleUpdateWithoutRequestInput>, roleUncheckedUpdateWithoutRequestInput>
  }

  export type user_requestUpdateManyWithoutRequestNestedInput = {
    create?: XOR<user_requestCreateWithoutRequestInput, user_requestUncheckedCreateWithoutRequestInput> | user_requestCreateWithoutRequestInput[] | user_requestUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutRequestInput | user_requestCreateOrConnectWithoutRequestInput[]
    upsert?: user_requestUpsertWithWhereUniqueWithoutRequestInput | user_requestUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: user_requestCreateManyRequestInputEnvelope
    set?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    disconnect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    delete?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    update?: user_requestUpdateWithWhereUniqueWithoutRequestInput | user_requestUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: user_requestUpdateManyWithWhereWithoutRequestInput | user_requestUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: user_requestScalarWhereInput | user_requestScalarWhereInput[]
  }

  export type user_requestUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<user_requestCreateWithoutRequestInput, user_requestUncheckedCreateWithoutRequestInput> | user_requestCreateWithoutRequestInput[] | user_requestUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutRequestInput | user_requestCreateOrConnectWithoutRequestInput[]
    upsert?: user_requestUpsertWithWhereUniqueWithoutRequestInput | user_requestUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: user_requestCreateManyRequestInputEnvelope
    set?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    disconnect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    delete?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    update?: user_requestUpdateWithWhereUniqueWithoutRequestInput | user_requestUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: user_requestUpdateManyWithWhereWithoutRequestInput | user_requestUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: user_requestScalarWhereInput | user_requestScalarWhereInput[]
  }

  export type requestCreateNestedManyWithoutResourceInput = {
    create?: XOR<requestCreateWithoutResourceInput, requestUncheckedCreateWithoutResourceInput> | requestCreateWithoutResourceInput[] | requestUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: requestCreateOrConnectWithoutResourceInput | requestCreateOrConnectWithoutResourceInput[]
    createMany?: requestCreateManyResourceInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type resource_roleCreateNestedManyWithoutResourceInput = {
    create?: XOR<resource_roleCreateWithoutResourceInput, resource_roleUncheckedCreateWithoutResourceInput> | resource_roleCreateWithoutResourceInput[] | resource_roleUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutResourceInput | resource_roleCreateOrConnectWithoutResourceInput[]
    createMany?: resource_roleCreateManyResourceInputEnvelope
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
  }

  export type requestUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<requestCreateWithoutResourceInput, requestUncheckedCreateWithoutResourceInput> | requestCreateWithoutResourceInput[] | requestUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: requestCreateOrConnectWithoutResourceInput | requestCreateOrConnectWithoutResourceInput[]
    createMany?: requestCreateManyResourceInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type resource_roleUncheckedCreateNestedManyWithoutResourceInput = {
    create?: XOR<resource_roleCreateWithoutResourceInput, resource_roleUncheckedCreateWithoutResourceInput> | resource_roleCreateWithoutResourceInput[] | resource_roleUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutResourceInput | resource_roleCreateOrConnectWithoutResourceInput[]
    createMany?: resource_roleCreateManyResourceInputEnvelope
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
  }

  export type requestUpdateManyWithoutResourceNestedInput = {
    create?: XOR<requestCreateWithoutResourceInput, requestUncheckedCreateWithoutResourceInput> | requestCreateWithoutResourceInput[] | requestUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: requestCreateOrConnectWithoutResourceInput | requestCreateOrConnectWithoutResourceInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutResourceInput | requestUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: requestCreateManyResourceInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutResourceInput | requestUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: requestUpdateManyWithWhereWithoutResourceInput | requestUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type resource_roleUpdateManyWithoutResourceNestedInput = {
    create?: XOR<resource_roleCreateWithoutResourceInput, resource_roleUncheckedCreateWithoutResourceInput> | resource_roleCreateWithoutResourceInput[] | resource_roleUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutResourceInput | resource_roleCreateOrConnectWithoutResourceInput[]
    upsert?: resource_roleUpsertWithWhereUniqueWithoutResourceInput | resource_roleUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: resource_roleCreateManyResourceInputEnvelope
    set?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    disconnect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    delete?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    update?: resource_roleUpdateWithWhereUniqueWithoutResourceInput | resource_roleUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: resource_roleUpdateManyWithWhereWithoutResourceInput | resource_roleUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: resource_roleScalarWhereInput | resource_roleScalarWhereInput[]
  }

  export type requestUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<requestCreateWithoutResourceInput, requestUncheckedCreateWithoutResourceInput> | requestCreateWithoutResourceInput[] | requestUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: requestCreateOrConnectWithoutResourceInput | requestCreateOrConnectWithoutResourceInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutResourceInput | requestUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: requestCreateManyResourceInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutResourceInput | requestUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: requestUpdateManyWithWhereWithoutResourceInput | requestUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type resource_roleUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: XOR<resource_roleCreateWithoutResourceInput, resource_roleUncheckedCreateWithoutResourceInput> | resource_roleCreateWithoutResourceInput[] | resource_roleUncheckedCreateWithoutResourceInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutResourceInput | resource_roleCreateOrConnectWithoutResourceInput[]
    upsert?: resource_roleUpsertWithWhereUniqueWithoutResourceInput | resource_roleUpsertWithWhereUniqueWithoutResourceInput[]
    createMany?: resource_roleCreateManyResourceInputEnvelope
    set?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    disconnect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    delete?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    update?: resource_roleUpdateWithWhereUniqueWithoutResourceInput | resource_roleUpdateWithWhereUniqueWithoutResourceInput[]
    updateMany?: resource_roleUpdateManyWithWhereWithoutResourceInput | resource_roleUpdateManyWithWhereWithoutResourceInput[]
    deleteMany?: resource_roleScalarWhereInput | resource_roleScalarWhereInput[]
  }

  export type resourceCreateNestedOneWithoutResource_roleInput = {
    create?: XOR<resourceCreateWithoutResource_roleInput, resourceUncheckedCreateWithoutResource_roleInput>
    connectOrCreate?: resourceCreateOrConnectWithoutResource_roleInput
    connect?: resourceWhereUniqueInput
  }

  export type roleCreateNestedOneWithoutResource_roleInput = {
    create?: XOR<roleCreateWithoutResource_roleInput, roleUncheckedCreateWithoutResource_roleInput>
    connectOrCreate?: roleCreateOrConnectWithoutResource_roleInput
    connect?: roleWhereUniqueInput
  }

  export type resourceUpdateOneRequiredWithoutResource_roleNestedInput = {
    create?: XOR<resourceCreateWithoutResource_roleInput, resourceUncheckedCreateWithoutResource_roleInput>
    connectOrCreate?: resourceCreateOrConnectWithoutResource_roleInput
    upsert?: resourceUpsertWithoutResource_roleInput
    connect?: resourceWhereUniqueInput
    update?: XOR<XOR<resourceUpdateToOneWithWhereWithoutResource_roleInput, resourceUpdateWithoutResource_roleInput>, resourceUncheckedUpdateWithoutResource_roleInput>
  }

  export type roleUpdateOneRequiredWithoutResource_roleNestedInput = {
    create?: XOR<roleCreateWithoutResource_roleInput, roleUncheckedCreateWithoutResource_roleInput>
    connectOrCreate?: roleCreateOrConnectWithoutResource_roleInput
    upsert?: roleUpsertWithoutResource_roleInput
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutResource_roleInput, roleUpdateWithoutResource_roleInput>, roleUncheckedUpdateWithoutResource_roleInput>
  }

  export type requestCreateNestedManyWithoutRoleInput = {
    create?: XOR<requestCreateWithoutRoleInput, requestUncheckedCreateWithoutRoleInput> | requestCreateWithoutRoleInput[] | requestUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRoleInput | requestCreateOrConnectWithoutRoleInput[]
    createMany?: requestCreateManyRoleInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type resource_roleCreateNestedManyWithoutRoleInput = {
    create?: XOR<resource_roleCreateWithoutRoleInput, resource_roleUncheckedCreateWithoutRoleInput> | resource_roleCreateWithoutRoleInput[] | resource_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutRoleInput | resource_roleCreateOrConnectWithoutRoleInput[]
    createMany?: resource_roleCreateManyRoleInputEnvelope
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
  }

  export type accessCreateNestedOneWithoutRoleInput = {
    create?: XOR<accessCreateWithoutRoleInput, accessUncheckedCreateWithoutRoleInput>
    connectOrCreate?: accessCreateOrConnectWithoutRoleInput
    connect?: accessWhereUniqueInput
  }

  export type userCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type requestUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<requestCreateWithoutRoleInput, requestUncheckedCreateWithoutRoleInput> | requestCreateWithoutRoleInput[] | requestUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRoleInput | requestCreateOrConnectWithoutRoleInput[]
    createMany?: requestCreateManyRoleInputEnvelope
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
  }

  export type resource_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<resource_roleCreateWithoutRoleInput, resource_roleUncheckedCreateWithoutRoleInput> | resource_roleCreateWithoutRoleInput[] | resource_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutRoleInput | resource_roleCreateOrConnectWithoutRoleInput[]
    createMany?: resource_roleCreateManyRoleInputEnvelope
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type requestUpdateManyWithoutRoleNestedInput = {
    create?: XOR<requestCreateWithoutRoleInput, requestUncheckedCreateWithoutRoleInput> | requestCreateWithoutRoleInput[] | requestUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRoleInput | requestCreateOrConnectWithoutRoleInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutRoleInput | requestUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: requestCreateManyRoleInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutRoleInput | requestUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: requestUpdateManyWithWhereWithoutRoleInput | requestUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type resource_roleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<resource_roleCreateWithoutRoleInput, resource_roleUncheckedCreateWithoutRoleInput> | resource_roleCreateWithoutRoleInput[] | resource_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutRoleInput | resource_roleCreateOrConnectWithoutRoleInput[]
    upsert?: resource_roleUpsertWithWhereUniqueWithoutRoleInput | resource_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: resource_roleCreateManyRoleInputEnvelope
    set?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    disconnect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    delete?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    update?: resource_roleUpdateWithWhereUniqueWithoutRoleInput | resource_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: resource_roleUpdateManyWithWhereWithoutRoleInput | resource_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: resource_roleScalarWhereInput | resource_roleScalarWhereInput[]
  }

  export type accessUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<accessCreateWithoutRoleInput, accessUncheckedCreateWithoutRoleInput>
    connectOrCreate?: accessCreateOrConnectWithoutRoleInput
    upsert?: accessUpsertWithoutRoleInput
    connect?: accessWhereUniqueInput
    update?: XOR<XOR<accessUpdateToOneWithWhereWithoutRoleInput, accessUpdateWithoutRoleInput>, accessUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type requestUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<requestCreateWithoutRoleInput, requestUncheckedCreateWithoutRoleInput> | requestCreateWithoutRoleInput[] | requestUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: requestCreateOrConnectWithoutRoleInput | requestCreateOrConnectWithoutRoleInput[]
    upsert?: requestUpsertWithWhereUniqueWithoutRoleInput | requestUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: requestCreateManyRoleInputEnvelope
    set?: requestWhereUniqueInput | requestWhereUniqueInput[]
    disconnect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    delete?: requestWhereUniqueInput | requestWhereUniqueInput[]
    connect?: requestWhereUniqueInput | requestWhereUniqueInput[]
    update?: requestUpdateWithWhereUniqueWithoutRoleInput | requestUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: requestUpdateManyWithWhereWithoutRoleInput | requestUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: requestScalarWhereInput | requestScalarWhereInput[]
  }

  export type resource_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<resource_roleCreateWithoutRoleInput, resource_roleUncheckedCreateWithoutRoleInput> | resource_roleCreateWithoutRoleInput[] | resource_roleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: resource_roleCreateOrConnectWithoutRoleInput | resource_roleCreateOrConnectWithoutRoleInput[]
    upsert?: resource_roleUpsertWithWhereUniqueWithoutRoleInput | resource_roleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: resource_roleCreateManyRoleInputEnvelope
    set?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    disconnect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    delete?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    connect?: resource_roleWhereUniqueInput | resource_roleWhereUniqueInput[]
    update?: resource_roleUpdateWithWhereUniqueWithoutRoleInput | resource_roleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: resource_roleUpdateManyWithWhereWithoutRoleInput | resource_roleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: resource_roleScalarWhereInput | resource_roleScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type logCreateNestedManyWithoutUserInput = {
    create?: XOR<logCreateWithoutUserInput, logUncheckedCreateWithoutUserInput> | logCreateWithoutUserInput[] | logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logCreateOrConnectWithoutUserInput | logCreateOrConnectWithoutUserInput[]
    createMany?: logCreateManyUserInputEnvelope
    connect?: logWhereUniqueInput | logWhereUniqueInput[]
  }

  export type roleCreateNestedOneWithoutUserInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    connect?: roleWhereUniqueInput
  }

  export type user_requestCreateNestedManyWithoutUserInput = {
    create?: XOR<user_requestCreateWithoutUserInput, user_requestUncheckedCreateWithoutUserInput> | user_requestCreateWithoutUserInput[] | user_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutUserInput | user_requestCreateOrConnectWithoutUserInput[]
    createMany?: user_requestCreateManyUserInputEnvelope
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
  }

  export type logUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<logCreateWithoutUserInput, logUncheckedCreateWithoutUserInput> | logCreateWithoutUserInput[] | logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logCreateOrConnectWithoutUserInput | logCreateOrConnectWithoutUserInput[]
    createMany?: logCreateManyUserInputEnvelope
    connect?: logWhereUniqueInput | logWhereUniqueInput[]
  }

  export type user_requestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_requestCreateWithoutUserInput, user_requestUncheckedCreateWithoutUserInput> | user_requestCreateWithoutUserInput[] | user_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutUserInput | user_requestCreateOrConnectWithoutUserInput[]
    createMany?: user_requestCreateManyUserInputEnvelope
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type logUpdateManyWithoutUserNestedInput = {
    create?: XOR<logCreateWithoutUserInput, logUncheckedCreateWithoutUserInput> | logCreateWithoutUserInput[] | logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logCreateOrConnectWithoutUserInput | logCreateOrConnectWithoutUserInput[]
    upsert?: logUpsertWithWhereUniqueWithoutUserInput | logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logCreateManyUserInputEnvelope
    set?: logWhereUniqueInput | logWhereUniqueInput[]
    disconnect?: logWhereUniqueInput | logWhereUniqueInput[]
    delete?: logWhereUniqueInput | logWhereUniqueInput[]
    connect?: logWhereUniqueInput | logWhereUniqueInput[]
    update?: logUpdateWithWhereUniqueWithoutUserInput | logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logUpdateManyWithWhereWithoutUserInput | logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logScalarWhereInput | logScalarWhereInput[]
  }

  export type roleUpdateOneWithoutUserNestedInput = {
    create?: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    connectOrCreate?: roleCreateOrConnectWithoutUserInput
    upsert?: roleUpsertWithoutUserInput
    disconnect?: roleWhereInput | boolean
    delete?: roleWhereInput | boolean
    connect?: roleWhereUniqueInput
    update?: XOR<XOR<roleUpdateToOneWithWhereWithoutUserInput, roleUpdateWithoutUserInput>, roleUncheckedUpdateWithoutUserInput>
  }

  export type user_requestUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_requestCreateWithoutUserInput, user_requestUncheckedCreateWithoutUserInput> | user_requestCreateWithoutUserInput[] | user_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutUserInput | user_requestCreateOrConnectWithoutUserInput[]
    upsert?: user_requestUpsertWithWhereUniqueWithoutUserInput | user_requestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_requestCreateManyUserInputEnvelope
    set?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    disconnect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    delete?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    update?: user_requestUpdateWithWhereUniqueWithoutUserInput | user_requestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_requestUpdateManyWithWhereWithoutUserInput | user_requestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_requestScalarWhereInput | user_requestScalarWhereInput[]
  }

  export type logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<logCreateWithoutUserInput, logUncheckedCreateWithoutUserInput> | logCreateWithoutUserInput[] | logUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logCreateOrConnectWithoutUserInput | logCreateOrConnectWithoutUserInput[]
    upsert?: logUpsertWithWhereUniqueWithoutUserInput | logUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logCreateManyUserInputEnvelope
    set?: logWhereUniqueInput | logWhereUniqueInput[]
    disconnect?: logWhereUniqueInput | logWhereUniqueInput[]
    delete?: logWhereUniqueInput | logWhereUniqueInput[]
    connect?: logWhereUniqueInput | logWhereUniqueInput[]
    update?: logUpdateWithWhereUniqueWithoutUserInput | logUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logUpdateManyWithWhereWithoutUserInput | logUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logScalarWhereInput | logScalarWhereInput[]
  }

  export type user_requestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_requestCreateWithoutUserInput, user_requestUncheckedCreateWithoutUserInput> | user_requestCreateWithoutUserInput[] | user_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_requestCreateOrConnectWithoutUserInput | user_requestCreateOrConnectWithoutUserInput[]
    upsert?: user_requestUpsertWithWhereUniqueWithoutUserInput | user_requestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_requestCreateManyUserInputEnvelope
    set?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    disconnect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    delete?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    connect?: user_requestWhereUniqueInput | user_requestWhereUniqueInput[]
    update?: user_requestUpdateWithWhereUniqueWithoutUserInput | user_requestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_requestUpdateManyWithWhereWithoutUserInput | user_requestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_requestScalarWhereInput | user_requestScalarWhereInput[]
  }

  export type requestCreateNestedOneWithoutUser_requestInput = {
    create?: XOR<requestCreateWithoutUser_requestInput, requestUncheckedCreateWithoutUser_requestInput>
    connectOrCreate?: requestCreateOrConnectWithoutUser_requestInput
    connect?: requestWhereUniqueInput
  }

  export type userCreateNestedOneWithoutUser_requestInput = {
    create?: XOR<userCreateWithoutUser_requestInput, userUncheckedCreateWithoutUser_requestInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_requestInput
    connect?: userWhereUniqueInput
  }

  export type requestUpdateOneRequiredWithoutUser_requestNestedInput = {
    create?: XOR<requestCreateWithoutUser_requestInput, requestUncheckedCreateWithoutUser_requestInput>
    connectOrCreate?: requestCreateOrConnectWithoutUser_requestInput
    upsert?: requestUpsertWithoutUser_requestInput
    connect?: requestWhereUniqueInput
    update?: XOR<XOR<requestUpdateToOneWithWhereWithoutUser_requestInput, requestUpdateWithoutUser_requestInput>, requestUncheckedUpdateWithoutUser_requestInput>
  }

  export type userUpdateOneRequiredWithoutUser_requestNestedInput = {
    create?: XOR<userCreateWithoutUser_requestInput, userUncheckedCreateWithoutUser_requestInput>
    connectOrCreate?: userCreateOrConnectWithoutUser_requestInput
    upsert?: userUpsertWithoutUser_requestInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUser_requestInput, userUpdateWithoutUser_requestInput>, userUncheckedUpdateWithoutUser_requestInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type roleCreateWithoutAccessInput = {
    name: string
    description: string
    request?: requestCreateNestedManyWithoutRoleInput
    resource_role?: resource_roleCreateNestedManyWithoutRoleInput
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutAccessInput = {
    id?: number
    name: string
    description: string
    request?: requestUncheckedCreateNestedManyWithoutRoleInput
    resource_role?: resource_roleUncheckedCreateNestedManyWithoutRoleInput
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutAccessInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutAccessInput, roleUncheckedCreateWithoutAccessInput>
  }

  export type roleCreateManyAccessInputEnvelope = {
    data: roleCreateManyAccessInput | roleCreateManyAccessInput[]
    skipDuplicates?: boolean
  }

  export type roleUpsertWithWhereUniqueWithoutAccessInput = {
    where: roleWhereUniqueInput
    update: XOR<roleUpdateWithoutAccessInput, roleUncheckedUpdateWithoutAccessInput>
    create: XOR<roleCreateWithoutAccessInput, roleUncheckedCreateWithoutAccessInput>
  }

  export type roleUpdateWithWhereUniqueWithoutAccessInput = {
    where: roleWhereUniqueInput
    data: XOR<roleUpdateWithoutAccessInput, roleUncheckedUpdateWithoutAccessInput>
  }

  export type roleUpdateManyWithWhereWithoutAccessInput = {
    where: roleScalarWhereInput
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyWithoutAccessInput>
  }

  export type roleScalarWhereInput = {
    AND?: roleScalarWhereInput | roleScalarWhereInput[]
    OR?: roleScalarWhereInput[]
    NOT?: roleScalarWhereInput | roleScalarWhereInput[]
    id?: IntFilter<"role"> | number
    name?: StringFilter<"role"> | string
    description?: StringFilter<"role"> | string
    access_id?: IntFilter<"role"> | number
  }

  export type userCreateWithoutLogInput = {
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    role?: roleCreateNestedOneWithoutUserInput
    user_request?: user_requestCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLogInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    role_id?: number | null
    user_request?: user_requestUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLogInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLogInput, userUncheckedCreateWithoutLogInput>
  }

  export type userUpsertWithoutLogInput = {
    update: XOR<userUpdateWithoutLogInput, userUncheckedUpdateWithoutLogInput>
    create: XOR<userCreateWithoutLogInput, userUncheckedCreateWithoutLogInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLogInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLogInput, userUncheckedUpdateWithoutLogInput>
  }

  export type userUpdateWithoutLogInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    role?: roleUpdateOneWithoutUserNestedInput
    user_request?: user_requestUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_request?: user_requestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type resourceCreateWithoutRequestInput = {
    name: string
    description: string
    link: string
    resource_role?: resource_roleCreateNestedManyWithoutResourceInput
  }

  export type resourceUncheckedCreateWithoutRequestInput = {
    id?: number
    name: string
    description: string
    link: string
    resource_role?: resource_roleUncheckedCreateNestedManyWithoutResourceInput
  }

  export type resourceCreateOrConnectWithoutRequestInput = {
    where: resourceWhereUniqueInput
    create: XOR<resourceCreateWithoutRequestInput, resourceUncheckedCreateWithoutRequestInput>
  }

  export type roleCreateWithoutRequestInput = {
    name: string
    description: string
    resource_role?: resource_roleCreateNestedManyWithoutRoleInput
    access: accessCreateNestedOneWithoutRoleInput
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutRequestInput = {
    id?: number
    name: string
    description: string
    access_id: number
    resource_role?: resource_roleUncheckedCreateNestedManyWithoutRoleInput
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutRequestInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutRequestInput, roleUncheckedCreateWithoutRequestInput>
  }

  export type user_requestCreateWithoutRequestInput = {
    user: userCreateNestedOneWithoutUser_requestInput
  }

  export type user_requestUncheckedCreateWithoutRequestInput = {
    user_id: number
  }

  export type user_requestCreateOrConnectWithoutRequestInput = {
    where: user_requestWhereUniqueInput
    create: XOR<user_requestCreateWithoutRequestInput, user_requestUncheckedCreateWithoutRequestInput>
  }

  export type user_requestCreateManyRequestInputEnvelope = {
    data: user_requestCreateManyRequestInput | user_requestCreateManyRequestInput[]
    skipDuplicates?: boolean
  }

  export type resourceUpsertWithoutRequestInput = {
    update: XOR<resourceUpdateWithoutRequestInput, resourceUncheckedUpdateWithoutRequestInput>
    create: XOR<resourceCreateWithoutRequestInput, resourceUncheckedCreateWithoutRequestInput>
    where?: resourceWhereInput
  }

  export type resourceUpdateToOneWithWhereWithoutRequestInput = {
    where?: resourceWhereInput
    data: XOR<resourceUpdateWithoutRequestInput, resourceUncheckedUpdateWithoutRequestInput>
  }

  export type resourceUpdateWithoutRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    resource_role?: resource_roleUpdateManyWithoutResourceNestedInput
  }

  export type resourceUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    resource_role?: resource_roleUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type roleUpsertWithoutRequestInput = {
    update: XOR<roleUpdateWithoutRequestInput, roleUncheckedUpdateWithoutRequestInput>
    create: XOR<roleCreateWithoutRequestInput, roleUncheckedCreateWithoutRequestInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutRequestInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutRequestInput, roleUncheckedUpdateWithoutRequestInput>
  }

  export type roleUpdateWithoutRequestInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    resource_role?: resource_roleUpdateManyWithoutRoleNestedInput
    access?: accessUpdateOneRequiredWithoutRoleNestedInput
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    access_id?: IntFieldUpdateOperationsInput | number
    resource_role?: resource_roleUncheckedUpdateManyWithoutRoleNestedInput
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type user_requestUpsertWithWhereUniqueWithoutRequestInput = {
    where: user_requestWhereUniqueInput
    update: XOR<user_requestUpdateWithoutRequestInput, user_requestUncheckedUpdateWithoutRequestInput>
    create: XOR<user_requestCreateWithoutRequestInput, user_requestUncheckedCreateWithoutRequestInput>
  }

  export type user_requestUpdateWithWhereUniqueWithoutRequestInput = {
    where: user_requestWhereUniqueInput
    data: XOR<user_requestUpdateWithoutRequestInput, user_requestUncheckedUpdateWithoutRequestInput>
  }

  export type user_requestUpdateManyWithWhereWithoutRequestInput = {
    where: user_requestScalarWhereInput
    data: XOR<user_requestUpdateManyMutationInput, user_requestUncheckedUpdateManyWithoutRequestInput>
  }

  export type user_requestScalarWhereInput = {
    AND?: user_requestScalarWhereInput | user_requestScalarWhereInput[]
    OR?: user_requestScalarWhereInput[]
    NOT?: user_requestScalarWhereInput | user_requestScalarWhereInput[]
    user_id?: IntFilter<"user_request"> | number
    request_id?: IntFilter<"user_request"> | number
  }

  export type requestCreateWithoutResourceInput = {
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    role: roleCreateNestedOneWithoutRequestInput
    user_request?: user_requestCreateNestedManyWithoutRequestInput
  }

  export type requestUncheckedCreateWithoutResourceInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    role_id: number
    user_request?: user_requestUncheckedCreateNestedManyWithoutRequestInput
  }

  export type requestCreateOrConnectWithoutResourceInput = {
    where: requestWhereUniqueInput
    create: XOR<requestCreateWithoutResourceInput, requestUncheckedCreateWithoutResourceInput>
  }

  export type requestCreateManyResourceInputEnvelope = {
    data: requestCreateManyResourceInput | requestCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type resource_roleCreateWithoutResourceInput = {
    role: roleCreateNestedOneWithoutResource_roleInput
  }

  export type resource_roleUncheckedCreateWithoutResourceInput = {
    role_id: number
  }

  export type resource_roleCreateOrConnectWithoutResourceInput = {
    where: resource_roleWhereUniqueInput
    create: XOR<resource_roleCreateWithoutResourceInput, resource_roleUncheckedCreateWithoutResourceInput>
  }

  export type resource_roleCreateManyResourceInputEnvelope = {
    data: resource_roleCreateManyResourceInput | resource_roleCreateManyResourceInput[]
    skipDuplicates?: boolean
  }

  export type requestUpsertWithWhereUniqueWithoutResourceInput = {
    where: requestWhereUniqueInput
    update: XOR<requestUpdateWithoutResourceInput, requestUncheckedUpdateWithoutResourceInput>
    create: XOR<requestCreateWithoutResourceInput, requestUncheckedCreateWithoutResourceInput>
  }

  export type requestUpdateWithWhereUniqueWithoutResourceInput = {
    where: requestWhereUniqueInput
    data: XOR<requestUpdateWithoutResourceInput, requestUncheckedUpdateWithoutResourceInput>
  }

  export type requestUpdateManyWithWhereWithoutResourceInput = {
    where: requestScalarWhereInput
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyWithoutResourceInput>
  }

  export type requestScalarWhereInput = {
    AND?: requestScalarWhereInput | requestScalarWhereInput[]
    OR?: requestScalarWhereInput[]
    NOT?: requestScalarWhereInput | requestScalarWhereInput[]
    id?: IntFilter<"request"> | number
    name?: StringFilter<"request"> | string
    surname?: StringFilter<"request"> | string
    middle_name?: StringFilter<"request"> | string
    email?: StringFilter<"request"> | string
    status?: StringFilter<"request"> | string
    create_date?: DateTimeFilter<"request"> | Date | string
    complete_date?: DateTimeFilter<"request"> | Date | string
    resource_id?: IntFilter<"request"> | number
    role_id?: IntFilter<"request"> | number
  }

  export type resource_roleUpsertWithWhereUniqueWithoutResourceInput = {
    where: resource_roleWhereUniqueInput
    update: XOR<resource_roleUpdateWithoutResourceInput, resource_roleUncheckedUpdateWithoutResourceInput>
    create: XOR<resource_roleCreateWithoutResourceInput, resource_roleUncheckedCreateWithoutResourceInput>
  }

  export type resource_roleUpdateWithWhereUniqueWithoutResourceInput = {
    where: resource_roleWhereUniqueInput
    data: XOR<resource_roleUpdateWithoutResourceInput, resource_roleUncheckedUpdateWithoutResourceInput>
  }

  export type resource_roleUpdateManyWithWhereWithoutResourceInput = {
    where: resource_roleScalarWhereInput
    data: XOR<resource_roleUpdateManyMutationInput, resource_roleUncheckedUpdateManyWithoutResourceInput>
  }

  export type resource_roleScalarWhereInput = {
    AND?: resource_roleScalarWhereInput | resource_roleScalarWhereInput[]
    OR?: resource_roleScalarWhereInput[]
    NOT?: resource_roleScalarWhereInput | resource_roleScalarWhereInput[]
    role_id?: IntFilter<"resource_role"> | number
    resources_id?: IntFilter<"resource_role"> | number
  }

  export type resourceCreateWithoutResource_roleInput = {
    name: string
    description: string
    link: string
    request?: requestCreateNestedManyWithoutResourceInput
  }

  export type resourceUncheckedCreateWithoutResource_roleInput = {
    id?: number
    name: string
    description: string
    link: string
    request?: requestUncheckedCreateNestedManyWithoutResourceInput
  }

  export type resourceCreateOrConnectWithoutResource_roleInput = {
    where: resourceWhereUniqueInput
    create: XOR<resourceCreateWithoutResource_roleInput, resourceUncheckedCreateWithoutResource_roleInput>
  }

  export type roleCreateWithoutResource_roleInput = {
    name: string
    description: string
    request?: requestCreateNestedManyWithoutRoleInput
    access: accessCreateNestedOneWithoutRoleInput
    user?: userCreateNestedManyWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutResource_roleInput = {
    id?: number
    name: string
    description: string
    access_id: number
    request?: requestUncheckedCreateNestedManyWithoutRoleInput
    user?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutResource_roleInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutResource_roleInput, roleUncheckedCreateWithoutResource_roleInput>
  }

  export type resourceUpsertWithoutResource_roleInput = {
    update: XOR<resourceUpdateWithoutResource_roleInput, resourceUncheckedUpdateWithoutResource_roleInput>
    create: XOR<resourceCreateWithoutResource_roleInput, resourceUncheckedCreateWithoutResource_roleInput>
    where?: resourceWhereInput
  }

  export type resourceUpdateToOneWithWhereWithoutResource_roleInput = {
    where?: resourceWhereInput
    data: XOR<resourceUpdateWithoutResource_roleInput, resourceUncheckedUpdateWithoutResource_roleInput>
  }

  export type resourceUpdateWithoutResource_roleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    request?: requestUpdateManyWithoutResourceNestedInput
  }

  export type resourceUncheckedUpdateWithoutResource_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    request?: requestUncheckedUpdateManyWithoutResourceNestedInput
  }

  export type roleUpsertWithoutResource_roleInput = {
    update: XOR<roleUpdateWithoutResource_roleInput, roleUncheckedUpdateWithoutResource_roleInput>
    create: XOR<roleCreateWithoutResource_roleInput, roleUncheckedCreateWithoutResource_roleInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutResource_roleInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutResource_roleInput, roleUncheckedUpdateWithoutResource_roleInput>
  }

  export type roleUpdateWithoutResource_roleInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    request?: requestUpdateManyWithoutRoleNestedInput
    access?: accessUpdateOneRequiredWithoutRoleNestedInput
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutResource_roleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    access_id?: IntFieldUpdateOperationsInput | number
    request?: requestUncheckedUpdateManyWithoutRoleNestedInput
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type requestCreateWithoutRoleInput = {
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource: resourceCreateNestedOneWithoutRequestInput
    user_request?: user_requestCreateNestedManyWithoutRequestInput
  }

  export type requestUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource_id: number
    user_request?: user_requestUncheckedCreateNestedManyWithoutRequestInput
  }

  export type requestCreateOrConnectWithoutRoleInput = {
    where: requestWhereUniqueInput
    create: XOR<requestCreateWithoutRoleInput, requestUncheckedCreateWithoutRoleInput>
  }

  export type requestCreateManyRoleInputEnvelope = {
    data: requestCreateManyRoleInput | requestCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type resource_roleCreateWithoutRoleInput = {
    resource: resourceCreateNestedOneWithoutResource_roleInput
  }

  export type resource_roleUncheckedCreateWithoutRoleInput = {
    resources_id: number
  }

  export type resource_roleCreateOrConnectWithoutRoleInput = {
    where: resource_roleWhereUniqueInput
    create: XOR<resource_roleCreateWithoutRoleInput, resource_roleUncheckedCreateWithoutRoleInput>
  }

  export type resource_roleCreateManyRoleInputEnvelope = {
    data: resource_roleCreateManyRoleInput | resource_roleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type accessCreateWithoutRoleInput = {
    level: number
    description?: string | null
  }

  export type accessUncheckedCreateWithoutRoleInput = {
    id?: number
    level: number
    description?: string | null
  }

  export type accessCreateOrConnectWithoutRoleInput = {
    where: accessWhereUniqueInput
    create: XOR<accessCreateWithoutRoleInput, accessUncheckedCreateWithoutRoleInput>
  }

  export type userCreateWithoutRoleInput = {
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    log?: logCreateNestedManyWithoutUserInput
    user_request?: user_requestCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoleInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    log?: logUncheckedCreateNestedManyWithoutUserInput
    user_request?: user_requestUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userCreateManyRoleInputEnvelope = {
    data: userCreateManyRoleInput | userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type requestUpsertWithWhereUniqueWithoutRoleInput = {
    where: requestWhereUniqueInput
    update: XOR<requestUpdateWithoutRoleInput, requestUncheckedUpdateWithoutRoleInput>
    create: XOR<requestCreateWithoutRoleInput, requestUncheckedCreateWithoutRoleInput>
  }

  export type requestUpdateWithWhereUniqueWithoutRoleInput = {
    where: requestWhereUniqueInput
    data: XOR<requestUpdateWithoutRoleInput, requestUncheckedUpdateWithoutRoleInput>
  }

  export type requestUpdateManyWithWhereWithoutRoleInput = {
    where: requestScalarWhereInput
    data: XOR<requestUpdateManyMutationInput, requestUncheckedUpdateManyWithoutRoleInput>
  }

  export type resource_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: resource_roleWhereUniqueInput
    update: XOR<resource_roleUpdateWithoutRoleInput, resource_roleUncheckedUpdateWithoutRoleInput>
    create: XOR<resource_roleCreateWithoutRoleInput, resource_roleUncheckedCreateWithoutRoleInput>
  }

  export type resource_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: resource_roleWhereUniqueInput
    data: XOR<resource_roleUpdateWithoutRoleInput, resource_roleUncheckedUpdateWithoutRoleInput>
  }

  export type resource_roleUpdateManyWithWhereWithoutRoleInput = {
    where: resource_roleScalarWhereInput
    data: XOR<resource_roleUpdateManyMutationInput, resource_roleUncheckedUpdateManyWithoutRoleInput>
  }

  export type accessUpsertWithoutRoleInput = {
    update: XOR<accessUpdateWithoutRoleInput, accessUncheckedUpdateWithoutRoleInput>
    create: XOR<accessCreateWithoutRoleInput, accessUncheckedCreateWithoutRoleInput>
    where?: accessWhereInput
  }

  export type accessUpdateToOneWithWhereWithoutRoleInput = {
    where?: accessWhereInput
    data: XOR<accessUpdateWithoutRoleInput, accessUncheckedUpdateWithoutRoleInput>
  }

  export type accessUpdateWithoutRoleInput = {
    level?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accessUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userUpsertWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithWhereWithoutRoleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutRoleInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: IntFilter<"user"> | number
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    name?: StringNullableFilter<"user"> | string | null
    surname?: StringNullableFilter<"user"> | string | null
    middle_name?: StringNullableFilter<"user"> | string | null
    subdivision?: StringNullableFilter<"user"> | string | null
    rang?: StringNullableFilter<"user"> | string | null
    service_number?: IntNullableFilter<"user"> | number | null
    role_id?: IntNullableFilter<"user"> | number | null
  }

  export type logCreateWithoutUserInput = {
    action: string
    action_time: Date | string
  }

  export type logUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    action_time: Date | string
  }

  export type logCreateOrConnectWithoutUserInput = {
    where: logWhereUniqueInput
    create: XOR<logCreateWithoutUserInput, logUncheckedCreateWithoutUserInput>
  }

  export type logCreateManyUserInputEnvelope = {
    data: logCreateManyUserInput | logCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type roleCreateWithoutUserInput = {
    name: string
    description: string
    request?: requestCreateNestedManyWithoutRoleInput
    resource_role?: resource_roleCreateNestedManyWithoutRoleInput
    access: accessCreateNestedOneWithoutRoleInput
  }

  export type roleUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    access_id: number
    request?: requestUncheckedCreateNestedManyWithoutRoleInput
    resource_role?: resource_roleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type roleCreateOrConnectWithoutUserInput = {
    where: roleWhereUniqueInput
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
  }

  export type user_requestCreateWithoutUserInput = {
    request: requestCreateNestedOneWithoutUser_requestInput
  }

  export type user_requestUncheckedCreateWithoutUserInput = {
    request_id: number
  }

  export type user_requestCreateOrConnectWithoutUserInput = {
    where: user_requestWhereUniqueInput
    create: XOR<user_requestCreateWithoutUserInput, user_requestUncheckedCreateWithoutUserInput>
  }

  export type user_requestCreateManyUserInputEnvelope = {
    data: user_requestCreateManyUserInput | user_requestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type logUpsertWithWhereUniqueWithoutUserInput = {
    where: logWhereUniqueInput
    update: XOR<logUpdateWithoutUserInput, logUncheckedUpdateWithoutUserInput>
    create: XOR<logCreateWithoutUserInput, logUncheckedCreateWithoutUserInput>
  }

  export type logUpdateWithWhereUniqueWithoutUserInput = {
    where: logWhereUniqueInput
    data: XOR<logUpdateWithoutUserInput, logUncheckedUpdateWithoutUserInput>
  }

  export type logUpdateManyWithWhereWithoutUserInput = {
    where: logScalarWhereInput
    data: XOR<logUpdateManyMutationInput, logUncheckedUpdateManyWithoutUserInput>
  }

  export type logScalarWhereInput = {
    AND?: logScalarWhereInput | logScalarWhereInput[]
    OR?: logScalarWhereInput[]
    NOT?: logScalarWhereInput | logScalarWhereInput[]
    id?: IntFilter<"log"> | number
    account_id?: IntFilter<"log"> | number
    action?: StringFilter<"log"> | string
    action_time?: DateTimeFilter<"log"> | Date | string
  }

  export type roleUpsertWithoutUserInput = {
    update: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
    where?: roleWhereInput
  }

  export type roleUpdateToOneWithWhereWithoutUserInput = {
    where?: roleWhereInput
    data: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>
  }

  export type roleUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    request?: requestUpdateManyWithoutRoleNestedInput
    resource_role?: resource_roleUpdateManyWithoutRoleNestedInput
    access?: accessUpdateOneRequiredWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    access_id?: IntFieldUpdateOperationsInput | number
    request?: requestUncheckedUpdateManyWithoutRoleNestedInput
    resource_role?: resource_roleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type user_requestUpsertWithWhereUniqueWithoutUserInput = {
    where: user_requestWhereUniqueInput
    update: XOR<user_requestUpdateWithoutUserInput, user_requestUncheckedUpdateWithoutUserInput>
    create: XOR<user_requestCreateWithoutUserInput, user_requestUncheckedCreateWithoutUserInput>
  }

  export type user_requestUpdateWithWhereUniqueWithoutUserInput = {
    where: user_requestWhereUniqueInput
    data: XOR<user_requestUpdateWithoutUserInput, user_requestUncheckedUpdateWithoutUserInput>
  }

  export type user_requestUpdateManyWithWhereWithoutUserInput = {
    where: user_requestScalarWhereInput
    data: XOR<user_requestUpdateManyMutationInput, user_requestUncheckedUpdateManyWithoutUserInput>
  }

  export type requestCreateWithoutUser_requestInput = {
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource: resourceCreateNestedOneWithoutRequestInput
    role: roleCreateNestedOneWithoutRequestInput
  }

  export type requestUncheckedCreateWithoutUser_requestInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource_id: number
    role_id: number
  }

  export type requestCreateOrConnectWithoutUser_requestInput = {
    where: requestWhereUniqueInput
    create: XOR<requestCreateWithoutUser_requestInput, requestUncheckedCreateWithoutUser_requestInput>
  }

  export type userCreateWithoutUser_requestInput = {
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    log?: logCreateNestedManyWithoutUserInput
    role?: roleCreateNestedOneWithoutUserInput
  }

  export type userUncheckedCreateWithoutUser_requestInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
    role_id?: number | null
    log?: logUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUser_requestInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUser_requestInput, userUncheckedCreateWithoutUser_requestInput>
  }

  export type requestUpsertWithoutUser_requestInput = {
    update: XOR<requestUpdateWithoutUser_requestInput, requestUncheckedUpdateWithoutUser_requestInput>
    create: XOR<requestCreateWithoutUser_requestInput, requestUncheckedCreateWithoutUser_requestInput>
    where?: requestWhereInput
  }

  export type requestUpdateToOneWithWhereWithoutUser_requestInput = {
    where?: requestWhereInput
    data: XOR<requestUpdateWithoutUser_requestInput, requestUncheckedUpdateWithoutUser_requestInput>
  }

  export type requestUpdateWithoutUser_requestInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: resourceUpdateOneRequiredWithoutRequestNestedInput
    role?: roleUpdateOneRequiredWithoutRequestNestedInput
  }

  export type requestUncheckedUpdateWithoutUser_requestInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type userUpsertWithoutUser_requestInput = {
    update: XOR<userUpdateWithoutUser_requestInput, userUncheckedUpdateWithoutUser_requestInput>
    create: XOR<userCreateWithoutUser_requestInput, userUncheckedCreateWithoutUser_requestInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUser_requestInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUser_requestInput, userUncheckedUpdateWithoutUser_requestInput>
  }

  export type userUpdateWithoutUser_requestInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    log?: logUpdateManyWithoutUserNestedInput
    role?: roleUpdateOneWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUser_requestInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    log?: logUncheckedUpdateManyWithoutUserNestedInput
  }

  export type roleCreateManyAccessInput = {
    id?: number
    name: string
    description: string
  }

  export type roleUpdateWithoutAccessInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    request?: requestUpdateManyWithoutRoleNestedInput
    resource_role?: resource_roleUpdateManyWithoutRoleNestedInput
    user?: userUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateWithoutAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    request?: requestUncheckedUpdateManyWithoutRoleNestedInput
    resource_role?: resource_roleUncheckedUpdateManyWithoutRoleNestedInput
    user?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type roleUncheckedUpdateManyWithoutAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type user_requestCreateManyRequestInput = {
    user_id: number
  }

  export type user_requestUpdateWithoutRequestInput = {
    user?: userUpdateOneRequiredWithoutUser_requestNestedInput
  }

  export type user_requestUncheckedUpdateWithoutRequestInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_requestUncheckedUpdateManyWithoutRequestInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type requestCreateManyResourceInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    role_id: number
  }

  export type resource_roleCreateManyResourceInput = {
    role_id: number
  }

  export type requestUpdateWithoutResourceInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: roleUpdateOneRequiredWithoutRequestNestedInput
    user_request?: user_requestUpdateManyWithoutRequestNestedInput
  }

  export type requestUncheckedUpdateWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    user_request?: user_requestUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type requestUncheckedUpdateManyWithoutResourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type resource_roleUpdateWithoutResourceInput = {
    role?: roleUpdateOneRequiredWithoutResource_roleNestedInput
  }

  export type resource_roleUncheckedUpdateWithoutResourceInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type resource_roleUncheckedUpdateManyWithoutResourceInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type requestCreateManyRoleInput = {
    id?: number
    name: string
    surname: string
    middle_name: string
    email: string
    status: string
    create_date: Date | string
    complete_date: Date | string
    resource_id: number
  }

  export type resource_roleCreateManyRoleInput = {
    resources_id: number
  }

  export type userCreateManyRoleInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    surname?: string | null
    middle_name?: string | null
    subdivision?: string | null
    rang?: string | null
    service_number?: number | null
  }

  export type requestUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource?: resourceUpdateOneRequiredWithoutRequestNestedInput
    user_request?: user_requestUpdateManyWithoutRequestNestedInput
  }

  export type requestUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource_id?: IntFieldUpdateOperationsInput | number
    user_request?: user_requestUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type requestUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    middle_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    complete_date?: DateTimeFieldUpdateOperationsInput | Date | string
    resource_id?: IntFieldUpdateOperationsInput | number
  }

  export type resource_roleUpdateWithoutRoleInput = {
    resource?: resourceUpdateOneRequiredWithoutResource_roleNestedInput
  }

  export type resource_roleUncheckedUpdateWithoutRoleInput = {
    resources_id?: IntFieldUpdateOperationsInput | number
  }

  export type resource_roleUncheckedUpdateManyWithoutRoleInput = {
    resources_id?: IntFieldUpdateOperationsInput | number
  }

  export type userUpdateWithoutRoleInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    log?: logUpdateManyWithoutUserNestedInput
    user_request?: user_requestUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
    log?: logUncheckedUpdateManyWithoutUserNestedInput
    user_request?: user_requestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    subdivision?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableStringFieldUpdateOperationsInput | string | null
    service_number?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type logCreateManyUserInput = {
    id?: number
    action: string
    action_time: Date | string
  }

  export type user_requestCreateManyUserInput = {
    request_id: number
  }

  export type logUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    action_time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_requestUpdateWithoutUserInput = {
    request?: requestUpdateOneRequiredWithoutUser_requestNestedInput
  }

  export type user_requestUncheckedUpdateWithoutUserInput = {
    request_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_requestUncheckedUpdateManyWithoutUserInput = {
    request_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}