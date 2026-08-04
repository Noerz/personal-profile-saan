
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Article
 * 
 */
export type Article = $Result.DefaultSelection<Prisma.$ArticlePayload>
/**
 * Model FeaturedProgram
 * 
 */
export type FeaturedProgram = $Result.DefaultSelection<Prisma.$FeaturedProgramPayload>
/**
 * Model ProgramGallery
 * 
 */
export type ProgramGallery = $Result.DefaultSelection<Prisma.$ProgramGalleryPayload>
/**
 * Model AspirationCategory
 * 
 */
export type AspirationCategory = $Result.DefaultSelection<Prisma.$AspirationCategoryPayload>
/**
 * Model Aspiration
 * 
 */
export type Aspiration = $Result.DefaultSelection<Prisma.$AspirationPayload>
/**
 * Model SeoMetadata
 * 
 */
export type SeoMetadata = $Result.DefaultSelection<Prisma.$SeoMetadataPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ArticleStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  SCHEDULED: 'SCHEDULED'
};

export type ArticleStatus = (typeof ArticleStatus)[keyof typeof ArticleStatus]


export const ProgramStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type ProgramStatus = (typeof ProgramStatus)[keyof typeof ProgramStatus]


export const AspirationStatus: {
  PENDING: 'PENDING',
  READ: 'READ',
  REPLIED: 'REPLIED',
  ARCHIVED: 'ARCHIVED'
};

export type AspirationStatus = (typeof AspirationStatus)[keyof typeof AspirationStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ArticleStatus = $Enums.ArticleStatus

export const ArticleStatus: typeof $Enums.ArticleStatus

export type ProgramStatus = $Enums.ProgramStatus

export const ProgramStatus: typeof $Enums.ProgramStatus

export type AspirationStatus = $Enums.AspirationStatus

export const AspirationStatus: typeof $Enums.AspirationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.article`: Exposes CRUD operations for the **Article** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.article.findMany()
    * ```
    */
  get article(): Prisma.ArticleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featuredProgram`: Exposes CRUD operations for the **FeaturedProgram** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeaturedPrograms
    * const featuredPrograms = await prisma.featuredProgram.findMany()
    * ```
    */
  get featuredProgram(): Prisma.FeaturedProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programGallery`: Exposes CRUD operations for the **ProgramGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramGalleries
    * const programGalleries = await prisma.programGallery.findMany()
    * ```
    */
  get programGallery(): Prisma.ProgramGalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aspirationCategory`: Exposes CRUD operations for the **AspirationCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AspirationCategories
    * const aspirationCategories = await prisma.aspirationCategory.findMany()
    * ```
    */
  get aspirationCategory(): Prisma.AspirationCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aspiration`: Exposes CRUD operations for the **Aspiration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aspirations
    * const aspirations = await prisma.aspiration.findMany()
    * ```
    */
  get aspiration(): Prisma.AspirationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seoMetadata`: Exposes CRUD operations for the **SeoMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeoMetadata
    * const seoMetadata = await prisma.seoMetadata.findMany()
    * ```
    */
  get seoMetadata(): Prisma.SeoMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Admin: 'Admin',
    RefreshToken: 'RefreshToken',
    Profile: 'Profile',
    Category: 'Category',
    Article: 'Article',
    FeaturedProgram: 'FeaturedProgram',
    ProgramGallery: 'ProgramGallery',
    AspirationCategory: 'AspirationCategory',
    Aspiration: 'Aspiration',
    SeoMetadata: 'SeoMetadata',
    ActivityLog: 'ActivityLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "refreshToken" | "profile" | "category" | "article" | "featuredProgram" | "programGallery" | "aspirationCategory" | "aspiration" | "seoMetadata" | "activityLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Article: {
        payload: Prisma.$ArticlePayload<ExtArgs>
        fields: Prisma.ArticleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findFirst: {
            args: Prisma.ArticleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          findMany: {
            args: Prisma.ArticleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>[]
          }
          create: {
            args: Prisma.ArticleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          createMany: {
            args: Prisma.ArticleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArticleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          update: {
            args: Prisma.ArticleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          deleteMany: {
            args: Prisma.ArticleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArticleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlePayload>
          }
          aggregate: {
            args: Prisma.ArticleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticle>
          }
          groupBy: {
            args: Prisma.ArticleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleCountAggregateOutputType> | number
          }
        }
      }
      FeaturedProgram: {
        payload: Prisma.$FeaturedProgramPayload<ExtArgs>
        fields: Prisma.FeaturedProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeaturedProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeaturedProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>
          }
          findFirst: {
            args: Prisma.FeaturedProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeaturedProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>
          }
          findMany: {
            args: Prisma.FeaturedProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>[]
          }
          create: {
            args: Prisma.FeaturedProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>
          }
          createMany: {
            args: Prisma.FeaturedProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeaturedProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>
          }
          update: {
            args: Prisma.FeaturedProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>
          }
          deleteMany: {
            args: Prisma.FeaturedProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeaturedProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeaturedProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeaturedProgramPayload>
          }
          aggregate: {
            args: Prisma.FeaturedProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeaturedProgram>
          }
          groupBy: {
            args: Prisma.FeaturedProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeaturedProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeaturedProgramCountArgs<ExtArgs>
            result: $Utils.Optional<FeaturedProgramCountAggregateOutputType> | number
          }
        }
      }
      ProgramGallery: {
        payload: Prisma.$ProgramGalleryPayload<ExtArgs>
        fields: Prisma.ProgramGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramGalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramGalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>
          }
          findFirst: {
            args: Prisma.ProgramGalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramGalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>
          }
          findMany: {
            args: Prisma.ProgramGalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>[]
          }
          create: {
            args: Prisma.ProgramGalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>
          }
          createMany: {
            args: Prisma.ProgramGalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramGalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>
          }
          update: {
            args: Prisma.ProgramGalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>
          }
          deleteMany: {
            args: Prisma.ProgramGalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramGalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramGalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramGalleryPayload>
          }
          aggregate: {
            args: Prisma.ProgramGalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramGallery>
          }
          groupBy: {
            args: Prisma.ProgramGalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramGalleryCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramGalleryCountAggregateOutputType> | number
          }
        }
      }
      AspirationCategory: {
        payload: Prisma.$AspirationCategoryPayload<ExtArgs>
        fields: Prisma.AspirationCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspirationCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspirationCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>
          }
          findFirst: {
            args: Prisma.AspirationCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspirationCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>
          }
          findMany: {
            args: Prisma.AspirationCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>[]
          }
          create: {
            args: Prisma.AspirationCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>
          }
          createMany: {
            args: Prisma.AspirationCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AspirationCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>
          }
          update: {
            args: Prisma.AspirationCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>
          }
          deleteMany: {
            args: Prisma.AspirationCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspirationCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspirationCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationCategoryPayload>
          }
          aggregate: {
            args: Prisma.AspirationCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspirationCategory>
          }
          groupBy: {
            args: Prisma.AspirationCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspirationCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspirationCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<AspirationCategoryCountAggregateOutputType> | number
          }
        }
      }
      Aspiration: {
        payload: Prisma.$AspirationPayload<ExtArgs>
        fields: Prisma.AspirationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AspirationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AspirationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>
          }
          findFirst: {
            args: Prisma.AspirationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AspirationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>
          }
          findMany: {
            args: Prisma.AspirationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>[]
          }
          create: {
            args: Prisma.AspirationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>
          }
          createMany: {
            args: Prisma.AspirationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AspirationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>
          }
          update: {
            args: Prisma.AspirationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>
          }
          deleteMany: {
            args: Prisma.AspirationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AspirationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AspirationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AspirationPayload>
          }
          aggregate: {
            args: Prisma.AspirationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAspiration>
          }
          groupBy: {
            args: Prisma.AspirationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AspirationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AspirationCountArgs<ExtArgs>
            result: $Utils.Optional<AspirationCountAggregateOutputType> | number
          }
        }
      }
      SeoMetadata: {
        payload: Prisma.$SeoMetadataPayload<ExtArgs>
        fields: Prisma.SeoMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeoMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeoMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>
          }
          findFirst: {
            args: Prisma.SeoMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeoMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>
          }
          findMany: {
            args: Prisma.SeoMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>[]
          }
          create: {
            args: Prisma.SeoMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>
          }
          createMany: {
            args: Prisma.SeoMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeoMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>
          }
          update: {
            args: Prisma.SeoMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>
          }
          deleteMany: {
            args: Prisma.SeoMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeoMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeoMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeoMetadataPayload>
          }
          aggregate: {
            args: Prisma.SeoMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeoMetadata>
          }
          groupBy: {
            args: Prisma.SeoMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeoMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeoMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<SeoMetadataCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    refreshToken?: RefreshTokenOmit
    profile?: ProfileOmit
    category?: CategoryOmit
    article?: ArticleOmit
    featuredProgram?: FeaturedProgramOmit
    programGallery?: ProgramGalleryOmit
    aspirationCategory?: AspirationCategoryOmit
    aspiration?: AspirationOmit
    seoMetadata?: SeoMetadataOmit
    activityLog?: ActivityLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    articles: number
    refreshTokens: number
    activityLogs: number
    repliedAspirations: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | AdminCountOutputTypeCountArticlesArgs
    refreshTokens?: boolean | AdminCountOutputTypeCountRefreshTokensArgs
    activityLogs?: boolean | AdminCountOutputTypeCountActivityLogsArgs
    repliedAspirations?: boolean | AdminCountOutputTypeCountRepliedAspirationsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountRepliedAspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspirationWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    articles: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | CategoryCountOutputTypeCountArticlesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
  }


  /**
   * Count Type FeaturedProgramCountOutputType
   */

  export type FeaturedProgramCountOutputType = {
    galleries: number
  }

  export type FeaturedProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleries?: boolean | FeaturedProgramCountOutputTypeCountGalleriesArgs
  }

  // Custom InputTypes
  /**
   * FeaturedProgramCountOutputType without action
   */
  export type FeaturedProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgramCountOutputType
     */
    select?: FeaturedProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FeaturedProgramCountOutputType without action
   */
  export type FeaturedProgramCountOutputTypeCountGalleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramGalleryWhereInput
  }


  /**
   * Count Type AspirationCategoryCountOutputType
   */

  export type AspirationCategoryCountOutputType = {
    aspirations: number
  }

  export type AspirationCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aspirations?: boolean | AspirationCategoryCountOutputTypeCountAspirationsArgs
  }

  // Custom InputTypes
  /**
   * AspirationCategoryCountOutputType without action
   */
  export type AspirationCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategoryCountOutputType
     */
    select?: AspirationCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AspirationCategoryCountOutputType without action
   */
  export type AspirationCategoryCountOutputTypeCountAspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspirationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatar: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    avatar: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    articles?: boolean | Admin$articlesArgs<ExtArgs>
    refreshTokens?: boolean | Admin$refreshTokensArgs<ExtArgs>
    activityLogs?: boolean | Admin$activityLogsArgs<ExtArgs>
    repliedAspirations?: boolean | Admin$repliedAspirationsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatar" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Admin$articlesArgs<ExtArgs>
    refreshTokens?: boolean | Admin$refreshTokensArgs<ExtArgs>
    activityLogs?: boolean | Admin$activityLogsArgs<ExtArgs>
    repliedAspirations?: boolean | Admin$repliedAspirationsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      repliedAspirations: Prisma.$AspirationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      avatar: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Admin$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends Admin$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, Admin$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activityLogs<T extends Admin$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repliedAspirations<T extends Admin$repliedAspirationsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$repliedAspirationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly avatar: FieldRef<"Admin", 'String'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly deletedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.articles
   */
  export type Admin$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Admin.refreshTokens
   */
  export type Admin$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Admin.activityLogs
   */
  export type Admin$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Admin.repliedAspirations
   */
  export type Admin$repliedAspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    where?: AspirationWhereInput
    orderBy?: AspirationOrderByWithRelationInput | AspirationOrderByWithRelationInput[]
    cursor?: AspirationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspirationScalarFieldEnum | AspirationScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    tokenHash: string | null
    isRevoked: boolean | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    tokenHash: string | null
    isRevoked: boolean | null
    expiresAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    adminId: number
    tokenHash: number
    isRevoked: number
    expiresAt: number
    ipAddress: number
    userAgent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    adminId?: true
    tokenHash?: true
    isRevoked?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    adminId?: true
    tokenHash?: true
    isRevoked?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    adminId?: true
    tokenHash?: true
    isRevoked?: true
    expiresAt?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    adminId: string
    tokenHash: string
    isRevoked: boolean
    expiresAt: Date
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    tokenHash?: boolean
    isRevoked?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    adminId?: boolean
    tokenHash?: boolean
    isRevoked?: boolean
    expiresAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "tokenHash" | "isRevoked" | "expiresAt" | "ipAddress" | "userAgent" | "createdAt" | "updatedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      tokenHash: string
      isRevoked: boolean
      expiresAt: Date
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly adminId: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly isRevoked: FieldRef<"RefreshToken", 'Boolean'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly ipAddress: FieldRef<"RefreshToken", 'String'>
    readonly userAgent: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    headline: string | null
    bio: string | null
    avatar: string | null
    phone: string | null
    email: string | null
    address: string | null
    linkedin: string | null
    github: string | null
    twitter: string | null
    instagram: string | null
    website: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    headline: string | null
    bio: string | null
    avatar: string | null
    phone: string | null
    email: string | null
    address: string | null
    linkedin: string | null
    github: string | null
    twitter: string | null
    instagram: string | null
    website: string | null
    resumeUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    fullName: number
    headline: number
    bio: number
    avatar: number
    phone: number
    email: number
    address: number
    linkedin: number
    github: number
    twitter: number
    instagram: number
    website: number
    resumeUrl: number
    skills: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    fullName?: true
    headline?: true
    bio?: true
    avatar?: true
    phone?: true
    email?: true
    address?: true
    linkedin?: true
    github?: true
    twitter?: true
    instagram?: true
    website?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    fullName?: true
    headline?: true
    bio?: true
    avatar?: true
    phone?: true
    email?: true
    address?: true
    linkedin?: true
    github?: true
    twitter?: true
    instagram?: true
    website?: true
    resumeUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    fullName?: true
    headline?: true
    bio?: true
    avatar?: true
    phone?: true
    email?: true
    address?: true
    linkedin?: true
    github?: true
    twitter?: true
    instagram?: true
    website?: true
    resumeUrl?: true
    skills?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    fullName: string
    headline: string | null
    bio: string | null
    avatar: string | null
    phone: string | null
    email: string | null
    address: string | null
    linkedin: string | null
    github: string | null
    twitter: string | null
    instagram: string | null
    website: string | null
    resumeUrl: string | null
    skills: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    headline?: boolean
    bio?: boolean
    avatar?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    linkedin?: boolean
    github?: boolean
    twitter?: boolean
    instagram?: boolean
    website?: boolean
    resumeUrl?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>



  export type ProfileSelectScalar = {
    id?: boolean
    fullName?: boolean
    headline?: boolean
    bio?: boolean
    avatar?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    linkedin?: boolean
    github?: boolean
    twitter?: boolean
    instagram?: boolean
    website?: boolean
    resumeUrl?: boolean
    skills?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "headline" | "bio" | "avatar" | "phone" | "email" | "address" | "linkedin" | "github" | "twitter" | "instagram" | "website" | "resumeUrl" | "skills" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      headline: string | null
      bio: string | null
      avatar: string | null
      phone: string | null
      email: string | null
      address: string | null
      linkedin: string | null
      github: string | null
      twitter: string | null
      instagram: string | null
      website: string | null
      resumeUrl: string | null
      skills: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly headline: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly avatar: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly linkedin: FieldRef<"Profile", 'String'>
    readonly github: FieldRef<"Profile", 'String'>
    readonly twitter: FieldRef<"Profile", 'String'>
    readonly instagram: FieldRef<"Profile", 'String'>
    readonly website: FieldRef<"Profile", 'String'>
    readonly resumeUrl: FieldRef<"Profile", 'String'>
    readonly skills: FieldRef<"Profile", 'Json'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    articles?: boolean | Category$articlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    articles?: boolean | Category$articlesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      articles: Prisma.$ArticlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    articles<T extends Category$articlesArgs<ExtArgs> = {}>(args?: Subset<T, Category$articlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.articles
   */
  export type Category$articlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    cursor?: ArticleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Article
   */

  export type AggregateArticle = {
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  export type ArticleAvgAggregateOutputType = {
    viewCount: number | null
    readingTime: number | null
  }

  export type ArticleSumAggregateOutputType = {
    viewCount: number | null
    readingTime: number | null
  }

  export type ArticleMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    thumbnail: string | null
    status: $Enums.ArticleStatus | null
    isFeatured: boolean | null
    publishedAt: Date | null
    scheduledAt: Date | null
    viewCount: number | null
    readingTime: number | null
    authorId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    content: string | null
    excerpt: string | null
    thumbnail: string | null
    status: $Enums.ArticleStatus | null
    isFeatured: boolean | null
    publishedAt: Date | null
    scheduledAt: Date | null
    viewCount: number | null
    readingTime: number | null
    authorId: string | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ArticleCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    excerpt: number
    thumbnail: number
    status: number
    isFeatured: number
    publishedAt: number
    scheduledAt: number
    viewCount: number
    readingTime: number
    authorId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ArticleAvgAggregateInputType = {
    viewCount?: true
    readingTime?: true
  }

  export type ArticleSumAggregateInputType = {
    viewCount?: true
    readingTime?: true
  }

  export type ArticleMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    thumbnail?: true
    status?: true
    isFeatured?: true
    publishedAt?: true
    scheduledAt?: true
    viewCount?: true
    readingTime?: true
    authorId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ArticleMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    thumbnail?: true
    status?: true
    isFeatured?: true
    publishedAt?: true
    scheduledAt?: true
    viewCount?: true
    readingTime?: true
    authorId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ArticleCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    excerpt?: true
    thumbnail?: true
    status?: true
    isFeatured?: true
    publishedAt?: true
    scheduledAt?: true
    viewCount?: true
    readingTime?: true
    authorId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ArticleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Article to aggregate.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleMaxAggregateInputType
  }

  export type GetArticleAggregateType<T extends ArticleAggregateArgs> = {
        [P in keyof T & keyof AggregateArticle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticle[P]>
      : GetScalarType<T[P], AggregateArticle[P]>
  }




  export type ArticleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleWhereInput
    orderBy?: ArticleOrderByWithAggregationInput | ArticleOrderByWithAggregationInput[]
    by: ArticleScalarFieldEnum[] | ArticleScalarFieldEnum
    having?: ArticleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleCountAggregateInputType | true
    _avg?: ArticleAvgAggregateInputType
    _sum?: ArticleSumAggregateInputType
    _min?: ArticleMinAggregateInputType
    _max?: ArticleMaxAggregateInputType
  }

  export type ArticleGroupByOutputType = {
    id: string
    title: string
    slug: string
    content: string
    excerpt: string | null
    thumbnail: string | null
    status: $Enums.ArticleStatus
    isFeatured: boolean
    publishedAt: Date | null
    scheduledAt: Date | null
    viewCount: number
    readingTime: number
    authorId: string
    categoryId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ArticleCountAggregateOutputType | null
    _avg: ArticleAvgAggregateOutputType | null
    _sum: ArticleSumAggregateOutputType | null
    _min: ArticleMinAggregateOutputType | null
    _max: ArticleMaxAggregateOutputType | null
  }

  type GetArticleGroupByPayload<T extends ArticleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleGroupByOutputType[P]>
        }
      >
    >


  export type ArticleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    thumbnail?: boolean
    status?: boolean
    isFeatured?: boolean
    publishedAt?: boolean
    scheduledAt?: boolean
    viewCount?: boolean
    readingTime?: boolean
    authorId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    author?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | Article$categoryArgs<ExtArgs>
    seoMetadata?: boolean | Article$seoMetadataArgs<ExtArgs>
  }, ExtArgs["result"]["article"]>



  export type ArticleSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    excerpt?: boolean
    thumbnail?: boolean
    status?: boolean
    isFeatured?: boolean
    publishedAt?: boolean
    scheduledAt?: boolean
    viewCount?: boolean
    readingTime?: boolean
    authorId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ArticleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "content" | "excerpt" | "thumbnail" | "status" | "isFeatured" | "publishedAt" | "scheduledAt" | "viewCount" | "readingTime" | "authorId" | "categoryId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["article"]>
  export type ArticleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | AdminDefaultArgs<ExtArgs>
    category?: boolean | Article$categoryArgs<ExtArgs>
    seoMetadata?: boolean | Article$seoMetadataArgs<ExtArgs>
  }

  export type $ArticlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Article"
    objects: {
      author: Prisma.$AdminPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs> | null
      seoMetadata: Prisma.$SeoMetadataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      content: string
      excerpt: string | null
      thumbnail: string | null
      status: $Enums.ArticleStatus
      isFeatured: boolean
      publishedAt: Date | null
      scheduledAt: Date | null
      viewCount: number
      readingTime: number
      authorId: string
      categoryId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["article"]>
    composites: {}
  }

  type ArticleGetPayload<S extends boolean | null | undefined | ArticleDefaultArgs> = $Result.GetResult<Prisma.$ArticlePayload, S>

  type ArticleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleCountAggregateInputType | true
    }

  export interface ArticleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Article'], meta: { name: 'Article' } }
    /**
     * Find zero or one Article that matches the filter.
     * @param {ArticleFindUniqueArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleFindUniqueArgs>(args: SelectSubset<T, ArticleFindUniqueArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Article that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleFindUniqueOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleFindFirstArgs>(args?: SelectSubset<T, ArticleFindFirstArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Article that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindFirstOrThrowArgs} args - Arguments to find a Article
     * @example
     * // Get one Article
     * const article = await prisma.article.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.article.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.article.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articleWithIdOnly = await prisma.article.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticleFindManyArgs>(args?: SelectSubset<T, ArticleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Article.
     * @param {ArticleCreateArgs} args - Arguments to create a Article.
     * @example
     * // Create one Article
     * const Article = await prisma.article.create({
     *   data: {
     *     // ... data to create a Article
     *   }
     * })
     * 
     */
    create<T extends ArticleCreateArgs>(args: SelectSubset<T, ArticleCreateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticleCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const article = await prisma.article.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleCreateManyArgs>(args?: SelectSubset<T, ArticleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Article.
     * @param {ArticleDeleteArgs} args - Arguments to delete one Article.
     * @example
     * // Delete one Article
     * const Article = await prisma.article.delete({
     *   where: {
     *     // ... filter to delete one Article
     *   }
     * })
     * 
     */
    delete<T extends ArticleDeleteArgs>(args: SelectSubset<T, ArticleDeleteArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Article.
     * @param {ArticleUpdateArgs} args - Arguments to update one Article.
     * @example
     * // Update one Article
     * const article = await prisma.article.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleUpdateArgs>(args: SelectSubset<T, ArticleUpdateArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticleDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.article.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleDeleteManyArgs>(args?: SelectSubset<T, ArticleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const article = await prisma.article.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleUpdateManyArgs>(args: SelectSubset<T, ArticleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Article.
     * @param {ArticleUpsertArgs} args - Arguments to update or create a Article.
     * @example
     * // Update or create a Article
     * const article = await prisma.article.upsert({
     *   create: {
     *     // ... data to create a Article
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Article we want to update
     *   }
     * })
     */
    upsert<T extends ArticleUpsertArgs>(args: SelectSubset<T, ArticleUpsertArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.article.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticleCountArgs>(
      args?: Subset<T, ArticleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleAggregateArgs>(args: Subset<T, ArticleAggregateArgs>): Prisma.PrismaPromise<GetArticleAggregateType<T>>

    /**
     * Group by Article.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleGroupByArgs} args - Group by arguments.
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
      T extends ArticleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleGroupByArgs['orderBy'] }
        : { orderBy?: ArticleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Article model
   */
  readonly fields: ArticleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Article.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends Article$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Article$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seoMetadata<T extends Article$seoMetadataArgs<ExtArgs> = {}>(args?: Subset<T, Article$seoMetadataArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Article model
   */
  interface ArticleFieldRefs {
    readonly id: FieldRef<"Article", 'String'>
    readonly title: FieldRef<"Article", 'String'>
    readonly slug: FieldRef<"Article", 'String'>
    readonly content: FieldRef<"Article", 'String'>
    readonly excerpt: FieldRef<"Article", 'String'>
    readonly thumbnail: FieldRef<"Article", 'String'>
    readonly status: FieldRef<"Article", 'ArticleStatus'>
    readonly isFeatured: FieldRef<"Article", 'Boolean'>
    readonly publishedAt: FieldRef<"Article", 'DateTime'>
    readonly scheduledAt: FieldRef<"Article", 'DateTime'>
    readonly viewCount: FieldRef<"Article", 'Int'>
    readonly readingTime: FieldRef<"Article", 'Int'>
    readonly authorId: FieldRef<"Article", 'String'>
    readonly categoryId: FieldRef<"Article", 'String'>
    readonly createdAt: FieldRef<"Article", 'DateTime'>
    readonly updatedAt: FieldRef<"Article", 'DateTime'>
    readonly deletedAt: FieldRef<"Article", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Article findUnique
   */
  export type ArticleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findUniqueOrThrow
   */
  export type ArticleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article findFirst
   */
  export type ArticleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findFirstOrThrow
   */
  export type ArticleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Article to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article findMany
   */
  export type ArticleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticleOrderByWithRelationInput | ArticleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticleScalarFieldEnum | ArticleScalarFieldEnum[]
  }

  /**
   * Article create
   */
  export type ArticleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to create a Article.
     */
    data: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
  }

  /**
   * Article createMany
   */
  export type ArticleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticleCreateManyInput | ArticleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Article update
   */
  export type ArticleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The data needed to update a Article.
     */
    data: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
    /**
     * Choose, which Article to update.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article updateMany
   */
  export type ArticleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Article upsert
   */
  export type ArticleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * The filter to search for the Article to update in case it exists.
     */
    where: ArticleWhereUniqueInput
    /**
     * In case the Article found by the `where` argument doesn't exist, create a new Article with this data.
     */
    create: XOR<ArticleCreateInput, ArticleUncheckedCreateInput>
    /**
     * In case the Article was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleUpdateInput, ArticleUncheckedUpdateInput>
  }

  /**
   * Article delete
   */
  export type ArticleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    /**
     * Filter which Article to delete.
     */
    where: ArticleWhereUniqueInput
  }

  /**
   * Article deleteMany
   */
  export type ArticleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticleWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Article.category
   */
  export type Article$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Article.seoMetadata
   */
  export type Article$seoMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    where?: SeoMetadataWhereInput
  }

  /**
   * Article without action
   */
  export type ArticleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
  }


  /**
   * Model FeaturedProgram
   */

  export type AggregateFeaturedProgram = {
    _count: FeaturedProgramCountAggregateOutputType | null
    _avg: FeaturedProgramAvgAggregateOutputType | null
    _sum: FeaturedProgramSumAggregateOutputType | null
    _min: FeaturedProgramMinAggregateOutputType | null
    _max: FeaturedProgramMaxAggregateOutputType | null
  }

  export type FeaturedProgramAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type FeaturedProgramSumAggregateOutputType = {
    orderIndex: number | null
  }

  export type FeaturedProgramMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    content: string | null
    thumbnail: string | null
    status: $Enums.ProgramStatus | null
    isHighlight: boolean | null
    orderIndex: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FeaturedProgramMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    content: string | null
    thumbnail: string | null
    status: $Enums.ProgramStatus | null
    isHighlight: boolean | null
    orderIndex: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type FeaturedProgramCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    content: number
    thumbnail: number
    status: number
    isHighlight: number
    orderIndex: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type FeaturedProgramAvgAggregateInputType = {
    orderIndex?: true
  }

  export type FeaturedProgramSumAggregateInputType = {
    orderIndex?: true
  }

  export type FeaturedProgramMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    content?: true
    thumbnail?: true
    status?: true
    isHighlight?: true
    orderIndex?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FeaturedProgramMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    content?: true
    thumbnail?: true
    status?: true
    isHighlight?: true
    orderIndex?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type FeaturedProgramCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    content?: true
    thumbnail?: true
    status?: true
    isHighlight?: true
    orderIndex?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type FeaturedProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedProgram to aggregate.
     */
    where?: FeaturedProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPrograms to fetch.
     */
    orderBy?: FeaturedProgramOrderByWithRelationInput | FeaturedProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeaturedProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeaturedPrograms
    **/
    _count?: true | FeaturedProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeaturedProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeaturedProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeaturedProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeaturedProgramMaxAggregateInputType
  }

  export type GetFeaturedProgramAggregateType<T extends FeaturedProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateFeaturedProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeaturedProgram[P]>
      : GetScalarType<T[P], AggregateFeaturedProgram[P]>
  }




  export type FeaturedProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeaturedProgramWhereInput
    orderBy?: FeaturedProgramOrderByWithAggregationInput | FeaturedProgramOrderByWithAggregationInput[]
    by: FeaturedProgramScalarFieldEnum[] | FeaturedProgramScalarFieldEnum
    having?: FeaturedProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeaturedProgramCountAggregateInputType | true
    _avg?: FeaturedProgramAvgAggregateInputType
    _sum?: FeaturedProgramSumAggregateInputType
    _min?: FeaturedProgramMinAggregateInputType
    _max?: FeaturedProgramMaxAggregateInputType
  }

  export type FeaturedProgramGroupByOutputType = {
    id: string
    title: string
    slug: string
    description: string | null
    content: string | null
    thumbnail: string | null
    status: $Enums.ProgramStatus
    isHighlight: boolean
    orderIndex: number
    startDate: Date | null
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: FeaturedProgramCountAggregateOutputType | null
    _avg: FeaturedProgramAvgAggregateOutputType | null
    _sum: FeaturedProgramSumAggregateOutputType | null
    _min: FeaturedProgramMinAggregateOutputType | null
    _max: FeaturedProgramMaxAggregateOutputType | null
  }

  type GetFeaturedProgramGroupByPayload<T extends FeaturedProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeaturedProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeaturedProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeaturedProgramGroupByOutputType[P]>
            : GetScalarType<T[P], FeaturedProgramGroupByOutputType[P]>
        }
      >
    >


  export type FeaturedProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    thumbnail?: boolean
    status?: boolean
    isHighlight?: boolean
    orderIndex?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    galleries?: boolean | FeaturedProgram$galleriesArgs<ExtArgs>
    seoMetadata?: boolean | FeaturedProgram$seoMetadataArgs<ExtArgs>
    _count?: boolean | FeaturedProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["featuredProgram"]>



  export type FeaturedProgramSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    content?: boolean
    thumbnail?: boolean
    status?: boolean
    isHighlight?: boolean
    orderIndex?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type FeaturedProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "content" | "thumbnail" | "status" | "isHighlight" | "orderIndex" | "startDate" | "endDate" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["featuredProgram"]>
  export type FeaturedProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    galleries?: boolean | FeaturedProgram$galleriesArgs<ExtArgs>
    seoMetadata?: boolean | FeaturedProgram$seoMetadataArgs<ExtArgs>
    _count?: boolean | FeaturedProgramCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FeaturedProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeaturedProgram"
    objects: {
      galleries: Prisma.$ProgramGalleryPayload<ExtArgs>[]
      seoMetadata: Prisma.$SeoMetadataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      description: string | null
      content: string | null
      thumbnail: string | null
      status: $Enums.ProgramStatus
      isHighlight: boolean
      orderIndex: number
      startDate: Date | null
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["featuredProgram"]>
    composites: {}
  }

  type FeaturedProgramGetPayload<S extends boolean | null | undefined | FeaturedProgramDefaultArgs> = $Result.GetResult<Prisma.$FeaturedProgramPayload, S>

  type FeaturedProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeaturedProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeaturedProgramCountAggregateInputType | true
    }

  export interface FeaturedProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeaturedProgram'], meta: { name: 'FeaturedProgram' } }
    /**
     * Find zero or one FeaturedProgram that matches the filter.
     * @param {FeaturedProgramFindUniqueArgs} args - Arguments to find a FeaturedProgram
     * @example
     * // Get one FeaturedProgram
     * const featuredProgram = await prisma.featuredProgram.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeaturedProgramFindUniqueArgs>(args: SelectSubset<T, FeaturedProgramFindUniqueArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeaturedProgram that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeaturedProgramFindUniqueOrThrowArgs} args - Arguments to find a FeaturedProgram
     * @example
     * // Get one FeaturedProgram
     * const featuredProgram = await prisma.featuredProgram.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeaturedProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, FeaturedProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedProgram that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramFindFirstArgs} args - Arguments to find a FeaturedProgram
     * @example
     * // Get one FeaturedProgram
     * const featuredProgram = await prisma.featuredProgram.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeaturedProgramFindFirstArgs>(args?: SelectSubset<T, FeaturedProgramFindFirstArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeaturedProgram that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramFindFirstOrThrowArgs} args - Arguments to find a FeaturedProgram
     * @example
     * // Get one FeaturedProgram
     * const featuredProgram = await prisma.featuredProgram.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeaturedProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, FeaturedProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeaturedPrograms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeaturedPrograms
     * const featuredPrograms = await prisma.featuredProgram.findMany()
     * 
     * // Get first 10 FeaturedPrograms
     * const featuredPrograms = await prisma.featuredProgram.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featuredProgramWithIdOnly = await prisma.featuredProgram.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeaturedProgramFindManyArgs>(args?: SelectSubset<T, FeaturedProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeaturedProgram.
     * @param {FeaturedProgramCreateArgs} args - Arguments to create a FeaturedProgram.
     * @example
     * // Create one FeaturedProgram
     * const FeaturedProgram = await prisma.featuredProgram.create({
     *   data: {
     *     // ... data to create a FeaturedProgram
     *   }
     * })
     * 
     */
    create<T extends FeaturedProgramCreateArgs>(args: SelectSubset<T, FeaturedProgramCreateArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeaturedPrograms.
     * @param {FeaturedProgramCreateManyArgs} args - Arguments to create many FeaturedPrograms.
     * @example
     * // Create many FeaturedPrograms
     * const featuredProgram = await prisma.featuredProgram.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeaturedProgramCreateManyArgs>(args?: SelectSubset<T, FeaturedProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeaturedProgram.
     * @param {FeaturedProgramDeleteArgs} args - Arguments to delete one FeaturedProgram.
     * @example
     * // Delete one FeaturedProgram
     * const FeaturedProgram = await prisma.featuredProgram.delete({
     *   where: {
     *     // ... filter to delete one FeaturedProgram
     *   }
     * })
     * 
     */
    delete<T extends FeaturedProgramDeleteArgs>(args: SelectSubset<T, FeaturedProgramDeleteArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeaturedProgram.
     * @param {FeaturedProgramUpdateArgs} args - Arguments to update one FeaturedProgram.
     * @example
     * // Update one FeaturedProgram
     * const featuredProgram = await prisma.featuredProgram.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeaturedProgramUpdateArgs>(args: SelectSubset<T, FeaturedProgramUpdateArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeaturedPrograms.
     * @param {FeaturedProgramDeleteManyArgs} args - Arguments to filter FeaturedPrograms to delete.
     * @example
     * // Delete a few FeaturedPrograms
     * const { count } = await prisma.featuredProgram.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeaturedProgramDeleteManyArgs>(args?: SelectSubset<T, FeaturedProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeaturedPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeaturedPrograms
     * const featuredProgram = await prisma.featuredProgram.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeaturedProgramUpdateManyArgs>(args: SelectSubset<T, FeaturedProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeaturedProgram.
     * @param {FeaturedProgramUpsertArgs} args - Arguments to update or create a FeaturedProgram.
     * @example
     * // Update or create a FeaturedProgram
     * const featuredProgram = await prisma.featuredProgram.upsert({
     *   create: {
     *     // ... data to create a FeaturedProgram
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeaturedProgram we want to update
     *   }
     * })
     */
    upsert<T extends FeaturedProgramUpsertArgs>(args: SelectSubset<T, FeaturedProgramUpsertArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeaturedPrograms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramCountArgs} args - Arguments to filter FeaturedPrograms to count.
     * @example
     * // Count the number of FeaturedPrograms
     * const count = await prisma.featuredProgram.count({
     *   where: {
     *     // ... the filter for the FeaturedPrograms we want to count
     *   }
     * })
    **/
    count<T extends FeaturedProgramCountArgs>(
      args?: Subset<T, FeaturedProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeaturedProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeaturedProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeaturedProgramAggregateArgs>(args: Subset<T, FeaturedProgramAggregateArgs>): Prisma.PrismaPromise<GetFeaturedProgramAggregateType<T>>

    /**
     * Group by FeaturedProgram.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeaturedProgramGroupByArgs} args - Group by arguments.
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
      T extends FeaturedProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeaturedProgramGroupByArgs['orderBy'] }
        : { orderBy?: FeaturedProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeaturedProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeaturedProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeaturedProgram model
   */
  readonly fields: FeaturedProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeaturedProgram.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeaturedProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    galleries<T extends FeaturedProgram$galleriesArgs<ExtArgs> = {}>(args?: Subset<T, FeaturedProgram$galleriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seoMetadata<T extends FeaturedProgram$seoMetadataArgs<ExtArgs> = {}>(args?: Subset<T, FeaturedProgram$seoMetadataArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FeaturedProgram model
   */
  interface FeaturedProgramFieldRefs {
    readonly id: FieldRef<"FeaturedProgram", 'String'>
    readonly title: FieldRef<"FeaturedProgram", 'String'>
    readonly slug: FieldRef<"FeaturedProgram", 'String'>
    readonly description: FieldRef<"FeaturedProgram", 'String'>
    readonly content: FieldRef<"FeaturedProgram", 'String'>
    readonly thumbnail: FieldRef<"FeaturedProgram", 'String'>
    readonly status: FieldRef<"FeaturedProgram", 'ProgramStatus'>
    readonly isHighlight: FieldRef<"FeaturedProgram", 'Boolean'>
    readonly orderIndex: FieldRef<"FeaturedProgram", 'Int'>
    readonly startDate: FieldRef<"FeaturedProgram", 'DateTime'>
    readonly endDate: FieldRef<"FeaturedProgram", 'DateTime'>
    readonly createdAt: FieldRef<"FeaturedProgram", 'DateTime'>
    readonly updatedAt: FieldRef<"FeaturedProgram", 'DateTime'>
    readonly deletedAt: FieldRef<"FeaturedProgram", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeaturedProgram findUnique
   */
  export type FeaturedProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedProgram to fetch.
     */
    where: FeaturedProgramWhereUniqueInput
  }

  /**
   * FeaturedProgram findUniqueOrThrow
   */
  export type FeaturedProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedProgram to fetch.
     */
    where: FeaturedProgramWhereUniqueInput
  }

  /**
   * FeaturedProgram findFirst
   */
  export type FeaturedProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedProgram to fetch.
     */
    where?: FeaturedProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPrograms to fetch.
     */
    orderBy?: FeaturedProgramOrderByWithRelationInput | FeaturedProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedPrograms.
     */
    cursor?: FeaturedProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedPrograms.
     */
    distinct?: FeaturedProgramScalarFieldEnum | FeaturedProgramScalarFieldEnum[]
  }

  /**
   * FeaturedProgram findFirstOrThrow
   */
  export type FeaturedProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedProgram to fetch.
     */
    where?: FeaturedProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPrograms to fetch.
     */
    orderBy?: FeaturedProgramOrderByWithRelationInput | FeaturedProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeaturedPrograms.
     */
    cursor?: FeaturedProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedPrograms.
     */
    distinct?: FeaturedProgramScalarFieldEnum | FeaturedProgramScalarFieldEnum[]
  }

  /**
   * FeaturedProgram findMany
   */
  export type FeaturedProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * Filter, which FeaturedPrograms to fetch.
     */
    where?: FeaturedProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeaturedPrograms to fetch.
     */
    orderBy?: FeaturedProgramOrderByWithRelationInput | FeaturedProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeaturedPrograms.
     */
    cursor?: FeaturedProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeaturedPrograms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeaturedPrograms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeaturedPrograms.
     */
    distinct?: FeaturedProgramScalarFieldEnum | FeaturedProgramScalarFieldEnum[]
  }

  /**
   * FeaturedProgram create
   */
  export type FeaturedProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a FeaturedProgram.
     */
    data: XOR<FeaturedProgramCreateInput, FeaturedProgramUncheckedCreateInput>
  }

  /**
   * FeaturedProgram createMany
   */
  export type FeaturedProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeaturedPrograms.
     */
    data: FeaturedProgramCreateManyInput | FeaturedProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeaturedProgram update
   */
  export type FeaturedProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a FeaturedProgram.
     */
    data: XOR<FeaturedProgramUpdateInput, FeaturedProgramUncheckedUpdateInput>
    /**
     * Choose, which FeaturedProgram to update.
     */
    where: FeaturedProgramWhereUniqueInput
  }

  /**
   * FeaturedProgram updateMany
   */
  export type FeaturedProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeaturedPrograms.
     */
    data: XOR<FeaturedProgramUpdateManyMutationInput, FeaturedProgramUncheckedUpdateManyInput>
    /**
     * Filter which FeaturedPrograms to update
     */
    where?: FeaturedProgramWhereInput
    /**
     * Limit how many FeaturedPrograms to update.
     */
    limit?: number
  }

  /**
   * FeaturedProgram upsert
   */
  export type FeaturedProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the FeaturedProgram to update in case it exists.
     */
    where: FeaturedProgramWhereUniqueInput
    /**
     * In case the FeaturedProgram found by the `where` argument doesn't exist, create a new FeaturedProgram with this data.
     */
    create: XOR<FeaturedProgramCreateInput, FeaturedProgramUncheckedCreateInput>
    /**
     * In case the FeaturedProgram was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeaturedProgramUpdateInput, FeaturedProgramUncheckedUpdateInput>
  }

  /**
   * FeaturedProgram delete
   */
  export type FeaturedProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    /**
     * Filter which FeaturedProgram to delete.
     */
    where: FeaturedProgramWhereUniqueInput
  }

  /**
   * FeaturedProgram deleteMany
   */
  export type FeaturedProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeaturedPrograms to delete
     */
    where?: FeaturedProgramWhereInput
    /**
     * Limit how many FeaturedPrograms to delete.
     */
    limit?: number
  }

  /**
   * FeaturedProgram.galleries
   */
  export type FeaturedProgram$galleriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    where?: ProgramGalleryWhereInput
    orderBy?: ProgramGalleryOrderByWithRelationInput | ProgramGalleryOrderByWithRelationInput[]
    cursor?: ProgramGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramGalleryScalarFieldEnum | ProgramGalleryScalarFieldEnum[]
  }

  /**
   * FeaturedProgram.seoMetadata
   */
  export type FeaturedProgram$seoMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    where?: SeoMetadataWhereInput
  }

  /**
   * FeaturedProgram without action
   */
  export type FeaturedProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
  }


  /**
   * Model ProgramGallery
   */

  export type AggregateProgramGallery = {
    _count: ProgramGalleryCountAggregateOutputType | null
    _avg: ProgramGalleryAvgAggregateOutputType | null
    _sum: ProgramGallerySumAggregateOutputType | null
    _min: ProgramGalleryMinAggregateOutputType | null
    _max: ProgramGalleryMaxAggregateOutputType | null
  }

  export type ProgramGalleryAvgAggregateOutputType = {
    orderIndex: number | null
  }

  export type ProgramGallerySumAggregateOutputType = {
    orderIndex: number | null
  }

  export type ProgramGalleryMinAggregateOutputType = {
    id: string | null
    programId: string | null
    imageUrl: string | null
    caption: string | null
    orderIndex: number | null
    createdAt: Date | null
  }

  export type ProgramGalleryMaxAggregateOutputType = {
    id: string | null
    programId: string | null
    imageUrl: string | null
    caption: string | null
    orderIndex: number | null
    createdAt: Date | null
  }

  export type ProgramGalleryCountAggregateOutputType = {
    id: number
    programId: number
    imageUrl: number
    caption: number
    orderIndex: number
    createdAt: number
    _all: number
  }


  export type ProgramGalleryAvgAggregateInputType = {
    orderIndex?: true
  }

  export type ProgramGallerySumAggregateInputType = {
    orderIndex?: true
  }

  export type ProgramGalleryMinAggregateInputType = {
    id?: true
    programId?: true
    imageUrl?: true
    caption?: true
    orderIndex?: true
    createdAt?: true
  }

  export type ProgramGalleryMaxAggregateInputType = {
    id?: true
    programId?: true
    imageUrl?: true
    caption?: true
    orderIndex?: true
    createdAt?: true
  }

  export type ProgramGalleryCountAggregateInputType = {
    id?: true
    programId?: true
    imageUrl?: true
    caption?: true
    orderIndex?: true
    createdAt?: true
    _all?: true
  }

  export type ProgramGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramGallery to aggregate.
     */
    where?: ProgramGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramGalleries to fetch.
     */
    orderBy?: ProgramGalleryOrderByWithRelationInput | ProgramGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramGalleries
    **/
    _count?: true | ProgramGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramGalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramGallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramGalleryMaxAggregateInputType
  }

  export type GetProgramGalleryAggregateType<T extends ProgramGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramGallery[P]>
      : GetScalarType<T[P], AggregateProgramGallery[P]>
  }




  export type ProgramGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramGalleryWhereInput
    orderBy?: ProgramGalleryOrderByWithAggregationInput | ProgramGalleryOrderByWithAggregationInput[]
    by: ProgramGalleryScalarFieldEnum[] | ProgramGalleryScalarFieldEnum
    having?: ProgramGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramGalleryCountAggregateInputType | true
    _avg?: ProgramGalleryAvgAggregateInputType
    _sum?: ProgramGallerySumAggregateInputType
    _min?: ProgramGalleryMinAggregateInputType
    _max?: ProgramGalleryMaxAggregateInputType
  }

  export type ProgramGalleryGroupByOutputType = {
    id: string
    programId: string
    imageUrl: string
    caption: string | null
    orderIndex: number
    createdAt: Date
    _count: ProgramGalleryCountAggregateOutputType | null
    _avg: ProgramGalleryAvgAggregateOutputType | null
    _sum: ProgramGallerySumAggregateOutputType | null
    _min: ProgramGalleryMinAggregateOutputType | null
    _max: ProgramGalleryMaxAggregateOutputType | null
  }

  type GetProgramGalleryGroupByPayload<T extends ProgramGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGalleryGroupByOutputType[P]>
        }
      >
    >


  export type ProgramGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    imageUrl?: boolean
    caption?: boolean
    orderIndex?: boolean
    createdAt?: boolean
    program?: boolean | FeaturedProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programGallery"]>



  export type ProgramGallerySelectScalar = {
    id?: boolean
    programId?: boolean
    imageUrl?: boolean
    caption?: boolean
    orderIndex?: boolean
    createdAt?: boolean
  }

  export type ProgramGalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "imageUrl" | "caption" | "orderIndex" | "createdAt", ExtArgs["result"]["programGallery"]>
  export type ProgramGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | FeaturedProgramDefaultArgs<ExtArgs>
  }

  export type $ProgramGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramGallery"
    objects: {
      program: Prisma.$FeaturedProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      programId: string
      imageUrl: string
      caption: string | null
      orderIndex: number
      createdAt: Date
    }, ExtArgs["result"]["programGallery"]>
    composites: {}
  }

  type ProgramGalleryGetPayload<S extends boolean | null | undefined | ProgramGalleryDefaultArgs> = $Result.GetResult<Prisma.$ProgramGalleryPayload, S>

  type ProgramGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramGalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramGalleryCountAggregateInputType | true
    }

  export interface ProgramGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramGallery'], meta: { name: 'ProgramGallery' } }
    /**
     * Find zero or one ProgramGallery that matches the filter.
     * @param {ProgramGalleryFindUniqueArgs} args - Arguments to find a ProgramGallery
     * @example
     * // Get one ProgramGallery
     * const programGallery = await prisma.programGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramGalleryFindUniqueArgs>(args: SelectSubset<T, ProgramGalleryFindUniqueArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramGallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramGalleryFindUniqueOrThrowArgs} args - Arguments to find a ProgramGallery
     * @example
     * // Get one ProgramGallery
     * const programGallery = await prisma.programGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramGalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramGalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryFindFirstArgs} args - Arguments to find a ProgramGallery
     * @example
     * // Get one ProgramGallery
     * const programGallery = await prisma.programGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramGalleryFindFirstArgs>(args?: SelectSubset<T, ProgramGalleryFindFirstArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryFindFirstOrThrowArgs} args - Arguments to find a ProgramGallery
     * @example
     * // Get one ProgramGallery
     * const programGallery = await prisma.programGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramGalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramGalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramGalleries
     * const programGalleries = await prisma.programGallery.findMany()
     * 
     * // Get first 10 ProgramGalleries
     * const programGalleries = await prisma.programGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programGalleryWithIdOnly = await prisma.programGallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramGalleryFindManyArgs>(args?: SelectSubset<T, ProgramGalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramGallery.
     * @param {ProgramGalleryCreateArgs} args - Arguments to create a ProgramGallery.
     * @example
     * // Create one ProgramGallery
     * const ProgramGallery = await prisma.programGallery.create({
     *   data: {
     *     // ... data to create a ProgramGallery
     *   }
     * })
     * 
     */
    create<T extends ProgramGalleryCreateArgs>(args: SelectSubset<T, ProgramGalleryCreateArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramGalleries.
     * @param {ProgramGalleryCreateManyArgs} args - Arguments to create many ProgramGalleries.
     * @example
     * // Create many ProgramGalleries
     * const programGallery = await prisma.programGallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramGalleryCreateManyArgs>(args?: SelectSubset<T, ProgramGalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgramGallery.
     * @param {ProgramGalleryDeleteArgs} args - Arguments to delete one ProgramGallery.
     * @example
     * // Delete one ProgramGallery
     * const ProgramGallery = await prisma.programGallery.delete({
     *   where: {
     *     // ... filter to delete one ProgramGallery
     *   }
     * })
     * 
     */
    delete<T extends ProgramGalleryDeleteArgs>(args: SelectSubset<T, ProgramGalleryDeleteArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramGallery.
     * @param {ProgramGalleryUpdateArgs} args - Arguments to update one ProgramGallery.
     * @example
     * // Update one ProgramGallery
     * const programGallery = await prisma.programGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramGalleryUpdateArgs>(args: SelectSubset<T, ProgramGalleryUpdateArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramGalleries.
     * @param {ProgramGalleryDeleteManyArgs} args - Arguments to filter ProgramGalleries to delete.
     * @example
     * // Delete a few ProgramGalleries
     * const { count } = await prisma.programGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramGalleryDeleteManyArgs>(args?: SelectSubset<T, ProgramGalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramGalleries
     * const programGallery = await prisma.programGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramGalleryUpdateManyArgs>(args: SelectSubset<T, ProgramGalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramGallery.
     * @param {ProgramGalleryUpsertArgs} args - Arguments to update or create a ProgramGallery.
     * @example
     * // Update or create a ProgramGallery
     * const programGallery = await prisma.programGallery.upsert({
     *   create: {
     *     // ... data to create a ProgramGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramGallery we want to update
     *   }
     * })
     */
    upsert<T extends ProgramGalleryUpsertArgs>(args: SelectSubset<T, ProgramGalleryUpsertArgs<ExtArgs>>): Prisma__ProgramGalleryClient<$Result.GetResult<Prisma.$ProgramGalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryCountArgs} args - Arguments to filter ProgramGalleries to count.
     * @example
     * // Count the number of ProgramGalleries
     * const count = await prisma.programGallery.count({
     *   where: {
     *     // ... the filter for the ProgramGalleries we want to count
     *   }
     * })
    **/
    count<T extends ProgramGalleryCountArgs>(
      args?: Subset<T, ProgramGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramGalleryAggregateArgs>(args: Subset<T, ProgramGalleryAggregateArgs>): Prisma.PrismaPromise<GetProgramGalleryAggregateType<T>>

    /**
     * Group by ProgramGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGalleryGroupByArgs} args - Group by arguments.
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
      T extends ProgramGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGalleryGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramGallery model
   */
  readonly fields: ProgramGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends FeaturedProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeaturedProgramDefaultArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProgramGallery model
   */
  interface ProgramGalleryFieldRefs {
    readonly id: FieldRef<"ProgramGallery", 'String'>
    readonly programId: FieldRef<"ProgramGallery", 'String'>
    readonly imageUrl: FieldRef<"ProgramGallery", 'String'>
    readonly caption: FieldRef<"ProgramGallery", 'String'>
    readonly orderIndex: FieldRef<"ProgramGallery", 'Int'>
    readonly createdAt: FieldRef<"ProgramGallery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProgramGallery findUnique
   */
  export type ProgramGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProgramGallery to fetch.
     */
    where: ProgramGalleryWhereUniqueInput
  }

  /**
   * ProgramGallery findUniqueOrThrow
   */
  export type ProgramGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProgramGallery to fetch.
     */
    where: ProgramGalleryWhereUniqueInput
  }

  /**
   * ProgramGallery findFirst
   */
  export type ProgramGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProgramGallery to fetch.
     */
    where?: ProgramGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramGalleries to fetch.
     */
    orderBy?: ProgramGalleryOrderByWithRelationInput | ProgramGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramGalleries.
     */
    cursor?: ProgramGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramGalleries.
     */
    distinct?: ProgramGalleryScalarFieldEnum | ProgramGalleryScalarFieldEnum[]
  }

  /**
   * ProgramGallery findFirstOrThrow
   */
  export type ProgramGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProgramGallery to fetch.
     */
    where?: ProgramGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramGalleries to fetch.
     */
    orderBy?: ProgramGalleryOrderByWithRelationInput | ProgramGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramGalleries.
     */
    cursor?: ProgramGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramGalleries.
     */
    distinct?: ProgramGalleryScalarFieldEnum | ProgramGalleryScalarFieldEnum[]
  }

  /**
   * ProgramGallery findMany
   */
  export type ProgramGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * Filter, which ProgramGalleries to fetch.
     */
    where?: ProgramGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramGalleries to fetch.
     */
    orderBy?: ProgramGalleryOrderByWithRelationInput | ProgramGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramGalleries.
     */
    cursor?: ProgramGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramGalleries.
     */
    distinct?: ProgramGalleryScalarFieldEnum | ProgramGalleryScalarFieldEnum[]
  }

  /**
   * ProgramGallery create
   */
  export type ProgramGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramGallery.
     */
    data: XOR<ProgramGalleryCreateInput, ProgramGalleryUncheckedCreateInput>
  }

  /**
   * ProgramGallery createMany
   */
  export type ProgramGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramGalleries.
     */
    data: ProgramGalleryCreateManyInput | ProgramGalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramGallery update
   */
  export type ProgramGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramGallery.
     */
    data: XOR<ProgramGalleryUpdateInput, ProgramGalleryUncheckedUpdateInput>
    /**
     * Choose, which ProgramGallery to update.
     */
    where: ProgramGalleryWhereUniqueInput
  }

  /**
   * ProgramGallery updateMany
   */
  export type ProgramGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramGalleries.
     */
    data: XOR<ProgramGalleryUpdateManyMutationInput, ProgramGalleryUncheckedUpdateManyInput>
    /**
     * Filter which ProgramGalleries to update
     */
    where?: ProgramGalleryWhereInput
    /**
     * Limit how many ProgramGalleries to update.
     */
    limit?: number
  }

  /**
   * ProgramGallery upsert
   */
  export type ProgramGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramGallery to update in case it exists.
     */
    where: ProgramGalleryWhereUniqueInput
    /**
     * In case the ProgramGallery found by the `where` argument doesn't exist, create a new ProgramGallery with this data.
     */
    create: XOR<ProgramGalleryCreateInput, ProgramGalleryUncheckedCreateInput>
    /**
     * In case the ProgramGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramGalleryUpdateInput, ProgramGalleryUncheckedUpdateInput>
  }

  /**
   * ProgramGallery delete
   */
  export type ProgramGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
    /**
     * Filter which ProgramGallery to delete.
     */
    where: ProgramGalleryWhereUniqueInput
  }

  /**
   * ProgramGallery deleteMany
   */
  export type ProgramGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramGalleries to delete
     */
    where?: ProgramGalleryWhereInput
    /**
     * Limit how many ProgramGalleries to delete.
     */
    limit?: number
  }

  /**
   * ProgramGallery without action
   */
  export type ProgramGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramGallery
     */
    select?: ProgramGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramGallery
     */
    omit?: ProgramGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramGalleryInclude<ExtArgs> | null
  }


  /**
   * Model AspirationCategory
   */

  export type AggregateAspirationCategory = {
    _count: AspirationCategoryCountAggregateOutputType | null
    _min: AspirationCategoryMinAggregateOutputType | null
    _max: AspirationCategoryMaxAggregateOutputType | null
  }

  export type AspirationCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AspirationCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AspirationCategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AspirationCategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AspirationCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AspirationCategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AspirationCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspirationCategory to aggregate.
     */
    where?: AspirationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirationCategories to fetch.
     */
    orderBy?: AspirationCategoryOrderByWithRelationInput | AspirationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspirationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AspirationCategories
    **/
    _count?: true | AspirationCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspirationCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspirationCategoryMaxAggregateInputType
  }

  export type GetAspirationCategoryAggregateType<T extends AspirationCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAspirationCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspirationCategory[P]>
      : GetScalarType<T[P], AggregateAspirationCategory[P]>
  }




  export type AspirationCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspirationCategoryWhereInput
    orderBy?: AspirationCategoryOrderByWithAggregationInput | AspirationCategoryOrderByWithAggregationInput[]
    by: AspirationCategoryScalarFieldEnum[] | AspirationCategoryScalarFieldEnum
    having?: AspirationCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspirationCategoryCountAggregateInputType | true
    _min?: AspirationCategoryMinAggregateInputType
    _max?: AspirationCategoryMaxAggregateInputType
  }

  export type AspirationCategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: AspirationCategoryCountAggregateOutputType | null
    _min: AspirationCategoryMinAggregateOutputType | null
    _max: AspirationCategoryMaxAggregateOutputType | null
  }

  type GetAspirationCategoryGroupByPayload<T extends AspirationCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspirationCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspirationCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspirationCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], AspirationCategoryGroupByOutputType[P]>
        }
      >
    >


  export type AspirationCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    aspirations?: boolean | AspirationCategory$aspirationsArgs<ExtArgs>
    _count?: boolean | AspirationCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aspirationCategory"]>



  export type AspirationCategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AspirationCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["aspirationCategory"]>
  export type AspirationCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aspirations?: boolean | AspirationCategory$aspirationsArgs<ExtArgs>
    _count?: boolean | AspirationCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AspirationCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AspirationCategory"
    objects: {
      aspirations: Prisma.$AspirationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aspirationCategory"]>
    composites: {}
  }

  type AspirationCategoryGetPayload<S extends boolean | null | undefined | AspirationCategoryDefaultArgs> = $Result.GetResult<Prisma.$AspirationCategoryPayload, S>

  type AspirationCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AspirationCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AspirationCategoryCountAggregateInputType | true
    }

  export interface AspirationCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AspirationCategory'], meta: { name: 'AspirationCategory' } }
    /**
     * Find zero or one AspirationCategory that matches the filter.
     * @param {AspirationCategoryFindUniqueArgs} args - Arguments to find a AspirationCategory
     * @example
     * // Get one AspirationCategory
     * const aspirationCategory = await prisma.aspirationCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspirationCategoryFindUniqueArgs>(args: SelectSubset<T, AspirationCategoryFindUniqueArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AspirationCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AspirationCategoryFindUniqueOrThrowArgs} args - Arguments to find a AspirationCategory
     * @example
     * // Get one AspirationCategory
     * const aspirationCategory = await prisma.aspirationCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspirationCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AspirationCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AspirationCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryFindFirstArgs} args - Arguments to find a AspirationCategory
     * @example
     * // Get one AspirationCategory
     * const aspirationCategory = await prisma.aspirationCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspirationCategoryFindFirstArgs>(args?: SelectSubset<T, AspirationCategoryFindFirstArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AspirationCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryFindFirstOrThrowArgs} args - Arguments to find a AspirationCategory
     * @example
     * // Get one AspirationCategory
     * const aspirationCategory = await prisma.aspirationCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspirationCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AspirationCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AspirationCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AspirationCategories
     * const aspirationCategories = await prisma.aspirationCategory.findMany()
     * 
     * // Get first 10 AspirationCategories
     * const aspirationCategories = await prisma.aspirationCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aspirationCategoryWithIdOnly = await prisma.aspirationCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AspirationCategoryFindManyArgs>(args?: SelectSubset<T, AspirationCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AspirationCategory.
     * @param {AspirationCategoryCreateArgs} args - Arguments to create a AspirationCategory.
     * @example
     * // Create one AspirationCategory
     * const AspirationCategory = await prisma.aspirationCategory.create({
     *   data: {
     *     // ... data to create a AspirationCategory
     *   }
     * })
     * 
     */
    create<T extends AspirationCategoryCreateArgs>(args: SelectSubset<T, AspirationCategoryCreateArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AspirationCategories.
     * @param {AspirationCategoryCreateManyArgs} args - Arguments to create many AspirationCategories.
     * @example
     * // Create many AspirationCategories
     * const aspirationCategory = await prisma.aspirationCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspirationCategoryCreateManyArgs>(args?: SelectSubset<T, AspirationCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AspirationCategory.
     * @param {AspirationCategoryDeleteArgs} args - Arguments to delete one AspirationCategory.
     * @example
     * // Delete one AspirationCategory
     * const AspirationCategory = await prisma.aspirationCategory.delete({
     *   where: {
     *     // ... filter to delete one AspirationCategory
     *   }
     * })
     * 
     */
    delete<T extends AspirationCategoryDeleteArgs>(args: SelectSubset<T, AspirationCategoryDeleteArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AspirationCategory.
     * @param {AspirationCategoryUpdateArgs} args - Arguments to update one AspirationCategory.
     * @example
     * // Update one AspirationCategory
     * const aspirationCategory = await prisma.aspirationCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspirationCategoryUpdateArgs>(args: SelectSubset<T, AspirationCategoryUpdateArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AspirationCategories.
     * @param {AspirationCategoryDeleteManyArgs} args - Arguments to filter AspirationCategories to delete.
     * @example
     * // Delete a few AspirationCategories
     * const { count } = await prisma.aspirationCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspirationCategoryDeleteManyArgs>(args?: SelectSubset<T, AspirationCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AspirationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AspirationCategories
     * const aspirationCategory = await prisma.aspirationCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspirationCategoryUpdateManyArgs>(args: SelectSubset<T, AspirationCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AspirationCategory.
     * @param {AspirationCategoryUpsertArgs} args - Arguments to update or create a AspirationCategory.
     * @example
     * // Update or create a AspirationCategory
     * const aspirationCategory = await prisma.aspirationCategory.upsert({
     *   create: {
     *     // ... data to create a AspirationCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AspirationCategory we want to update
     *   }
     * })
     */
    upsert<T extends AspirationCategoryUpsertArgs>(args: SelectSubset<T, AspirationCategoryUpsertArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AspirationCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryCountArgs} args - Arguments to filter AspirationCategories to count.
     * @example
     * // Count the number of AspirationCategories
     * const count = await prisma.aspirationCategory.count({
     *   where: {
     *     // ... the filter for the AspirationCategories we want to count
     *   }
     * })
    **/
    count<T extends AspirationCategoryCountArgs>(
      args?: Subset<T, AspirationCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspirationCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AspirationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AspirationCategoryAggregateArgs>(args: Subset<T, AspirationCategoryAggregateArgs>): Prisma.PrismaPromise<GetAspirationCategoryAggregateType<T>>

    /**
     * Group by AspirationCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCategoryGroupByArgs} args - Group by arguments.
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
      T extends AspirationCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspirationCategoryGroupByArgs['orderBy'] }
        : { orderBy?: AspirationCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AspirationCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspirationCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AspirationCategory model
   */
  readonly fields: AspirationCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AspirationCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspirationCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aspirations<T extends AspirationCategory$aspirationsArgs<ExtArgs> = {}>(args?: Subset<T, AspirationCategory$aspirationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AspirationCategory model
   */
  interface AspirationCategoryFieldRefs {
    readonly id: FieldRef<"AspirationCategory", 'String'>
    readonly name: FieldRef<"AspirationCategory", 'String'>
    readonly slug: FieldRef<"AspirationCategory", 'String'>
    readonly createdAt: FieldRef<"AspirationCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"AspirationCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AspirationCategory findUnique
   */
  export type AspirationCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AspirationCategory to fetch.
     */
    where: AspirationCategoryWhereUniqueInput
  }

  /**
   * AspirationCategory findUniqueOrThrow
   */
  export type AspirationCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AspirationCategory to fetch.
     */
    where: AspirationCategoryWhereUniqueInput
  }

  /**
   * AspirationCategory findFirst
   */
  export type AspirationCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AspirationCategory to fetch.
     */
    where?: AspirationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirationCategories to fetch.
     */
    orderBy?: AspirationCategoryOrderByWithRelationInput | AspirationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspirationCategories.
     */
    cursor?: AspirationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspirationCategories.
     */
    distinct?: AspirationCategoryScalarFieldEnum | AspirationCategoryScalarFieldEnum[]
  }

  /**
   * AspirationCategory findFirstOrThrow
   */
  export type AspirationCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AspirationCategory to fetch.
     */
    where?: AspirationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirationCategories to fetch.
     */
    orderBy?: AspirationCategoryOrderByWithRelationInput | AspirationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AspirationCategories.
     */
    cursor?: AspirationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspirationCategories.
     */
    distinct?: AspirationCategoryScalarFieldEnum | AspirationCategoryScalarFieldEnum[]
  }

  /**
   * AspirationCategory findMany
   */
  export type AspirationCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * Filter, which AspirationCategories to fetch.
     */
    where?: AspirationCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AspirationCategories to fetch.
     */
    orderBy?: AspirationCategoryOrderByWithRelationInput | AspirationCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AspirationCategories.
     */
    cursor?: AspirationCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AspirationCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AspirationCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AspirationCategories.
     */
    distinct?: AspirationCategoryScalarFieldEnum | AspirationCategoryScalarFieldEnum[]
  }

  /**
   * AspirationCategory create
   */
  export type AspirationCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AspirationCategory.
     */
    data: XOR<AspirationCategoryCreateInput, AspirationCategoryUncheckedCreateInput>
  }

  /**
   * AspirationCategory createMany
   */
  export type AspirationCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AspirationCategories.
     */
    data: AspirationCategoryCreateManyInput | AspirationCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AspirationCategory update
   */
  export type AspirationCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AspirationCategory.
     */
    data: XOR<AspirationCategoryUpdateInput, AspirationCategoryUncheckedUpdateInput>
    /**
     * Choose, which AspirationCategory to update.
     */
    where: AspirationCategoryWhereUniqueInput
  }

  /**
   * AspirationCategory updateMany
   */
  export type AspirationCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AspirationCategories.
     */
    data: XOR<AspirationCategoryUpdateManyMutationInput, AspirationCategoryUncheckedUpdateManyInput>
    /**
     * Filter which AspirationCategories to update
     */
    where?: AspirationCategoryWhereInput
    /**
     * Limit how many AspirationCategories to update.
     */
    limit?: number
  }

  /**
   * AspirationCategory upsert
   */
  export type AspirationCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AspirationCategory to update in case it exists.
     */
    where: AspirationCategoryWhereUniqueInput
    /**
     * In case the AspirationCategory found by the `where` argument doesn't exist, create a new AspirationCategory with this data.
     */
    create: XOR<AspirationCategoryCreateInput, AspirationCategoryUncheckedCreateInput>
    /**
     * In case the AspirationCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspirationCategoryUpdateInput, AspirationCategoryUncheckedUpdateInput>
  }

  /**
   * AspirationCategory delete
   */
  export type AspirationCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    /**
     * Filter which AspirationCategory to delete.
     */
    where: AspirationCategoryWhereUniqueInput
  }

  /**
   * AspirationCategory deleteMany
   */
  export type AspirationCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AspirationCategories to delete
     */
    where?: AspirationCategoryWhereInput
    /**
     * Limit how many AspirationCategories to delete.
     */
    limit?: number
  }

  /**
   * AspirationCategory.aspirations
   */
  export type AspirationCategory$aspirationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    where?: AspirationWhereInput
    orderBy?: AspirationOrderByWithRelationInput | AspirationOrderByWithRelationInput[]
    cursor?: AspirationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AspirationScalarFieldEnum | AspirationScalarFieldEnum[]
  }

  /**
   * AspirationCategory without action
   */
  export type AspirationCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Aspiration
   */

  export type AggregateAspiration = {
    _count: AspirationCountAggregateOutputType | null
    _min: AspirationMinAggregateOutputType | null
    _max: AspirationMaxAggregateOutputType | null
  }

  export type AspirationMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    title: string | null
    content: string | null
    categoryId: string | null
    status: $Enums.AspirationStatus | null
    adminReply: string | null
    repliedAt: Date | null
    repliedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AspirationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    title: string | null
    content: string | null
    categoryId: string | null
    status: $Enums.AspirationStatus | null
    adminReply: string | null
    repliedAt: Date | null
    repliedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AspirationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    title: number
    content: number
    categoryId: number
    status: number
    adminReply: number
    repliedAt: number
    repliedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AspirationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    title?: true
    content?: true
    categoryId?: true
    status?: true
    adminReply?: true
    repliedAt?: true
    repliedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AspirationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    title?: true
    content?: true
    categoryId?: true
    status?: true
    adminReply?: true
    repliedAt?: true
    repliedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AspirationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    title?: true
    content?: true
    categoryId?: true
    status?: true
    adminReply?: true
    repliedAt?: true
    repliedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AspirationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aspiration to aggregate.
     */
    where?: AspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aspirations to fetch.
     */
    orderBy?: AspirationOrderByWithRelationInput | AspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aspirations
    **/
    _count?: true | AspirationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AspirationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AspirationMaxAggregateInputType
  }

  export type GetAspirationAggregateType<T extends AspirationAggregateArgs> = {
        [P in keyof T & keyof AggregateAspiration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAspiration[P]>
      : GetScalarType<T[P], AggregateAspiration[P]>
  }




  export type AspirationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AspirationWhereInput
    orderBy?: AspirationOrderByWithAggregationInput | AspirationOrderByWithAggregationInput[]
    by: AspirationScalarFieldEnum[] | AspirationScalarFieldEnum
    having?: AspirationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AspirationCountAggregateInputType | true
    _min?: AspirationMinAggregateInputType
    _max?: AspirationMaxAggregateInputType
  }

  export type AspirationGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    title: string
    content: string
    categoryId: string | null
    status: $Enums.AspirationStatus
    adminReply: string | null
    repliedAt: Date | null
    repliedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: AspirationCountAggregateOutputType | null
    _min: AspirationMinAggregateOutputType | null
    _max: AspirationMaxAggregateOutputType | null
  }

  type GetAspirationGroupByPayload<T extends AspirationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AspirationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AspirationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AspirationGroupByOutputType[P]>
            : GetScalarType<T[P], AspirationGroupByOutputType[P]>
        }
      >
    >


  export type AspirationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    title?: boolean
    content?: boolean
    categoryId?: boolean
    status?: boolean
    adminReply?: boolean
    repliedAt?: boolean
    repliedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | Aspiration$categoryArgs<ExtArgs>
    repliedBy?: boolean | Aspiration$repliedByArgs<ExtArgs>
  }, ExtArgs["result"]["aspiration"]>



  export type AspirationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    title?: boolean
    content?: boolean
    categoryId?: boolean
    status?: boolean
    adminReply?: boolean
    repliedAt?: boolean
    repliedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AspirationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "title" | "content" | "categoryId" | "status" | "adminReply" | "repliedAt" | "repliedById" | "createdAt" | "updatedAt", ExtArgs["result"]["aspiration"]>
  export type AspirationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Aspiration$categoryArgs<ExtArgs>
    repliedBy?: boolean | Aspiration$repliedByArgs<ExtArgs>
  }

  export type $AspirationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aspiration"
    objects: {
      category: Prisma.$AspirationCategoryPayload<ExtArgs> | null
      repliedBy: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      title: string
      content: string
      categoryId: string | null
      status: $Enums.AspirationStatus
      adminReply: string | null
      repliedAt: Date | null
      repliedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aspiration"]>
    composites: {}
  }

  type AspirationGetPayload<S extends boolean | null | undefined | AspirationDefaultArgs> = $Result.GetResult<Prisma.$AspirationPayload, S>

  type AspirationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AspirationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AspirationCountAggregateInputType | true
    }

  export interface AspirationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aspiration'], meta: { name: 'Aspiration' } }
    /**
     * Find zero or one Aspiration that matches the filter.
     * @param {AspirationFindUniqueArgs} args - Arguments to find a Aspiration
     * @example
     * // Get one Aspiration
     * const aspiration = await prisma.aspiration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AspirationFindUniqueArgs>(args: SelectSubset<T, AspirationFindUniqueArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aspiration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AspirationFindUniqueOrThrowArgs} args - Arguments to find a Aspiration
     * @example
     * // Get one Aspiration
     * const aspiration = await prisma.aspiration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AspirationFindUniqueOrThrowArgs>(args: SelectSubset<T, AspirationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aspiration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationFindFirstArgs} args - Arguments to find a Aspiration
     * @example
     * // Get one Aspiration
     * const aspiration = await prisma.aspiration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AspirationFindFirstArgs>(args?: SelectSubset<T, AspirationFindFirstArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aspiration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationFindFirstOrThrowArgs} args - Arguments to find a Aspiration
     * @example
     * // Get one Aspiration
     * const aspiration = await prisma.aspiration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AspirationFindFirstOrThrowArgs>(args?: SelectSubset<T, AspirationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Aspirations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aspirations
     * const aspirations = await prisma.aspiration.findMany()
     * 
     * // Get first 10 Aspirations
     * const aspirations = await prisma.aspiration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aspirationWithIdOnly = await prisma.aspiration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AspirationFindManyArgs>(args?: SelectSubset<T, AspirationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aspiration.
     * @param {AspirationCreateArgs} args - Arguments to create a Aspiration.
     * @example
     * // Create one Aspiration
     * const Aspiration = await prisma.aspiration.create({
     *   data: {
     *     // ... data to create a Aspiration
     *   }
     * })
     * 
     */
    create<T extends AspirationCreateArgs>(args: SelectSubset<T, AspirationCreateArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Aspirations.
     * @param {AspirationCreateManyArgs} args - Arguments to create many Aspirations.
     * @example
     * // Create many Aspirations
     * const aspiration = await prisma.aspiration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AspirationCreateManyArgs>(args?: SelectSubset<T, AspirationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aspiration.
     * @param {AspirationDeleteArgs} args - Arguments to delete one Aspiration.
     * @example
     * // Delete one Aspiration
     * const Aspiration = await prisma.aspiration.delete({
     *   where: {
     *     // ... filter to delete one Aspiration
     *   }
     * })
     * 
     */
    delete<T extends AspirationDeleteArgs>(args: SelectSubset<T, AspirationDeleteArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aspiration.
     * @param {AspirationUpdateArgs} args - Arguments to update one Aspiration.
     * @example
     * // Update one Aspiration
     * const aspiration = await prisma.aspiration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AspirationUpdateArgs>(args: SelectSubset<T, AspirationUpdateArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Aspirations.
     * @param {AspirationDeleteManyArgs} args - Arguments to filter Aspirations to delete.
     * @example
     * // Delete a few Aspirations
     * const { count } = await prisma.aspiration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AspirationDeleteManyArgs>(args?: SelectSubset<T, AspirationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aspirations
     * const aspiration = await prisma.aspiration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AspirationUpdateManyArgs>(args: SelectSubset<T, AspirationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aspiration.
     * @param {AspirationUpsertArgs} args - Arguments to update or create a Aspiration.
     * @example
     * // Update or create a Aspiration
     * const aspiration = await prisma.aspiration.upsert({
     *   create: {
     *     // ... data to create a Aspiration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aspiration we want to update
     *   }
     * })
     */
    upsert<T extends AspirationUpsertArgs>(args: SelectSubset<T, AspirationUpsertArgs<ExtArgs>>): Prisma__AspirationClient<$Result.GetResult<Prisma.$AspirationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Aspirations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationCountArgs} args - Arguments to filter Aspirations to count.
     * @example
     * // Count the number of Aspirations
     * const count = await prisma.aspiration.count({
     *   where: {
     *     // ... the filter for the Aspirations we want to count
     *   }
     * })
    **/
    count<T extends AspirationCountArgs>(
      args?: Subset<T, AspirationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AspirationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AspirationAggregateArgs>(args: Subset<T, AspirationAggregateArgs>): Prisma.PrismaPromise<GetAspirationAggregateType<T>>

    /**
     * Group by Aspiration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AspirationGroupByArgs} args - Group by arguments.
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
      T extends AspirationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AspirationGroupByArgs['orderBy'] }
        : { orderBy?: AspirationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AspirationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAspirationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aspiration model
   */
  readonly fields: AspirationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aspiration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AspirationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends Aspiration$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Aspiration$categoryArgs<ExtArgs>>): Prisma__AspirationCategoryClient<$Result.GetResult<Prisma.$AspirationCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repliedBy<T extends Aspiration$repliedByArgs<ExtArgs> = {}>(args?: Subset<T, Aspiration$repliedByArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Aspiration model
   */
  interface AspirationFieldRefs {
    readonly id: FieldRef<"Aspiration", 'String'>
    readonly name: FieldRef<"Aspiration", 'String'>
    readonly email: FieldRef<"Aspiration", 'String'>
    readonly phone: FieldRef<"Aspiration", 'String'>
    readonly title: FieldRef<"Aspiration", 'String'>
    readonly content: FieldRef<"Aspiration", 'String'>
    readonly categoryId: FieldRef<"Aspiration", 'String'>
    readonly status: FieldRef<"Aspiration", 'AspirationStatus'>
    readonly adminReply: FieldRef<"Aspiration", 'String'>
    readonly repliedAt: FieldRef<"Aspiration", 'DateTime'>
    readonly repliedById: FieldRef<"Aspiration", 'String'>
    readonly createdAt: FieldRef<"Aspiration", 'DateTime'>
    readonly updatedAt: FieldRef<"Aspiration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Aspiration findUnique
   */
  export type AspirationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * Filter, which Aspiration to fetch.
     */
    where: AspirationWhereUniqueInput
  }

  /**
   * Aspiration findUniqueOrThrow
   */
  export type AspirationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * Filter, which Aspiration to fetch.
     */
    where: AspirationWhereUniqueInput
  }

  /**
   * Aspiration findFirst
   */
  export type AspirationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * Filter, which Aspiration to fetch.
     */
    where?: AspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aspirations to fetch.
     */
    orderBy?: AspirationOrderByWithRelationInput | AspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aspirations.
     */
    cursor?: AspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aspirations.
     */
    distinct?: AspirationScalarFieldEnum | AspirationScalarFieldEnum[]
  }

  /**
   * Aspiration findFirstOrThrow
   */
  export type AspirationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * Filter, which Aspiration to fetch.
     */
    where?: AspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aspirations to fetch.
     */
    orderBy?: AspirationOrderByWithRelationInput | AspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aspirations.
     */
    cursor?: AspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aspirations.
     */
    distinct?: AspirationScalarFieldEnum | AspirationScalarFieldEnum[]
  }

  /**
   * Aspiration findMany
   */
  export type AspirationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * Filter, which Aspirations to fetch.
     */
    where?: AspirationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aspirations to fetch.
     */
    orderBy?: AspirationOrderByWithRelationInput | AspirationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aspirations.
     */
    cursor?: AspirationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aspirations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aspirations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aspirations.
     */
    distinct?: AspirationScalarFieldEnum | AspirationScalarFieldEnum[]
  }

  /**
   * Aspiration create
   */
  export type AspirationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * The data needed to create a Aspiration.
     */
    data: XOR<AspirationCreateInput, AspirationUncheckedCreateInput>
  }

  /**
   * Aspiration createMany
   */
  export type AspirationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aspirations.
     */
    data: AspirationCreateManyInput | AspirationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aspiration update
   */
  export type AspirationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * The data needed to update a Aspiration.
     */
    data: XOR<AspirationUpdateInput, AspirationUncheckedUpdateInput>
    /**
     * Choose, which Aspiration to update.
     */
    where: AspirationWhereUniqueInput
  }

  /**
   * Aspiration updateMany
   */
  export type AspirationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aspirations.
     */
    data: XOR<AspirationUpdateManyMutationInput, AspirationUncheckedUpdateManyInput>
    /**
     * Filter which Aspirations to update
     */
    where?: AspirationWhereInput
    /**
     * Limit how many Aspirations to update.
     */
    limit?: number
  }

  /**
   * Aspiration upsert
   */
  export type AspirationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * The filter to search for the Aspiration to update in case it exists.
     */
    where: AspirationWhereUniqueInput
    /**
     * In case the Aspiration found by the `where` argument doesn't exist, create a new Aspiration with this data.
     */
    create: XOR<AspirationCreateInput, AspirationUncheckedCreateInput>
    /**
     * In case the Aspiration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AspirationUpdateInput, AspirationUncheckedUpdateInput>
  }

  /**
   * Aspiration delete
   */
  export type AspirationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
    /**
     * Filter which Aspiration to delete.
     */
    where: AspirationWhereUniqueInput
  }

  /**
   * Aspiration deleteMany
   */
  export type AspirationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aspirations to delete
     */
    where?: AspirationWhereInput
    /**
     * Limit how many Aspirations to delete.
     */
    limit?: number
  }

  /**
   * Aspiration.category
   */
  export type Aspiration$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AspirationCategory
     */
    select?: AspirationCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AspirationCategory
     */
    omit?: AspirationCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationCategoryInclude<ExtArgs> | null
    where?: AspirationCategoryWhereInput
  }

  /**
   * Aspiration.repliedBy
   */
  export type Aspiration$repliedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Aspiration without action
   */
  export type AspirationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aspiration
     */
    select?: AspirationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aspiration
     */
    omit?: AspirationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AspirationInclude<ExtArgs> | null
  }


  /**
   * Model SeoMetadata
   */

  export type AggregateSeoMetadata = {
    _count: SeoMetadataCountAggregateOutputType | null
    _min: SeoMetadataMinAggregateOutputType | null
    _max: SeoMetadataMaxAggregateOutputType | null
  }

  export type SeoMetadataMinAggregateOutputType = {
    id: string | null
    articleId: string | null
    programId: string | null
    metaTitle: string | null
    metaDesc: string | null
    keywords: string | null
    ogImage: string | null
    canonical: string | null
    noIndex: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoMetadataMaxAggregateOutputType = {
    id: string | null
    articleId: string | null
    programId: string | null
    metaTitle: string | null
    metaDesc: string | null
    keywords: string | null
    ogImage: string | null
    canonical: string | null
    noIndex: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeoMetadataCountAggregateOutputType = {
    id: number
    articleId: number
    programId: number
    metaTitle: number
    metaDesc: number
    keywords: number
    ogImage: number
    canonical: number
    noIndex: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeoMetadataMinAggregateInputType = {
    id?: true
    articleId?: true
    programId?: true
    metaTitle?: true
    metaDesc?: true
    keywords?: true
    ogImage?: true
    canonical?: true
    noIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoMetadataMaxAggregateInputType = {
    id?: true
    articleId?: true
    programId?: true
    metaTitle?: true
    metaDesc?: true
    keywords?: true
    ogImage?: true
    canonical?: true
    noIndex?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeoMetadataCountAggregateInputType = {
    id?: true
    articleId?: true
    programId?: true
    metaTitle?: true
    metaDesc?: true
    keywords?: true
    ogImage?: true
    canonical?: true
    noIndex?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeoMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoMetadata to aggregate.
     */
    where?: SeoMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetadata to fetch.
     */
    orderBy?: SeoMetadataOrderByWithRelationInput | SeoMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeoMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeoMetadata
    **/
    _count?: true | SeoMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeoMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeoMetadataMaxAggregateInputType
  }

  export type GetSeoMetadataAggregateType<T extends SeoMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateSeoMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeoMetadata[P]>
      : GetScalarType<T[P], AggregateSeoMetadata[P]>
  }




  export type SeoMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeoMetadataWhereInput
    orderBy?: SeoMetadataOrderByWithAggregationInput | SeoMetadataOrderByWithAggregationInput[]
    by: SeoMetadataScalarFieldEnum[] | SeoMetadataScalarFieldEnum
    having?: SeoMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeoMetadataCountAggregateInputType | true
    _min?: SeoMetadataMinAggregateInputType
    _max?: SeoMetadataMaxAggregateInputType
  }

  export type SeoMetadataGroupByOutputType = {
    id: string
    articleId: string | null
    programId: string | null
    metaTitle: string | null
    metaDesc: string | null
    keywords: string | null
    ogImage: string | null
    canonical: string | null
    noIndex: boolean
    createdAt: Date
    updatedAt: Date
    _count: SeoMetadataCountAggregateOutputType | null
    _min: SeoMetadataMinAggregateOutputType | null
    _max: SeoMetadataMaxAggregateOutputType | null
  }

  type GetSeoMetadataGroupByPayload<T extends SeoMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeoMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeoMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeoMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], SeoMetadataGroupByOutputType[P]>
        }
      >
    >


  export type SeoMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    articleId?: boolean
    programId?: boolean
    metaTitle?: boolean
    metaDesc?: boolean
    keywords?: boolean
    ogImage?: boolean
    canonical?: boolean
    noIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    article?: boolean | SeoMetadata$articleArgs<ExtArgs>
    program?: boolean | SeoMetadata$programArgs<ExtArgs>
  }, ExtArgs["result"]["seoMetadata"]>



  export type SeoMetadataSelectScalar = {
    id?: boolean
    articleId?: boolean
    programId?: boolean
    metaTitle?: boolean
    metaDesc?: boolean
    keywords?: boolean
    ogImage?: boolean
    canonical?: boolean
    noIndex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeoMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "articleId" | "programId" | "metaTitle" | "metaDesc" | "keywords" | "ogImage" | "canonical" | "noIndex" | "createdAt" | "updatedAt", ExtArgs["result"]["seoMetadata"]>
  export type SeoMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    article?: boolean | SeoMetadata$articleArgs<ExtArgs>
    program?: boolean | SeoMetadata$programArgs<ExtArgs>
  }

  export type $SeoMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SeoMetadata"
    objects: {
      article: Prisma.$ArticlePayload<ExtArgs> | null
      program: Prisma.$FeaturedProgramPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      articleId: string | null
      programId: string | null
      metaTitle: string | null
      metaDesc: string | null
      keywords: string | null
      ogImage: string | null
      canonical: string | null
      noIndex: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["seoMetadata"]>
    composites: {}
  }

  type SeoMetadataGetPayload<S extends boolean | null | undefined | SeoMetadataDefaultArgs> = $Result.GetResult<Prisma.$SeoMetadataPayload, S>

  type SeoMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeoMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeoMetadataCountAggregateInputType | true
    }

  export interface SeoMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SeoMetadata'], meta: { name: 'SeoMetadata' } }
    /**
     * Find zero or one SeoMetadata that matches the filter.
     * @param {SeoMetadataFindUniqueArgs} args - Arguments to find a SeoMetadata
     * @example
     * // Get one SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeoMetadataFindUniqueArgs>(args: SelectSubset<T, SeoMetadataFindUniqueArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SeoMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeoMetadataFindUniqueOrThrowArgs} args - Arguments to find a SeoMetadata
     * @example
     * // Get one SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeoMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, SeoMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataFindFirstArgs} args - Arguments to find a SeoMetadata
     * @example
     * // Get one SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeoMetadataFindFirstArgs>(args?: SelectSubset<T, SeoMetadataFindFirstArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SeoMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataFindFirstOrThrowArgs} args - Arguments to find a SeoMetadata
     * @example
     * // Get one SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeoMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, SeoMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SeoMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.findMany()
     * 
     * // Get first 10 SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seoMetadataWithIdOnly = await prisma.seoMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeoMetadataFindManyArgs>(args?: SelectSubset<T, SeoMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SeoMetadata.
     * @param {SeoMetadataCreateArgs} args - Arguments to create a SeoMetadata.
     * @example
     * // Create one SeoMetadata
     * const SeoMetadata = await prisma.seoMetadata.create({
     *   data: {
     *     // ... data to create a SeoMetadata
     *   }
     * })
     * 
     */
    create<T extends SeoMetadataCreateArgs>(args: SelectSubset<T, SeoMetadataCreateArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SeoMetadata.
     * @param {SeoMetadataCreateManyArgs} args - Arguments to create many SeoMetadata.
     * @example
     * // Create many SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeoMetadataCreateManyArgs>(args?: SelectSubset<T, SeoMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SeoMetadata.
     * @param {SeoMetadataDeleteArgs} args - Arguments to delete one SeoMetadata.
     * @example
     * // Delete one SeoMetadata
     * const SeoMetadata = await prisma.seoMetadata.delete({
     *   where: {
     *     // ... filter to delete one SeoMetadata
     *   }
     * })
     * 
     */
    delete<T extends SeoMetadataDeleteArgs>(args: SelectSubset<T, SeoMetadataDeleteArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SeoMetadata.
     * @param {SeoMetadataUpdateArgs} args - Arguments to update one SeoMetadata.
     * @example
     * // Update one SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeoMetadataUpdateArgs>(args: SelectSubset<T, SeoMetadataUpdateArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SeoMetadata.
     * @param {SeoMetadataDeleteManyArgs} args - Arguments to filter SeoMetadata to delete.
     * @example
     * // Delete a few SeoMetadata
     * const { count } = await prisma.seoMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeoMetadataDeleteManyArgs>(args?: SelectSubset<T, SeoMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeoMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeoMetadataUpdateManyArgs>(args: SelectSubset<T, SeoMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SeoMetadata.
     * @param {SeoMetadataUpsertArgs} args - Arguments to update or create a SeoMetadata.
     * @example
     * // Update or create a SeoMetadata
     * const seoMetadata = await prisma.seoMetadata.upsert({
     *   create: {
     *     // ... data to create a SeoMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeoMetadata we want to update
     *   }
     * })
     */
    upsert<T extends SeoMetadataUpsertArgs>(args: SelectSubset<T, SeoMetadataUpsertArgs<ExtArgs>>): Prisma__SeoMetadataClient<$Result.GetResult<Prisma.$SeoMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SeoMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataCountArgs} args - Arguments to filter SeoMetadata to count.
     * @example
     * // Count the number of SeoMetadata
     * const count = await prisma.seoMetadata.count({
     *   where: {
     *     // ... the filter for the SeoMetadata we want to count
     *   }
     * })
    **/
    count<T extends SeoMetadataCountArgs>(
      args?: Subset<T, SeoMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeoMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeoMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeoMetadataAggregateArgs>(args: Subset<T, SeoMetadataAggregateArgs>): Prisma.PrismaPromise<GetSeoMetadataAggregateType<T>>

    /**
     * Group by SeoMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeoMetadataGroupByArgs} args - Group by arguments.
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
      T extends SeoMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeoMetadataGroupByArgs['orderBy'] }
        : { orderBy?: SeoMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SeoMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeoMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SeoMetadata model
   */
  readonly fields: SeoMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeoMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeoMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    article<T extends SeoMetadata$articleArgs<ExtArgs> = {}>(args?: Subset<T, SeoMetadata$articleArgs<ExtArgs>>): Prisma__ArticleClient<$Result.GetResult<Prisma.$ArticlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    program<T extends SeoMetadata$programArgs<ExtArgs> = {}>(args?: Subset<T, SeoMetadata$programArgs<ExtArgs>>): Prisma__FeaturedProgramClient<$Result.GetResult<Prisma.$FeaturedProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SeoMetadata model
   */
  interface SeoMetadataFieldRefs {
    readonly id: FieldRef<"SeoMetadata", 'String'>
    readonly articleId: FieldRef<"SeoMetadata", 'String'>
    readonly programId: FieldRef<"SeoMetadata", 'String'>
    readonly metaTitle: FieldRef<"SeoMetadata", 'String'>
    readonly metaDesc: FieldRef<"SeoMetadata", 'String'>
    readonly keywords: FieldRef<"SeoMetadata", 'String'>
    readonly ogImage: FieldRef<"SeoMetadata", 'String'>
    readonly canonical: FieldRef<"SeoMetadata", 'String'>
    readonly noIndex: FieldRef<"SeoMetadata", 'Boolean'>
    readonly createdAt: FieldRef<"SeoMetadata", 'DateTime'>
    readonly updatedAt: FieldRef<"SeoMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SeoMetadata findUnique
   */
  export type SeoMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * Filter, which SeoMetadata to fetch.
     */
    where: SeoMetadataWhereUniqueInput
  }

  /**
   * SeoMetadata findUniqueOrThrow
   */
  export type SeoMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * Filter, which SeoMetadata to fetch.
     */
    where: SeoMetadataWhereUniqueInput
  }

  /**
   * SeoMetadata findFirst
   */
  export type SeoMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * Filter, which SeoMetadata to fetch.
     */
    where?: SeoMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetadata to fetch.
     */
    orderBy?: SeoMetadataOrderByWithRelationInput | SeoMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoMetadata.
     */
    cursor?: SeoMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoMetadata.
     */
    distinct?: SeoMetadataScalarFieldEnum | SeoMetadataScalarFieldEnum[]
  }

  /**
   * SeoMetadata findFirstOrThrow
   */
  export type SeoMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * Filter, which SeoMetadata to fetch.
     */
    where?: SeoMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetadata to fetch.
     */
    orderBy?: SeoMetadataOrderByWithRelationInput | SeoMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeoMetadata.
     */
    cursor?: SeoMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoMetadata.
     */
    distinct?: SeoMetadataScalarFieldEnum | SeoMetadataScalarFieldEnum[]
  }

  /**
   * SeoMetadata findMany
   */
  export type SeoMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * Filter, which SeoMetadata to fetch.
     */
    where?: SeoMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeoMetadata to fetch.
     */
    orderBy?: SeoMetadataOrderByWithRelationInput | SeoMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeoMetadata.
     */
    cursor?: SeoMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeoMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeoMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeoMetadata.
     */
    distinct?: SeoMetadataScalarFieldEnum | SeoMetadataScalarFieldEnum[]
  }

  /**
   * SeoMetadata create
   */
  export type SeoMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a SeoMetadata.
     */
    data: XOR<SeoMetadataCreateInput, SeoMetadataUncheckedCreateInput>
  }

  /**
   * SeoMetadata createMany
   */
  export type SeoMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SeoMetadata.
     */
    data: SeoMetadataCreateManyInput | SeoMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SeoMetadata update
   */
  export type SeoMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a SeoMetadata.
     */
    data: XOR<SeoMetadataUpdateInput, SeoMetadataUncheckedUpdateInput>
    /**
     * Choose, which SeoMetadata to update.
     */
    where: SeoMetadataWhereUniqueInput
  }

  /**
   * SeoMetadata updateMany
   */
  export type SeoMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SeoMetadata.
     */
    data: XOR<SeoMetadataUpdateManyMutationInput, SeoMetadataUncheckedUpdateManyInput>
    /**
     * Filter which SeoMetadata to update
     */
    where?: SeoMetadataWhereInput
    /**
     * Limit how many SeoMetadata to update.
     */
    limit?: number
  }

  /**
   * SeoMetadata upsert
   */
  export type SeoMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the SeoMetadata to update in case it exists.
     */
    where: SeoMetadataWhereUniqueInput
    /**
     * In case the SeoMetadata found by the `where` argument doesn't exist, create a new SeoMetadata with this data.
     */
    create: XOR<SeoMetadataCreateInput, SeoMetadataUncheckedCreateInput>
    /**
     * In case the SeoMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeoMetadataUpdateInput, SeoMetadataUncheckedUpdateInput>
  }

  /**
   * SeoMetadata delete
   */
  export type SeoMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
    /**
     * Filter which SeoMetadata to delete.
     */
    where: SeoMetadataWhereUniqueInput
  }

  /**
   * SeoMetadata deleteMany
   */
  export type SeoMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SeoMetadata to delete
     */
    where?: SeoMetadataWhereInput
    /**
     * Limit how many SeoMetadata to delete.
     */
    limit?: number
  }

  /**
   * SeoMetadata.article
   */
  export type SeoMetadata$articleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Article
     */
    select?: ArticleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Article
     */
    omit?: ArticleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleInclude<ExtArgs> | null
    where?: ArticleWhereInput
  }

  /**
   * SeoMetadata.program
   */
  export type SeoMetadata$programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeaturedProgram
     */
    select?: FeaturedProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeaturedProgram
     */
    omit?: FeaturedProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeaturedProgramInclude<ExtArgs> | null
    where?: FeaturedProgramWhereInput
  }

  /**
   * SeoMetadata without action
   */
  export type SeoMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeoMetadata
     */
    select?: SeoMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SeoMetadata
     */
    omit?: SeoMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeoMetadataInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    adminId: number
    action: number
    entity: number
    entityId: number
    description: number
    metadata: number
    ipAddress: number
    userAgent: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    adminId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    metadata?: true
    ipAddress?: true
    userAgent?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    adminId: string | null
    action: string
    entity: string | null
    entityId: string | null
    description: string | null
    metadata: JsonValue | null
    ipAddress: string | null
    userAgent: string | null
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
    admin?: boolean | ActivityLog$adminArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>



  export type ActivityLogSelectScalar = {
    id?: boolean
    adminId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    metadata?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "action" | "entity" | "entityId" | "description" | "metadata" | "ipAddress" | "userAgent" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ActivityLog$adminArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string | null
      action: string
      entity: string | null
      entityId: string | null
      description: string | null
      metadata: Prisma.JsonValue | null
      ipAddress: string | null
      userAgent: string | null
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends ActivityLog$adminArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly adminId: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly entity: FieldRef<"ActivityLog", 'String'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly description: FieldRef<"ActivityLog", 'String'>
    readonly metadata: FieldRef<"ActivityLog", 'Json'>
    readonly ipAddress: FieldRef<"ActivityLog", 'String'>
    readonly userAgent: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.admin
   */
  export type ActivityLog$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    tokenHash: 'tokenHash',
    isRevoked: 'isRevoked',
    expiresAt: 'expiresAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    headline: 'headline',
    bio: 'bio',
    avatar: 'avatar',
    phone: 'phone',
    email: 'email',
    address: 'address',
    linkedin: 'linkedin',
    github: 'github',
    twitter: 'twitter',
    instagram: 'instagram',
    website: 'website',
    resumeUrl: 'resumeUrl',
    skills: 'skills',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ArticleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    excerpt: 'excerpt',
    thumbnail: 'thumbnail',
    status: 'status',
    isFeatured: 'isFeatured',
    publishedAt: 'publishedAt',
    scheduledAt: 'scheduledAt',
    viewCount: 'viewCount',
    readingTime: 'readingTime',
    authorId: 'authorId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ArticleScalarFieldEnum = (typeof ArticleScalarFieldEnum)[keyof typeof ArticleScalarFieldEnum]


  export const FeaturedProgramScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    content: 'content',
    thumbnail: 'thumbnail',
    status: 'status',
    isHighlight: 'isHighlight',
    orderIndex: 'orderIndex',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type FeaturedProgramScalarFieldEnum = (typeof FeaturedProgramScalarFieldEnum)[keyof typeof FeaturedProgramScalarFieldEnum]


  export const ProgramGalleryScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    imageUrl: 'imageUrl',
    caption: 'caption',
    orderIndex: 'orderIndex',
    createdAt: 'createdAt'
  };

  export type ProgramGalleryScalarFieldEnum = (typeof ProgramGalleryScalarFieldEnum)[keyof typeof ProgramGalleryScalarFieldEnum]


  export const AspirationCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AspirationCategoryScalarFieldEnum = (typeof AspirationCategoryScalarFieldEnum)[keyof typeof AspirationCategoryScalarFieldEnum]


  export const AspirationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    title: 'title',
    content: 'content',
    categoryId: 'categoryId',
    status: 'status',
    adminReply: 'adminReply',
    repliedAt: 'repliedAt',
    repliedById: 'repliedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AspirationScalarFieldEnum = (typeof AspirationScalarFieldEnum)[keyof typeof AspirationScalarFieldEnum]


  export const SeoMetadataScalarFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    programId: 'programId',
    metaTitle: 'metaTitle',
    metaDesc: 'metaDesc',
    keywords: 'keywords',
    ogImage: 'ogImage',
    canonical: 'canonical',
    noIndex: 'noIndex',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeoMetadataScalarFieldEnum = (typeof SeoMetadataScalarFieldEnum)[keyof typeof SeoMetadataScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    avatar: 'avatar'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    tokenHash: 'tokenHash',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ProfileOrderByRelevanceFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    headline: 'headline',
    bio: 'bio',
    avatar: 'avatar',
    phone: 'phone',
    email: 'email',
    address: 'address',
    linkedin: 'linkedin',
    github: 'github',
    twitter: 'twitter',
    instagram: 'instagram',
    website: 'website',
    resumeUrl: 'resumeUrl'
  };

  export type ProfileOrderByRelevanceFieldEnum = (typeof ProfileOrderByRelevanceFieldEnum)[keyof typeof ProfileOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const ArticleOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    content: 'content',
    excerpt: 'excerpt',
    thumbnail: 'thumbnail',
    authorId: 'authorId',
    categoryId: 'categoryId'
  };

  export type ArticleOrderByRelevanceFieldEnum = (typeof ArticleOrderByRelevanceFieldEnum)[keyof typeof ArticleOrderByRelevanceFieldEnum]


  export const FeaturedProgramOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    content: 'content',
    thumbnail: 'thumbnail'
  };

  export type FeaturedProgramOrderByRelevanceFieldEnum = (typeof FeaturedProgramOrderByRelevanceFieldEnum)[keyof typeof FeaturedProgramOrderByRelevanceFieldEnum]


  export const ProgramGalleryOrderByRelevanceFieldEnum: {
    id: 'id',
    programId: 'programId',
    imageUrl: 'imageUrl',
    caption: 'caption'
  };

  export type ProgramGalleryOrderByRelevanceFieldEnum = (typeof ProgramGalleryOrderByRelevanceFieldEnum)[keyof typeof ProgramGalleryOrderByRelevanceFieldEnum]


  export const AspirationCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type AspirationCategoryOrderByRelevanceFieldEnum = (typeof AspirationCategoryOrderByRelevanceFieldEnum)[keyof typeof AspirationCategoryOrderByRelevanceFieldEnum]


  export const AspirationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    title: 'title',
    content: 'content',
    categoryId: 'categoryId',
    adminReply: 'adminReply',
    repliedById: 'repliedById'
  };

  export type AspirationOrderByRelevanceFieldEnum = (typeof AspirationOrderByRelevanceFieldEnum)[keyof typeof AspirationOrderByRelevanceFieldEnum]


  export const SeoMetadataOrderByRelevanceFieldEnum: {
    id: 'id',
    articleId: 'articleId',
    programId: 'programId',
    metaTitle: 'metaTitle',
    metaDesc: 'metaDesc',
    keywords: 'keywords',
    ogImage: 'ogImage',
    canonical: 'canonical'
  };

  export type SeoMetadataOrderByRelevanceFieldEnum = (typeof SeoMetadataOrderByRelevanceFieldEnum)[keyof typeof SeoMetadataOrderByRelevanceFieldEnum]


  export const ActivityLogOrderByRelevanceFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type ActivityLogOrderByRelevanceFieldEnum = (typeof ActivityLogOrderByRelevanceFieldEnum)[keyof typeof ActivityLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'ArticleStatus'
   */
  export type EnumArticleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ArticleStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'ProgramStatus'
   */
  export type EnumProgramStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProgramStatus'>
    


  /**
   * Reference to a field of type 'AspirationStatus'
   */
  export type EnumAspirationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AspirationStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    avatar?: StringNullableFilter<"Admin"> | string | null
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    articles?: ArticleListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    repliedAspirations?: AspirationListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    repliedAspirations?: AspirationOrderByRelationAggregateInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    avatar?: StringNullableFilter<"Admin"> | string | null
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    articles?: ArticleListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    repliedAspirations?: AspirationListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    adminId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    tokenHash?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    adminId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    tokenHash?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    adminId?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    isRevoked?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    fullName?: StringFilter<"Profile"> | string
    headline?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    avatar?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    email?: StringNullableFilter<"Profile"> | string | null
    address?: StringNullableFilter<"Profile"> | string | null
    linkedin?: StringNullableFilter<"Profile"> | string | null
    github?: StringNullableFilter<"Profile"> | string | null
    twitter?: StringNullableFilter<"Profile"> | string | null
    instagram?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    skills?: JsonNullableFilter<"Profile">
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    headline?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ProfileOrderByRelevanceInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullName?: StringFilter<"Profile"> | string
    headline?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    avatar?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    email?: StringNullableFilter<"Profile"> | string | null
    address?: StringNullableFilter<"Profile"> | string | null
    linkedin?: StringNullableFilter<"Profile"> | string | null
    github?: StringNullableFilter<"Profile"> | string | null
    twitter?: StringNullableFilter<"Profile"> | string | null
    instagram?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    resumeUrl?: StringNullableFilter<"Profile"> | string | null
    skills?: JsonNullableFilter<"Profile">
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
  }, "id">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    headline?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    resumeUrl?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    fullName?: StringWithAggregatesFilter<"Profile"> | string
    headline?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    address?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    github?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    website?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    resumeUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    skills?: JsonNullableWithAggregatesFilter<"Profile">
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    articles?: ArticleListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    articles?: ArticleOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    articles?: ArticleListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ArticleWhereInput = {
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    thumbnail?: StringNullableFilter<"Article"> | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    isFeatured?: BoolFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    scheduledAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    viewCount?: IntFilter<"Article"> | number
    readingTime?: IntFilter<"Article"> | number
    authorId?: StringFilter<"Article"> | string
    categoryId?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    author?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    seoMetadata?: XOR<SeoMetadataNullableScalarRelationFilter, SeoMetadataWhereInput> | null
  }

  export type ArticleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    readingTime?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    author?: AdminOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    seoMetadata?: SeoMetadataOrderByWithRelationInput
    _relevance?: ArticleOrderByRelevanceInput
  }

  export type ArticleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ArticleWhereInput | ArticleWhereInput[]
    OR?: ArticleWhereInput[]
    NOT?: ArticleWhereInput | ArticleWhereInput[]
    title?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    thumbnail?: StringNullableFilter<"Article"> | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    isFeatured?: BoolFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    scheduledAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    viewCount?: IntFilter<"Article"> | number
    readingTime?: IntFilter<"Article"> | number
    authorId?: StringFilter<"Article"> | string
    categoryId?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    author?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    seoMetadata?: XOR<SeoMetadataNullableScalarRelationFilter, SeoMetadataWhereInput> | null
  }, "id" | "slug">

  export type ArticleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    readingTime?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ArticleCountOrderByAggregateInput
    _avg?: ArticleAvgOrderByAggregateInput
    _max?: ArticleMaxOrderByAggregateInput
    _min?: ArticleMinOrderByAggregateInput
    _sum?: ArticleSumOrderByAggregateInput
  }

  export type ArticleScalarWhereWithAggregatesInput = {
    AND?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    OR?: ArticleScalarWhereWithAggregatesInput[]
    NOT?: ArticleScalarWhereWithAggregatesInput | ArticleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Article"> | string
    title?: StringWithAggregatesFilter<"Article"> | string
    slug?: StringWithAggregatesFilter<"Article"> | string
    content?: StringWithAggregatesFilter<"Article"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Article"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Article"> | string | null
    status?: EnumArticleStatusWithAggregatesFilter<"Article"> | $Enums.ArticleStatus
    isFeatured?: BoolWithAggregatesFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
    viewCount?: IntWithAggregatesFilter<"Article"> | number
    readingTime?: IntWithAggregatesFilter<"Article"> | number
    authorId?: StringWithAggregatesFilter<"Article"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Article"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Article"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Article"> | Date | string | null
  }

  export type FeaturedProgramWhereInput = {
    AND?: FeaturedProgramWhereInput | FeaturedProgramWhereInput[]
    OR?: FeaturedProgramWhereInput[]
    NOT?: FeaturedProgramWhereInput | FeaturedProgramWhereInput[]
    id?: StringFilter<"FeaturedProgram"> | string
    title?: StringFilter<"FeaturedProgram"> | string
    slug?: StringFilter<"FeaturedProgram"> | string
    description?: StringNullableFilter<"FeaturedProgram"> | string | null
    content?: StringNullableFilter<"FeaturedProgram"> | string | null
    thumbnail?: StringNullableFilter<"FeaturedProgram"> | string | null
    status?: EnumProgramStatusFilter<"FeaturedProgram"> | $Enums.ProgramStatus
    isHighlight?: BoolFilter<"FeaturedProgram"> | boolean
    orderIndex?: IntFilter<"FeaturedProgram"> | number
    startDate?: DateTimeNullableFilter<"FeaturedProgram"> | Date | string | null
    endDate?: DateTimeNullableFilter<"FeaturedProgram"> | Date | string | null
    createdAt?: DateTimeFilter<"FeaturedProgram"> | Date | string
    updatedAt?: DateTimeFilter<"FeaturedProgram"> | Date | string
    deletedAt?: DateTimeNullableFilter<"FeaturedProgram"> | Date | string | null
    galleries?: ProgramGalleryListRelationFilter
    seoMetadata?: XOR<SeoMetadataNullableScalarRelationFilter, SeoMetadataWhereInput> | null
  }

  export type FeaturedProgramOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    isHighlight?: SortOrder
    orderIndex?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    galleries?: ProgramGalleryOrderByRelationAggregateInput
    seoMetadata?: SeoMetadataOrderByWithRelationInput
    _relevance?: FeaturedProgramOrderByRelevanceInput
  }

  export type FeaturedProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: FeaturedProgramWhereInput | FeaturedProgramWhereInput[]
    OR?: FeaturedProgramWhereInput[]
    NOT?: FeaturedProgramWhereInput | FeaturedProgramWhereInput[]
    title?: StringFilter<"FeaturedProgram"> | string
    description?: StringNullableFilter<"FeaturedProgram"> | string | null
    content?: StringNullableFilter<"FeaturedProgram"> | string | null
    thumbnail?: StringNullableFilter<"FeaturedProgram"> | string | null
    status?: EnumProgramStatusFilter<"FeaturedProgram"> | $Enums.ProgramStatus
    isHighlight?: BoolFilter<"FeaturedProgram"> | boolean
    orderIndex?: IntFilter<"FeaturedProgram"> | number
    startDate?: DateTimeNullableFilter<"FeaturedProgram"> | Date | string | null
    endDate?: DateTimeNullableFilter<"FeaturedProgram"> | Date | string | null
    createdAt?: DateTimeFilter<"FeaturedProgram"> | Date | string
    updatedAt?: DateTimeFilter<"FeaturedProgram"> | Date | string
    deletedAt?: DateTimeNullableFilter<"FeaturedProgram"> | Date | string | null
    galleries?: ProgramGalleryListRelationFilter
    seoMetadata?: XOR<SeoMetadataNullableScalarRelationFilter, SeoMetadataWhereInput> | null
  }, "id" | "slug">

  export type FeaturedProgramOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    isHighlight?: SortOrder
    orderIndex?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FeaturedProgramCountOrderByAggregateInput
    _avg?: FeaturedProgramAvgOrderByAggregateInput
    _max?: FeaturedProgramMaxOrderByAggregateInput
    _min?: FeaturedProgramMinOrderByAggregateInput
    _sum?: FeaturedProgramSumOrderByAggregateInput
  }

  export type FeaturedProgramScalarWhereWithAggregatesInput = {
    AND?: FeaturedProgramScalarWhereWithAggregatesInput | FeaturedProgramScalarWhereWithAggregatesInput[]
    OR?: FeaturedProgramScalarWhereWithAggregatesInput[]
    NOT?: FeaturedProgramScalarWhereWithAggregatesInput | FeaturedProgramScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeaturedProgram"> | string
    title?: StringWithAggregatesFilter<"FeaturedProgram"> | string
    slug?: StringWithAggregatesFilter<"FeaturedProgram"> | string
    description?: StringNullableWithAggregatesFilter<"FeaturedProgram"> | string | null
    content?: StringNullableWithAggregatesFilter<"FeaturedProgram"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"FeaturedProgram"> | string | null
    status?: EnumProgramStatusWithAggregatesFilter<"FeaturedProgram"> | $Enums.ProgramStatus
    isHighlight?: BoolWithAggregatesFilter<"FeaturedProgram"> | boolean
    orderIndex?: IntWithAggregatesFilter<"FeaturedProgram"> | number
    startDate?: DateTimeNullableWithAggregatesFilter<"FeaturedProgram"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"FeaturedProgram"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FeaturedProgram"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeaturedProgram"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"FeaturedProgram"> | Date | string | null
  }

  export type ProgramGalleryWhereInput = {
    AND?: ProgramGalleryWhereInput | ProgramGalleryWhereInput[]
    OR?: ProgramGalleryWhereInput[]
    NOT?: ProgramGalleryWhereInput | ProgramGalleryWhereInput[]
    id?: StringFilter<"ProgramGallery"> | string
    programId?: StringFilter<"ProgramGallery"> | string
    imageUrl?: StringFilter<"ProgramGallery"> | string
    caption?: StringNullableFilter<"ProgramGallery"> | string | null
    orderIndex?: IntFilter<"ProgramGallery"> | number
    createdAt?: DateTimeFilter<"ProgramGallery"> | Date | string
    program?: XOR<FeaturedProgramScalarRelationFilter, FeaturedProgramWhereInput>
  }

  export type ProgramGalleryOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    program?: FeaturedProgramOrderByWithRelationInput
    _relevance?: ProgramGalleryOrderByRelevanceInput
  }

  export type ProgramGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProgramGalleryWhereInput | ProgramGalleryWhereInput[]
    OR?: ProgramGalleryWhereInput[]
    NOT?: ProgramGalleryWhereInput | ProgramGalleryWhereInput[]
    programId?: StringFilter<"ProgramGallery"> | string
    imageUrl?: StringFilter<"ProgramGallery"> | string
    caption?: StringNullableFilter<"ProgramGallery"> | string | null
    orderIndex?: IntFilter<"ProgramGallery"> | number
    createdAt?: DateTimeFilter<"ProgramGallery"> | Date | string
    program?: XOR<FeaturedProgramScalarRelationFilter, FeaturedProgramWhereInput>
  }, "id">

  export type ProgramGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrderInput | SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
    _count?: ProgramGalleryCountOrderByAggregateInput
    _avg?: ProgramGalleryAvgOrderByAggregateInput
    _max?: ProgramGalleryMaxOrderByAggregateInput
    _min?: ProgramGalleryMinOrderByAggregateInput
    _sum?: ProgramGallerySumOrderByAggregateInput
  }

  export type ProgramGalleryScalarWhereWithAggregatesInput = {
    AND?: ProgramGalleryScalarWhereWithAggregatesInput | ProgramGalleryScalarWhereWithAggregatesInput[]
    OR?: ProgramGalleryScalarWhereWithAggregatesInput[]
    NOT?: ProgramGalleryScalarWhereWithAggregatesInput | ProgramGalleryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProgramGallery"> | string
    programId?: StringWithAggregatesFilter<"ProgramGallery"> | string
    imageUrl?: StringWithAggregatesFilter<"ProgramGallery"> | string
    caption?: StringNullableWithAggregatesFilter<"ProgramGallery"> | string | null
    orderIndex?: IntWithAggregatesFilter<"ProgramGallery"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProgramGallery"> | Date | string
  }

  export type AspirationCategoryWhereInput = {
    AND?: AspirationCategoryWhereInput | AspirationCategoryWhereInput[]
    OR?: AspirationCategoryWhereInput[]
    NOT?: AspirationCategoryWhereInput | AspirationCategoryWhereInput[]
    id?: StringFilter<"AspirationCategory"> | string
    name?: StringFilter<"AspirationCategory"> | string
    slug?: StringFilter<"AspirationCategory"> | string
    createdAt?: DateTimeFilter<"AspirationCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AspirationCategory"> | Date | string
    aspirations?: AspirationListRelationFilter
  }

  export type AspirationCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    aspirations?: AspirationOrderByRelationAggregateInput
    _relevance?: AspirationCategoryOrderByRelevanceInput
  }

  export type AspirationCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: AspirationCategoryWhereInput | AspirationCategoryWhereInput[]
    OR?: AspirationCategoryWhereInput[]
    NOT?: AspirationCategoryWhereInput | AspirationCategoryWhereInput[]
    createdAt?: DateTimeFilter<"AspirationCategory"> | Date | string
    updatedAt?: DateTimeFilter<"AspirationCategory"> | Date | string
    aspirations?: AspirationListRelationFilter
  }, "id" | "name" | "slug">

  export type AspirationCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AspirationCategoryCountOrderByAggregateInput
    _max?: AspirationCategoryMaxOrderByAggregateInput
    _min?: AspirationCategoryMinOrderByAggregateInput
  }

  export type AspirationCategoryScalarWhereWithAggregatesInput = {
    AND?: AspirationCategoryScalarWhereWithAggregatesInput | AspirationCategoryScalarWhereWithAggregatesInput[]
    OR?: AspirationCategoryScalarWhereWithAggregatesInput[]
    NOT?: AspirationCategoryScalarWhereWithAggregatesInput | AspirationCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AspirationCategory"> | string
    name?: StringWithAggregatesFilter<"AspirationCategory"> | string
    slug?: StringWithAggregatesFilter<"AspirationCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AspirationCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AspirationCategory"> | Date | string
  }

  export type AspirationWhereInput = {
    AND?: AspirationWhereInput | AspirationWhereInput[]
    OR?: AspirationWhereInput[]
    NOT?: AspirationWhereInput | AspirationWhereInput[]
    id?: StringFilter<"Aspiration"> | string
    name?: StringFilter<"Aspiration"> | string
    email?: StringFilter<"Aspiration"> | string
    phone?: StringNullableFilter<"Aspiration"> | string | null
    title?: StringFilter<"Aspiration"> | string
    content?: StringFilter<"Aspiration"> | string
    categoryId?: StringNullableFilter<"Aspiration"> | string | null
    status?: EnumAspirationStatusFilter<"Aspiration"> | $Enums.AspirationStatus
    adminReply?: StringNullableFilter<"Aspiration"> | string | null
    repliedAt?: DateTimeNullableFilter<"Aspiration"> | Date | string | null
    repliedById?: StringNullableFilter<"Aspiration"> | string | null
    createdAt?: DateTimeFilter<"Aspiration"> | Date | string
    updatedAt?: DateTimeFilter<"Aspiration"> | Date | string
    category?: XOR<AspirationCategoryNullableScalarRelationFilter, AspirationCategoryWhereInput> | null
    repliedBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type AspirationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    status?: SortOrder
    adminReply?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    repliedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: AspirationCategoryOrderByWithRelationInput
    repliedBy?: AdminOrderByWithRelationInput
    _relevance?: AspirationOrderByRelevanceInput
  }

  export type AspirationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AspirationWhereInput | AspirationWhereInput[]
    OR?: AspirationWhereInput[]
    NOT?: AspirationWhereInput | AspirationWhereInput[]
    name?: StringFilter<"Aspiration"> | string
    email?: StringFilter<"Aspiration"> | string
    phone?: StringNullableFilter<"Aspiration"> | string | null
    title?: StringFilter<"Aspiration"> | string
    content?: StringFilter<"Aspiration"> | string
    categoryId?: StringNullableFilter<"Aspiration"> | string | null
    status?: EnumAspirationStatusFilter<"Aspiration"> | $Enums.AspirationStatus
    adminReply?: StringNullableFilter<"Aspiration"> | string | null
    repliedAt?: DateTimeNullableFilter<"Aspiration"> | Date | string | null
    repliedById?: StringNullableFilter<"Aspiration"> | string | null
    createdAt?: DateTimeFilter<"Aspiration"> | Date | string
    updatedAt?: DateTimeFilter<"Aspiration"> | Date | string
    category?: XOR<AspirationCategoryNullableScalarRelationFilter, AspirationCategoryWhereInput> | null
    repliedBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type AspirationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    status?: SortOrder
    adminReply?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    repliedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AspirationCountOrderByAggregateInput
    _max?: AspirationMaxOrderByAggregateInput
    _min?: AspirationMinOrderByAggregateInput
  }

  export type AspirationScalarWhereWithAggregatesInput = {
    AND?: AspirationScalarWhereWithAggregatesInput | AspirationScalarWhereWithAggregatesInput[]
    OR?: AspirationScalarWhereWithAggregatesInput[]
    NOT?: AspirationScalarWhereWithAggregatesInput | AspirationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aspiration"> | string
    name?: StringWithAggregatesFilter<"Aspiration"> | string
    email?: StringWithAggregatesFilter<"Aspiration"> | string
    phone?: StringNullableWithAggregatesFilter<"Aspiration"> | string | null
    title?: StringWithAggregatesFilter<"Aspiration"> | string
    content?: StringWithAggregatesFilter<"Aspiration"> | string
    categoryId?: StringNullableWithAggregatesFilter<"Aspiration"> | string | null
    status?: EnumAspirationStatusWithAggregatesFilter<"Aspiration"> | $Enums.AspirationStatus
    adminReply?: StringNullableWithAggregatesFilter<"Aspiration"> | string | null
    repliedAt?: DateTimeNullableWithAggregatesFilter<"Aspiration"> | Date | string | null
    repliedById?: StringNullableWithAggregatesFilter<"Aspiration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Aspiration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Aspiration"> | Date | string
  }

  export type SeoMetadataWhereInput = {
    AND?: SeoMetadataWhereInput | SeoMetadataWhereInput[]
    OR?: SeoMetadataWhereInput[]
    NOT?: SeoMetadataWhereInput | SeoMetadataWhereInput[]
    id?: StringFilter<"SeoMetadata"> | string
    articleId?: StringNullableFilter<"SeoMetadata"> | string | null
    programId?: StringNullableFilter<"SeoMetadata"> | string | null
    metaTitle?: StringNullableFilter<"SeoMetadata"> | string | null
    metaDesc?: StringNullableFilter<"SeoMetadata"> | string | null
    keywords?: StringNullableFilter<"SeoMetadata"> | string | null
    ogImage?: StringNullableFilter<"SeoMetadata"> | string | null
    canonical?: StringNullableFilter<"SeoMetadata"> | string | null
    noIndex?: BoolFilter<"SeoMetadata"> | boolean
    createdAt?: DateTimeFilter<"SeoMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"SeoMetadata"> | Date | string
    article?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
    program?: XOR<FeaturedProgramNullableScalarRelationFilter, FeaturedProgramWhereInput> | null
  }

  export type SeoMetadataOrderByWithRelationInput = {
    id?: SortOrder
    articleId?: SortOrderInput | SortOrder
    programId?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDesc?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    canonical?: SortOrderInput | SortOrder
    noIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    article?: ArticleOrderByWithRelationInput
    program?: FeaturedProgramOrderByWithRelationInput
    _relevance?: SeoMetadataOrderByRelevanceInput
  }

  export type SeoMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    articleId?: string
    programId?: string
    AND?: SeoMetadataWhereInput | SeoMetadataWhereInput[]
    OR?: SeoMetadataWhereInput[]
    NOT?: SeoMetadataWhereInput | SeoMetadataWhereInput[]
    metaTitle?: StringNullableFilter<"SeoMetadata"> | string | null
    metaDesc?: StringNullableFilter<"SeoMetadata"> | string | null
    keywords?: StringNullableFilter<"SeoMetadata"> | string | null
    ogImage?: StringNullableFilter<"SeoMetadata"> | string | null
    canonical?: StringNullableFilter<"SeoMetadata"> | string | null
    noIndex?: BoolFilter<"SeoMetadata"> | boolean
    createdAt?: DateTimeFilter<"SeoMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"SeoMetadata"> | Date | string
    article?: XOR<ArticleNullableScalarRelationFilter, ArticleWhereInput> | null
    program?: XOR<FeaturedProgramNullableScalarRelationFilter, FeaturedProgramWhereInput> | null
  }, "id" | "articleId" | "programId">

  export type SeoMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    articleId?: SortOrderInput | SortOrder
    programId?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDesc?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    canonical?: SortOrderInput | SortOrder
    noIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeoMetadataCountOrderByAggregateInput
    _max?: SeoMetadataMaxOrderByAggregateInput
    _min?: SeoMetadataMinOrderByAggregateInput
  }

  export type SeoMetadataScalarWhereWithAggregatesInput = {
    AND?: SeoMetadataScalarWhereWithAggregatesInput | SeoMetadataScalarWhereWithAggregatesInput[]
    OR?: SeoMetadataScalarWhereWithAggregatesInput[]
    NOT?: SeoMetadataScalarWhereWithAggregatesInput | SeoMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SeoMetadata"> | string
    articleId?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    programId?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    metaTitle?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    metaDesc?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    canonical?: StringNullableWithAggregatesFilter<"SeoMetadata"> | string | null
    noIndex?: BoolWithAggregatesFilter<"SeoMetadata"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SeoMetadata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SeoMetadata"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    adminId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    _relevance?: ActivityLogOrderByRelevanceInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    adminId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrderInput | SortOrder
    action?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    adminId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    entity?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    description?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"ActivityLog">
    ipAddress?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationCreateNestedManyWithoutRepliedByInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationUncheckedCreateNestedManyWithoutRepliedByInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUpdateManyWithoutRepliedByNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUncheckedUpdateManyWithoutRepliedByNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    isRevoked?: boolean
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    adminId: string
    tokenHash: string
    isRevoked?: boolean
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    adminId: string
    tokenHash: string
    isRevoked?: boolean
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    fullName: string
    headline?: string | null
    bio?: string | null
    avatar?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    linkedin?: string | null
    github?: string | null
    twitter?: string | null
    instagram?: string | null
    website?: string | null
    resumeUrl?: string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    fullName: string
    headline?: string | null
    bio?: string | null
    avatar?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    linkedin?: string | null
    github?: string | null
    twitter?: string | null
    instagram?: string | null
    website?: string | null
    resumeUrl?: string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    fullName: string
    headline?: string | null
    bio?: string | null
    avatar?: string | null
    phone?: string | null
    email?: string | null
    address?: string | null
    linkedin?: string | null
    github?: string | null
    twitter?: string | null
    instagram?: string | null
    website?: string | null
    resumeUrl?: string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    resumeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    articles?: ArticleUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    articles?: ArticleUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    author: AdminCreateNestedOneWithoutArticlesInput
    category?: CategoryCreateNestedOneWithoutArticlesInput
    seoMetadata?: SeoMetadataCreateNestedOneWithoutArticleInput
  }

  export type ArticleUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    authorId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    seoMetadata?: SeoMetadataUncheckedCreateNestedOneWithoutArticleInput
  }

  export type ArticleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AdminUpdateOneRequiredWithoutArticlesNestedInput
    category?: CategoryUpdateOneWithoutArticlesNestedInput
    seoMetadata?: SeoMetadataUpdateOneWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoMetadata?: SeoMetadataUncheckedUpdateOneWithoutArticleNestedInput
  }

  export type ArticleCreateManyInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    authorId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ArticleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeaturedProgramCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    galleries?: ProgramGalleryCreateNestedManyWithoutProgramInput
    seoMetadata?: SeoMetadataCreateNestedOneWithoutProgramInput
  }

  export type FeaturedProgramUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    galleries?: ProgramGalleryUncheckedCreateNestedManyWithoutProgramInput
    seoMetadata?: SeoMetadataUncheckedCreateNestedOneWithoutProgramInput
  }

  export type FeaturedProgramUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    galleries?: ProgramGalleryUpdateManyWithoutProgramNestedInput
    seoMetadata?: SeoMetadataUpdateOneWithoutProgramNestedInput
  }

  export type FeaturedProgramUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    galleries?: ProgramGalleryUncheckedUpdateManyWithoutProgramNestedInput
    seoMetadata?: SeoMetadataUncheckedUpdateOneWithoutProgramNestedInput
  }

  export type FeaturedProgramCreateManyInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type FeaturedProgramUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeaturedProgramUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramGalleryCreateInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    orderIndex?: number
    createdAt?: Date | string
    program: FeaturedProgramCreateNestedOneWithoutGalleriesInput
  }

  export type ProgramGalleryUncheckedCreateInput = {
    id?: string
    programId: string
    imageUrl: string
    caption?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type ProgramGalleryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: FeaturedProgramUpdateOneRequiredWithoutGalleriesNestedInput
  }

  export type ProgramGalleryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramGalleryCreateManyInput = {
    id?: string
    programId: string
    imageUrl: string
    caption?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type ProgramGalleryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramGalleryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationCategoryCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirations?: AspirationCreateNestedManyWithoutCategoryInput
  }

  export type AspirationCategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aspirations?: AspirationUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type AspirationCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirations?: AspirationUpdateManyWithoutCategoryNestedInput
  }

  export type AspirationCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aspirations?: AspirationUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AspirationCategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: AspirationCategoryCreateNestedOneWithoutAspirationsInput
    repliedBy?: AdminCreateNestedOneWithoutRepliedAspirationsInput
  }

  export type AspirationUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    categoryId?: string | null
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: AspirationCategoryUpdateOneWithoutAspirationsNestedInput
    repliedBy?: AdminUpdateOneWithoutRepliedAspirationsNestedInput
  }

  export type AspirationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    categoryId?: string | null
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetadataCreateInput = {
    id?: string
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedOneWithoutSeoMetadataInput
    program?: FeaturedProgramCreateNestedOneWithoutSeoMetadataInput
  }

  export type SeoMetadataUncheckedCreateInput = {
    id?: string
    articleId?: string | null
    programId?: string | null
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneWithoutSeoMetadataNestedInput
    program?: FeaturedProgramUpdateOneWithoutSeoMetadataNestedInput
  }

  export type SeoMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetadataCreateManyInput = {
    id?: string
    articleId?: string | null
    programId?: string | null
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    admin?: AdminCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    adminId?: string | null
    action: string
    entity?: string | null
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    adminId?: string | null
    action: string
    entity?: string | null
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ArticleListRelationFilter = {
    every?: ArticleWhereInput
    some?: ArticleWhereInput
    none?: ArticleWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type AspirationListRelationFilter = {
    every?: AspirationWhereInput
    some?: AspirationWhereInput
    none?: AspirationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AspirationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    tokenHash?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    tokenHash?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    tokenHash?: SortOrder
    isRevoked?: SortOrder
    expiresAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProfileOrderByRelevanceInput = {
    fields: ProfileOrderByRelevanceFieldEnum | ProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    instagram?: SortOrder
    website?: SortOrder
    resumeUrl?: SortOrder
    skills?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    instagram?: SortOrder
    website?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    headline?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    twitter?: SortOrder
    instagram?: SortOrder
    website?: SortOrder
    resumeUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type SeoMetadataNullableScalarRelationFilter = {
    is?: SeoMetadataWhereInput | null
    isNot?: SeoMetadataWhereInput | null
  }

  export type ArticleOrderByRelevanceInput = {
    fields: ArticleOrderByRelevanceFieldEnum | ArticleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArticleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrder
    scheduledAt?: SortOrder
    viewCount?: SortOrder
    readingTime?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticleAvgOrderByAggregateInput = {
    viewCount?: SortOrder
    readingTime?: SortOrder
  }

  export type ArticleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrder
    scheduledAt?: SortOrder
    viewCount?: SortOrder
    readingTime?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    isFeatured?: SortOrder
    publishedAt?: SortOrder
    scheduledAt?: SortOrder
    viewCount?: SortOrder
    readingTime?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ArticleSumOrderByAggregateInput = {
    viewCount?: SortOrder
    readingTime?: SortOrder
  }

  export type EnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumProgramStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[]
    notIn?: $Enums.ProgramStatus[]
    not?: NestedEnumProgramStatusFilter<$PrismaModel> | $Enums.ProgramStatus
  }

  export type ProgramGalleryListRelationFilter = {
    every?: ProgramGalleryWhereInput
    some?: ProgramGalleryWhereInput
    none?: ProgramGalleryWhereInput
  }

  export type ProgramGalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeaturedProgramOrderByRelevanceInput = {
    fields: FeaturedProgramOrderByRelevanceFieldEnum | FeaturedProgramOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FeaturedProgramCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    isHighlight?: SortOrder
    orderIndex?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FeaturedProgramAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type FeaturedProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    isHighlight?: SortOrder
    orderIndex?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FeaturedProgramMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    content?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    isHighlight?: SortOrder
    orderIndex?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type FeaturedProgramSumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type EnumProgramStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[]
    notIn?: $Enums.ProgramStatus[]
    not?: NestedEnumProgramStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgramStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramStatusFilter<$PrismaModel>
    _max?: NestedEnumProgramStatusFilter<$PrismaModel>
  }

  export type FeaturedProgramScalarRelationFilter = {
    is?: FeaturedProgramWhereInput
    isNot?: FeaturedProgramWhereInput
  }

  export type ProgramGalleryOrderByRelevanceInput = {
    fields: ProgramGalleryOrderByRelevanceFieldEnum | ProgramGalleryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramGalleryAvgOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type ProgramGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    imageUrl?: SortOrder
    caption?: SortOrder
    orderIndex?: SortOrder
    createdAt?: SortOrder
  }

  export type ProgramGallerySumOrderByAggregateInput = {
    orderIndex?: SortOrder
  }

  export type AspirationCategoryOrderByRelevanceInput = {
    fields: AspirationCategoryOrderByRelevanceFieldEnum | AspirationCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AspirationCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AspirationCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AspirationCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAspirationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AspirationStatus | EnumAspirationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AspirationStatus[]
    notIn?: $Enums.AspirationStatus[]
    not?: NestedEnumAspirationStatusFilter<$PrismaModel> | $Enums.AspirationStatus
  }

  export type AspirationCategoryNullableScalarRelationFilter = {
    is?: AspirationCategoryWhereInput | null
    isNot?: AspirationCategoryWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type AspirationOrderByRelevanceInput = {
    fields: AspirationOrderByRelevanceFieldEnum | AspirationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AspirationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    title?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    adminReply?: SortOrder
    repliedAt?: SortOrder
    repliedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AspirationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    title?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    adminReply?: SortOrder
    repliedAt?: SortOrder
    repliedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AspirationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    title?: SortOrder
    content?: SortOrder
    categoryId?: SortOrder
    status?: SortOrder
    adminReply?: SortOrder
    repliedAt?: SortOrder
    repliedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAspirationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AspirationStatus | EnumAspirationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AspirationStatus[]
    notIn?: $Enums.AspirationStatus[]
    not?: NestedEnumAspirationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AspirationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAspirationStatusFilter<$PrismaModel>
    _max?: NestedEnumAspirationStatusFilter<$PrismaModel>
  }

  export type ArticleNullableScalarRelationFilter = {
    is?: ArticleWhereInput | null
    isNot?: ArticleWhereInput | null
  }

  export type FeaturedProgramNullableScalarRelationFilter = {
    is?: FeaturedProgramWhereInput | null
    isNot?: FeaturedProgramWhereInput | null
  }

  export type SeoMetadataOrderByRelevanceInput = {
    fields: SeoMetadataOrderByRelevanceFieldEnum | SeoMetadataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeoMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    programId?: SortOrder
    metaTitle?: SortOrder
    metaDesc?: SortOrder
    keywords?: SortOrder
    ogImage?: SortOrder
    canonical?: SortOrder
    noIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    programId?: SortOrder
    metaTitle?: SortOrder
    metaDesc?: SortOrder
    keywords?: SortOrder
    ogImage?: SortOrder
    canonical?: SortOrder
    noIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeoMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    articleId?: SortOrder
    programId?: SortOrder
    metaTitle?: SortOrder
    metaDesc?: SortOrder
    keywords?: SortOrder
    ogImage?: SortOrder
    canonical?: SortOrder
    noIndex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActivityLogOrderByRelevanceInput = {
    fields: ActivityLogOrderByRelevanceFieldEnum | ActivityLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    createdAt?: SortOrder
  }

  export type ArticleCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutAdminInput = {
    create?: XOR<RefreshTokenCreateWithoutAdminInput, RefreshTokenUncheckedCreateWithoutAdminInput> | RefreshTokenCreateWithoutAdminInput[] | RefreshTokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAdminInput | RefreshTokenCreateOrConnectWithoutAdminInput[]
    createMany?: RefreshTokenCreateManyAdminInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type AspirationCreateNestedManyWithoutRepliedByInput = {
    create?: XOR<AspirationCreateWithoutRepliedByInput, AspirationUncheckedCreateWithoutRepliedByInput> | AspirationCreateWithoutRepliedByInput[] | AspirationUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutRepliedByInput | AspirationCreateOrConnectWithoutRepliedByInput[]
    createMany?: AspirationCreateManyRepliedByInputEnvelope
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<RefreshTokenCreateWithoutAdminInput, RefreshTokenUncheckedCreateWithoutAdminInput> | RefreshTokenCreateWithoutAdminInput[] | RefreshTokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAdminInput | RefreshTokenCreateOrConnectWithoutAdminInput[]
    createMany?: RefreshTokenCreateManyAdminInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type AspirationUncheckedCreateNestedManyWithoutRepliedByInput = {
    create?: XOR<AspirationCreateWithoutRepliedByInput, AspirationUncheckedCreateWithoutRepliedByInput> | AspirationCreateWithoutRepliedByInput[] | AspirationUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutRepliedByInput | AspirationCreateOrConnectWithoutRepliedByInput[]
    createMany?: AspirationCreateManyRepliedByInputEnvelope
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ArticleUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput | ArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutAdminInput, RefreshTokenUncheckedCreateWithoutAdminInput> | RefreshTokenCreateWithoutAdminInput[] | RefreshTokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAdminInput | RefreshTokenCreateOrConnectWithoutAdminInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutAdminInput | RefreshTokenUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RefreshTokenCreateManyAdminInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutAdminInput | RefreshTokenUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutAdminInput | RefreshTokenUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAdminInput | ActivityLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAdminInput | ActivityLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAdminInput | ActivityLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type AspirationUpdateManyWithoutRepliedByNestedInput = {
    create?: XOR<AspirationCreateWithoutRepliedByInput, AspirationUncheckedCreateWithoutRepliedByInput> | AspirationCreateWithoutRepliedByInput[] | AspirationUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutRepliedByInput | AspirationCreateOrConnectWithoutRepliedByInput[]
    upsert?: AspirationUpsertWithWhereUniqueWithoutRepliedByInput | AspirationUpsertWithWhereUniqueWithoutRepliedByInput[]
    createMany?: AspirationCreateManyRepliedByInputEnvelope
    set?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    disconnect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    delete?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    update?: AspirationUpdateWithWhereUniqueWithoutRepliedByInput | AspirationUpdateWithWhereUniqueWithoutRepliedByInput[]
    updateMany?: AspirationUpdateManyWithWhereWithoutRepliedByInput | AspirationUpdateManyWithWhereWithoutRepliedByInput[]
    deleteMany?: AspirationScalarWhereInput | AspirationScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput> | ArticleCreateWithoutAuthorInput[] | ArticleUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutAuthorInput | ArticleCreateOrConnectWithoutAuthorInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutAuthorInput | ArticleUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ArticleCreateManyAuthorInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutAuthorInput | ArticleUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutAuthorInput | ArticleUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutAdminInput, RefreshTokenUncheckedCreateWithoutAdminInput> | RefreshTokenCreateWithoutAdminInput[] | RefreshTokenUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutAdminInput | RefreshTokenCreateOrConnectWithoutAdminInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutAdminInput | RefreshTokenUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RefreshTokenCreateManyAdminInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutAdminInput | RefreshTokenUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutAdminInput | RefreshTokenUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAdminInput | ActivityLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAdminInput | ActivityLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAdminInput | ActivityLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type AspirationUncheckedUpdateManyWithoutRepliedByNestedInput = {
    create?: XOR<AspirationCreateWithoutRepliedByInput, AspirationUncheckedCreateWithoutRepliedByInput> | AspirationCreateWithoutRepliedByInput[] | AspirationUncheckedCreateWithoutRepliedByInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutRepliedByInput | AspirationCreateOrConnectWithoutRepliedByInput[]
    upsert?: AspirationUpsertWithWhereUniqueWithoutRepliedByInput | AspirationUpsertWithWhereUniqueWithoutRepliedByInput[]
    createMany?: AspirationCreateManyRepliedByInputEnvelope
    set?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    disconnect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    delete?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    update?: AspirationUpdateWithWhereUniqueWithoutRepliedByInput | AspirationUpdateWithWhereUniqueWithoutRepliedByInput[]
    updateMany?: AspirationUpdateManyWithWhereWithoutRepliedByInput | AspirationUpdateManyWithWhereWithoutRepliedByInput[]
    deleteMany?: AspirationScalarWhereInput | AspirationScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<AdminCreateWithoutRefreshTokensInput, AdminUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRefreshTokensInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<AdminCreateWithoutRefreshTokensInput, AdminUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRefreshTokensInput
    upsert?: AdminUpsertWithoutRefreshTokensInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutRefreshTokensInput, AdminUpdateWithoutRefreshTokensInput>, AdminUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type ArticleCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
  }

  export type ArticleUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutCategoryInput | ArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutCategoryInput | ArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutCategoryInput | ArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type ArticleUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput> | ArticleCreateWithoutCategoryInput[] | ArticleUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ArticleCreateOrConnectWithoutCategoryInput | ArticleCreateOrConnectWithoutCategoryInput[]
    upsert?: ArticleUpsertWithWhereUniqueWithoutCategoryInput | ArticleUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ArticleCreateManyCategoryInputEnvelope
    set?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    disconnect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    delete?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    connect?: ArticleWhereUniqueInput | ArticleWhereUniqueInput[]
    update?: ArticleUpdateWithWhereUniqueWithoutCategoryInput | ArticleUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ArticleUpdateManyWithWhereWithoutCategoryInput | ArticleUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutArticlesInput = {
    create?: XOR<AdminCreateWithoutArticlesInput, AdminUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutArticlesInput
    connect?: AdminWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutArticlesInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    connect?: CategoryWhereUniqueInput
  }

  export type SeoMetadataCreateNestedOneWithoutArticleInput = {
    create?: XOR<SeoMetadataCreateWithoutArticleInput, SeoMetadataUncheckedCreateWithoutArticleInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutArticleInput
    connect?: SeoMetadataWhereUniqueInput
  }

  export type SeoMetadataUncheckedCreateNestedOneWithoutArticleInput = {
    create?: XOR<SeoMetadataCreateWithoutArticleInput, SeoMetadataUncheckedCreateWithoutArticleInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutArticleInput
    connect?: SeoMetadataWhereUniqueInput
  }

  export type EnumArticleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ArticleStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<AdminCreateWithoutArticlesInput, AdminUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutArticlesInput
    upsert?: AdminUpsertWithoutArticlesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutArticlesInput, AdminUpdateWithoutArticlesInput>, AdminUncheckedUpdateWithoutArticlesInput>
  }

  export type CategoryUpdateOneWithoutArticlesNestedInput = {
    create?: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutArticlesInput
    upsert?: CategoryUpsertWithoutArticlesInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutArticlesInput, CategoryUpdateWithoutArticlesInput>, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type SeoMetadataUpdateOneWithoutArticleNestedInput = {
    create?: XOR<SeoMetadataCreateWithoutArticleInput, SeoMetadataUncheckedCreateWithoutArticleInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutArticleInput
    upsert?: SeoMetadataUpsertWithoutArticleInput
    disconnect?: SeoMetadataWhereInput | boolean
    delete?: SeoMetadataWhereInput | boolean
    connect?: SeoMetadataWhereUniqueInput
    update?: XOR<XOR<SeoMetadataUpdateToOneWithWhereWithoutArticleInput, SeoMetadataUpdateWithoutArticleInput>, SeoMetadataUncheckedUpdateWithoutArticleInput>
  }

  export type SeoMetadataUncheckedUpdateOneWithoutArticleNestedInput = {
    create?: XOR<SeoMetadataCreateWithoutArticleInput, SeoMetadataUncheckedCreateWithoutArticleInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutArticleInput
    upsert?: SeoMetadataUpsertWithoutArticleInput
    disconnect?: SeoMetadataWhereInput | boolean
    delete?: SeoMetadataWhereInput | boolean
    connect?: SeoMetadataWhereUniqueInput
    update?: XOR<XOR<SeoMetadataUpdateToOneWithWhereWithoutArticleInput, SeoMetadataUpdateWithoutArticleInput>, SeoMetadataUncheckedUpdateWithoutArticleInput>
  }

  export type ProgramGalleryCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramGalleryCreateWithoutProgramInput, ProgramGalleryUncheckedCreateWithoutProgramInput> | ProgramGalleryCreateWithoutProgramInput[] | ProgramGalleryUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramGalleryCreateOrConnectWithoutProgramInput | ProgramGalleryCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramGalleryCreateManyProgramInputEnvelope
    connect?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
  }

  export type SeoMetadataCreateNestedOneWithoutProgramInput = {
    create?: XOR<SeoMetadataCreateWithoutProgramInput, SeoMetadataUncheckedCreateWithoutProgramInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutProgramInput
    connect?: SeoMetadataWhereUniqueInput
  }

  export type ProgramGalleryUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<ProgramGalleryCreateWithoutProgramInput, ProgramGalleryUncheckedCreateWithoutProgramInput> | ProgramGalleryCreateWithoutProgramInput[] | ProgramGalleryUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramGalleryCreateOrConnectWithoutProgramInput | ProgramGalleryCreateOrConnectWithoutProgramInput[]
    createMany?: ProgramGalleryCreateManyProgramInputEnvelope
    connect?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
  }

  export type SeoMetadataUncheckedCreateNestedOneWithoutProgramInput = {
    create?: XOR<SeoMetadataCreateWithoutProgramInput, SeoMetadataUncheckedCreateWithoutProgramInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutProgramInput
    connect?: SeoMetadataWhereUniqueInput
  }

  export type EnumProgramStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProgramStatus
  }

  export type ProgramGalleryUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramGalleryCreateWithoutProgramInput, ProgramGalleryUncheckedCreateWithoutProgramInput> | ProgramGalleryCreateWithoutProgramInput[] | ProgramGalleryUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramGalleryCreateOrConnectWithoutProgramInput | ProgramGalleryCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramGalleryUpsertWithWhereUniqueWithoutProgramInput | ProgramGalleryUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramGalleryCreateManyProgramInputEnvelope
    set?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    disconnect?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    delete?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    connect?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    update?: ProgramGalleryUpdateWithWhereUniqueWithoutProgramInput | ProgramGalleryUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramGalleryUpdateManyWithWhereWithoutProgramInput | ProgramGalleryUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramGalleryScalarWhereInput | ProgramGalleryScalarWhereInput[]
  }

  export type SeoMetadataUpdateOneWithoutProgramNestedInput = {
    create?: XOR<SeoMetadataCreateWithoutProgramInput, SeoMetadataUncheckedCreateWithoutProgramInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutProgramInput
    upsert?: SeoMetadataUpsertWithoutProgramInput
    disconnect?: SeoMetadataWhereInput | boolean
    delete?: SeoMetadataWhereInput | boolean
    connect?: SeoMetadataWhereUniqueInput
    update?: XOR<XOR<SeoMetadataUpdateToOneWithWhereWithoutProgramInput, SeoMetadataUpdateWithoutProgramInput>, SeoMetadataUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramGalleryUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<ProgramGalleryCreateWithoutProgramInput, ProgramGalleryUncheckedCreateWithoutProgramInput> | ProgramGalleryCreateWithoutProgramInput[] | ProgramGalleryUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: ProgramGalleryCreateOrConnectWithoutProgramInput | ProgramGalleryCreateOrConnectWithoutProgramInput[]
    upsert?: ProgramGalleryUpsertWithWhereUniqueWithoutProgramInput | ProgramGalleryUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: ProgramGalleryCreateManyProgramInputEnvelope
    set?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    disconnect?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    delete?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    connect?: ProgramGalleryWhereUniqueInput | ProgramGalleryWhereUniqueInput[]
    update?: ProgramGalleryUpdateWithWhereUniqueWithoutProgramInput | ProgramGalleryUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: ProgramGalleryUpdateManyWithWhereWithoutProgramInput | ProgramGalleryUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: ProgramGalleryScalarWhereInput | ProgramGalleryScalarWhereInput[]
  }

  export type SeoMetadataUncheckedUpdateOneWithoutProgramNestedInput = {
    create?: XOR<SeoMetadataCreateWithoutProgramInput, SeoMetadataUncheckedCreateWithoutProgramInput>
    connectOrCreate?: SeoMetadataCreateOrConnectWithoutProgramInput
    upsert?: SeoMetadataUpsertWithoutProgramInput
    disconnect?: SeoMetadataWhereInput | boolean
    delete?: SeoMetadataWhereInput | boolean
    connect?: SeoMetadataWhereUniqueInput
    update?: XOR<XOR<SeoMetadataUpdateToOneWithWhereWithoutProgramInput, SeoMetadataUpdateWithoutProgramInput>, SeoMetadataUncheckedUpdateWithoutProgramInput>
  }

  export type FeaturedProgramCreateNestedOneWithoutGalleriesInput = {
    create?: XOR<FeaturedProgramCreateWithoutGalleriesInput, FeaturedProgramUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: FeaturedProgramCreateOrConnectWithoutGalleriesInput
    connect?: FeaturedProgramWhereUniqueInput
  }

  export type FeaturedProgramUpdateOneRequiredWithoutGalleriesNestedInput = {
    create?: XOR<FeaturedProgramCreateWithoutGalleriesInput, FeaturedProgramUncheckedCreateWithoutGalleriesInput>
    connectOrCreate?: FeaturedProgramCreateOrConnectWithoutGalleriesInput
    upsert?: FeaturedProgramUpsertWithoutGalleriesInput
    connect?: FeaturedProgramWhereUniqueInput
    update?: XOR<XOR<FeaturedProgramUpdateToOneWithWhereWithoutGalleriesInput, FeaturedProgramUpdateWithoutGalleriesInput>, FeaturedProgramUncheckedUpdateWithoutGalleriesInput>
  }

  export type AspirationCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AspirationCreateWithoutCategoryInput, AspirationUncheckedCreateWithoutCategoryInput> | AspirationCreateWithoutCategoryInput[] | AspirationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutCategoryInput | AspirationCreateOrConnectWithoutCategoryInput[]
    createMany?: AspirationCreateManyCategoryInputEnvelope
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
  }

  export type AspirationUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AspirationCreateWithoutCategoryInput, AspirationUncheckedCreateWithoutCategoryInput> | AspirationCreateWithoutCategoryInput[] | AspirationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutCategoryInput | AspirationCreateOrConnectWithoutCategoryInput[]
    createMany?: AspirationCreateManyCategoryInputEnvelope
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
  }

  export type AspirationUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AspirationCreateWithoutCategoryInput, AspirationUncheckedCreateWithoutCategoryInput> | AspirationCreateWithoutCategoryInput[] | AspirationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutCategoryInput | AspirationCreateOrConnectWithoutCategoryInput[]
    upsert?: AspirationUpsertWithWhereUniqueWithoutCategoryInput | AspirationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AspirationCreateManyCategoryInputEnvelope
    set?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    disconnect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    delete?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    update?: AspirationUpdateWithWhereUniqueWithoutCategoryInput | AspirationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AspirationUpdateManyWithWhereWithoutCategoryInput | AspirationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AspirationScalarWhereInput | AspirationScalarWhereInput[]
  }

  export type AspirationUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AspirationCreateWithoutCategoryInput, AspirationUncheckedCreateWithoutCategoryInput> | AspirationCreateWithoutCategoryInput[] | AspirationUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AspirationCreateOrConnectWithoutCategoryInput | AspirationCreateOrConnectWithoutCategoryInput[]
    upsert?: AspirationUpsertWithWhereUniqueWithoutCategoryInput | AspirationUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AspirationCreateManyCategoryInputEnvelope
    set?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    disconnect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    delete?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    connect?: AspirationWhereUniqueInput | AspirationWhereUniqueInput[]
    update?: AspirationUpdateWithWhereUniqueWithoutCategoryInput | AspirationUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AspirationUpdateManyWithWhereWithoutCategoryInput | AspirationUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AspirationScalarWhereInput | AspirationScalarWhereInput[]
  }

  export type AspirationCategoryCreateNestedOneWithoutAspirationsInput = {
    create?: XOR<AspirationCategoryCreateWithoutAspirationsInput, AspirationCategoryUncheckedCreateWithoutAspirationsInput>
    connectOrCreate?: AspirationCategoryCreateOrConnectWithoutAspirationsInput
    connect?: AspirationCategoryWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutRepliedAspirationsInput = {
    create?: XOR<AdminCreateWithoutRepliedAspirationsInput, AdminUncheckedCreateWithoutRepliedAspirationsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRepliedAspirationsInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumAspirationStatusFieldUpdateOperationsInput = {
    set?: $Enums.AspirationStatus
  }

  export type AspirationCategoryUpdateOneWithoutAspirationsNestedInput = {
    create?: XOR<AspirationCategoryCreateWithoutAspirationsInput, AspirationCategoryUncheckedCreateWithoutAspirationsInput>
    connectOrCreate?: AspirationCategoryCreateOrConnectWithoutAspirationsInput
    upsert?: AspirationCategoryUpsertWithoutAspirationsInput
    disconnect?: AspirationCategoryWhereInput | boolean
    delete?: AspirationCategoryWhereInput | boolean
    connect?: AspirationCategoryWhereUniqueInput
    update?: XOR<XOR<AspirationCategoryUpdateToOneWithWhereWithoutAspirationsInput, AspirationCategoryUpdateWithoutAspirationsInput>, AspirationCategoryUncheckedUpdateWithoutAspirationsInput>
  }

  export type AdminUpdateOneWithoutRepliedAspirationsNestedInput = {
    create?: XOR<AdminCreateWithoutRepliedAspirationsInput, AdminUncheckedCreateWithoutRepliedAspirationsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutRepliedAspirationsInput
    upsert?: AdminUpsertWithoutRepliedAspirationsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutRepliedAspirationsInput, AdminUpdateWithoutRepliedAspirationsInput>, AdminUncheckedUpdateWithoutRepliedAspirationsInput>
  }

  export type ArticleCreateNestedOneWithoutSeoMetadataInput = {
    create?: XOR<ArticleCreateWithoutSeoMetadataInput, ArticleUncheckedCreateWithoutSeoMetadataInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutSeoMetadataInput
    connect?: ArticleWhereUniqueInput
  }

  export type FeaturedProgramCreateNestedOneWithoutSeoMetadataInput = {
    create?: XOR<FeaturedProgramCreateWithoutSeoMetadataInput, FeaturedProgramUncheckedCreateWithoutSeoMetadataInput>
    connectOrCreate?: FeaturedProgramCreateOrConnectWithoutSeoMetadataInput
    connect?: FeaturedProgramWhereUniqueInput
  }

  export type ArticleUpdateOneWithoutSeoMetadataNestedInput = {
    create?: XOR<ArticleCreateWithoutSeoMetadataInput, ArticleUncheckedCreateWithoutSeoMetadataInput>
    connectOrCreate?: ArticleCreateOrConnectWithoutSeoMetadataInput
    upsert?: ArticleUpsertWithoutSeoMetadataInput
    disconnect?: ArticleWhereInput | boolean
    delete?: ArticleWhereInput | boolean
    connect?: ArticleWhereUniqueInput
    update?: XOR<XOR<ArticleUpdateToOneWithWhereWithoutSeoMetadataInput, ArticleUpdateWithoutSeoMetadataInput>, ArticleUncheckedUpdateWithoutSeoMetadataInput>
  }

  export type FeaturedProgramUpdateOneWithoutSeoMetadataNestedInput = {
    create?: XOR<FeaturedProgramCreateWithoutSeoMetadataInput, FeaturedProgramUncheckedCreateWithoutSeoMetadataInput>
    connectOrCreate?: FeaturedProgramCreateOrConnectWithoutSeoMetadataInput
    upsert?: FeaturedProgramUpsertWithoutSeoMetadataInput
    disconnect?: FeaturedProgramWhereInput | boolean
    delete?: FeaturedProgramWhereInput | boolean
    connect?: FeaturedProgramWhereUniqueInput
    update?: XOR<XOR<FeaturedProgramUpdateToOneWithWhereWithoutSeoMetadataInput, FeaturedProgramUpdateWithoutSeoMetadataInput>, FeaturedProgramUncheckedUpdateWithoutSeoMetadataInput>
  }

  export type AdminCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivityLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutActivityLogsNestedInput = {
    create?: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivityLogsInput
    upsert?: AdminUpsertWithoutActivityLogsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutActivityLogsInput, AdminUpdateWithoutActivityLogsInput>, AdminUncheckedUpdateWithoutActivityLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumArticleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusFilter<$PrismaModel> | $Enums.ArticleStatus
  }

  export type NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ArticleStatus | EnumArticleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ArticleStatus[]
    notIn?: $Enums.ArticleStatus[]
    not?: NestedEnumArticleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ArticleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumArticleStatusFilter<$PrismaModel>
    _max?: NestedEnumArticleStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumProgramStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[]
    notIn?: $Enums.ProgramStatus[]
    not?: NestedEnumProgramStatusFilter<$PrismaModel> | $Enums.ProgramStatus
  }

  export type NestedEnumProgramStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProgramStatus | EnumProgramStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProgramStatus[]
    notIn?: $Enums.ProgramStatus[]
    not?: NestedEnumProgramStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProgramStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProgramStatusFilter<$PrismaModel>
    _max?: NestedEnumProgramStatusFilter<$PrismaModel>
  }

  export type NestedEnumAspirationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AspirationStatus | EnumAspirationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AspirationStatus[]
    notIn?: $Enums.AspirationStatus[]
    not?: NestedEnumAspirationStatusFilter<$PrismaModel> | $Enums.AspirationStatus
  }

  export type NestedEnumAspirationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AspirationStatus | EnumAspirationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AspirationStatus[]
    notIn?: $Enums.AspirationStatus[]
    not?: NestedEnumAspirationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AspirationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAspirationStatusFilter<$PrismaModel>
    _max?: NestedEnumAspirationStatusFilter<$PrismaModel>
  }

  export type ArticleCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    category?: CategoryCreateNestedOneWithoutArticlesInput
    seoMetadata?: SeoMetadataCreateNestedOneWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    seoMetadata?: SeoMetadataUncheckedCreateNestedOneWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleCreateManyAuthorInputEnvelope = {
    data: ArticleCreateManyAuthorInput | ArticleCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutAdminInput = {
    id?: string
    tokenHash: string
    isRevoked?: boolean
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutAdminInput = {
    id?: string
    tokenHash: string
    isRevoked?: boolean
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutAdminInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutAdminInput, RefreshTokenUncheckedCreateWithoutAdminInput>
  }

  export type RefreshTokenCreateManyAdminInputEnvelope = {
    data: RefreshTokenCreateManyAdminInput | RefreshTokenCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutAdminInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutAdminInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput>
  }

  export type ActivityLogCreateManyAdminInputEnvelope = {
    data: ActivityLogCreateManyAdminInput | ActivityLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type AspirationCreateWithoutRepliedByInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: AspirationCategoryCreateNestedOneWithoutAspirationsInput
  }

  export type AspirationUncheckedCreateWithoutRepliedByInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    categoryId?: string | null
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationCreateOrConnectWithoutRepliedByInput = {
    where: AspirationWhereUniqueInput
    create: XOR<AspirationCreateWithoutRepliedByInput, AspirationUncheckedCreateWithoutRepliedByInput>
  }

  export type AspirationCreateManyRepliedByInputEnvelope = {
    data: AspirationCreateManyRepliedByInput | AspirationCreateManyRepliedByInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
    create: XOR<ArticleCreateWithoutAuthorInput, ArticleUncheckedCreateWithoutAuthorInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutAuthorInput, ArticleUncheckedUpdateWithoutAuthorInput>
  }

  export type ArticleUpdateManyWithWhereWithoutAuthorInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ArticleScalarWhereInput = {
    AND?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    OR?: ArticleScalarWhereInput[]
    NOT?: ArticleScalarWhereInput | ArticleScalarWhereInput[]
    id?: StringFilter<"Article"> | string
    title?: StringFilter<"Article"> | string
    slug?: StringFilter<"Article"> | string
    content?: StringFilter<"Article"> | string
    excerpt?: StringNullableFilter<"Article"> | string | null
    thumbnail?: StringNullableFilter<"Article"> | string | null
    status?: EnumArticleStatusFilter<"Article"> | $Enums.ArticleStatus
    isFeatured?: BoolFilter<"Article"> | boolean
    publishedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    scheduledAt?: DateTimeNullableFilter<"Article"> | Date | string | null
    viewCount?: IntFilter<"Article"> | number
    readingTime?: IntFilter<"Article"> | number
    authorId?: StringFilter<"Article"> | string
    categoryId?: StringNullableFilter<"Article"> | string | null
    createdAt?: DateTimeFilter<"Article"> | Date | string
    updatedAt?: DateTimeFilter<"Article"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Article"> | Date | string | null
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutAdminInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutAdminInput, RefreshTokenUncheckedUpdateWithoutAdminInput>
    create: XOR<RefreshTokenCreateWithoutAdminInput, RefreshTokenUncheckedCreateWithoutAdminInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutAdminInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutAdminInput, RefreshTokenUncheckedUpdateWithoutAdminInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutAdminInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutAdminInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    adminId?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    isRevoked?: BoolFilter<"RefreshToken"> | boolean
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    ipAddress?: StringNullableFilter<"RefreshToken"> | string | null
    userAgent?: StringNullableFilter<"RefreshToken"> | string | null
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutAdminInput, ActivityLogUncheckedUpdateWithoutAdminInput>
    create: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutAdminInput, ActivityLogUncheckedUpdateWithoutAdminInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutAdminInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    adminId?: StringNullableFilter<"ActivityLog"> | string | null
    action?: StringFilter<"ActivityLog"> | string
    entity?: StringNullableFilter<"ActivityLog"> | string | null
    entityId?: StringNullableFilter<"ActivityLog"> | string | null
    description?: StringNullableFilter<"ActivityLog"> | string | null
    metadata?: JsonNullableFilter<"ActivityLog">
    ipAddress?: StringNullableFilter<"ActivityLog"> | string | null
    userAgent?: StringNullableFilter<"ActivityLog"> | string | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type AspirationUpsertWithWhereUniqueWithoutRepliedByInput = {
    where: AspirationWhereUniqueInput
    update: XOR<AspirationUpdateWithoutRepliedByInput, AspirationUncheckedUpdateWithoutRepliedByInput>
    create: XOR<AspirationCreateWithoutRepliedByInput, AspirationUncheckedCreateWithoutRepliedByInput>
  }

  export type AspirationUpdateWithWhereUniqueWithoutRepliedByInput = {
    where: AspirationWhereUniqueInput
    data: XOR<AspirationUpdateWithoutRepliedByInput, AspirationUncheckedUpdateWithoutRepliedByInput>
  }

  export type AspirationUpdateManyWithWhereWithoutRepliedByInput = {
    where: AspirationScalarWhereInput
    data: XOR<AspirationUpdateManyMutationInput, AspirationUncheckedUpdateManyWithoutRepliedByInput>
  }

  export type AspirationScalarWhereInput = {
    AND?: AspirationScalarWhereInput | AspirationScalarWhereInput[]
    OR?: AspirationScalarWhereInput[]
    NOT?: AspirationScalarWhereInput | AspirationScalarWhereInput[]
    id?: StringFilter<"Aspiration"> | string
    name?: StringFilter<"Aspiration"> | string
    email?: StringFilter<"Aspiration"> | string
    phone?: StringNullableFilter<"Aspiration"> | string | null
    title?: StringFilter<"Aspiration"> | string
    content?: StringFilter<"Aspiration"> | string
    categoryId?: StringNullableFilter<"Aspiration"> | string | null
    status?: EnumAspirationStatusFilter<"Aspiration"> | $Enums.AspirationStatus
    adminReply?: StringNullableFilter<"Aspiration"> | string | null
    repliedAt?: DateTimeNullableFilter<"Aspiration"> | Date | string | null
    repliedById?: StringNullableFilter<"Aspiration"> | string | null
    createdAt?: DateTimeFilter<"Aspiration"> | Date | string
    updatedAt?: DateTimeFilter<"Aspiration"> | Date | string
  }

  export type AdminCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationCreateNestedManyWithoutRepliedByInput
  }

  export type AdminUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationUncheckedCreateNestedManyWithoutRepliedByInput
  }

  export type AdminCreateOrConnectWithoutRefreshTokensInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutRefreshTokensInput, AdminUncheckedCreateWithoutRefreshTokensInput>
  }

  export type AdminUpsertWithoutRefreshTokensInput = {
    update: XOR<AdminUpdateWithoutRefreshTokensInput, AdminUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<AdminCreateWithoutRefreshTokensInput, AdminUncheckedCreateWithoutRefreshTokensInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutRefreshTokensInput, AdminUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type AdminUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUpdateManyWithoutRepliedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUncheckedUpdateManyWithoutRepliedByNestedInput
  }

  export type ArticleCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    author: AdminCreateNestedOneWithoutArticlesInput
    seoMetadata?: SeoMetadataCreateNestedOneWithoutArticleInput
  }

  export type ArticleUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    seoMetadata?: SeoMetadataUncheckedCreateNestedOneWithoutArticleInput
  }

  export type ArticleCreateOrConnectWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleCreateManyCategoryInputEnvelope = {
    data: ArticleCreateManyCategoryInput | ArticleCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ArticleUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    update: XOR<ArticleUpdateWithoutCategoryInput, ArticleUncheckedUpdateWithoutCategoryInput>
    create: XOR<ArticleCreateWithoutCategoryInput, ArticleUncheckedCreateWithoutCategoryInput>
  }

  export type ArticleUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ArticleWhereUniqueInput
    data: XOR<ArticleUpdateWithoutCategoryInput, ArticleUncheckedUpdateWithoutCategoryInput>
  }

  export type ArticleUpdateManyWithWhereWithoutCategoryInput = {
    where: ArticleScalarWhereInput
    data: XOR<ArticleUpdateManyMutationInput, ArticleUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AdminCreateWithoutArticlesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    refreshTokens?: RefreshTokenCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationCreateNestedManyWithoutRepliedByInput
  }

  export type AdminUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationUncheckedCreateNestedManyWithoutRepliedByInput
  }

  export type AdminCreateOrConnectWithoutArticlesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutArticlesInput, AdminUncheckedCreateWithoutArticlesInput>
  }

  export type CategoryCreateWithoutArticlesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutArticlesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
  }

  export type SeoMetadataCreateWithoutArticleInput = {
    id?: string
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    program?: FeaturedProgramCreateNestedOneWithoutSeoMetadataInput
  }

  export type SeoMetadataUncheckedCreateWithoutArticleInput = {
    id?: string
    programId?: string | null
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetadataCreateOrConnectWithoutArticleInput = {
    where: SeoMetadataWhereUniqueInput
    create: XOR<SeoMetadataCreateWithoutArticleInput, SeoMetadataUncheckedCreateWithoutArticleInput>
  }

  export type AdminUpsertWithoutArticlesInput = {
    update: XOR<AdminUpdateWithoutArticlesInput, AdminUncheckedUpdateWithoutArticlesInput>
    create: XOR<AdminCreateWithoutArticlesInput, AdminUncheckedCreateWithoutArticlesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutArticlesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutArticlesInput, AdminUncheckedUpdateWithoutArticlesInput>
  }

  export type AdminUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUpdateManyWithoutRepliedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUncheckedUpdateManyWithoutRepliedByNestedInput
  }

  export type CategoryUpsertWithoutArticlesInput = {
    update: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
    create: XOR<CategoryCreateWithoutArticlesInput, CategoryUncheckedCreateWithoutArticlesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutArticlesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutArticlesInput, CategoryUncheckedUpdateWithoutArticlesInput>
  }

  export type CategoryUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeoMetadataUpsertWithoutArticleInput = {
    update: XOR<SeoMetadataUpdateWithoutArticleInput, SeoMetadataUncheckedUpdateWithoutArticleInput>
    create: XOR<SeoMetadataCreateWithoutArticleInput, SeoMetadataUncheckedCreateWithoutArticleInput>
    where?: SeoMetadataWhereInput
  }

  export type SeoMetadataUpdateToOneWithWhereWithoutArticleInput = {
    where?: SeoMetadataWhereInput
    data: XOR<SeoMetadataUpdateWithoutArticleInput, SeoMetadataUncheckedUpdateWithoutArticleInput>
  }

  export type SeoMetadataUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: FeaturedProgramUpdateOneWithoutSeoMetadataNestedInput
  }

  export type SeoMetadataUncheckedUpdateWithoutArticleInput = {
    id?: StringFieldUpdateOperationsInput | string
    programId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramGalleryCreateWithoutProgramInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type ProgramGalleryUncheckedCreateWithoutProgramInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type ProgramGalleryCreateOrConnectWithoutProgramInput = {
    where: ProgramGalleryWhereUniqueInput
    create: XOR<ProgramGalleryCreateWithoutProgramInput, ProgramGalleryUncheckedCreateWithoutProgramInput>
  }

  export type ProgramGalleryCreateManyProgramInputEnvelope = {
    data: ProgramGalleryCreateManyProgramInput | ProgramGalleryCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type SeoMetadataCreateWithoutProgramInput = {
    id?: string
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    article?: ArticleCreateNestedOneWithoutSeoMetadataInput
  }

  export type SeoMetadataUncheckedCreateWithoutProgramInput = {
    id?: string
    articleId?: string | null
    metaTitle?: string | null
    metaDesc?: string | null
    keywords?: string | null
    ogImage?: string | null
    canonical?: string | null
    noIndex?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeoMetadataCreateOrConnectWithoutProgramInput = {
    where: SeoMetadataWhereUniqueInput
    create: XOR<SeoMetadataCreateWithoutProgramInput, SeoMetadataUncheckedCreateWithoutProgramInput>
  }

  export type ProgramGalleryUpsertWithWhereUniqueWithoutProgramInput = {
    where: ProgramGalleryWhereUniqueInput
    update: XOR<ProgramGalleryUpdateWithoutProgramInput, ProgramGalleryUncheckedUpdateWithoutProgramInput>
    create: XOR<ProgramGalleryCreateWithoutProgramInput, ProgramGalleryUncheckedCreateWithoutProgramInput>
  }

  export type ProgramGalleryUpdateWithWhereUniqueWithoutProgramInput = {
    where: ProgramGalleryWhereUniqueInput
    data: XOR<ProgramGalleryUpdateWithoutProgramInput, ProgramGalleryUncheckedUpdateWithoutProgramInput>
  }

  export type ProgramGalleryUpdateManyWithWhereWithoutProgramInput = {
    where: ProgramGalleryScalarWhereInput
    data: XOR<ProgramGalleryUpdateManyMutationInput, ProgramGalleryUncheckedUpdateManyWithoutProgramInput>
  }

  export type ProgramGalleryScalarWhereInput = {
    AND?: ProgramGalleryScalarWhereInput | ProgramGalleryScalarWhereInput[]
    OR?: ProgramGalleryScalarWhereInput[]
    NOT?: ProgramGalleryScalarWhereInput | ProgramGalleryScalarWhereInput[]
    id?: StringFilter<"ProgramGallery"> | string
    programId?: StringFilter<"ProgramGallery"> | string
    imageUrl?: StringFilter<"ProgramGallery"> | string
    caption?: StringNullableFilter<"ProgramGallery"> | string | null
    orderIndex?: IntFilter<"ProgramGallery"> | number
    createdAt?: DateTimeFilter<"ProgramGallery"> | Date | string
  }

  export type SeoMetadataUpsertWithoutProgramInput = {
    update: XOR<SeoMetadataUpdateWithoutProgramInput, SeoMetadataUncheckedUpdateWithoutProgramInput>
    create: XOR<SeoMetadataCreateWithoutProgramInput, SeoMetadataUncheckedCreateWithoutProgramInput>
    where?: SeoMetadataWhereInput
  }

  export type SeoMetadataUpdateToOneWithWhereWithoutProgramInput = {
    where?: SeoMetadataWhereInput
    data: XOR<SeoMetadataUpdateWithoutProgramInput, SeoMetadataUncheckedUpdateWithoutProgramInput>
  }

  export type SeoMetadataUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    article?: ArticleUpdateOneWithoutSeoMetadataNestedInput
  }

  export type SeoMetadataUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    articleId?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDesc?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    canonical?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeaturedProgramCreateWithoutGalleriesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    seoMetadata?: SeoMetadataCreateNestedOneWithoutProgramInput
  }

  export type FeaturedProgramUncheckedCreateWithoutGalleriesInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    seoMetadata?: SeoMetadataUncheckedCreateNestedOneWithoutProgramInput
  }

  export type FeaturedProgramCreateOrConnectWithoutGalleriesInput = {
    where: FeaturedProgramWhereUniqueInput
    create: XOR<FeaturedProgramCreateWithoutGalleriesInput, FeaturedProgramUncheckedCreateWithoutGalleriesInput>
  }

  export type FeaturedProgramUpsertWithoutGalleriesInput = {
    update: XOR<FeaturedProgramUpdateWithoutGalleriesInput, FeaturedProgramUncheckedUpdateWithoutGalleriesInput>
    create: XOR<FeaturedProgramCreateWithoutGalleriesInput, FeaturedProgramUncheckedCreateWithoutGalleriesInput>
    where?: FeaturedProgramWhereInput
  }

  export type FeaturedProgramUpdateToOneWithWhereWithoutGalleriesInput = {
    where?: FeaturedProgramWhereInput
    data: XOR<FeaturedProgramUpdateWithoutGalleriesInput, FeaturedProgramUncheckedUpdateWithoutGalleriesInput>
  }

  export type FeaturedProgramUpdateWithoutGalleriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoMetadata?: SeoMetadataUpdateOneWithoutProgramNestedInput
  }

  export type FeaturedProgramUncheckedUpdateWithoutGalleriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoMetadata?: SeoMetadataUncheckedUpdateOneWithoutProgramNestedInput
  }

  export type AspirationCreateWithoutCategoryInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repliedBy?: AdminCreateNestedOneWithoutRepliedAspirationsInput
  }

  export type AspirationUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationCreateOrConnectWithoutCategoryInput = {
    where: AspirationWhereUniqueInput
    create: XOR<AspirationCreateWithoutCategoryInput, AspirationUncheckedCreateWithoutCategoryInput>
  }

  export type AspirationCreateManyCategoryInputEnvelope = {
    data: AspirationCreateManyCategoryInput | AspirationCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AspirationUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AspirationWhereUniqueInput
    update: XOR<AspirationUpdateWithoutCategoryInput, AspirationUncheckedUpdateWithoutCategoryInput>
    create: XOR<AspirationCreateWithoutCategoryInput, AspirationUncheckedCreateWithoutCategoryInput>
  }

  export type AspirationUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AspirationWhereUniqueInput
    data: XOR<AspirationUpdateWithoutCategoryInput, AspirationUncheckedUpdateWithoutCategoryInput>
  }

  export type AspirationUpdateManyWithWhereWithoutCategoryInput = {
    where: AspirationScalarWhereInput
    data: XOR<AspirationUpdateManyMutationInput, AspirationUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AspirationCategoryCreateWithoutAspirationsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationCategoryUncheckedCreateWithoutAspirationsInput = {
    id?: string
    name: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationCategoryCreateOrConnectWithoutAspirationsInput = {
    where: AspirationCategoryWhereUniqueInput
    create: XOR<AspirationCategoryCreateWithoutAspirationsInput, AspirationCategoryUncheckedCreateWithoutAspirationsInput>
  }

  export type AdminCreateWithoutRepliedAspirationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutRepliedAspirationsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutAdminInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutRepliedAspirationsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutRepliedAspirationsInput, AdminUncheckedCreateWithoutRepliedAspirationsInput>
  }

  export type AspirationCategoryUpsertWithoutAspirationsInput = {
    update: XOR<AspirationCategoryUpdateWithoutAspirationsInput, AspirationCategoryUncheckedUpdateWithoutAspirationsInput>
    create: XOR<AspirationCategoryCreateWithoutAspirationsInput, AspirationCategoryUncheckedCreateWithoutAspirationsInput>
    where?: AspirationCategoryWhereInput
  }

  export type AspirationCategoryUpdateToOneWithWhereWithoutAspirationsInput = {
    where?: AspirationCategoryWhereInput
    data: XOR<AspirationCategoryUpdateWithoutAspirationsInput, AspirationCategoryUncheckedUpdateWithoutAspirationsInput>
  }

  export type AspirationCategoryUpdateWithoutAspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationCategoryUncheckedUpdateWithoutAspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUpsertWithoutRepliedAspirationsInput = {
    update: XOR<AdminUpdateWithoutRepliedAspirationsInput, AdminUncheckedUpdateWithoutRepliedAspirationsInput>
    create: XOR<AdminCreateWithoutRepliedAspirationsInput, AdminUncheckedCreateWithoutRepliedAspirationsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutRepliedAspirationsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutRepliedAspirationsInput, AdminUncheckedUpdateWithoutRepliedAspirationsInput>
  }

  export type AdminUpdateWithoutRepliedAspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutRepliedAspirationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutAdminNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type ArticleCreateWithoutSeoMetadataInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    author: AdminCreateNestedOneWithoutArticlesInput
    category?: CategoryCreateNestedOneWithoutArticlesInput
  }

  export type ArticleUncheckedCreateWithoutSeoMetadataInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    authorId: string
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleCreateOrConnectWithoutSeoMetadataInput = {
    where: ArticleWhereUniqueInput
    create: XOR<ArticleCreateWithoutSeoMetadataInput, ArticleUncheckedCreateWithoutSeoMetadataInput>
  }

  export type FeaturedProgramCreateWithoutSeoMetadataInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    galleries?: ProgramGalleryCreateNestedManyWithoutProgramInput
  }

  export type FeaturedProgramUncheckedCreateWithoutSeoMetadataInput = {
    id?: string
    title: string
    slug: string
    description?: string | null
    content?: string | null
    thumbnail?: string | null
    status?: $Enums.ProgramStatus
    isHighlight?: boolean
    orderIndex?: number
    startDate?: Date | string | null
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    galleries?: ProgramGalleryUncheckedCreateNestedManyWithoutProgramInput
  }

  export type FeaturedProgramCreateOrConnectWithoutSeoMetadataInput = {
    where: FeaturedProgramWhereUniqueInput
    create: XOR<FeaturedProgramCreateWithoutSeoMetadataInput, FeaturedProgramUncheckedCreateWithoutSeoMetadataInput>
  }

  export type ArticleUpsertWithoutSeoMetadataInput = {
    update: XOR<ArticleUpdateWithoutSeoMetadataInput, ArticleUncheckedUpdateWithoutSeoMetadataInput>
    create: XOR<ArticleCreateWithoutSeoMetadataInput, ArticleUncheckedCreateWithoutSeoMetadataInput>
    where?: ArticleWhereInput
  }

  export type ArticleUpdateToOneWithWhereWithoutSeoMetadataInput = {
    where?: ArticleWhereInput
    data: XOR<ArticleUpdateWithoutSeoMetadataInput, ArticleUncheckedUpdateWithoutSeoMetadataInput>
  }

  export type ArticleUpdateWithoutSeoMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AdminUpdateOneRequiredWithoutArticlesNestedInput
    category?: CategoryUpdateOneWithoutArticlesNestedInput
  }

  export type ArticleUncheckedUpdateWithoutSeoMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeaturedProgramUpsertWithoutSeoMetadataInput = {
    update: XOR<FeaturedProgramUpdateWithoutSeoMetadataInput, FeaturedProgramUncheckedUpdateWithoutSeoMetadataInput>
    create: XOR<FeaturedProgramCreateWithoutSeoMetadataInput, FeaturedProgramUncheckedCreateWithoutSeoMetadataInput>
    where?: FeaturedProgramWhereInput
  }

  export type FeaturedProgramUpdateToOneWithWhereWithoutSeoMetadataInput = {
    where?: FeaturedProgramWhereInput
    data: XOR<FeaturedProgramUpdateWithoutSeoMetadataInput, FeaturedProgramUncheckedUpdateWithoutSeoMetadataInput>
  }

  export type FeaturedProgramUpdateWithoutSeoMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    galleries?: ProgramGalleryUpdateManyWithoutProgramNestedInput
  }

  export type FeaturedProgramUncheckedUpdateWithoutSeoMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProgramStatusFieldUpdateOperationsInput | $Enums.ProgramStatus
    isHighlight?: BoolFieldUpdateOperationsInput | boolean
    orderIndex?: IntFieldUpdateOperationsInput | number
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    galleries?: ProgramGalleryUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type AdminCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleCreateNestedManyWithoutAuthorInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationCreateNestedManyWithoutRepliedByInput
  }

  export type AdminUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    articles?: ArticleUncheckedCreateNestedManyWithoutAuthorInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutAdminInput
    repliedAspirations?: AspirationUncheckedCreateNestedManyWithoutRepliedByInput
  }

  export type AdminCreateOrConnectWithoutActivityLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
  }

  export type AdminUpsertWithoutActivityLogsInput = {
    update: XOR<AdminUpdateWithoutActivityLogsInput, AdminUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<AdminCreateWithoutActivityLogsInput, AdminUncheckedCreateWithoutActivityLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutActivityLogsInput, AdminUncheckedUpdateWithoutActivityLogsInput>
  }

  export type AdminUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUpdateManyWithoutAuthorNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUpdateManyWithoutRepliedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    articles?: ArticleUncheckedUpdateManyWithoutAuthorNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutAdminNestedInput
    repliedAspirations?: AspirationUncheckedUpdateManyWithoutRepliedByNestedInput
  }

  export type ArticleCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    categoryId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RefreshTokenCreateManyAdminInput = {
    id?: string
    tokenHash: string
    isRevoked?: boolean
    expiresAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityLogCreateManyAdminInput = {
    id?: string
    action: string
    entity?: string | null
    entityId?: string | null
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: string | null
    userAgent?: string | null
    createdAt?: Date | string
  }

  export type AspirationCreateManyRepliedByInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    categoryId?: string | null
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneWithoutArticlesNestedInput
    seoMetadata?: SeoMetadataUpdateOneWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoMetadata?: SeoMetadataUncheckedUpdateOneWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RefreshTokenUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    isRevoked?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationUpdateWithoutRepliedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: AspirationCategoryUpdateOneWithoutAspirationsNestedInput
  }

  export type AspirationUncheckedUpdateWithoutRepliedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationUncheckedUpdateManyWithoutRepliedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    content: string
    excerpt?: string | null
    thumbnail?: string | null
    status?: $Enums.ArticleStatus
    isFeatured?: boolean
    publishedAt?: Date | string | null
    scheduledAt?: Date | string | null
    viewCount?: number
    readingTime?: number
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ArticleUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    author?: AdminUpdateOneRequiredWithoutArticlesNestedInput
    seoMetadata?: SeoMetadataUpdateOneWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoMetadata?: SeoMetadataUncheckedUpdateOneWithoutArticleNestedInput
  }

  export type ArticleUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumArticleStatusFieldUpdateOperationsInput | $Enums.ArticleStatus
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    readingTime?: IntFieldUpdateOperationsInput | number
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProgramGalleryCreateManyProgramInput = {
    id?: string
    imageUrl: string
    caption?: string | null
    orderIndex?: number
    createdAt?: Date | string
  }

  export type ProgramGalleryUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramGalleryUncheckedUpdateWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramGalleryUncheckedUpdateManyWithoutProgramInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    orderIndex?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationCreateManyCategoryInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    title: string
    content: string
    status?: $Enums.AspirationStatus
    adminReply?: string | null
    repliedAt?: Date | string | null
    repliedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AspirationUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repliedBy?: AdminUpdateOneWithoutRepliedAspirationsNestedInput
  }

  export type AspirationUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AspirationUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumAspirationStatusFieldUpdateOperationsInput | $Enums.AspirationStatus
    adminReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repliedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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