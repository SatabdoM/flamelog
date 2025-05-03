/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Post
 *
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>;
/**
 * Model Follow
 *
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>;
/**
 * Model Tag
 *
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model PostTag
 *
 */
export type PostTag = $Result.DefaultSelection<Prisma.$PostTagPayload>;
/**
 * Model TagFollow
 *
 */
export type TagFollow = $Result.DefaultSelection<Prisma.$TagFollowPayload>;
/**
 * Model Comment
 *
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>;
/**
 * Model like
 *
 */
export type like = $Result.DefaultSelection<Prisma.$likePayload>;
/**
 * Model share
 *
 */
export type share = $Result.DefaultSelection<Prisma.$sharePayload>;
/**
 * Model feed
 *
 */
export type feed = $Result.DefaultSelection<Prisma.$feedPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Follows
   * const follows = await prisma.follow.findMany()
   * ```
   */
  get follow(): Prisma.FollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTag`: Exposes CRUD operations for the **PostTag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PostTags
   * const postTags = await prisma.postTag.findMany()
   * ```
   */
  get postTag(): Prisma.PostTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tagFollow`: Exposes CRUD operations for the **TagFollow** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TagFollows
   * const tagFollows = await prisma.tagFollow.findMany()
   * ```
   */
  get tagFollow(): Prisma.TagFollowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Comments
   * const comments = await prisma.comment.findMany()
   * ```
   */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **like** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Likes
   * const likes = await prisma.like.findMany()
   * ```
   */
  get like(): Prisma.likeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.share`: Exposes CRUD operations for the **share** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Shares
   * const shares = await prisma.share.findMany()
   * ```
   */
  get share(): Prisma.shareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feed`: Exposes CRUD operations for the **feed** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Feeds
   * const feeds = await prisma.feed.findMany()
   * ```
   */
  get feed(): Prisma.feedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<
    ReturnType<T>
  >;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> =
    IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<
    T,
    MaybeTupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Post: 'Post';
    Follow: 'Follow';
    Tag: 'Tag';
    PostTag: 'PostTag';
    TagFollow: 'TagFollow';
    Comment: 'Comment';
    like: 'like';
    share: 'share';
    feed: 'feed';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'post'
        | 'follow'
        | 'tag'
        | 'postTag'
        | 'tagFollow'
        | 'comment'
        | 'like'
        | 'share'
        | 'feed';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>;
        fields: Prisma.PostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePost>;
          };
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostCountArgs<ExtArgs>;
            result: $Utils.Optional<PostCountAggregateOutputType> | number;
          };
        };
      };
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>;
        fields: Prisma.FollowFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[];
          };
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FollowCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[];
          };
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FollowUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[];
          };
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>;
          };
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFollow>;
          };
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FollowGroupByOutputType>[];
          };
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>;
            result: $Utils.Optional<FollowCountAggregateOutputType> | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result: $Utils.Optional<TagCountAggregateOutputType> | number;
          };
        };
      };
      PostTag: {
        payload: Prisma.$PostTagPayload<ExtArgs>;
        fields: Prisma.PostTagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostTagFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostTagFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>;
          };
          findFirst: {
            args: Prisma.PostTagFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostTagFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>;
          };
          findMany: {
            args: Prisma.PostTagFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[];
          };
          create: {
            args: Prisma.PostTagCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>;
          };
          createMany: {
            args: Prisma.PostTagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostTagCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[];
          };
          delete: {
            args: Prisma.PostTagDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>;
          };
          update: {
            args: Prisma.PostTagUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>;
          };
          deleteMany: {
            args: Prisma.PostTagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostTagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostTagUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>[];
          };
          upsert: {
            args: Prisma.PostTagUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PostTagPayload>;
          };
          aggregate: {
            args: Prisma.PostTagAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePostTag>;
          };
          groupBy: {
            args: Prisma.PostTagGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PostTagGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostTagCountArgs<ExtArgs>;
            result: $Utils.Optional<PostTagCountAggregateOutputType> | number;
          };
        };
      };
      TagFollow: {
        payload: Prisma.$TagFollowPayload<ExtArgs>;
        fields: Prisma.TagFollowFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFollowFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFollowFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>;
          };
          findFirst: {
            args: Prisma.TagFollowFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFollowFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>;
          };
          findMany: {
            args: Prisma.TagFollowFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>[];
          };
          create: {
            args: Prisma.TagFollowCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>;
          };
          createMany: {
            args: Prisma.TagFollowCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagFollowCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>[];
          };
          delete: {
            args: Prisma.TagFollowDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>;
          };
          update: {
            args: Prisma.TagFollowUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>;
          };
          deleteMany: {
            args: Prisma.TagFollowDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagFollowUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TagFollowUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>[];
          };
          upsert: {
            args: Prisma.TagFollowUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TagFollowPayload>;
          };
          aggregate: {
            args: Prisma.TagFollowAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTagFollow>;
          };
          groupBy: {
            args: Prisma.TagFollowGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TagFollowGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagFollowCountArgs<ExtArgs>;
            result: $Utils.Optional<TagFollowCountAggregateOutputType> | number;
          };
        };
      };
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>;
        fields: Prisma.CommentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[];
          };
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>;
          };
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateComment>;
          };
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CommentGroupByOutputType>[];
          };
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>;
            result: $Utils.Optional<CommentCountAggregateOutputType> | number;
          };
        };
      };
      like: {
        payload: Prisma.$likePayload<ExtArgs>;
        fields: Prisma.likeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.likeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.likeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>;
          };
          findFirst: {
            args: Prisma.likeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.likeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>;
          };
          findMany: {
            args: Prisma.likeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>[];
          };
          create: {
            args: Prisma.likeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>;
          };
          createMany: {
            args: Prisma.likeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.likeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>[];
          };
          delete: {
            args: Prisma.likeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>;
          };
          update: {
            args: Prisma.likeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>;
          };
          deleteMany: {
            args: Prisma.likeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.likeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.likeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>[];
          };
          upsert: {
            args: Prisma.likeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$likePayload>;
          };
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLike>;
          };
          groupBy: {
            args: Prisma.likeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LikeGroupByOutputType>[];
          };
          count: {
            args: Prisma.likeCountArgs<ExtArgs>;
            result: $Utils.Optional<LikeCountAggregateOutputType> | number;
          };
        };
      };
      share: {
        payload: Prisma.$sharePayload<ExtArgs>;
        fields: Prisma.shareFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.shareFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.shareFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>;
          };
          findFirst: {
            args: Prisma.shareFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.shareFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>;
          };
          findMany: {
            args: Prisma.shareFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>[];
          };
          create: {
            args: Prisma.shareCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>;
          };
          createMany: {
            args: Prisma.shareCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.shareCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>[];
          };
          delete: {
            args: Prisma.shareDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>;
          };
          update: {
            args: Prisma.shareUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>;
          };
          deleteMany: {
            args: Prisma.shareDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.shareUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.shareUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>[];
          };
          upsert: {
            args: Prisma.shareUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$sharePayload>;
          };
          aggregate: {
            args: Prisma.ShareAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateShare>;
          };
          groupBy: {
            args: Prisma.shareGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ShareGroupByOutputType>[];
          };
          count: {
            args: Prisma.shareCountArgs<ExtArgs>;
            result: $Utils.Optional<ShareCountAggregateOutputType> | number;
          };
        };
      };
      feed: {
        payload: Prisma.$feedPayload<ExtArgs>;
        fields: Prisma.feedFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.feedFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.feedFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>;
          };
          findFirst: {
            args: Prisma.feedFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.feedFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>;
          };
          findMany: {
            args: Prisma.feedFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>[];
          };
          create: {
            args: Prisma.feedCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>;
          };
          createMany: {
            args: Prisma.feedCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.feedCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>[];
          };
          delete: {
            args: Prisma.feedDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>;
          };
          update: {
            args: Prisma.feedUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>;
          };
          deleteMany: {
            args: Prisma.feedDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.feedUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.feedUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>[];
          };
          upsert: {
            args: Prisma.feedUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$feedPayload>;
          };
          aggregate: {
            args: Prisma.FeedAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFeed>;
          };
          groupBy: {
            args: Prisma.feedGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FeedGroupByOutputType>[];
          };
          count: {
            args: Prisma.feedCountArgs<ExtArgs>;
            result: $Utils.Optional<FeedCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    post?: PostOmit;
    follow?: FollowOmit;
    tag?: TagOmit;
    postTag?: PostTagOmit;
    tagFollow?: TagFollowOmit;
    comment?: CommentOmit;
    like?: likeOmit;
    share?: shareOmit;
    feed?: feedOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    post: number;
    feed: number;
    like: number;
    comment: number;
    shared: number;
    tagFollows: number;
    followers: number;
    following: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | UserCountOutputTypeCountPostArgs;
    feed?: boolean | UserCountOutputTypeCountFeedArgs;
    like?: boolean | UserCountOutputTypeCountLikeArgs;
    comment?: boolean | UserCountOutputTypeCountCommentArgs;
    shared?: boolean | UserCountOutputTypeCountSharedArgs;
    tagFollows?: boolean | UserCountOutputTypeCountTagFollowsArgs;
    followers?: boolean | UserCountOutputTypeCountFollowersArgs;
    following?: boolean | UserCountOutputTypeCountFollowingArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: feedWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: likeWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: shareWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTagFollowsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagFollowWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowWhereInput;
  };

  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number;
    comments: number;
    likes: number;
    shares: number;
    feed: number;
  };

  export type PostCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs;
    comments?: boolean | PostCountOutputTypeCountCommentsArgs;
    likes?: boolean | PostCountOutputTypeCountLikesArgs;
    shares?: boolean | PostCountOutputTypeCountSharesArgs;
    feed?: boolean | PostCountOutputTypeCountFeedArgs;
  };

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostTagWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: likeWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountSharesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: shareWhereInput;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountFeedArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: feedWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number;
    followers: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs;
    followers?: boolean | TagCountOutputTypeCountFollowersArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostTagWhereInput;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountFollowersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagFollowWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    name: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    password: string | null;
    name: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    name: number;
    roles: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    name?: true;
    roles?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: UserWhereInput;
      orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[];
      by: UserScalarFieldEnum[] | UserScalarFieldEnum;
      having?: UserScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: UserCountAggregateInputType | true;
      _avg?: UserAvgAggregateInputType;
      _sum?: UserSumAggregateInputType;
      _min?: UserMinAggregateInputType;
      _max?: UserMaxAggregateInputType;
    };

  export type UserGroupByOutputType = {
    id: number;
    email: string;
    password: string;
    name: string | null;
    roles: string[];
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        email?: boolean;
        password?: boolean;
        name?: boolean;
        roles?: boolean;
        post?: boolean | User$postArgs<ExtArgs>;
        feed?: boolean | User$feedArgs<ExtArgs>;
        like?: boolean | User$likeArgs<ExtArgs>;
        comment?: boolean | User$commentArgs<ExtArgs>;
        shared?: boolean | User$sharedArgs<ExtArgs>;
        tagFollows?: boolean | User$tagFollowsArgs<ExtArgs>;
        followers?: boolean | User$followersArgs<ExtArgs>;
        following?: boolean | User$followingArgs<ExtArgs>;
        _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user']
    >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      roles?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      password?: boolean;
      name?: boolean;
      roles?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    name?: boolean;
    roles?: boolean;
  };

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'email' | 'password' | 'name' | 'roles', ExtArgs['result']['user']>;
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | User$postArgs<ExtArgs>;
    feed?: boolean | User$feedArgs<ExtArgs>;
    like?: boolean | User$likeArgs<ExtArgs>;
    comment?: boolean | User$commentArgs<ExtArgs>;
    shared?: boolean | User$sharedArgs<ExtArgs>;
    tagFollows?: boolean | User$tagFollowsArgs<ExtArgs>;
    followers?: boolean | User$followersArgs<ExtArgs>;
    following?: boolean | User$followingArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>[];
      feed: Prisma.$feedPayload<ExtArgs>[];
      like: Prisma.$likePayload<ExtArgs>[];
      comment: Prisma.$CommentPayload<ExtArgs>[];
      shared: Prisma.$sharePayload<ExtArgs>[];
      tagFollows: Prisma.$TagFollowPayload<ExtArgs>[];
      followers: Prisma.$FollowPayload<ExtArgs>[];
      following: Prisma.$FollowPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        email: string;
        password: string;
        name: string | null;
        roles: string[];
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<
    Prisma.$UserPayload,
    S
  >;

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends User$postArgs<ExtArgs> = {}>(
      args?: Subset<T, User$postArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    feed<T extends User$feedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$feedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    like<T extends User$likeArgs<ExtArgs> = {}>(
      args?: Subset<T, User$likeArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    comment<T extends User$commentArgs<ExtArgs> = {}>(
      args?: Subset<T, User$commentArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    shared<T extends User$sharedArgs<ExtArgs> = {}>(
      args?: Subset<T, User$sharedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    tagFollows<T extends User$tagFollowsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tagFollowsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    followers<T extends User$followersArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    following<T extends User$followingArgs<ExtArgs> = {}>(
      args?: Subset<T, User$followingArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly roles: FieldRef<'User', 'String[]'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
      /**
       * Filter, which Users to fetch.
       */
      where?: UserWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Users to fetch.
       */
      orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Users.
       */
      cursor?: UserWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Users from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Users.
       */
      skip?: number;
      distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
    };

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.post
   */
  export type User$postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * User.feed
   */
  export type User$feedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    where?: feedWhereInput;
    orderBy?: feedOrderByWithRelationInput | feedOrderByWithRelationInput[];
    cursor?: feedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[];
  };

  /**
   * User.like
   */
  export type User$likeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    where?: likeWhereInput;
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[];
    cursor?: likeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * User.comment
   */
  export type User$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Comment
       */
      select?: CommentSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Comment
       */
      omit?: CommentOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: CommentInclude<ExtArgs> | null;
      where?: CommentWhereInput;
      orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[];
      cursor?: CommentWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
    };

  /**
   * User.shared
   */
  export type User$sharedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
      where?: shareWhereInput;
      orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[];
      cursor?: shareWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[];
    };

  /**
   * User.tagFollows
   */
  export type User$tagFollowsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    where?: TagFollowWhereInput;
    orderBy?: TagFollowOrderByWithRelationInput | TagFollowOrderByWithRelationInput[];
    cursor?: TagFollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagFollowScalarFieldEnum | TagFollowScalarFieldEnum[];
  };

  /**
   * User.followers
   */
  export type User$followersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    where?: FollowWhereInput;
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    cursor?: FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * User.following
   */
  export type User$followingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    where?: FollowWhereInput;
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    cursor?: FollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the User
       */
      select?: UserSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the User
       */
      omit?: UserOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: UserInclude<ExtArgs> | null;
    };

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    likeCount: number | null;
    commentCount: number | null;
  };

  export type PostSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
    likeCount: number | null;
    commentCount: number | null;
  };

  export type PostMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    createdAt: Date | null;
    authorId: number | null;
    likeCount: number | null;
    commentCount: number | null;
  };

  export type PostMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    createdAt: Date | null;
    authorId: number | null;
    likeCount: number | null;
    commentCount: number | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    createdAt: number;
    authorId: number;
    likeCount: number;
    commentCount: number;
    _all: number;
  };

  export type PostAvgAggregateInputType = {
    id?: true;
    authorId?: true;
    likeCount?: true;
    commentCount?: true;
  };

  export type PostSumAggregateInputType = {
    id?: true;
    authorId?: true;
    likeCount?: true;
    commentCount?: true;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    authorId?: true;
    likeCount?: true;
    commentCount?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    authorId?: true;
    likeCount?: true;
    commentCount?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    createdAt?: true;
    authorId?: true;
    likeCount?: true;
    commentCount?: true;
    _all?: true;
  };

  export type PostAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: PostWhereInput;
      orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[];
      by: PostScalarFieldEnum[] | PostScalarFieldEnum;
      having?: PostScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: PostCountAggregateInputType | true;
      _avg?: PostAvgAggregateInputType;
      _sum?: PostSumAggregateInputType;
      _min?: PostMinAggregateInputType;
      _max?: PostMaxAggregateInputType;
    };

  export type PostGroupByOutputType = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
    authorId: number;
    likeCount: number;
    commentCount: number;
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        title?: boolean;
        content?: boolean;
        createdAt?: boolean;
        authorId?: boolean;
        likeCount?: boolean;
        commentCount?: boolean;
        author?: boolean | UserDefaultArgs<ExtArgs>;
        tags?: boolean | Post$tagsArgs<ExtArgs>;
        comments?: boolean | Post$commentsArgs<ExtArgs>;
        likes?: boolean | Post$likesArgs<ExtArgs>;
        shares?: boolean | Post$sharesArgs<ExtArgs>;
        feed?: boolean | Post$feedArgs<ExtArgs>;
        _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['post']
    >;

  export type PostSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      createdAt?: boolean;
      authorId?: boolean;
      likeCount?: boolean;
      commentCount?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      createdAt?: boolean;
      authorId?: boolean;
      likeCount?: boolean;
      commentCount?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['post']
  >;

  export type PostSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    createdAt?: boolean;
    authorId?: boolean;
    likeCount?: boolean;
    commentCount?: boolean;
  };

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'title' | 'content' | 'createdAt' | 'authorId' | 'likeCount' | 'commentCount',
      ExtArgs['result']['post']
    >;
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    tags?: boolean | Post$tagsArgs<ExtArgs>;
    comments?: boolean | Post$commentsArgs<ExtArgs>;
    likes?: boolean | Post$likesArgs<ExtArgs>;
    shares?: boolean | Post$sharesArgs<ExtArgs>;
    feed?: boolean | Post$feedArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PostIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PostIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Post';
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      tags: Prisma.$PostTagPayload<ExtArgs>[];
      comments: Prisma.$CommentPayload<ExtArgs>[];
      likes: Prisma.$likePayload<ExtArgs>[];
      shares: Prisma.$sharePayload<ExtArgs>[];
      feed: Prisma.$feedPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        content: string;
        createdAt: Date;
        authorId: number;
        likeCount: number;
        commentCount: number;
      },
      ExtArgs['result']['post']
    >;
    composites: {};
  };

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<
    Prisma.$PostPayload,
    S
  >;

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    PostFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post']; meta: { name: 'Post' } };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<
      $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$tagsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$commentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    likes<T extends Post$likesArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$likesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    shares<T extends Post$sharesArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$sharesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    feed<T extends Post$feedArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$feedArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<'Post', 'Int'>;
    readonly title: FieldRef<'Post', 'String'>;
    readonly content: FieldRef<'Post', 'String'>;
    readonly createdAt: FieldRef<'Post', 'DateTime'>;
    readonly authorId: FieldRef<'Post', 'Int'>;
    readonly likeCount: FieldRef<'Post', 'Int'>;
    readonly commentCount: FieldRef<'Post', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Post
       */
      select?: PostSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Post
       */
      omit?: PostOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: PostInclude<ExtArgs> | null;
      /**
       * Filter, which Posts to fetch.
       */
      where?: PostWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Posts to fetch.
       */
      orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Posts.
       */
      cursor?: PostWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Posts from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Posts.
       */
      skip?: number;
      distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
    };

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
  };

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
  };

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    where?: PostTagWhereInput;
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    cursor?: PostTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
  };

  /**
   * Post.comments
   */
  export type Post$commentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    where?: CommentWhereInput;
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[];
    cursor?: CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    where?: likeWhereInput;
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[];
    cursor?: likeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * Post.shares
   */
  export type Post$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
      where?: shareWhereInput;
      orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[];
      cursor?: shareWhereUniqueInput;
      take?: number;
      skip?: number;
      distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[];
    };

  /**
   * Post.feed
   */
  export type Post$feedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    where?: feedWhereInput;
    orderBy?: feedOrderByWithRelationInput | feedOrderByWithRelationInput[];
    cursor?: feedWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[];
  };

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Post
       */
      select?: PostSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Post
       */
      omit?: PostOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: PostInclude<ExtArgs> | null;
    };

  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null;
    _avg: FollowAvgAggregateOutputType | null;
    _sum: FollowSumAggregateOutputType | null;
    _min: FollowMinAggregateOutputType | null;
    _max: FollowMaxAggregateOutputType | null;
  };

  export type FollowAvgAggregateOutputType = {
    id: number | null;
    followerId: number | null;
    followedId: number | null;
  };

  export type FollowSumAggregateOutputType = {
    id: number | null;
    followerId: number | null;
    followedId: number | null;
  };

  export type FollowMinAggregateOutputType = {
    id: number | null;
    followerId: number | null;
    followedId: number | null;
    createdAt: Date | null;
  };

  export type FollowMaxAggregateOutputType = {
    id: number | null;
    followerId: number | null;
    followedId: number | null;
    createdAt: Date | null;
  };

  export type FollowCountAggregateOutputType = {
    id: number;
    followerId: number;
    followedId: number;
    createdAt: number;
    _all: number;
  };

  export type FollowAvgAggregateInputType = {
    id?: true;
    followerId?: true;
    followedId?: true;
  };

  export type FollowSumAggregateInputType = {
    id?: true;
    followerId?: true;
    followedId?: true;
  };

  export type FollowMinAggregateInputType = {
    id?: true;
    followerId?: true;
    followedId?: true;
    createdAt?: true;
  };

  export type FollowMaxAggregateInputType = {
    id?: true;
    followerId?: true;
    followedId?: true;
    createdAt?: true;
  };

  export type FollowCountAggregateInputType = {
    id?: true;
    followerId?: true;
    followedId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FollowAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Follows
     **/
    _count?: true | FollowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FollowAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FollowSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FollowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FollowMaxAggregateInputType;
  };

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
    [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>;
  };

  export type FollowGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FollowWhereInput;
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[];
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum;
    having?: FollowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FollowCountAggregateInputType | true;
    _avg?: FollowAvgAggregateInputType;
    _sum?: FollowSumAggregateInputType;
    _min?: FollowMinAggregateInputType;
    _max?: FollowMaxAggregateInputType;
  };

  export type FollowGroupByOutputType = {
    id: number;
    followerId: number;
    followedId: number;
    createdAt: Date;
    _count: FollowCountAggregateOutputType | null;
    _avg: FollowAvgAggregateOutputType | null;
    _sum: FollowSumAggregateOutputType | null;
    _min: FollowMinAggregateOutputType | null;
    _max: FollowMaxAggregateOutputType | null;
  };

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FollowGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
          : GetScalarType<T[P], FollowGroupByOutputType[P]>;
      }
    >
  >;

  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        followerId?: boolean;
        followedId?: boolean;
        createdAt?: boolean;
        follower?: boolean | UserDefaultArgs<ExtArgs>;
        followed?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['follow']
    >;

  export type FollowSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      followerId?: boolean;
      followedId?: boolean;
      createdAt?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      followed?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follow']
  >;

  export type FollowSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      followerId?: boolean;
      followedId?: boolean;
      createdAt?: boolean;
      follower?: boolean | UserDefaultArgs<ExtArgs>;
      followed?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['follow']
  >;

  export type FollowSelectScalar = {
    id?: boolean;
    followerId?: boolean;
    followedId?: boolean;
    createdAt?: boolean;
  };

  export type FollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'followerId' | 'followedId' | 'createdAt',
      ExtArgs['result']['follow']
    >;
  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    followed?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FollowIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    followed?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type FollowIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    follower?: boolean | UserDefaultArgs<ExtArgs>;
    followed?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Follow';
    objects: {
      follower: Prisma.$UserPayload<ExtArgs>;
      followed: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        followerId: number;
        followedId: number;
        createdAt: Date;
      },
      ExtArgs['result']['follow']
    >;
    composites: {};
  };

  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> =
    $Result.GetResult<Prisma.$FollowPayload, S>;

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    FollowFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FollowCountAggregateInputType | true;
  };

  export interface FollowDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow']; meta: { name: 'Follow' } };
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowFindUniqueArgs>(
      args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Follow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowFindFirstArgs>(
      args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     *
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const followWithIdOnly = await prisma.follow.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FollowFindManyArgs>(
      args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     *
     */
    create<T extends FollowCreateArgs>(
      args: SelectSubset<T, FollowCreateArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Follows.
     * @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FollowCreateManyArgs>(
      args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Follows and returns the data saved in the database.
     * @param {FollowCreateManyAndReturnArgs} args - Arguments to create many Follows.
     * @example
     * // Create many Follows
     * const follow = await prisma.follow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FollowCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FollowCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     *
     */
    delete<T extends FollowDeleteArgs>(
      args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FollowUpdateArgs>(
      args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FollowDeleteManyArgs>(
      args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FollowUpdateManyArgs>(
      args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Follows and returns the data updated in the database.
     * @param {FollowUpdateManyAndReturnArgs} args - Arguments to update many Follows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Follows and only return the `id`
     * const followWithIdOnly = await prisma.follow.updateManyAndReturn({
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
    updateManyAndReturn<T extends FollowUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FollowUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
     */
    upsert<T extends FollowUpsertArgs>(
      args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>
    ): Prisma__FollowClient<
      $Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
     **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowAggregateArgs>(
      args: Subset<T, FollowAggregateArgs>
    ): Prisma.PrismaPromise<GetFollowAggregateType<T>>;

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
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
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Follow model
     */
    readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    follower<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    followed<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Follow model
   */
  interface FollowFieldRefs {
    readonly id: FieldRef<'Follow', 'Int'>;
    readonly followerId: FieldRef<'Follow', 'Int'>;
    readonly followedId: FieldRef<'Follow', 'Int'>;
    readonly createdAt: FieldRef<'Follow', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput;
  };

  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput;
  };

  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Follows.
     */
    skip?: number;
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[];
  };

  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Follow
       */
      select?: FollowSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Follow
       */
      omit?: FollowOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: FollowInclude<ExtArgs> | null;
      /**
       * The data needed to create a Follow.
       */
      data: XOR<FollowCreateInput, FollowUncheckedCreateInput>;
    };

  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Follow createManyAndReturn
   */
  export type FollowCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Follow
       */
      select?: FollowSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Follow
       */
      omit?: FollowOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: FollowInclude<ExtArgs> | null;
      /**
       * The data needed to update a Follow.
       */
      data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>;
      /**
       * Choose, which Follow to update.
       */
      where: FollowWhereUniqueInput;
    };

  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>;
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput;
    /**
     * Limit how many Follows to update.
     */
    limit?: number;
  };

  /**
   * Follow updateManyAndReturn
   */
  export type FollowUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>;
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput;
    /**
     * Limit how many Follows to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Follow
       */
      select?: FollowSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Follow
       */
      omit?: FollowOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: FollowInclude<ExtArgs> | null;
      /**
       * The filter to search for the Follow to update in case it exists.
       */
      where: FollowWhereUniqueInput;
      /**
       * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
       */
      create: XOR<FollowCreateInput, FollowUncheckedCreateInput>;
      /**
       * In case the Follow was found with the provided `where` argument, update it with this data.
       */
      update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>;
    };

  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Follow
       */
      select?: FollowSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Follow
       */
      omit?: FollowOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: FollowInclude<ExtArgs> | null;
      /**
       * Filter which Follow to delete.
       */
      where: FollowWhereUniqueInput;
    };

  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput;
    /**
     * Limit how many Follows to delete.
     */
    limit?: number;
  };

  /**
   * Follow without action
   */
  export type FollowDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Follow
     */
    omit?: FollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagAvgAggregateOutputType = {
    id: number | null;
  };

  export type TagSumAggregateOutputType = {
    id: number | null;
  };

  export type TagMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
  };

  export type TagMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    _all: number;
  };

  export type TagAvgAggregateInputType = {
    id?: true;
  };

  export type TagSumAggregateInputType = {
    id?: true;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    _all?: true;
  };

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Filter which Tag to aggregate.
       */
      where?: TagWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tags to fetch.
       */
      orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the start position
       */
      cursor?: TagWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tags from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tags.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Count returned Tags
       **/
      _count?: true | TagCountAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to average
       **/
      _avg?: TagAvgAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to sum
       **/
      _sum?: TagSumAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the minimum value
       **/
      _min?: TagMinAggregateInputType;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
       *
       * Select which fields to find the maximum value
       **/
      _max?: TagMaxAggregateInputType;
    };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _avg?: TagAvgAggregateInputType;
    _sum?: TagSumAggregateInputType;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: number;
    name: string;
    createdAt: Date;
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        createdAt?: boolean;
        posts?: boolean | Tag$postsArgs<ExtArgs>;
        followers?: boolean | Tag$followersArgs<ExtArgs>;
        _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['tag']
    >;

  export type TagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['tag']
  >;

  export type TagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
    },
    ExtArgs['result']['tag']
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
  };

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'name' | 'createdAt', ExtArgs['result']['tag']>;
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Tag$postsArgs<ExtArgs>;
    followers?: boolean | Tag$followersArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type TagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Tag';
    objects: {
      posts: Prisma.$PostTagPayload<ExtArgs>[];
      followers: Prisma.$TagFollowPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        createdAt: Date;
      },
      ExtArgs['result']['tag']
    >;
    composites: {};
  };

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<
    Prisma.$TagPayload,
    S
  >;

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    TagFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag']; meta: { name: 'Tag' } };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
    ): Prisma__TagClient<
      $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$postsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    followers<T extends Tag$followersArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$followersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<'Tag', 'Int'>;
    readonly name: FieldRef<'Tag', 'String'>;
    readonly createdAt: FieldRef<'Tag', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Tag
       */
      select?: TagSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Tag
       */
      omit?: TagOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TagInclude<ExtArgs> | null;
      /**
       * Filter, which Tag to fetch.
       */
      where?: TagWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tags to fetch.
       */
      orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for Tags.
       */
      cursor?: TagWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tags from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tags.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of Tags.
       */
      distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
    };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Tag
       */
      select?: TagSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the Tag
       */
      omit?: TagOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: TagInclude<ExtArgs> | null;
      /**
       * Filter, which Tags to fetch.
       */
      where?: TagWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of Tags to fetch.
       */
      orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing Tags.
       */
      cursor?: TagWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` Tags from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` Tags.
       */
      skip?: number;
      distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
    };

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to delete.
     */
    limit?: number;
  };

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    where?: PostTagWhereInput;
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    cursor?: PostTagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
  };

  /**
   * Tag.followers
   */
  export type Tag$followersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    where?: TagFollowWhereInput;
    orderBy?: TagFollowOrderByWithRelationInput | TagFollowOrderByWithRelationInput[];
    cursor?: TagFollowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagFollowScalarFieldEnum | TagFollowScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model PostTag
   */

  export type AggregatePostTag = {
    _count: PostTagCountAggregateOutputType | null;
    _avg: PostTagAvgAggregateOutputType | null;
    _sum: PostTagSumAggregateOutputType | null;
    _min: PostTagMinAggregateOutputType | null;
    _max: PostTagMaxAggregateOutputType | null;
  };

  export type PostTagAvgAggregateOutputType = {
    id: number | null;
    postId: number | null;
    tagId: number | null;
  };

  export type PostTagSumAggregateOutputType = {
    id: number | null;
    postId: number | null;
    tagId: number | null;
  };

  export type PostTagMinAggregateOutputType = {
    id: number | null;
    postId: number | null;
    tagId: number | null;
    createdAt: Date | null;
  };

  export type PostTagMaxAggregateOutputType = {
    id: number | null;
    postId: number | null;
    tagId: number | null;
    createdAt: Date | null;
  };

  export type PostTagCountAggregateOutputType = {
    id: number;
    postId: number;
    tagId: number;
    createdAt: number;
    _all: number;
  };

  export type PostTagAvgAggregateInputType = {
    id?: true;
    postId?: true;
    tagId?: true;
  };

  export type PostTagSumAggregateInputType = {
    id?: true;
    postId?: true;
    tagId?: true;
  };

  export type PostTagMinAggregateInputType = {
    id?: true;
    postId?: true;
    tagId?: true;
    createdAt?: true;
  };

  export type PostTagMaxAggregateInputType = {
    id?: true;
    postId?: true;
    tagId?: true;
    createdAt?: true;
  };

  export type PostTagCountAggregateInputType = {
    id?: true;
    postId?: true;
    tagId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type PostTagAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PostTag to aggregate.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PostTags
     **/
    _count?: true | PostTagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostTagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostTagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostTagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostTagMaxAggregateInputType;
  };

  export type GetPostTagAggregateType<T extends PostTagAggregateArgs> = {
    [P in keyof T & keyof AggregatePostTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTag[P]>
      : GetScalarType<T[P], AggregatePostTag[P]>;
  };

  export type PostTagGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PostTagWhereInput;
    orderBy?: PostTagOrderByWithAggregationInput | PostTagOrderByWithAggregationInput[];
    by: PostTagScalarFieldEnum[] | PostTagScalarFieldEnum;
    having?: PostTagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostTagCountAggregateInputType | true;
    _avg?: PostTagAvgAggregateInputType;
    _sum?: PostTagSumAggregateInputType;
    _min?: PostTagMinAggregateInputType;
    _max?: PostTagMaxAggregateInputType;
  };

  export type PostTagGroupByOutputType = {
    id: number;
    postId: number;
    tagId: number;
    createdAt: Date;
    _count: PostTagCountAggregateOutputType | null;
    _avg: PostTagAvgAggregateOutputType | null;
    _sum: PostTagSumAggregateOutputType | null;
    _min: PostTagMinAggregateOutputType | null;
    _max: PostTagMaxAggregateOutputType | null;
  };

  type GetPostTagGroupByPayload<T extends PostTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PostTagGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostTagGroupByOutputType[P]>
          : GetScalarType<T[P], PostTagGroupByOutputType[P]>;
      }
    >
  >;

  export type PostTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        postId?: boolean;
        tagId?: boolean;
        createdAt?: boolean;
        post?: boolean | PostDefaultArgs<ExtArgs>;
        tag?: boolean | TagDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['postTag']
    >;

  export type PostTagSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      tagId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postTag']
  >;

  export type PostTagSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      tagId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['postTag']
  >;

  export type PostTagSelectScalar = {
    id?: boolean;
    postId?: boolean;
    tagId?: boolean;
    createdAt?: boolean;
  };

  export type PostTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'postId' | 'tagId' | 'createdAt', ExtArgs['result']['postTag']>;
  export type PostTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };
  export type PostTagIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };
  export type PostTagIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    tag?: boolean | TagDefaultArgs<ExtArgs>;
  };

  export type $PostTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'PostTag';
      objects: {
        post: Prisma.$PostPayload<ExtArgs>;
        tag: Prisma.$TagPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: number;
          postId: number;
          tagId: number;
          createdAt: Date;
        },
        ExtArgs['result']['postTag']
      >;
      composites: {};
    };

  type PostTagGetPayload<S extends boolean | null | undefined | PostTagDefaultArgs> =
    $Result.GetResult<Prisma.$PostTagPayload, S>;

  type PostTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    PostTagFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PostTagCountAggregateInputType | true;
  };

  export interface PostTagDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTag']; meta: { name: 'PostTag' } };
    /**
     * Find zero or one PostTag that matches the filter.
     * @param {PostTagFindUniqueArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagFindUniqueArgs>(
      args: SelectSubset<T, PostTagFindUniqueArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PostTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagFindUniqueOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostTagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PostTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagFindFirstArgs>(
      args?: SelectSubset<T, PostTagFindFirstArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PostTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindFirstOrThrowArgs} args - Arguments to find a PostTag
     * @example
     * // Get one PostTag
     * const postTag = await prisma.postTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostTagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTag.findMany()
     *
     * // Get first 10 PostTags
     * const postTags = await prisma.postTag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postTagWithIdOnly = await prisma.postTag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostTagFindManyArgs>(
      args?: SelectSubset<T, PostTagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a PostTag.
     * @param {PostTagCreateArgs} args - Arguments to create a PostTag.
     * @example
     * // Create one PostTag
     * const PostTag = await prisma.postTag.create({
     *   data: {
     *     // ... data to create a PostTag
     *   }
     * })
     *
     */
    create<T extends PostTagCreateArgs>(
      args: SelectSubset<T, PostTagCreateArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PostTags.
     * @param {PostTagCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostTagCreateManyArgs>(
      args?: SelectSubset<T, PostTagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PostTags and returns the data saved in the database.
     * @param {PostTagCreateManyAndReturnArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTag = await prisma.postTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PostTags and only return the `id`
     * const postTagWithIdOnly = await prisma.postTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostTagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostTagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostTagPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PostTag.
     * @param {PostTagDeleteArgs} args - Arguments to delete one PostTag.
     * @example
     * // Delete one PostTag
     * const PostTag = await prisma.postTag.delete({
     *   where: {
     *     // ... filter to delete one PostTag
     *   }
     * })
     *
     */
    delete<T extends PostTagDeleteArgs>(
      args: SelectSubset<T, PostTagDeleteArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PostTag.
     * @param {PostTagUpdateArgs} args - Arguments to update one PostTag.
     * @example
     * // Update one PostTag
     * const postTag = await prisma.postTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostTagUpdateArgs>(
      args: SelectSubset<T, PostTagUpdateArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PostTags.
     * @param {PostTagDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostTagDeleteManyArgs>(
      args?: SelectSubset<T, PostTagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostTagUpdateManyArgs>(
      args: SelectSubset<T, PostTagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PostTags and returns the data updated in the database.
     * @param {PostTagUpdateManyAndReturnArgs} args - Arguments to update many PostTags.
     * @example
     * // Update many PostTags
     * const postTag = await prisma.postTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PostTags and only return the `id`
     * const postTagWithIdOnly = await prisma.postTag.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostTagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostTagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PostTagPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PostTag.
     * @param {PostTagUpsertArgs} args - Arguments to update or create a PostTag.
     * @example
     * // Update or create a PostTag
     * const postTag = await prisma.postTag.upsert({
     *   create: {
     *     // ... data to create a PostTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTag we want to update
     *   }
     * })
     */
    upsert<T extends PostTagUpsertArgs>(
      args: SelectSubset<T, PostTagUpsertArgs<ExtArgs>>
    ): Prisma__PostTagClient<
      $Result.GetResult<Prisma.$PostTagPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTag.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
     **/
    count<T extends PostTagCountArgs>(
      args?: Subset<T, PostTagCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostTagAggregateArgs>(
      args: Subset<T, PostTagAggregateArgs>
    ): Prisma.PrismaPromise<GetPostTagAggregateType<T>>;

    /**
     * Group by PostTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagGroupByArgs} args - Group by arguments.
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
      T extends PostTagGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagGroupByArgs['orderBy'] }
        : { orderBy?: PostTagGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PostTagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetPostTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PostTag model
     */
    readonly fields: PostTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>
    ): Prisma__TagClient<
      | $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PostTag model
   */
  interface PostTagFieldRefs {
    readonly id: FieldRef<'PostTag', 'Int'>;
    readonly postId: FieldRef<'PostTag', 'Int'>;
    readonly tagId: FieldRef<'PostTag', 'Int'>;
    readonly createdAt: FieldRef<'PostTag', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PostTag findUnique
   */
  export type PostTagFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput;
  };

  /**
   * PostTag findUniqueOrThrow
   */
  export type PostTagFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where: PostTagWhereUniqueInput;
  };

  /**
   * PostTag findFirst
   */
  export type PostTagFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
  };

  /**
   * PostTag findFirstOrThrow
   */
  export type PostTagFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTag to fetch.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
  };

  /**
   * PostTag findMany
   */
  export type PostTagFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagOrderByWithRelationInput | PostTagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PostTags.
     */
    skip?: number;
    distinct?: PostTagScalarFieldEnum | PostTagScalarFieldEnum[];
  };

  /**
   * PostTag create
   */
  export type PostTagCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * The data needed to create a PostTag.
     */
    data: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>;
  };

  /**
   * PostTag createMany
   */
  export type PostTagCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PostTag createManyAndReturn
   */
  export type PostTagCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * The data used to create many PostTags.
     */
    data: PostTagCreateManyInput | PostTagCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PostTag update
   */
  export type PostTagUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * The data needed to update a PostTag.
     */
    data: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>;
    /**
     * Choose, which PostTag to update.
     */
    where: PostTagWhereUniqueInput;
  };

  /**
   * PostTag updateMany
   */
  export type PostTagUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>;
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput;
    /**
     * Limit how many PostTags to update.
     */
    limit?: number;
  };

  /**
   * PostTag updateManyAndReturn
   */
  export type PostTagUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyInput>;
    /**
     * Filter which PostTags to update
     */
    where?: PostTagWhereInput;
    /**
     * Limit how many PostTags to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PostTag upsert
   */
  export type PostTagUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * The filter to search for the PostTag to update in case it exists.
     */
    where: PostTagWhereUniqueInput;
    /**
     * In case the PostTag found by the `where` argument doesn't exist, create a new PostTag with this data.
     */
    create: XOR<PostTagCreateInput, PostTagUncheckedCreateInput>;
    /**
     * In case the PostTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagUpdateInput, PostTagUncheckedUpdateInput>;
  };

  /**
   * PostTag delete
   */
  export type PostTagDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
    /**
     * Filter which PostTag to delete.
     */
    where: PostTagWhereUniqueInput;
  };

  /**
   * PostTag deleteMany
   */
  export type PostTagDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagWhereInput;
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number;
  };

  /**
   * PostTag without action
   */
  export type PostTagDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PostTag
     */
    select?: PostTagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PostTag
     */
    omit?: PostTagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagInclude<ExtArgs> | null;
  };

  /**
   * Model TagFollow
   */

  export type AggregateTagFollow = {
    _count: TagFollowCountAggregateOutputType | null;
    _avg: TagFollowAvgAggregateOutputType | null;
    _sum: TagFollowSumAggregateOutputType | null;
    _min: TagFollowMinAggregateOutputType | null;
    _max: TagFollowMaxAggregateOutputType | null;
  };

  export type TagFollowAvgAggregateOutputType = {
    id: number | null;
    tagId: number | null;
    userId: number | null;
  };

  export type TagFollowSumAggregateOutputType = {
    id: number | null;
    tagId: number | null;
    userId: number | null;
  };

  export type TagFollowMinAggregateOutputType = {
    id: number | null;
    tagId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type TagFollowMaxAggregateOutputType = {
    id: number | null;
    tagId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type TagFollowCountAggregateOutputType = {
    id: number;
    tagId: number;
    userId: number;
    createdAt: number;
    _all: number;
  };

  export type TagFollowAvgAggregateInputType = {
    id?: true;
    tagId?: true;
    userId?: true;
  };

  export type TagFollowSumAggregateInputType = {
    id?: true;
    tagId?: true;
    userId?: true;
  };

  export type TagFollowMinAggregateInputType = {
    id?: true;
    tagId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type TagFollowMaxAggregateInputType = {
    id?: true;
    tagId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type TagFollowCountAggregateInputType = {
    id?: true;
    tagId?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type TagFollowAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TagFollow to aggregate.
     */
    where?: TagFollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagFollows to fetch.
     */
    orderBy?: TagFollowOrderByWithRelationInput | TagFollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagFollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagFollows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagFollows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TagFollows
     **/
    _count?: true | TagFollowCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TagFollowAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TagFollowSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagFollowMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagFollowMaxAggregateInputType;
  };

  export type GetTagFollowAggregateType<T extends TagFollowAggregateArgs> = {
    [P in keyof T & keyof AggregateTagFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTagFollow[P]>
      : GetScalarType<T[P], AggregateTagFollow[P]>;
  };

  export type TagFollowGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TagFollowWhereInput;
    orderBy?: TagFollowOrderByWithAggregationInput | TagFollowOrderByWithAggregationInput[];
    by: TagFollowScalarFieldEnum[] | TagFollowScalarFieldEnum;
    having?: TagFollowScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagFollowCountAggregateInputType | true;
    _avg?: TagFollowAvgAggregateInputType;
    _sum?: TagFollowSumAggregateInputType;
    _min?: TagFollowMinAggregateInputType;
    _max?: TagFollowMaxAggregateInputType;
  };

  export type TagFollowGroupByOutputType = {
    id: number;
    tagId: number;
    userId: number;
    createdAt: Date;
    _count: TagFollowCountAggregateOutputType | null;
    _avg: TagFollowAvgAggregateOutputType | null;
    _sum: TagFollowSumAggregateOutputType | null;
    _min: TagFollowMinAggregateOutputType | null;
    _max: TagFollowMaxAggregateOutputType | null;
  };

  type GetTagFollowGroupByPayload<T extends TagFollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagFollowGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TagFollowGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagFollowGroupByOutputType[P]>
          : GetScalarType<T[P], TagFollowGroupByOutputType[P]>;
      }
    >
  >;

  export type TagFollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        tagId?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        tag?: boolean | TagDefaultArgs<ExtArgs>;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['tagFollow']
    >;

  export type TagFollowSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tagId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tagFollow']
  >;

  export type TagFollowSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      tagId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      tag?: boolean | TagDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['tagFollow']
  >;

  export type TagFollowSelectScalar = {
    id?: boolean;
    tagId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
  };

  export type TagFollowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'tagId' | 'userId' | 'createdAt', ExtArgs['result']['tagFollow']>;
  export type TagFollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      tag?: boolean | TagDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    };
  export type TagFollowIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tag?: boolean | TagDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TagFollowIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tag?: boolean | TagDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TagFollowPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TagFollow';
    objects: {
      tag: Prisma.$TagPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        tagId: number;
        userId: number;
        createdAt: Date;
      },
      ExtArgs['result']['tagFollow']
    >;
    composites: {};
  };

  type TagFollowGetPayload<S extends boolean | null | undefined | TagFollowDefaultArgs> =
    $Result.GetResult<Prisma.$TagFollowPayload, S>;

  type TagFollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFollowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagFollowCountAggregateInputType | true;
    };

  export interface TagFollowDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TagFollow'];
      meta: { name: 'TagFollow' };
    };
    /**
     * Find zero or one TagFollow that matches the filter.
     * @param {TagFollowFindUniqueArgs} args - Arguments to find a TagFollow
     * @example
     * // Get one TagFollow
     * const tagFollow = await prisma.tagFollow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFollowFindUniqueArgs>(
      args: SelectSubset<T, TagFollowFindUniqueArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<
        Prisma.$TagFollowPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TagFollow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFollowFindUniqueOrThrowArgs} args - Arguments to find a TagFollow
     * @example
     * // Get one TagFollow
     * const tagFollow = await prisma.tagFollow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFollowFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFollowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<
        Prisma.$TagFollowPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TagFollow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowFindFirstArgs} args - Arguments to find a TagFollow
     * @example
     * // Get one TagFollow
     * const tagFollow = await prisma.tagFollow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFollowFindFirstArgs>(
      args?: SelectSubset<T, TagFollowFindFirstArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<
        Prisma.$TagFollowPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TagFollow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowFindFirstOrThrowArgs} args - Arguments to find a TagFollow
     * @example
     * // Get one TagFollow
     * const tagFollow = await prisma.tagFollow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFollowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFollowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<
        Prisma.$TagFollowPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TagFollows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TagFollows
     * const tagFollows = await prisma.tagFollow.findMany()
     *
     * // Get first 10 TagFollows
     * const tagFollows = await prisma.tagFollow.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagFollowWithIdOnly = await prisma.tagFollow.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFollowFindManyArgs>(
      args?: SelectSubset<T, TagFollowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a TagFollow.
     * @param {TagFollowCreateArgs} args - Arguments to create a TagFollow.
     * @example
     * // Create one TagFollow
     * const TagFollow = await prisma.tagFollow.create({
     *   data: {
     *     // ... data to create a TagFollow
     *   }
     * })
     *
     */
    create<T extends TagFollowCreateArgs>(
      args: SelectSubset<T, TagFollowCreateArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TagFollows.
     * @param {TagFollowCreateManyArgs} args - Arguments to create many TagFollows.
     * @example
     * // Create many TagFollows
     * const tagFollow = await prisma.tagFollow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagFollowCreateManyArgs>(
      args?: SelectSubset<T, TagFollowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TagFollows and returns the data saved in the database.
     * @param {TagFollowCreateManyAndReturnArgs} args - Arguments to create many TagFollows.
     * @example
     * // Create many TagFollows
     * const tagFollow = await prisma.tagFollow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TagFollows and only return the `id`
     * const tagFollowWithIdOnly = await prisma.tagFollow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagFollowCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagFollowCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagFollowPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TagFollow.
     * @param {TagFollowDeleteArgs} args - Arguments to delete one TagFollow.
     * @example
     * // Delete one TagFollow
     * const TagFollow = await prisma.tagFollow.delete({
     *   where: {
     *     // ... filter to delete one TagFollow
     *   }
     * })
     *
     */
    delete<T extends TagFollowDeleteArgs>(
      args: SelectSubset<T, TagFollowDeleteArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TagFollow.
     * @param {TagFollowUpdateArgs} args - Arguments to update one TagFollow.
     * @example
     * // Update one TagFollow
     * const tagFollow = await prisma.tagFollow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagFollowUpdateArgs>(
      args: SelectSubset<T, TagFollowUpdateArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TagFollows.
     * @param {TagFollowDeleteManyArgs} args - Arguments to filter TagFollows to delete.
     * @example
     * // Delete a few TagFollows
     * const { count } = await prisma.tagFollow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagFollowDeleteManyArgs>(
      args?: SelectSubset<T, TagFollowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TagFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TagFollows
     * const tagFollow = await prisma.tagFollow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagFollowUpdateManyArgs>(
      args: SelectSubset<T, TagFollowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TagFollows and returns the data updated in the database.
     * @param {TagFollowUpdateManyAndReturnArgs} args - Arguments to update many TagFollows.
     * @example
     * // Update many TagFollows
     * const tagFollow = await prisma.tagFollow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TagFollows and only return the `id`
     * const tagFollowWithIdOnly = await prisma.tagFollow.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagFollowUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TagFollowUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TagFollowPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TagFollow.
     * @param {TagFollowUpsertArgs} args - Arguments to update or create a TagFollow.
     * @example
     * // Update or create a TagFollow
     * const tagFollow = await prisma.tagFollow.upsert({
     *   create: {
     *     // ... data to create a TagFollow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TagFollow we want to update
     *   }
     * })
     */
    upsert<T extends TagFollowUpsertArgs>(
      args: SelectSubset<T, TagFollowUpsertArgs<ExtArgs>>
    ): Prisma__TagFollowClient<
      $Result.GetResult<Prisma.$TagFollowPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TagFollows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowCountArgs} args - Arguments to filter TagFollows to count.
     * @example
     * // Count the number of TagFollows
     * const count = await prisma.tagFollow.count({
     *   where: {
     *     // ... the filter for the TagFollows we want to count
     *   }
     * })
     **/
    count<T extends TagFollowCountArgs>(
      args?: Subset<T, TagFollowCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagFollowCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TagFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagFollowAggregateArgs>(
      args: Subset<T, TagFollowAggregateArgs>
    ): Prisma.PrismaPromise<GetTagFollowAggregateType<T>>;

    /**
     * Group by TagFollow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFollowGroupByArgs} args - Group by arguments.
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
      T extends TagFollowGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagFollowGroupByArgs['orderBy'] }
        : { orderBy?: TagFollowGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TagFollowGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetTagFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TagFollow model
     */
    readonly fields: TagFollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TagFollow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagFollowClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TagDefaultArgs<ExtArgs>>
    ): Prisma__TagClient<
      | $Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TagFollow model
   */
  interface TagFollowFieldRefs {
    readonly id: FieldRef<'TagFollow', 'Int'>;
    readonly tagId: FieldRef<'TagFollow', 'Int'>;
    readonly userId: FieldRef<'TagFollow', 'Int'>;
    readonly createdAt: FieldRef<'TagFollow', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * TagFollow findUnique
   */
  export type TagFollowFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * Filter, which TagFollow to fetch.
     */
    where: TagFollowWhereUniqueInput;
  };

  /**
   * TagFollow findUniqueOrThrow
   */
  export type TagFollowFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * Filter, which TagFollow to fetch.
     */
    where: TagFollowWhereUniqueInput;
  };

  /**
   * TagFollow findFirst
   */
  export type TagFollowFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * Filter, which TagFollow to fetch.
     */
    where?: TagFollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagFollows to fetch.
     */
    orderBy?: TagFollowOrderByWithRelationInput | TagFollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TagFollows.
     */
    cursor?: TagFollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagFollows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagFollows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TagFollows.
     */
    distinct?: TagFollowScalarFieldEnum | TagFollowScalarFieldEnum[];
  };

  /**
   * TagFollow findFirstOrThrow
   */
  export type TagFollowFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * Filter, which TagFollow to fetch.
     */
    where?: TagFollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagFollows to fetch.
     */
    orderBy?: TagFollowOrderByWithRelationInput | TagFollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TagFollows.
     */
    cursor?: TagFollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagFollows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagFollows.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TagFollows.
     */
    distinct?: TagFollowScalarFieldEnum | TagFollowScalarFieldEnum[];
  };

  /**
   * TagFollow findMany
   */
  export type TagFollowFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * Filter, which TagFollows to fetch.
     */
    where?: TagFollowWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TagFollows to fetch.
     */
    orderBy?: TagFollowOrderByWithRelationInput | TagFollowOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TagFollows.
     */
    cursor?: TagFollowWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TagFollows from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TagFollows.
     */
    skip?: number;
    distinct?: TagFollowScalarFieldEnum | TagFollowScalarFieldEnum[];
  };

  /**
   * TagFollow create
   */
  export type TagFollowCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * The data needed to create a TagFollow.
     */
    data: XOR<TagFollowCreateInput, TagFollowUncheckedCreateInput>;
  };

  /**
   * TagFollow createMany
   */
  export type TagFollowCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TagFollows.
     */
    data: TagFollowCreateManyInput | TagFollowCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TagFollow createManyAndReturn
   */
  export type TagFollowCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * The data used to create many TagFollows.
     */
    data: TagFollowCreateManyInput | TagFollowCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TagFollow update
   */
  export type TagFollowUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * The data needed to update a TagFollow.
     */
    data: XOR<TagFollowUpdateInput, TagFollowUncheckedUpdateInput>;
    /**
     * Choose, which TagFollow to update.
     */
    where: TagFollowWhereUniqueInput;
  };

  /**
   * TagFollow updateMany
   */
  export type TagFollowUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TagFollows.
     */
    data: XOR<TagFollowUpdateManyMutationInput, TagFollowUncheckedUpdateManyInput>;
    /**
     * Filter which TagFollows to update
     */
    where?: TagFollowWhereInput;
    /**
     * Limit how many TagFollows to update.
     */
    limit?: number;
  };

  /**
   * TagFollow updateManyAndReturn
   */
  export type TagFollowUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * The data used to update TagFollows.
     */
    data: XOR<TagFollowUpdateManyMutationInput, TagFollowUncheckedUpdateManyInput>;
    /**
     * Filter which TagFollows to update
     */
    where?: TagFollowWhereInput;
    /**
     * Limit how many TagFollows to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TagFollow upsert
   */
  export type TagFollowUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * The filter to search for the TagFollow to update in case it exists.
     */
    where: TagFollowWhereUniqueInput;
    /**
     * In case the TagFollow found by the `where` argument doesn't exist, create a new TagFollow with this data.
     */
    create: XOR<TagFollowCreateInput, TagFollowUncheckedCreateInput>;
    /**
     * In case the TagFollow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagFollowUpdateInput, TagFollowUncheckedUpdateInput>;
  };

  /**
   * TagFollow delete
   */
  export type TagFollowDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
    /**
     * Filter which TagFollow to delete.
     */
    where: TagFollowWhereUniqueInput;
  };

  /**
   * TagFollow deleteMany
   */
  export type TagFollowDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TagFollows to delete
     */
    where?: TagFollowWhereInput;
    /**
     * Limit how many TagFollows to delete.
     */
    limit?: number;
  };

  /**
   * TagFollow without action
   */
  export type TagFollowDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TagFollow
     */
    select?: TagFollowSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TagFollow
     */
    omit?: TagFollowOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagFollowInclude<ExtArgs> | null;
  };

  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  export type CommentAvgAggregateOutputType = {
    id: number | null;
    postId: number | null;
    authorId: number | null;
  };

  export type CommentSumAggregateOutputType = {
    id: number | null;
    postId: number | null;
    authorId: number | null;
  };

  export type CommentMinAggregateOutputType = {
    id: number | null;
    content: string | null;
    createdAt: Date | null;
    postId: number | null;
    authorId: number | null;
  };

  export type CommentMaxAggregateOutputType = {
    id: number | null;
    content: string | null;
    createdAt: Date | null;
    postId: number | null;
    authorId: number | null;
  };

  export type CommentCountAggregateOutputType = {
    id: number;
    content: number;
    createdAt: number;
    postId: number;
    authorId: number;
    _all: number;
  };

  export type CommentAvgAggregateInputType = {
    id?: true;
    postId?: true;
    authorId?: true;
  };

  export type CommentSumAggregateInputType = {
    id?: true;
    postId?: true;
    authorId?: true;
  };

  export type CommentMinAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    postId?: true;
    authorId?: true;
  };

  export type CommentMaxAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    postId?: true;
    authorId?: true;
  };

  export type CommentCountAggregateInputType = {
    id?: true;
    content?: true;
    createdAt?: true;
    postId?: true;
    authorId?: true;
    _all?: true;
  };

  export type CommentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Comments
     **/
    _count?: true | CommentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CommentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CommentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CommentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CommentMaxAggregateInputType;
  };

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
    [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>;
  };

  export type CommentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CommentWhereInput;
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[];
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum;
    having?: CommentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommentCountAggregateInputType | true;
    _avg?: CommentAvgAggregateInputType;
    _sum?: CommentSumAggregateInputType;
    _min?: CommentMinAggregateInputType;
    _max?: CommentMaxAggregateInputType;
  };

  export type CommentGroupByOutputType = {
    id: number;
    content: string;
    createdAt: Date;
    postId: number;
    authorId: number;
    _count: CommentCountAggregateOutputType | null;
    _avg: CommentAvgAggregateOutputType | null;
    _sum: CommentSumAggregateOutputType | null;
    _min: CommentMinAggregateOutputType | null;
    _max: CommentMaxAggregateOutputType | null;
  };

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CommentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
          : GetScalarType<T[P], CommentGroupByOutputType[P]>;
      }
    >
  >;

  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        content?: boolean;
        createdAt?: boolean;
        postId?: boolean;
        authorId?: boolean;
        post?: boolean | PostDefaultArgs<ExtArgs>;
        author?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['comment']
    >;

  export type CommentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      postId?: boolean;
      authorId?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      createdAt?: boolean;
      postId?: boolean;
      authorId?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      author?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['comment']
  >;

  export type CommentSelectScalar = {
    id?: boolean;
    content?: boolean;
    createdAt?: boolean;
    postId?: boolean;
    authorId?: boolean;
  };

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<
      'id' | 'content' | 'createdAt' | 'postId' | 'authorId',
      ExtArgs['result']['comment']
    >;
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CommentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    author?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      name: 'Comment';
      objects: {
        post: Prisma.$PostPayload<ExtArgs>;
        author: Prisma.$UserPayload<ExtArgs>;
      };
      scalars: $Extensions.GetPayloadResult<
        {
          id: number;
          content: string;
          createdAt: Date;
          postId: number;
          authorId: number;
        },
        ExtArgs['result']['comment']
      >;
      composites: {};
    };

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> =
    $Result.GetResult<Prisma.$CommentPayload, S>;

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    CommentFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CommentCountAggregateInputType | true;
  };

  export interface CommentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment']; meta: { name: 'Comment' } };
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(
      args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(
      args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     *
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommentFindManyArgs>(
      args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     *
     */
    create<T extends CommentCreateArgs>(
      args: SelectSubset<T, CommentCreateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommentCreateManyArgs>(
      args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     *
     */
    delete<T extends CommentDeleteArgs>(
      args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommentUpdateArgs>(
      args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommentDeleteManyArgs>(
      args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommentUpdateManyArgs>(
      args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CommentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(
      args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>
    ): Prisma__CommentClient<
      $Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
     **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(
      args: Subset<T, CommentAggregateArgs>
    ): Prisma.PrismaPromise<GetCommentAggregateType<T>>;

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Comment model
     */
    readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<'Comment', 'Int'>;
    readonly content: FieldRef<'Comment', 'String'>;
    readonly createdAt: FieldRef<'Comment', 'DateTime'>;
    readonly postId: FieldRef<'Comment', 'Int'>;
    readonly authorId: FieldRef<'Comment', 'Int'>;
  }

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Comments.
     */
    skip?: number;
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[];
  };

  /**
   * Comment create
   */
  export type CommentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
  };

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment update
   */
  export type CommentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
  };

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>;
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput;
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>;
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>;
  };

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput;
  };

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput;
    /**
     * Limit how many Comments to delete.
     */
    limit?: number;
  };

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null;
  };

  /**
   * Model like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null;
    _avg: LikeAvgAggregateOutputType | null;
    _sum: LikeSumAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
  };

  export type LikeAvgAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
  };

  export type LikeSumAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
  };

  export type LikeMinAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type LikeMaxAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type LikeCountAggregateOutputType = {
    id: number;
    postId: number;
    userId: number;
    createdAt: number;
    _all: number;
  };

  export type LikeAvgAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
  };

  export type LikeSumAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
  };

  export type LikeMinAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type LikeMaxAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type LikeCountAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type LikeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which like to aggregate.
     */
    where?: likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned likes
     **/
    _count?: true | LikeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: LikeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: LikeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LikeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LikeMaxAggregateInputType;
  };

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
    [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>;
  };

  export type likeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: likeWhereInput;
      orderBy?: likeOrderByWithAggregationInput | likeOrderByWithAggregationInput[];
      by: LikeScalarFieldEnum[] | LikeScalarFieldEnum;
      having?: likeScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: LikeCountAggregateInputType | true;
      _avg?: LikeAvgAggregateInputType;
      _sum?: LikeSumAggregateInputType;
      _min?: LikeMinAggregateInputType;
      _max?: LikeMaxAggregateInputType;
    };

  export type LikeGroupByOutputType = {
    id: number;
    postId: number;
    userId: number;
    createdAt: Date;
    _count: LikeCountAggregateOutputType | null;
    _avg: LikeAvgAggregateOutputType | null;
    _sum: LikeSumAggregateOutputType | null;
    _min: LikeMinAggregateOutputType | null;
    _max: LikeMaxAggregateOutputType | null;
  };

  type GetLikeGroupByPayload<T extends likeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof LikeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
          : GetScalarType<T[P], LikeGroupByOutputType[P]>;
      }
    >
  >;

  export type likeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        postId?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        post?: boolean | PostDefaultArgs<ExtArgs>;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['like']
    >;

  export type likeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type likeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['like']
  >;

  export type likeSelectScalar = {
    id?: boolean;
    postId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
  };

  export type likeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'postId' | 'userId' | 'createdAt', ExtArgs['result']['like']>;
  export type likeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type likeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type likeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $likePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'like';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        postId: number;
        userId: number;
        createdAt: Date;
      },
      ExtArgs['result']['like']
    >;
    composites: {};
  };

  type likeGetPayload<S extends boolean | null | undefined | likeDefaultArgs> = $Result.GetResult<
    Prisma.$likePayload,
    S
  >;

  type likeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    likeFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: LikeCountAggregateInputType | true;
  };

  export interface likeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['like']; meta: { name: 'like' } };
    /**
     * Find zero or one Like that matches the filter.
     * @param {likeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likeFindUniqueArgs>(
      args: SelectSubset<T, likeFindUniqueArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, likeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likeFindFirstArgs>(
      args?: SelectSubset<T, likeFindFirstArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, likeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     *
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     *
     */
    findMany<T extends likeFindManyArgs>(
      args?: SelectSubset<T, likeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Like.
     * @param {likeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     *
     */
    create<T extends likeCreateArgs>(
      args: SelectSubset<T, likeCreateArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Likes.
     * @param {likeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends likeCreateManyArgs>(
      args?: SelectSubset<T, likeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends likeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, likeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Like.
     * @param {likeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     *
     */
    delete<T extends likeDeleteArgs>(
      args: SelectSubset<T, likeDeleteArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Like.
     * @param {likeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends likeUpdateArgs>(
      args: SelectSubset<T, likeUpdateArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Likes.
     * @param {likeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends likeDeleteManyArgs>(
      args?: SelectSubset<T, likeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends likeUpdateManyArgs>(
      args: SelectSubset<T, likeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
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
    updateManyAndReturn<T extends likeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, likeUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Like.
     * @param {likeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends likeUpsertArgs>(
      args: SelectSubset<T, likeUpsertArgs<ExtArgs>>
    ): Prisma__likeClient<
      $Result.GetResult<Prisma.$likePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
     **/
    count<T extends likeCountArgs>(
      args?: Subset<T, likeCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(
      args: Subset<T, LikeAggregateArgs>
    ): Prisma.PrismaPromise<GetLikeAggregateType<T>>;

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likeGroupByArgs} args - Group by arguments.
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
      T extends likeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likeGroupByArgs['orderBy'] }
        : { orderBy?: likeGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, likeGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the like model
     */
    readonly fields: likeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the like model
   */
  interface likeFieldRefs {
    readonly id: FieldRef<'like', 'Int'>;
    readonly postId: FieldRef<'like', 'Int'>;
    readonly userId: FieldRef<'like', 'Int'>;
    readonly createdAt: FieldRef<'like', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * like findUnique
   */
  export type likeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput;
  };

  /**
   * like findUniqueOrThrow
   */
  export type likeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * Filter, which like to fetch.
     */
    where: likeWhereUniqueInput;
  };

  /**
   * like findFirst
   */
  export type likeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * like findFirstOrThrow
   */
  export type likeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * Filter, which like to fetch.
     */
    where?: likeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of likes to fetch.
     */
    orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for likes.
     */
    cursor?: likeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` likes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` likes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
  };

  /**
   * like findMany
   */
  export type likeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the like
       */
      select?: likeSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the like
       */
      omit?: likeOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: likeInclude<ExtArgs> | null;
      /**
       * Filter, which likes to fetch.
       */
      where?: likeWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of likes to fetch.
       */
      orderBy?: likeOrderByWithRelationInput | likeOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing likes.
       */
      cursor?: likeWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` likes from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` likes.
       */
      skip?: number;
      distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[];
    };

  /**
   * like create
   */
  export type likeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * The data needed to create a like.
     */
    data: XOR<likeCreateInput, likeUncheckedCreateInput>;
  };

  /**
   * like createMany
   */
  export type likeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many likes.
     */
    data: likeCreateManyInput | likeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * like createManyAndReturn
   */
  export type likeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * The data used to create many likes.
     */
    data: likeCreateManyInput | likeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * like update
   */
  export type likeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * The data needed to update a like.
     */
    data: XOR<likeUpdateInput, likeUncheckedUpdateInput>;
    /**
     * Choose, which like to update.
     */
    where: likeWhereUniqueInput;
  };

  /**
   * like updateMany
   */
  export type likeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update likes.
     */
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>;
    /**
     * Filter which likes to update
     */
    where?: likeWhereInput;
    /**
     * Limit how many likes to update.
     */
    limit?: number;
  };

  /**
   * like updateManyAndReturn
   */
  export type likeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * The data used to update likes.
     */
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyInput>;
    /**
     * Filter which likes to update
     */
    where?: likeWhereInput;
    /**
     * Limit how many likes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * like upsert
   */
  export type likeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * The filter to search for the like to update in case it exists.
     */
    where: likeWhereUniqueInput;
    /**
     * In case the like found by the `where` argument doesn't exist, create a new like with this data.
     */
    create: XOR<likeCreateInput, likeUncheckedCreateInput>;
    /**
     * In case the like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likeUpdateInput, likeUncheckedUpdateInput>;
  };

  /**
   * like delete
   */
  export type likeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the like
     */
    select?: likeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the like
     */
    omit?: likeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likeInclude<ExtArgs> | null;
    /**
     * Filter which like to delete.
     */
    where: likeWhereUniqueInput;
  };

  /**
   * like deleteMany
   */
  export type likeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which likes to delete
     */
    where?: likeWhereInput;
    /**
     * Limit how many likes to delete.
     */
    limit?: number;
  };

  /**
   * like without action
   */
  export type likeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the like
       */
      select?: likeSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the like
       */
      omit?: likeOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: likeInclude<ExtArgs> | null;
    };

  /**
   * Model share
   */

  export type AggregateShare = {
    _count: ShareCountAggregateOutputType | null;
    _avg: ShareAvgAggregateOutputType | null;
    _sum: ShareSumAggregateOutputType | null;
    _min: ShareMinAggregateOutputType | null;
    _max: ShareMaxAggregateOutputType | null;
  };

  export type ShareAvgAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
  };

  export type ShareSumAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
  };

  export type ShareMinAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type ShareMaxAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type ShareCountAggregateOutputType = {
    id: number;
    postId: number;
    userId: number;
    createdAt: number;
    _all: number;
  };

  export type ShareAvgAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
  };

  export type ShareSumAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
  };

  export type ShareMinAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type ShareMaxAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type ShareCountAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type ShareAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which share to aggregate.
     */
    where?: shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned shares
     **/
    _count?: true | ShareCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ShareAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ShareSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ShareMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ShareMaxAggregateInputType;
  };

  export type GetShareAggregateType<T extends ShareAggregateArgs> = {
    [P in keyof T & keyof AggregateShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShare[P]>
      : GetScalarType<T[P], AggregateShare[P]>;
  };

  export type shareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: shareWhereInput;
      orderBy?: shareOrderByWithAggregationInput | shareOrderByWithAggregationInput[];
      by: ShareScalarFieldEnum[] | ShareScalarFieldEnum;
      having?: shareScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: ShareCountAggregateInputType | true;
      _avg?: ShareAvgAggregateInputType;
      _sum?: ShareSumAggregateInputType;
      _min?: ShareMinAggregateInputType;
      _max?: ShareMaxAggregateInputType;
    };

  export type ShareGroupByOutputType = {
    id: number;
    postId: number;
    userId: number;
    createdAt: Date;
    _count: ShareCountAggregateOutputType | null;
    _avg: ShareAvgAggregateOutputType | null;
    _sum: ShareSumAggregateOutputType | null;
    _min: ShareMinAggregateOutputType | null;
    _max: ShareMaxAggregateOutputType | null;
  };

  type GetShareGroupByPayload<T extends shareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShareGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ShareGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ShareGroupByOutputType[P]>
          : GetScalarType<T[P], ShareGroupByOutputType[P]>;
      }
    >
  >;

  export type shareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        postId?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        post?: boolean | PostDefaultArgs<ExtArgs>;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['share']
    >;

  export type shareSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['share']
  >;

  export type shareSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['share']
  >;

  export type shareSelectScalar = {
    id?: boolean;
    postId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
  };

  export type shareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'postId' | 'userId' | 'createdAt', ExtArgs['result']['share']>;
  export type shareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type shareIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type shareIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $sharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'share';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        postId: number;
        userId: number;
        createdAt: Date;
      },
      ExtArgs['result']['share']
    >;
    composites: {};
  };

  type shareGetPayload<S extends boolean | null | undefined | shareDefaultArgs> = $Result.GetResult<
    Prisma.$sharePayload,
    S
  >;

  type shareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    shareFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: ShareCountAggregateInputType | true;
  };

  export interface shareDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['share']; meta: { name: 'share' } };
    /**
     * Find zero or one Share that matches the filter.
     * @param {shareFindUniqueArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends shareFindUniqueArgs>(
      args: SelectSubset<T, shareFindUniqueArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Share that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {shareFindUniqueOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends shareFindUniqueOrThrowArgs>(
      args: SelectSubset<T, shareFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Share that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareFindFirstArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends shareFindFirstArgs>(
      args?: SelectSubset<T, shareFindFirstArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Share that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareFindFirstOrThrowArgs} args - Arguments to find a Share
     * @example
     * // Get one Share
     * const share = await prisma.share.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends shareFindFirstOrThrowArgs>(
      args?: SelectSubset<T, shareFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Shares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shares
     * const shares = await prisma.share.findMany()
     *
     * // Get first 10 Shares
     * const shares = await prisma.share.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shareWithIdOnly = await prisma.share.findMany({ select: { id: true } })
     *
     */
    findMany<T extends shareFindManyArgs>(
      args?: SelectSubset<T, shareFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Share.
     * @param {shareCreateArgs} args - Arguments to create a Share.
     * @example
     * // Create one Share
     * const Share = await prisma.share.create({
     *   data: {
     *     // ... data to create a Share
     *   }
     * })
     *
     */
    create<T extends shareCreateArgs>(
      args: SelectSubset<T, shareCreateArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Shares.
     * @param {shareCreateManyArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends shareCreateManyArgs>(
      args?: SelectSubset<T, shareCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Shares and returns the data saved in the database.
     * @param {shareCreateManyAndReturnArgs} args - Arguments to create many Shares.
     * @example
     * // Create many Shares
     * const share = await prisma.share.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends shareCreateManyAndReturnArgs>(
      args?: SelectSubset<T, shareCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Share.
     * @param {shareDeleteArgs} args - Arguments to delete one Share.
     * @example
     * // Delete one Share
     * const Share = await prisma.share.delete({
     *   where: {
     *     // ... filter to delete one Share
     *   }
     * })
     *
     */
    delete<T extends shareDeleteArgs>(
      args: SelectSubset<T, shareDeleteArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Share.
     * @param {shareUpdateArgs} args - Arguments to update one Share.
     * @example
     * // Update one Share
     * const share = await prisma.share.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends shareUpdateArgs>(
      args: SelectSubset<T, shareUpdateArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Shares.
     * @param {shareDeleteManyArgs} args - Arguments to filter Shares to delete.
     * @example
     * // Delete a few Shares
     * const { count } = await prisma.share.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends shareDeleteManyArgs>(
      args?: SelectSubset<T, shareDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends shareUpdateManyArgs>(
      args: SelectSubset<T, shareUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Shares and returns the data updated in the database.
     * @param {shareUpdateManyAndReturnArgs} args - Arguments to update many Shares.
     * @example
     * // Update many Shares
     * const share = await prisma.share.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Shares and only return the `id`
     * const shareWithIdOnly = await prisma.share.updateManyAndReturn({
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
    updateManyAndReturn<T extends shareUpdateManyAndReturnArgs>(
      args: SelectSubset<T, shareUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Share.
     * @param {shareUpsertArgs} args - Arguments to update or create a Share.
     * @example
     * // Update or create a Share
     * const share = await prisma.share.upsert({
     *   create: {
     *     // ... data to create a Share
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Share we want to update
     *   }
     * })
     */
    upsert<T extends shareUpsertArgs>(
      args: SelectSubset<T, shareUpsertArgs<ExtArgs>>
    ): Prisma__shareClient<
      $Result.GetResult<Prisma.$sharePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Shares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareCountArgs} args - Arguments to filter Shares to count.
     * @example
     * // Count the number of Shares
     * const count = await prisma.share.count({
     *   where: {
     *     // ... the filter for the Shares we want to count
     *   }
     * })
     **/
    count<T extends shareCountArgs>(
      args?: Subset<T, shareCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShareCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShareAggregateArgs>(
      args: Subset<T, ShareAggregateArgs>
    ): Prisma.PrismaPromise<GetShareAggregateType<T>>;

    /**
     * Group by Share.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {shareGroupByArgs} args - Group by arguments.
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
      T extends shareGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: shareGroupByArgs['orderBy'] }
        : { orderBy?: shareGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, shareGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the share model
     */
    readonly fields: shareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for share.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__shareClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the share model
   */
  interface shareFieldRefs {
    readonly id: FieldRef<'share', 'Int'>;
    readonly postId: FieldRef<'share', 'Int'>;
    readonly userId: FieldRef<'share', 'Int'>;
    readonly createdAt: FieldRef<'share', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * share findUnique
   */
  export type shareFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null;
    /**
     * Filter, which share to fetch.
     */
    where: shareWhereUniqueInput;
  };

  /**
   * share findUniqueOrThrow
   */
  export type shareFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null;
    /**
     * Filter, which share to fetch.
     */
    where: shareWhereUniqueInput;
  };

  /**
   * share findFirst
   */
  export type shareFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null;
    /**
     * Filter, which share to fetch.
     */
    where?: shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for shares.
     */
    cursor?: shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[];
  };

  /**
   * share findFirstOrThrow
   */
  export type shareFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null;
    /**
     * Filter, which share to fetch.
     */
    where?: shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for shares.
     */
    cursor?: shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shares.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of shares.
     */
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[];
  };

  /**
   * share findMany
   */
  export type shareFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareInclude<ExtArgs> | null;
    /**
     * Filter, which shares to fetch.
     */
    where?: shareWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of shares to fetch.
     */
    orderBy?: shareOrderByWithRelationInput | shareOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing shares.
     */
    cursor?: shareWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` shares from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` shares.
     */
    skip?: number;
    distinct?: ShareScalarFieldEnum | ShareScalarFieldEnum[];
  };

  /**
   * share create
   */
  export type shareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
      /**
       * The data needed to create a share.
       */
      data: XOR<shareCreateInput, shareUncheckedCreateInput>;
    };

  /**
   * share createMany
   */
  export type shareCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many shares.
     */
    data: shareCreateManyInput | shareCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * share createManyAndReturn
   */
  export type shareCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * The data used to create many shares.
     */
    data: shareCreateManyInput | shareCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * share update
   */
  export type shareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
      /**
       * The data needed to update a share.
       */
      data: XOR<shareUpdateInput, shareUncheckedUpdateInput>;
      /**
       * Choose, which share to update.
       */
      where: shareWhereUniqueInput;
    };

  /**
   * share updateMany
   */
  export type shareUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update shares.
     */
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyInput>;
    /**
     * Filter which shares to update
     */
    where?: shareWhereInput;
    /**
     * Limit how many shares to update.
     */
    limit?: number;
  };

  /**
   * share updateManyAndReturn
   */
  export type shareUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the share
     */
    select?: shareSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the share
     */
    omit?: shareOmit<ExtArgs> | null;
    /**
     * The data used to update shares.
     */
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyInput>;
    /**
     * Filter which shares to update
     */
    where?: shareWhereInput;
    /**
     * Limit how many shares to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: shareIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * share upsert
   */
  export type shareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
      /**
       * The filter to search for the share to update in case it exists.
       */
      where: shareWhereUniqueInput;
      /**
       * In case the share found by the `where` argument doesn't exist, create a new share with this data.
       */
      create: XOR<shareCreateInput, shareUncheckedCreateInput>;
      /**
       * In case the share was found with the provided `where` argument, update it with this data.
       */
      update: XOR<shareUpdateInput, shareUncheckedUpdateInput>;
    };

  /**
   * share delete
   */
  export type shareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
      /**
       * Filter which share to delete.
       */
      where: shareWhereUniqueInput;
    };

  /**
   * share deleteMany
   */
  export type shareDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which shares to delete
     */
    where?: shareWhereInput;
    /**
     * Limit how many shares to delete.
     */
    limit?: number;
  };

  /**
   * share without action
   */
  export type shareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the share
       */
      select?: shareSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the share
       */
      omit?: shareOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: shareInclude<ExtArgs> | null;
    };

  /**
   * Model feed
   */

  export type AggregateFeed = {
    _count: FeedCountAggregateOutputType | null;
    _avg: FeedAvgAggregateOutputType | null;
    _sum: FeedSumAggregateOutputType | null;
    _min: FeedMinAggregateOutputType | null;
    _max: FeedMaxAggregateOutputType | null;
  };

  export type FeedAvgAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
  };

  export type FeedSumAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
  };

  export type FeedMinAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type FeedMaxAggregateOutputType = {
    id: number | null;
    postId: number | null;
    userId: number | null;
    createdAt: Date | null;
  };

  export type FeedCountAggregateOutputType = {
    id: number;
    postId: number;
    userId: number;
    createdAt: number;
    _all: number;
  };

  export type FeedAvgAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
  };

  export type FeedSumAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
  };

  export type FeedMinAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type FeedMaxAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
  };

  export type FeedCountAggregateInputType = {
    id?: true;
    postId?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
  };

  export type FeedAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which feed to aggregate.
     */
    where?: feedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedOrderByWithRelationInput | feedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: feedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` feeds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned feeds
     **/
    _count?: true | FeedCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FeedAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FeedSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FeedMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FeedMaxAggregateInputType;
  };

  export type GetFeedAggregateType<T extends FeedAggregateArgs> = {
    [P in keyof T & keyof AggregateFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeed[P]>
      : GetScalarType<T[P], AggregateFeed[P]>;
  };

  export type feedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: feedWhereInput;
      orderBy?: feedOrderByWithAggregationInput | feedOrderByWithAggregationInput[];
      by: FeedScalarFieldEnum[] | FeedScalarFieldEnum;
      having?: feedScalarWhereWithAggregatesInput;
      take?: number;
      skip?: number;
      _count?: FeedCountAggregateInputType | true;
      _avg?: FeedAvgAggregateInputType;
      _sum?: FeedSumAggregateInputType;
      _min?: FeedMinAggregateInputType;
      _max?: FeedMaxAggregateInputType;
    };

  export type FeedGroupByOutputType = {
    id: number;
    postId: number;
    userId: number;
    createdAt: Date;
    _count: FeedCountAggregateOutputType | null;
    _avg: FeedAvgAggregateOutputType | null;
    _sum: FeedSumAggregateOutputType | null;
    _min: FeedMinAggregateOutputType | null;
    _max: FeedMaxAggregateOutputType | null;
  };

  type GetFeedGroupByPayload<T extends feedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedGroupByOutputType, T['by']> & {
        [P in keyof T & keyof FeedGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FeedGroupByOutputType[P]>
          : GetScalarType<T[P], FeedGroupByOutputType[P]>;
      }
    >
  >;

  export type feedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        postId?: boolean;
        userId?: boolean;
        createdAt?: boolean;
        post?: boolean | PostDefaultArgs<ExtArgs>;
        user?: boolean | UserDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['feed']
    >;

  export type feedSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['feed']
  >;

  export type feedSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      postId?: boolean;
      userId?: boolean;
      createdAt?: boolean;
      post?: boolean | PostDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['feed']
  >;

  export type feedSelectScalar = {
    id?: boolean;
    postId?: boolean;
    userId?: boolean;
    createdAt?: boolean;
  };

  export type feedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetOmit<'id' | 'postId' | 'userId' | 'createdAt', ExtArgs['result']['feed']>;
  export type feedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type feedIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type feedIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    post?: boolean | PostDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $feedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'feed';
    objects: {
      post: Prisma.$PostPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        postId: number;
        userId: number;
        createdAt: Date;
      },
      ExtArgs['result']['feed']
    >;
    composites: {};
  };

  type feedGetPayload<S extends boolean | null | undefined | feedDefaultArgs> = $Result.GetResult<
    Prisma.$feedPayload,
    S
  >;

  type feedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    feedFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: FeedCountAggregateInputType | true;
  };

  export interface feedDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['feed']; meta: { name: 'feed' } };
    /**
     * Find zero or one Feed that matches the filter.
     * @param {feedFindUniqueArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends feedFindUniqueArgs>(
      args: SelectSubset<T, feedFindUniqueArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Feed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {feedFindUniqueOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends feedFindUniqueOrThrowArgs>(
      args: SelectSubset<T, feedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Feed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedFindFirstArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends feedFindFirstArgs>(
      args?: SelectSubset<T, feedFindFirstArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Feed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedFindFirstOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends feedFindFirstOrThrowArgs>(
      args?: SelectSubset<T, feedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feeds
     * const feeds = await prisma.feed.findMany()
     *
     * // Get first 10 Feeds
     * const feeds = await prisma.feed.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const feedWithIdOnly = await prisma.feed.findMany({ select: { id: true } })
     *
     */
    findMany<T extends feedFindManyArgs>(
      args?: SelectSubset<T, feedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>
    >;

    /**
     * Create a Feed.
     * @param {feedCreateArgs} args - Arguments to create a Feed.
     * @example
     * // Create one Feed
     * const Feed = await prisma.feed.create({
     *   data: {
     *     // ... data to create a Feed
     *   }
     * })
     *
     */
    create<T extends feedCreateArgs>(
      args: SelectSubset<T, feedCreateArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Feeds.
     * @param {feedCreateManyArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feed = await prisma.feed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends feedCreateManyArgs>(
      args?: SelectSubset<T, feedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Feeds and returns the data saved in the database.
     * @param {feedCreateManyAndReturnArgs} args - Arguments to create many Feeds.
     * @example
     * // Create many Feeds
     * const feed = await prisma.feed.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Feeds and only return the `id`
     * const feedWithIdOnly = await prisma.feed.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends feedCreateManyAndReturnArgs>(
      args?: SelectSubset<T, feedCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Delete a Feed.
     * @param {feedDeleteArgs} args - Arguments to delete one Feed.
     * @example
     * // Delete one Feed
     * const Feed = await prisma.feed.delete({
     *   where: {
     *     // ... filter to delete one Feed
     *   }
     * })
     *
     */
    delete<T extends feedDeleteArgs>(
      args: SelectSubset<T, feedDeleteArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Feed.
     * @param {feedUpdateArgs} args - Arguments to update one Feed.
     * @example
     * // Update one Feed
     * const feed = await prisma.feed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends feedUpdateArgs>(
      args: SelectSubset<T, feedUpdateArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Feeds.
     * @param {feedDeleteManyArgs} args - Arguments to filter Feeds to delete.
     * @example
     * // Delete a few Feeds
     * const { count } = await prisma.feed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends feedDeleteManyArgs>(
      args?: SelectSubset<T, feedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends feedUpdateManyArgs>(
      args: SelectSubset<T, feedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Feeds and returns the data updated in the database.
     * @param {feedUpdateManyAndReturnArgs} args - Arguments to update many Feeds.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Feeds and only return the `id`
     * const feedWithIdOnly = await prisma.feed.updateManyAndReturn({
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
    updateManyAndReturn<T extends feedUpdateManyAndReturnArgs>(
      args: SelectSubset<T, feedUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>
    >;

    /**
     * Create or update one Feed.
     * @param {feedUpsertArgs} args - Arguments to update or create a Feed.
     * @example
     * // Update or create a Feed
     * const feed = await prisma.feed.upsert({
     *   create: {
     *     // ... data to create a Feed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feed we want to update
     *   }
     * })
     */
    upsert<T extends feedUpsertArgs>(
      args: SelectSubset<T, feedUpsertArgs<ExtArgs>>
    ): Prisma__feedClient<
      $Result.GetResult<Prisma.$feedPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedCountArgs} args - Arguments to filter Feeds to count.
     * @example
     * // Count the number of Feeds
     * const count = await prisma.feed.count({
     *   where: {
     *     // ... the filter for the Feeds we want to count
     *   }
     * })
     **/
    count<T extends feedCountArgs>(
      args?: Subset<T, feedCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedAggregateArgs>(
      args: Subset<T, FeedAggregateArgs>
    ): Prisma.PrismaPromise<GetFeedAggregateType<T>>;

    /**
     * Group by Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {feedGroupByArgs} args - Group by arguments.
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
      T extends feedGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: feedGroupByArgs['orderBy'] }
        : { orderBy?: feedGroupByArgs['orderBy'] },
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
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, feedGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetFeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the feed model
     */
    readonly fields: feedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for feed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__feedClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    post<T extends PostDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, PostDefaultArgs<ExtArgs>>
    ): Prisma__PostClient<
      | $Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the feed model
   */
  interface feedFieldRefs {
    readonly id: FieldRef<'feed', 'Int'>;
    readonly postId: FieldRef<'feed', 'Int'>;
    readonly userId: FieldRef<'feed', 'Int'>;
    readonly createdAt: FieldRef<'feed', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * feed findUnique
   */
  export type feedFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * Filter, which feed to fetch.
     */
    where: feedWhereUniqueInput;
  };

  /**
   * feed findUniqueOrThrow
   */
  export type feedFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * Filter, which feed to fetch.
     */
    where: feedWhereUniqueInput;
  };

  /**
   * feed findFirst
   */
  export type feedFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * Filter, which feed to fetch.
     */
    where?: feedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedOrderByWithRelationInput | feedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for feeds.
     */
    cursor?: feedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` feeds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[];
  };

  /**
   * feed findFirstOrThrow
   */
  export type feedFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * Filter, which feed to fetch.
     */
    where?: feedWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of feeds to fetch.
     */
    orderBy?: feedOrderByWithRelationInput | feedOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for feeds.
     */
    cursor?: feedWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` feeds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` feeds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[];
  };

  /**
   * feed findMany
   */
  export type feedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the feed
       */
      select?: feedSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the feed
       */
      omit?: feedOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: feedInclude<ExtArgs> | null;
      /**
       * Filter, which feeds to fetch.
       */
      where?: feedWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of feeds to fetch.
       */
      orderBy?: feedOrderByWithRelationInput | feedOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for listing feeds.
       */
      cursor?: feedWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` feeds from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` feeds.
       */
      skip?: number;
      distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[];
    };

  /**
   * feed create
   */
  export type feedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * The data needed to create a feed.
     */
    data: XOR<feedCreateInput, feedUncheckedCreateInput>;
  };

  /**
   * feed createMany
   */
  export type feedCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many feeds.
     */
    data: feedCreateManyInput | feedCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * feed createManyAndReturn
   */
  export type feedCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * The data used to create many feeds.
     */
    data: feedCreateManyInput | feedCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * feed update
   */
  export type feedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * The data needed to update a feed.
     */
    data: XOR<feedUpdateInput, feedUncheckedUpdateInput>;
    /**
     * Choose, which feed to update.
     */
    where: feedWhereUniqueInput;
  };

  /**
   * feed updateMany
   */
  export type feedUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update feeds.
     */
    data: XOR<feedUpdateManyMutationInput, feedUncheckedUpdateManyInput>;
    /**
     * Filter which feeds to update
     */
    where?: feedWhereInput;
    /**
     * Limit how many feeds to update.
     */
    limit?: number;
  };

  /**
   * feed updateManyAndReturn
   */
  export type feedUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * The data used to update feeds.
     */
    data: XOR<feedUpdateManyMutationInput, feedUncheckedUpdateManyInput>;
    /**
     * Filter which feeds to update
     */
    where?: feedWhereInput;
    /**
     * Limit how many feeds to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * feed upsert
   */
  export type feedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * The filter to search for the feed to update in case it exists.
     */
    where: feedWhereUniqueInput;
    /**
     * In case the feed found by the `where` argument doesn't exist, create a new feed with this data.
     */
    create: XOR<feedCreateInput, feedUncheckedCreateInput>;
    /**
     * In case the feed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<feedUpdateInput, feedUncheckedUpdateInput>;
  };

  /**
   * feed delete
   */
  export type feedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the feed
     */
    select?: feedSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the feed
     */
    omit?: feedOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: feedInclude<ExtArgs> | null;
    /**
     * Filter which feed to delete.
     */
    where: feedWhereUniqueInput;
  };

  /**
   * feed deleteMany
   */
  export type feedDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which feeds to delete
     */
    where?: feedWhereInput;
    /**
     * Limit how many feeds to delete.
     */
    limit?: number;
  };

  /**
   * feed without action
   */
  export type feedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the feed
       */
      select?: feedSelect<ExtArgs> | null;
      /**
       * Omit specific fields from the feed
       */
      omit?: feedOmit<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well
       */
      include?: feedInclude<ExtArgs> | null;
    };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    password: 'password';
    name: 'name';
    roles: 'roles';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: 'id';
    title: 'title';
    content: 'content';
    createdAt: 'createdAt';
    authorId: 'authorId';
    likeCount: 'likeCount';
    commentCount: 'commentCount';
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const FollowScalarFieldEnum: {
    id: 'id';
    followerId: 'followerId';
    followedId: 'followedId';
    createdAt: 'createdAt';
  };

  export type FollowScalarFieldEnum =
    (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum];

  export const TagScalarFieldEnum: {
    id: 'id';
    name: 'name';
    createdAt: 'createdAt';
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const PostTagScalarFieldEnum: {
    id: 'id';
    postId: 'postId';
    tagId: 'tagId';
    createdAt: 'createdAt';
  };

  export type PostTagScalarFieldEnum =
    (typeof PostTagScalarFieldEnum)[keyof typeof PostTagScalarFieldEnum];

  export const TagFollowScalarFieldEnum: {
    id: 'id';
    tagId: 'tagId';
    userId: 'userId';
    createdAt: 'createdAt';
  };

  export type TagFollowScalarFieldEnum =
    (typeof TagFollowScalarFieldEnum)[keyof typeof TagFollowScalarFieldEnum];

  export const CommentScalarFieldEnum: {
    id: 'id';
    content: 'content';
    createdAt: 'createdAt';
    postId: 'postId';
    authorId: 'authorId';
  };

  export type CommentScalarFieldEnum =
    (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];

  export const LikeScalarFieldEnum: {
    id: 'id';
    postId: 'postId';
    userId: 'userId';
    createdAt: 'createdAt';
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum];

  export const ShareScalarFieldEnum: {
    id: 'id';
    postId: 'postId';
    userId: 'userId';
    createdAt: 'createdAt';
  };

  export type ShareScalarFieldEnum =
    (typeof ShareScalarFieldEnum)[keyof typeof ShareScalarFieldEnum];

  export const FeedScalarFieldEnum: {
    id: 'id';
    postId: 'postId';
    userId: 'userId';
    createdAt: 'createdAt';
  };

  export type FeedScalarFieldEnum = (typeof FeedScalarFieldEnum)[keyof typeof FeedScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    name?: StringNullableFilter<'User'> | string | null;
    roles?: StringNullableListFilter<'User'>;
    post?: PostListRelationFilter;
    feed?: FeedListRelationFilter;
    like?: LikeListRelationFilter;
    comment?: CommentListRelationFilter;
    shared?: ShareListRelationFilter;
    tagFollows?: TagFollowListRelationFilter;
    followers?: FollowListRelationFilter;
    following?: FollowListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrderInput | SortOrder;
    roles?: SortOrder;
    post?: PostOrderByRelationAggregateInput;
    feed?: feedOrderByRelationAggregateInput;
    like?: likeOrderByRelationAggregateInput;
    comment?: CommentOrderByRelationAggregateInput;
    shared?: shareOrderByRelationAggregateInput;
    tagFollows?: TagFollowOrderByRelationAggregateInput;
    followers?: FollowOrderByRelationAggregateInput;
    following?: FollowOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      password?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringNullableFilter<'User'> | string | null;
      roles?: StringNullableListFilter<'User'>;
      post?: PostListRelationFilter;
      feed?: FeedListRelationFilter;
      like?: LikeListRelationFilter;
      comment?: CommentListRelationFilter;
      shared?: ShareListRelationFilter;
      tagFollows?: TagFollowListRelationFilter;
      followers?: FollowListRelationFilter;
      following?: FollowListRelationFilter;
    },
    'id' | 'email' | 'password'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrderInput | SortOrder;
    roles?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    roles?: StringNullableListFilter<'User'>;
  };

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: IntFilter<'Post'> | number;
    title?: StringFilter<'Post'> | string;
    content?: StringFilter<'Post'> | string;
    createdAt?: DateTimeFilter<'Post'> | Date | string;
    authorId?: IntFilter<'Post'> | number;
    likeCount?: IntFilter<'Post'> | number;
    commentCount?: IntFilter<'Post'> | number;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    tags?: PostTagListRelationFilter;
    comments?: CommentListRelationFilter;
    likes?: LikeListRelationFilter;
    shares?: ShareListRelationFilter;
    feed?: FeedListRelationFilter;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
    author?: UserOrderByWithRelationInput;
    tags?: PostTagOrderByRelationAggregateInput;
    comments?: CommentOrderByRelationAggregateInput;
    likes?: likeOrderByRelationAggregateInput;
    shares?: shareOrderByRelationAggregateInput;
    feed?: feedOrderByRelationAggregateInput;
  };

  export type PostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PostWhereInput | PostWhereInput[];
      OR?: PostWhereInput[];
      NOT?: PostWhereInput | PostWhereInput[];
      title?: StringFilter<'Post'> | string;
      content?: StringFilter<'Post'> | string;
      createdAt?: DateTimeFilter<'Post'> | Date | string;
      authorId?: IntFilter<'Post'> | number;
      likeCount?: IntFilter<'Post'> | number;
      commentCount?: IntFilter<'Post'> | number;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      tags?: PostTagListRelationFilter;
      comments?: CommentListRelationFilter;
      likes?: LikeListRelationFilter;
      shares?: ShareListRelationFilter;
      feed?: FeedListRelationFilter;
    },
    'id'
  >;

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _avg?: PostAvgOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
    _sum?: PostSumOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Post'> | number;
    title?: StringWithAggregatesFilter<'Post'> | string;
    content?: StringWithAggregatesFilter<'Post'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Post'> | Date | string;
    authorId?: IntWithAggregatesFilter<'Post'> | number;
    likeCount?: IntWithAggregatesFilter<'Post'> | number;
    commentCount?: IntWithAggregatesFilter<'Post'> | number;
  };

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[];
    OR?: FollowWhereInput[];
    NOT?: FollowWhereInput | FollowWhereInput[];
    id?: IntFilter<'Follow'> | number;
    followerId?: IntFilter<'Follow'> | number;
    followedId?: IntFilter<'Follow'> | number;
    createdAt?: DateTimeFilter<'Follow'> | Date | string;
    follower?: XOR<UserScalarRelationFilter, UserWhereInput>;
    followed?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type FollowOrderByWithRelationInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
    createdAt?: SortOrder;
    follower?: UserOrderByWithRelationInput;
    followed?: UserOrderByWithRelationInput;
  };

  export type FollowWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      followerId_followedId?: FollowFollowerIdFollowedIdCompoundUniqueInput;
      AND?: FollowWhereInput | FollowWhereInput[];
      OR?: FollowWhereInput[];
      NOT?: FollowWhereInput | FollowWhereInput[];
      followerId?: IntFilter<'Follow'> | number;
      followedId?: IntFilter<'Follow'> | number;
      createdAt?: DateTimeFilter<'Follow'> | Date | string;
      follower?: XOR<UserScalarRelationFilter, UserWhereInput>;
      followed?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'followerId_followedId'
  >;

  export type FollowOrderByWithAggregationInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
    createdAt?: SortOrder;
    _count?: FollowCountOrderByAggregateInput;
    _avg?: FollowAvgOrderByAggregateInput;
    _max?: FollowMaxOrderByAggregateInput;
    _min?: FollowMinOrderByAggregateInput;
    _sum?: FollowSumOrderByAggregateInput;
  };

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[];
    OR?: FollowScalarWhereWithAggregatesInput[];
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Follow'> | number;
    followerId?: IntWithAggregatesFilter<'Follow'> | number;
    followedId?: IntWithAggregatesFilter<'Follow'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Follow'> | Date | string;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: IntFilter<'Tag'> | number;
    name?: StringFilter<'Tag'> | string;
    createdAt?: DateTimeFilter<'Tag'> | Date | string;
    posts?: PostTagListRelationFilter;
    followers?: TagFollowListRelationFilter;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    posts?: PostTagOrderByRelationAggregateInput;
    followers?: TagFollowOrderByRelationAggregateInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      createdAt?: DateTimeFilter<'Tag'> | Date | string;
      posts?: PostTagListRelationFilter;
      followers?: TagFollowListRelationFilter;
    },
    'id' | 'name'
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _avg?: TagAvgOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
    _sum?: TagSumOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Tag'> | number;
    name?: StringWithAggregatesFilter<'Tag'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Tag'> | Date | string;
  };

  export type PostTagWhereInput = {
    AND?: PostTagWhereInput | PostTagWhereInput[];
    OR?: PostTagWhereInput[];
    NOT?: PostTagWhereInput | PostTagWhereInput[];
    id?: IntFilter<'PostTag'> | number;
    postId?: IntFilter<'PostTag'> | number;
    tagId?: IntFilter<'PostTag'> | number;
    createdAt?: DateTimeFilter<'PostTag'> | Date | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
  };

  export type PostTagOrderByWithRelationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
    post?: PostOrderByWithRelationInput;
    tag?: TagOrderByWithRelationInput;
  };

  export type PostTagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      postId_tagId?: PostTagPostIdTagIdCompoundUniqueInput;
      AND?: PostTagWhereInput | PostTagWhereInput[];
      OR?: PostTagWhereInput[];
      NOT?: PostTagWhereInput | PostTagWhereInput[];
      postId?: IntFilter<'PostTag'> | number;
      tagId?: IntFilter<'PostTag'> | number;
      createdAt?: DateTimeFilter<'PostTag'> | Date | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
    },
    'id' | 'postId_tagId'
  >;

  export type PostTagOrderByWithAggregationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
    _count?: PostTagCountOrderByAggregateInput;
    _avg?: PostTagAvgOrderByAggregateInput;
    _max?: PostTagMaxOrderByAggregateInput;
    _min?: PostTagMinOrderByAggregateInput;
    _sum?: PostTagSumOrderByAggregateInput;
  };

  export type PostTagScalarWhereWithAggregatesInput = {
    AND?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[];
    OR?: PostTagScalarWhereWithAggregatesInput[];
    NOT?: PostTagScalarWhereWithAggregatesInput | PostTagScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'PostTag'> | number;
    postId?: IntWithAggregatesFilter<'PostTag'> | number;
    tagId?: IntWithAggregatesFilter<'PostTag'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'PostTag'> | Date | string;
  };

  export type TagFollowWhereInput = {
    AND?: TagFollowWhereInput | TagFollowWhereInput[];
    OR?: TagFollowWhereInput[];
    NOT?: TagFollowWhereInput | TagFollowWhereInput[];
    id?: IntFilter<'TagFollow'> | number;
    tagId?: IntFilter<'TagFollow'> | number;
    userId?: IntFilter<'TagFollow'> | number;
    createdAt?: DateTimeFilter<'TagFollow'> | Date | string;
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type TagFollowOrderByWithRelationInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    tag?: TagOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type TagFollowWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      tagId_userId?: TagFollowTagIdUserIdCompoundUniqueInput;
      AND?: TagFollowWhereInput | TagFollowWhereInput[];
      OR?: TagFollowWhereInput[];
      NOT?: TagFollowWhereInput | TagFollowWhereInput[];
      tagId?: IntFilter<'TagFollow'> | number;
      userId?: IntFilter<'TagFollow'> | number;
      createdAt?: DateTimeFilter<'TagFollow'> | Date | string;
      tag?: XOR<TagScalarRelationFilter, TagWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'tagId_userId'
  >;

  export type TagFollowOrderByWithAggregationInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    _count?: TagFollowCountOrderByAggregateInput;
    _avg?: TagFollowAvgOrderByAggregateInput;
    _max?: TagFollowMaxOrderByAggregateInput;
    _min?: TagFollowMinOrderByAggregateInput;
    _sum?: TagFollowSumOrderByAggregateInput;
  };

  export type TagFollowScalarWhereWithAggregatesInput = {
    AND?: TagFollowScalarWhereWithAggregatesInput | TagFollowScalarWhereWithAggregatesInput[];
    OR?: TagFollowScalarWhereWithAggregatesInput[];
    NOT?: TagFollowScalarWhereWithAggregatesInput | TagFollowScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'TagFollow'> | number;
    tagId?: IntWithAggregatesFilter<'TagFollow'> | number;
    userId?: IntWithAggregatesFilter<'TagFollow'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'TagFollow'> | Date | string;
  };

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[];
    OR?: CommentWhereInput[];
    NOT?: CommentWhereInput | CommentWhereInput[];
    id?: IntFilter<'Comment'> | number;
    content?: StringFilter<'Comment'> | string;
    createdAt?: DateTimeFilter<'Comment'> | Date | string;
    postId?: IntFilter<'Comment'> | number;
    authorId?: IntFilter<'Comment'> | number;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
    post?: PostOrderByWithRelationInput;
    author?: UserOrderByWithRelationInput;
  };

  export type CommentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CommentWhereInput | CommentWhereInput[];
      OR?: CommentWhereInput[];
      NOT?: CommentWhereInput | CommentWhereInput[];
      content?: StringFilter<'Comment'> | string;
      createdAt?: DateTimeFilter<'Comment'> | Date | string;
      postId?: IntFilter<'Comment'> | number;
      authorId?: IntFilter<'Comment'> | number;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
    _count?: CommentCountOrderByAggregateInput;
    _avg?: CommentAvgOrderByAggregateInput;
    _max?: CommentMaxOrderByAggregateInput;
    _min?: CommentMinOrderByAggregateInput;
    _sum?: CommentSumOrderByAggregateInput;
  };

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[];
    OR?: CommentScalarWhereWithAggregatesInput[];
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Comment'> | number;
    content?: StringWithAggregatesFilter<'Comment'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Comment'> | Date | string;
    postId?: IntWithAggregatesFilter<'Comment'> | number;
    authorId?: IntWithAggregatesFilter<'Comment'> | number;
  };

  export type likeWhereInput = {
    AND?: likeWhereInput | likeWhereInput[];
    OR?: likeWhereInput[];
    NOT?: likeWhereInput | likeWhereInput[];
    id?: IntFilter<'like'> | number;
    postId?: IntFilter<'like'> | number;
    userId?: IntFilter<'like'> | number;
    createdAt?: DateTimeFilter<'like'> | Date | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type likeOrderByWithRelationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    post?: PostOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type likeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      postId_userId?: likePostIdUserIdCompoundUniqueInput;
      AND?: likeWhereInput | likeWhereInput[];
      OR?: likeWhereInput[];
      NOT?: likeWhereInput | likeWhereInput[];
      postId?: IntFilter<'like'> | number;
      userId?: IntFilter<'like'> | number;
      createdAt?: DateTimeFilter<'like'> | Date | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'postId_userId'
  >;

  export type likeOrderByWithAggregationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    _count?: likeCountOrderByAggregateInput;
    _avg?: likeAvgOrderByAggregateInput;
    _max?: likeMaxOrderByAggregateInput;
    _min?: likeMinOrderByAggregateInput;
    _sum?: likeSumOrderByAggregateInput;
  };

  export type likeScalarWhereWithAggregatesInput = {
    AND?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[];
    OR?: likeScalarWhereWithAggregatesInput[];
    NOT?: likeScalarWhereWithAggregatesInput | likeScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'like'> | number;
    postId?: IntWithAggregatesFilter<'like'> | number;
    userId?: IntWithAggregatesFilter<'like'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'like'> | Date | string;
  };

  export type shareWhereInput = {
    AND?: shareWhereInput | shareWhereInput[];
    OR?: shareWhereInput[];
    NOT?: shareWhereInput | shareWhereInput[];
    id?: IntFilter<'share'> | number;
    postId?: IntFilter<'share'> | number;
    userId?: IntFilter<'share'> | number;
    createdAt?: DateTimeFilter<'share'> | Date | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type shareOrderByWithRelationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    post?: PostOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type shareWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      postId_userId?: sharePostIdUserIdCompoundUniqueInput;
      AND?: shareWhereInput | shareWhereInput[];
      OR?: shareWhereInput[];
      NOT?: shareWhereInput | shareWhereInput[];
      postId?: IntFilter<'share'> | number;
      userId?: IntFilter<'share'> | number;
      createdAt?: DateTimeFilter<'share'> | Date | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'postId_userId'
  >;

  export type shareOrderByWithAggregationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    _count?: shareCountOrderByAggregateInput;
    _avg?: shareAvgOrderByAggregateInput;
    _max?: shareMaxOrderByAggregateInput;
    _min?: shareMinOrderByAggregateInput;
    _sum?: shareSumOrderByAggregateInput;
  };

  export type shareScalarWhereWithAggregatesInput = {
    AND?: shareScalarWhereWithAggregatesInput | shareScalarWhereWithAggregatesInput[];
    OR?: shareScalarWhereWithAggregatesInput[];
    NOT?: shareScalarWhereWithAggregatesInput | shareScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'share'> | number;
    postId?: IntWithAggregatesFilter<'share'> | number;
    userId?: IntWithAggregatesFilter<'share'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'share'> | Date | string;
  };

  export type feedWhereInput = {
    AND?: feedWhereInput | feedWhereInput[];
    OR?: feedWhereInput[];
    NOT?: feedWhereInput | feedWhereInput[];
    id?: IntFilter<'feed'> | number;
    postId?: IntFilter<'feed'> | number;
    userId?: IntFilter<'feed'> | number;
    createdAt?: DateTimeFilter<'feed'> | Date | string;
    post?: XOR<PostScalarRelationFilter, PostWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type feedOrderByWithRelationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    post?: PostOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type feedWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      postId_userId?: feedPostIdUserIdCompoundUniqueInput;
      AND?: feedWhereInput | feedWhereInput[];
      OR?: feedWhereInput[];
      NOT?: feedWhereInput | feedWhereInput[];
      postId?: IntFilter<'feed'> | number;
      userId?: IntFilter<'feed'> | number;
      createdAt?: DateTimeFilter<'feed'> | Date | string;
      post?: XOR<PostScalarRelationFilter, PostWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'postId_userId'
  >;

  export type feedOrderByWithAggregationInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
    _count?: feedCountOrderByAggregateInput;
    _avg?: feedAvgOrderByAggregateInput;
    _max?: feedMaxOrderByAggregateInput;
    _min?: feedMinOrderByAggregateInput;
    _sum?: feedSumOrderByAggregateInput;
  };

  export type feedScalarWhereWithAggregatesInput = {
    AND?: feedScalarWhereWithAggregatesInput | feedScalarWhereWithAggregatesInput[];
    OR?: feedScalarWhereWithAggregatesInput[];
    NOT?: feedScalarWhereWithAggregatesInput | feedScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'feed'> | number;
    postId?: IntWithAggregatesFilter<'feed'> | number;
    userId?: IntWithAggregatesFilter<'feed'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'feed'> | Date | string;
  };

  export type UserCreateInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
  };

  export type PostCreateInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    likes?: likeCreateNestedManyWithoutPostInput;
    shares?: shareCreateNestedManyWithoutPostInput;
    feed?: feedCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: likeUncheckedCreateNestedManyWithoutPostInput;
    shares?: shareUncheckedCreateNestedManyWithoutPostInput;
    feed?: feedUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    likes?: likeUpdateManyWithoutPostNestedInput;
    shares?: shareUpdateManyWithoutPostNestedInput;
    feed?: feedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput;
    shares?: shareUncheckedUpdateManyWithoutPostNestedInput;
    feed?: feedUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostCreateManyInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
  };

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
  };

  export type FollowCreateInput = {
    createdAt?: Date | string;
    follower: UserCreateNestedOneWithoutFollowersInput;
    followed: UserCreateNestedOneWithoutFollowingInput;
  };

  export type FollowUncheckedCreateInput = {
    id?: number;
    followerId: number;
    followedId: number;
    createdAt?: Date | string;
  };

  export type FollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;
    followed?: UserUpdateOneRequiredWithoutFollowingNestedInput;
  };

  export type FollowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    followerId?: IntFieldUpdateOperationsInput | number;
    followedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowCreateManyInput = {
    id?: number;
    followerId: number;
    followedId: number;
    createdAt?: Date | string;
  };

  export type FollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    followerId?: IntFieldUpdateOperationsInput | number;
    followedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagCreateInput = {
    name: string;
    createdAt?: Date | string;
    posts?: PostTagCreateNestedManyWithoutTagInput;
    followers?: TagFollowCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    posts?: PostTagUncheckedCreateNestedManyWithoutTagInput;
    followers?: TagFollowUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostTagUpdateManyWithoutTagNestedInput;
    followers?: TagFollowUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostTagUncheckedUpdateManyWithoutTagNestedInput;
    followers?: TagFollowUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type TagCreateManyInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
  };

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagCreateInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutTagsInput;
    tag: TagCreateNestedOneWithoutPostsInput;
  };

  export type PostTagUncheckedCreateInput = {
    id?: number;
    postId: number;
    tagId: number;
    createdAt?: Date | string;
  };

  export type PostTagUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutTagsNestedInput;
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput;
  };

  export type PostTagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagCreateManyInput = {
    id?: number;
    postId: number;
    tagId: number;
    createdAt?: Date | string;
  };

  export type PostTagUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowCreateInput = {
    createdAt?: Date | string;
    tag: TagCreateNestedOneWithoutFollowersInput;
    user: UserCreateNestedOneWithoutTagFollowsInput;
  };

  export type TagFollowUncheckedCreateInput = {
    id?: number;
    tagId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type TagFollowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tag?: TagUpdateOneRequiredWithoutFollowersNestedInput;
    user?: UserUpdateOneRequiredWithoutTagFollowsNestedInput;
  };

  export type TagFollowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowCreateManyInput = {
    id?: number;
    tagId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type TagFollowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentCreateInput = {
    content: string;
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutCommentsInput;
    author: UserCreateNestedOneWithoutCommentInput;
  };

  export type CommentUncheckedCreateInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    postId: number;
    authorId: number;
  };

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentCreateManyInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    postId: number;
    authorId: number;
  };

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type likeCreateInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutLikesInput;
    user: UserCreateNestedOneWithoutLikeInput;
  };

  export type likeUncheckedCreateInput = {
    id?: number;
    postId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type likeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutLikesNestedInput;
    user?: UserUpdateOneRequiredWithoutLikeNestedInput;
  };

  export type likeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type likeCreateManyInput = {
    id?: number;
    postId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type likeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type likeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type shareCreateInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutSharesInput;
    user: UserCreateNestedOneWithoutSharedInput;
  };

  export type shareUncheckedCreateInput = {
    id?: number;
    postId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type shareUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutSharesNestedInput;
    user?: UserUpdateOneRequiredWithoutSharedNestedInput;
  };

  export type shareUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type shareCreateManyInput = {
    id?: number;
    postId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type shareUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type shareUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type feedCreateInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutFeedInput;
    user: UserCreateNestedOneWithoutFeedInput;
  };

  export type feedUncheckedCreateInput = {
    id?: number;
    postId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type feedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutFeedNestedInput;
    user?: UserUpdateOneRequiredWithoutFeedNestedInput;
  };

  export type feedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type feedCreateManyInput = {
    id?: number;
    postId: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type feedUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type feedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type FeedListRelationFilter = {
    every?: feedWhereInput;
    some?: feedWhereInput;
    none?: feedWhereInput;
  };

  export type LikeListRelationFilter = {
    every?: likeWhereInput;
    some?: likeWhereInput;
    none?: likeWhereInput;
  };

  export type CommentListRelationFilter = {
    every?: CommentWhereInput;
    some?: CommentWhereInput;
    none?: CommentWhereInput;
  };

  export type ShareListRelationFilter = {
    every?: shareWhereInput;
    some?: shareWhereInput;
    none?: shareWhereInput;
  };

  export type TagFollowListRelationFilter = {
    every?: TagFollowWhereInput;
    some?: TagFollowWhereInput;
    none?: TagFollowWhereInput;
  };

  export type FollowListRelationFilter = {
    every?: FollowWhereInput;
    some?: FollowWhereInput;
    none?: FollowWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type feedOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type likeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type shareOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TagFollowOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
    roles?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    name?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type PostTagListRelationFilter = {
    every?: PostTagWhereInput;
    some?: PostTagWhereInput;
    none?: PostTagWhereInput;
  };

  export type PostTagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
  };

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
  };

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
    likeCount?: SortOrder;
    commentCount?: SortOrder;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FollowFollowerIdFollowedIdCompoundUniqueInput = {
    followerId: number;
    followedId: number;
  };

  export type FollowCountOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FollowAvgOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
  };

  export type FollowMaxOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FollowMinOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type FollowSumOrderByAggregateInput = {
    id?: SortOrder;
    followerId?: SortOrder;
    followedId?: SortOrder;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type PostScalarRelationFilter = {
    is?: PostWhereInput;
    isNot?: PostWhereInput;
  };

  export type TagScalarRelationFilter = {
    is?: TagWhereInput;
    isNot?: TagWhereInput;
  };

  export type PostTagPostIdTagIdCompoundUniqueInput = {
    postId: number;
    tagId: number;
  };

  export type PostTagCountOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PostTagAvgOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
  };

  export type PostTagMaxOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PostTagMinOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type PostTagSumOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    tagId?: SortOrder;
  };

  export type TagFollowTagIdUserIdCompoundUniqueInput = {
    tagId: number;
    userId: number;
  };

  export type TagFollowCountOrderByAggregateInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagFollowAvgOrderByAggregateInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
  };

  export type TagFollowMaxOrderByAggregateInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagFollowMinOrderByAggregateInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type TagFollowSumOrderByAggregateInput = {
    id?: SortOrder;
    tagId?: SortOrder;
    userId?: SortOrder;
  };

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
  };

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
  };

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
  };

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    createdAt?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
  };

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    authorId?: SortOrder;
  };

  export type likePostIdUserIdCompoundUniqueInput = {
    postId: number;
    userId: number;
  };

  export type likeCountOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type likeAvgOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
  };

  export type likeMaxOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type likeMinOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type likeSumOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
  };

  export type sharePostIdUserIdCompoundUniqueInput = {
    postId: number;
    userId: number;
  };

  export type shareCountOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type shareAvgOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
  };

  export type shareMaxOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type shareMinOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type shareSumOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
  };

  export type feedPostIdUserIdCompoundUniqueInput = {
    postId: number;
    userId: number;
  };

  export type feedCountOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type feedAvgOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
  };

  export type feedMaxOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type feedMinOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
    createdAt?: SortOrder;
  };

  export type feedSumOrderByAggregateInput = {
    id?: SortOrder;
    postId?: SortOrder;
    userId?: SortOrder;
  };

  export type UserCreaterolesInput = {
    set: string[];
  };

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type feedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<feedCreateWithoutUserInput, feedUncheckedCreateWithoutUserInput>
      | feedCreateWithoutUserInput[]
      | feedUncheckedCreateWithoutUserInput[];
    connectOrCreate?: feedCreateOrConnectWithoutUserInput | feedCreateOrConnectWithoutUserInput[];
    createMany?: feedCreateManyUserInputEnvelope;
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
  };

  export type likeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
      | likeCreateWithoutUserInput[]
      | likeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[];
    createMany?: likeCreateManyUserInputEnvelope;
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type shareCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>
      | shareCreateWithoutUserInput[]
      | shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[];
    createMany?: shareCreateManyUserInputEnvelope;
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
  };

  export type TagFollowCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TagFollowCreateWithoutUserInput, TagFollowUncheckedCreateWithoutUserInput>
      | TagFollowCreateWithoutUserInput[]
      | TagFollowUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutUserInput
      | TagFollowCreateOrConnectWithoutUserInput[];
    createMany?: TagFollowCreateManyUserInputEnvelope;
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
  };

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?:
      | XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type FollowCreateNestedManyWithoutFollowedInput = {
    create?:
      | XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
      | FollowCreateWithoutFollowedInput[]
      | FollowUncheckedCreateWithoutFollowedInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowedInput
      | FollowCreateOrConnectWithoutFollowedInput[];
    createMany?: FollowCreateManyFollowedInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type feedUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<feedCreateWithoutUserInput, feedUncheckedCreateWithoutUserInput>
      | feedCreateWithoutUserInput[]
      | feedUncheckedCreateWithoutUserInput[];
    connectOrCreate?: feedCreateOrConnectWithoutUserInput | feedCreateOrConnectWithoutUserInput[];
    createMany?: feedCreateManyUserInputEnvelope;
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
  };

  export type likeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
      | likeCreateWithoutUserInput[]
      | likeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[];
    createMany?: likeCreateManyUserInputEnvelope;
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type shareUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>
      | shareCreateWithoutUserInput[]
      | shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[];
    createMany?: shareCreateManyUserInputEnvelope;
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
  };

  export type TagFollowUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<TagFollowCreateWithoutUserInput, TagFollowUncheckedCreateWithoutUserInput>
      | TagFollowCreateWithoutUserInput[]
      | TagFollowUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutUserInput
      | TagFollowCreateOrConnectWithoutUserInput[];
    createMany?: TagFollowCreateManyUserInputEnvelope;
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
  };

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?:
      | XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type FollowUncheckedCreateNestedManyWithoutFollowedInput = {
    create?:
      | XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
      | FollowCreateWithoutFollowedInput[]
      | FollowUncheckedCreateWithoutFollowedInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowedInput
      | FollowCreateOrConnectWithoutFollowedInput[];
    createMany?: FollowCreateManyFollowedInputEnvelope;
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUpdaterolesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type feedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<feedCreateWithoutUserInput, feedUncheckedCreateWithoutUserInput>
      | feedCreateWithoutUserInput[]
      | feedUncheckedCreateWithoutUserInput[];
    connectOrCreate?: feedCreateOrConnectWithoutUserInput | feedCreateOrConnectWithoutUserInput[];
    upsert?:
      | feedUpsertWithWhereUniqueWithoutUserInput
      | feedUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: feedCreateManyUserInputEnvelope;
    set?: feedWhereUniqueInput | feedWhereUniqueInput[];
    disconnect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    delete?: feedWhereUniqueInput | feedWhereUniqueInput[];
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    update?:
      | feedUpdateWithWhereUniqueWithoutUserInput
      | feedUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | feedUpdateManyWithWhereWithoutUserInput
      | feedUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: feedScalarWhereInput | feedScalarWhereInput[];
  };

  export type likeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
      | likeCreateWithoutUserInput[]
      | likeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[];
    upsert?:
      | likeUpsertWithWhereUniqueWithoutUserInput
      | likeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: likeCreateManyUserInputEnvelope;
    set?: likeWhereUniqueInput | likeWhereUniqueInput[];
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[];
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    update?:
      | likeUpdateWithWhereUniqueWithoutUserInput
      | likeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | likeUpdateManyWithWhereWithoutUserInput
      | likeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAuthorInput
      | CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAuthorInput
      | CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAuthorInput
      | CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type shareUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>
      | shareCreateWithoutUserInput[]
      | shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[];
    upsert?:
      | shareUpsertWithWhereUniqueWithoutUserInput
      | shareUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: shareCreateManyUserInputEnvelope;
    set?: shareWhereUniqueInput | shareWhereUniqueInput[];
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[];
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    update?:
      | shareUpdateWithWhereUniqueWithoutUserInput
      | shareUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | shareUpdateManyWithWhereWithoutUserInput
      | shareUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[];
  };

  export type TagFollowUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TagFollowCreateWithoutUserInput, TagFollowUncheckedCreateWithoutUserInput>
      | TagFollowCreateWithoutUserInput[]
      | TagFollowUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutUserInput
      | TagFollowCreateOrConnectWithoutUserInput[];
    upsert?:
      | TagFollowUpsertWithWhereUniqueWithoutUserInput
      | TagFollowUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TagFollowCreateManyUserInputEnvelope;
    set?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    disconnect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    delete?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    update?:
      | TagFollowUpdateWithWhereUniqueWithoutUserInput
      | TagFollowUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TagFollowUpdateManyWithWhereWithoutUserInput
      | TagFollowUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TagFollowScalarWhereInput | TagFollowScalarWhereInput[];
  };

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?:
      | XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowerInput
      | FollowUpsertWithWhereUniqueWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowerInput
      | FollowUpdateWithWhereUniqueWithoutFollowerInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowerInput
      | FollowUpdateManyWithWhereWithoutFollowerInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type FollowUpdateManyWithoutFollowedNestedInput = {
    create?:
      | XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
      | FollowCreateWithoutFollowedInput[]
      | FollowUncheckedCreateWithoutFollowedInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowedInput
      | FollowCreateOrConnectWithoutFollowedInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowedInput
      | FollowUpsertWithWhereUniqueWithoutFollowedInput[];
    createMany?: FollowCreateManyFollowedInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowedInput
      | FollowUpdateWithWhereUniqueWithoutFollowedInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowedInput
      | FollowUpdateManyWithWhereWithoutFollowedInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type feedUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<feedCreateWithoutUserInput, feedUncheckedCreateWithoutUserInput>
      | feedCreateWithoutUserInput[]
      | feedUncheckedCreateWithoutUserInput[];
    connectOrCreate?: feedCreateOrConnectWithoutUserInput | feedCreateOrConnectWithoutUserInput[];
    upsert?:
      | feedUpsertWithWhereUniqueWithoutUserInput
      | feedUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: feedCreateManyUserInputEnvelope;
    set?: feedWhereUniqueInput | feedWhereUniqueInput[];
    disconnect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    delete?: feedWhereUniqueInput | feedWhereUniqueInput[];
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    update?:
      | feedUpdateWithWhereUniqueWithoutUserInput
      | feedUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | feedUpdateManyWithWhereWithoutUserInput
      | feedUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: feedScalarWhereInput | feedScalarWhereInput[];
  };

  export type likeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>
      | likeCreateWithoutUserInput[]
      | likeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: likeCreateOrConnectWithoutUserInput | likeCreateOrConnectWithoutUserInput[];
    upsert?:
      | likeUpsertWithWhereUniqueWithoutUserInput
      | likeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: likeCreateManyUserInputEnvelope;
    set?: likeWhereUniqueInput | likeWhereUniqueInput[];
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[];
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    update?:
      | likeUpdateWithWhereUniqueWithoutUserInput
      | likeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | likeUpdateManyWithWhereWithoutUserInput
      | likeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
      | CommentCreateWithoutAuthorInput[]
      | CommentUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutAuthorInput
      | CommentCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutAuthorInput
      | CommentUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: CommentCreateManyAuthorInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutAuthorInput
      | CommentUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutAuthorInput
      | CommentUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type shareUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>
      | shareCreateWithoutUserInput[]
      | shareUncheckedCreateWithoutUserInput[];
    connectOrCreate?: shareCreateOrConnectWithoutUserInput | shareCreateOrConnectWithoutUserInput[];
    upsert?:
      | shareUpsertWithWhereUniqueWithoutUserInput
      | shareUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: shareCreateManyUserInputEnvelope;
    set?: shareWhereUniqueInput | shareWhereUniqueInput[];
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[];
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    update?:
      | shareUpdateWithWhereUniqueWithoutUserInput
      | shareUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | shareUpdateManyWithWhereWithoutUserInput
      | shareUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[];
  };

  export type TagFollowUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<TagFollowCreateWithoutUserInput, TagFollowUncheckedCreateWithoutUserInput>
      | TagFollowCreateWithoutUserInput[]
      | TagFollowUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutUserInput
      | TagFollowCreateOrConnectWithoutUserInput[];
    upsert?:
      | TagFollowUpsertWithWhereUniqueWithoutUserInput
      | TagFollowUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TagFollowCreateManyUserInputEnvelope;
    set?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    disconnect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    delete?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    update?:
      | TagFollowUpdateWithWhereUniqueWithoutUserInput
      | TagFollowUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TagFollowUpdateManyWithWhereWithoutUserInput
      | TagFollowUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TagFollowScalarWhereInput | TagFollowScalarWhereInput[];
  };

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?:
      | XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
      | FollowCreateWithoutFollowerInput[]
      | FollowUncheckedCreateWithoutFollowerInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowerInput
      | FollowCreateOrConnectWithoutFollowerInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowerInput
      | FollowUpsertWithWhereUniqueWithoutFollowerInput[];
    createMany?: FollowCreateManyFollowerInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowerInput
      | FollowUpdateWithWhereUniqueWithoutFollowerInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowerInput
      | FollowUpdateManyWithWhereWithoutFollowerInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type FollowUncheckedUpdateManyWithoutFollowedNestedInput = {
    create?:
      | XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>
      | FollowCreateWithoutFollowedInput[]
      | FollowUncheckedCreateWithoutFollowedInput[];
    connectOrCreate?:
      | FollowCreateOrConnectWithoutFollowedInput
      | FollowCreateOrConnectWithoutFollowedInput[];
    upsert?:
      | FollowUpsertWithWhereUniqueWithoutFollowedInput
      | FollowUpsertWithWhereUniqueWithoutFollowedInput[];
    createMany?: FollowCreateManyFollowedInputEnvelope;
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[];
    update?:
      | FollowUpdateWithWhereUniqueWithoutFollowedInput
      | FollowUpdateWithWhereUniqueWithoutFollowedInput[];
    updateMany?:
      | FollowUpdateManyWithWhereWithoutFollowedInput
      | FollowUpdateManyWithWhereWithoutFollowedInput[];
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>;
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostTagCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
      | PostTagCreateWithoutPostInput[]
      | PostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutPostInput
      | PostTagCreateOrConnectWithoutPostInput[];
    createMany?: PostTagCreateManyPostInputEnvelope;
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
  };

  export type CommentCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type likeCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
      | likeCreateWithoutPostInput[]
      | likeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[];
    createMany?: likeCreateManyPostInputEnvelope;
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
  };

  export type shareCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>
      | shareCreateWithoutPostInput[]
      | shareUncheckedCreateWithoutPostInput[];
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[];
    createMany?: shareCreateManyPostInputEnvelope;
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
  };

  export type feedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<feedCreateWithoutPostInput, feedUncheckedCreateWithoutPostInput>
      | feedCreateWithoutPostInput[]
      | feedUncheckedCreateWithoutPostInput[];
    connectOrCreate?: feedCreateOrConnectWithoutPostInput | feedCreateOrConnectWithoutPostInput[];
    createMany?: feedCreateManyPostInputEnvelope;
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
  };

  export type PostTagUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
      | PostTagCreateWithoutPostInput[]
      | PostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutPostInput
      | PostTagCreateOrConnectWithoutPostInput[];
    createMany?: PostTagCreateManyPostInputEnvelope;
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
  };

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
  };

  export type likeUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
      | likeCreateWithoutPostInput[]
      | likeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[];
    createMany?: likeCreateManyPostInputEnvelope;
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
  };

  export type shareUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>
      | shareCreateWithoutPostInput[]
      | shareUncheckedCreateWithoutPostInput[];
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[];
    createMany?: shareCreateManyPostInputEnvelope;
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
  };

  export type feedUncheckedCreateNestedManyWithoutPostInput = {
    create?:
      | XOR<feedCreateWithoutPostInput, feedUncheckedCreateWithoutPostInput>
      | feedCreateWithoutPostInput[]
      | feedUncheckedCreateWithoutPostInput[];
    connectOrCreate?: feedCreateOrConnectWithoutPostInput | feedCreateOrConnectWithoutPostInput[];
    createMany?: feedCreateManyPostInputEnvelope;
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserUpdateOneRequiredWithoutPostNestedInput = {
    create?: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>;
    connectOrCreate?: UserCreateOrConnectWithoutPostInput;
    upsert?: UserUpsertWithoutPostInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutPostInput, UserUpdateWithoutPostInput>,
      UserUncheckedUpdateWithoutPostInput
    >;
  };

  export type PostTagUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
      | PostTagCreateWithoutPostInput[]
      | PostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutPostInput
      | PostTagCreateOrConnectWithoutPostInput[];
    upsert?:
      | PostTagUpsertWithWhereUniqueWithoutPostInput
      | PostTagUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PostTagCreateManyPostInputEnvelope;
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    update?:
      | PostTagUpdateWithWhereUniqueWithoutPostInput
      | PostTagUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PostTagUpdateManyWithWhereWithoutPostInput
      | PostTagUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
  };

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutPostInput
      | CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutPostInput
      | CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutPostInput
      | CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type likeUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
      | likeCreateWithoutPostInput[]
      | likeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[];
    upsert?:
      | likeUpsertWithWhereUniqueWithoutPostInput
      | likeUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: likeCreateManyPostInputEnvelope;
    set?: likeWhereUniqueInput | likeWhereUniqueInput[];
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[];
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    update?:
      | likeUpdateWithWhereUniqueWithoutPostInput
      | likeUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | likeUpdateManyWithWhereWithoutPostInput
      | likeUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[];
  };

  export type shareUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>
      | shareCreateWithoutPostInput[]
      | shareUncheckedCreateWithoutPostInput[];
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[];
    upsert?:
      | shareUpsertWithWhereUniqueWithoutPostInput
      | shareUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: shareCreateManyPostInputEnvelope;
    set?: shareWhereUniqueInput | shareWhereUniqueInput[];
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[];
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    update?:
      | shareUpdateWithWhereUniqueWithoutPostInput
      | shareUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | shareUpdateManyWithWhereWithoutPostInput
      | shareUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[];
  };

  export type feedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<feedCreateWithoutPostInput, feedUncheckedCreateWithoutPostInput>
      | feedCreateWithoutPostInput[]
      | feedUncheckedCreateWithoutPostInput[];
    connectOrCreate?: feedCreateOrConnectWithoutPostInput | feedCreateOrConnectWithoutPostInput[];
    upsert?:
      | feedUpsertWithWhereUniqueWithoutPostInput
      | feedUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: feedCreateManyPostInputEnvelope;
    set?: feedWhereUniqueInput | feedWhereUniqueInput[];
    disconnect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    delete?: feedWhereUniqueInput | feedWhereUniqueInput[];
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    update?:
      | feedUpdateWithWhereUniqueWithoutPostInput
      | feedUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | feedUpdateManyWithWhereWithoutPostInput
      | feedUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: feedScalarWhereInput | feedScalarWhereInput[];
  };

  export type PostTagUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>
      | PostTagCreateWithoutPostInput[]
      | PostTagUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutPostInput
      | PostTagCreateOrConnectWithoutPostInput[];
    upsert?:
      | PostTagUpsertWithWhereUniqueWithoutPostInput
      | PostTagUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: PostTagCreateManyPostInputEnvelope;
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    update?:
      | PostTagUpdateWithWhereUniqueWithoutPostInput
      | PostTagUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | PostTagUpdateManyWithWhereWithoutPostInput
      | PostTagUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
  };

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
      | CommentCreateWithoutPostInput[]
      | CommentUncheckedCreateWithoutPostInput[];
    connectOrCreate?:
      | CommentCreateOrConnectWithoutPostInput
      | CommentCreateOrConnectWithoutPostInput[];
    upsert?:
      | CommentUpsertWithWhereUniqueWithoutPostInput
      | CommentUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: CommentCreateManyPostInputEnvelope;
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[];
    update?:
      | CommentUpdateWithWhereUniqueWithoutPostInput
      | CommentUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | CommentUpdateManyWithWhereWithoutPostInput
      | CommentUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[];
  };

  export type likeUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>
      | likeCreateWithoutPostInput[]
      | likeUncheckedCreateWithoutPostInput[];
    connectOrCreate?: likeCreateOrConnectWithoutPostInput | likeCreateOrConnectWithoutPostInput[];
    upsert?:
      | likeUpsertWithWhereUniqueWithoutPostInput
      | likeUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: likeCreateManyPostInputEnvelope;
    set?: likeWhereUniqueInput | likeWhereUniqueInput[];
    disconnect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    delete?: likeWhereUniqueInput | likeWhereUniqueInput[];
    connect?: likeWhereUniqueInput | likeWhereUniqueInput[];
    update?:
      | likeUpdateWithWhereUniqueWithoutPostInput
      | likeUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | likeUpdateManyWithWhereWithoutPostInput
      | likeUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: likeScalarWhereInput | likeScalarWhereInput[];
  };

  export type shareUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>
      | shareCreateWithoutPostInput[]
      | shareUncheckedCreateWithoutPostInput[];
    connectOrCreate?: shareCreateOrConnectWithoutPostInput | shareCreateOrConnectWithoutPostInput[];
    upsert?:
      | shareUpsertWithWhereUniqueWithoutPostInput
      | shareUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: shareCreateManyPostInputEnvelope;
    set?: shareWhereUniqueInput | shareWhereUniqueInput[];
    disconnect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    delete?: shareWhereUniqueInput | shareWhereUniqueInput[];
    connect?: shareWhereUniqueInput | shareWhereUniqueInput[];
    update?:
      | shareUpdateWithWhereUniqueWithoutPostInput
      | shareUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | shareUpdateManyWithWhereWithoutPostInput
      | shareUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: shareScalarWhereInput | shareScalarWhereInput[];
  };

  export type feedUncheckedUpdateManyWithoutPostNestedInput = {
    create?:
      | XOR<feedCreateWithoutPostInput, feedUncheckedCreateWithoutPostInput>
      | feedCreateWithoutPostInput[]
      | feedUncheckedCreateWithoutPostInput[];
    connectOrCreate?: feedCreateOrConnectWithoutPostInput | feedCreateOrConnectWithoutPostInput[];
    upsert?:
      | feedUpsertWithWhereUniqueWithoutPostInput
      | feedUpsertWithWhereUniqueWithoutPostInput[];
    createMany?: feedCreateManyPostInputEnvelope;
    set?: feedWhereUniqueInput | feedWhereUniqueInput[];
    disconnect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    delete?: feedWhereUniqueInput | feedWhereUniqueInput[];
    connect?: feedWhereUniqueInput | feedWhereUniqueInput[];
    update?:
      | feedUpdateWithWhereUniqueWithoutPostInput
      | feedUpdateWithWhereUniqueWithoutPostInput[];
    updateMany?:
      | feedUpdateManyWithWhereWithoutPostInput
      | feedUpdateManyWithWhereWithoutPostInput[];
    deleteMany?: feedScalarWhereInput | feedScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFollowersInput;
    upsert?: UserUpsertWithoutFollowersInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutFollowersInput, UserUpdateWithoutFollowersInput>,
      UserUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFollowingInput;
    upsert?: UserUpsertWithoutFollowingInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutFollowingInput, UserUpdateWithoutFollowingInput>,
      UserUncheckedUpdateWithoutFollowingInput
    >;
  };

  export type PostTagCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
      | PostTagCreateWithoutTagInput[]
      | PostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutTagInput
      | PostTagCreateOrConnectWithoutTagInput[];
    createMany?: PostTagCreateManyTagInputEnvelope;
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
  };

  export type TagFollowCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<TagFollowCreateWithoutTagInput, TagFollowUncheckedCreateWithoutTagInput>
      | TagFollowCreateWithoutTagInput[]
      | TagFollowUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutTagInput
      | TagFollowCreateOrConnectWithoutTagInput[];
    createMany?: TagFollowCreateManyTagInputEnvelope;
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
  };

  export type PostTagUncheckedCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
      | PostTagCreateWithoutTagInput[]
      | PostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutTagInput
      | PostTagCreateOrConnectWithoutTagInput[];
    createMany?: PostTagCreateManyTagInputEnvelope;
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
  };

  export type TagFollowUncheckedCreateNestedManyWithoutTagInput = {
    create?:
      | XOR<TagFollowCreateWithoutTagInput, TagFollowUncheckedCreateWithoutTagInput>
      | TagFollowCreateWithoutTagInput[]
      | TagFollowUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutTagInput
      | TagFollowCreateOrConnectWithoutTagInput[];
    createMany?: TagFollowCreateManyTagInputEnvelope;
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
  };

  export type PostTagUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
      | PostTagCreateWithoutTagInput[]
      | PostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutTagInput
      | PostTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | PostTagUpsertWithWhereUniqueWithoutTagInput
      | PostTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: PostTagCreateManyTagInputEnvelope;
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    update?:
      | PostTagUpdateWithWhereUniqueWithoutTagInput
      | PostTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | PostTagUpdateManyWithWhereWithoutTagInput
      | PostTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
  };

  export type TagFollowUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<TagFollowCreateWithoutTagInput, TagFollowUncheckedCreateWithoutTagInput>
      | TagFollowCreateWithoutTagInput[]
      | TagFollowUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutTagInput
      | TagFollowCreateOrConnectWithoutTagInput[];
    upsert?:
      | TagFollowUpsertWithWhereUniqueWithoutTagInput
      | TagFollowUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: TagFollowCreateManyTagInputEnvelope;
    set?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    disconnect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    delete?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    update?:
      | TagFollowUpdateWithWhereUniqueWithoutTagInput
      | TagFollowUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | TagFollowUpdateManyWithWhereWithoutTagInput
      | TagFollowUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: TagFollowScalarWhereInput | TagFollowScalarWhereInput[];
  };

  export type PostTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>
      | PostTagCreateWithoutTagInput[]
      | PostTagUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | PostTagCreateOrConnectWithoutTagInput
      | PostTagCreateOrConnectWithoutTagInput[];
    upsert?:
      | PostTagUpsertWithWhereUniqueWithoutTagInput
      | PostTagUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: PostTagCreateManyTagInputEnvelope;
    set?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    disconnect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    delete?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    connect?: PostTagWhereUniqueInput | PostTagWhereUniqueInput[];
    update?:
      | PostTagUpdateWithWhereUniqueWithoutTagInput
      | PostTagUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | PostTagUpdateManyWithWhereWithoutTagInput
      | PostTagUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
  };

  export type TagFollowUncheckedUpdateManyWithoutTagNestedInput = {
    create?:
      | XOR<TagFollowCreateWithoutTagInput, TagFollowUncheckedCreateWithoutTagInput>
      | TagFollowCreateWithoutTagInput[]
      | TagFollowUncheckedCreateWithoutTagInput[];
    connectOrCreate?:
      | TagFollowCreateOrConnectWithoutTagInput
      | TagFollowCreateOrConnectWithoutTagInput[];
    upsert?:
      | TagFollowUpsertWithWhereUniqueWithoutTagInput
      | TagFollowUpsertWithWhereUniqueWithoutTagInput[];
    createMany?: TagFollowCreateManyTagInputEnvelope;
    set?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    disconnect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    delete?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    connect?: TagFollowWhereUniqueInput | TagFollowWhereUniqueInput[];
    update?:
      | TagFollowUpdateWithWhereUniqueWithoutTagInput
      | TagFollowUpdateWithWhereUniqueWithoutTagInput[];
    updateMany?:
      | TagFollowUpdateManyWithWhereWithoutTagInput
      | TagFollowUpdateManyWithWhereWithoutTagInput[];
    deleteMany?: TagFollowScalarWhereInput | TagFollowScalarWhereInput[];
  };

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput;
    connect?: PostWhereUniqueInput;
  };

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput;
    connect?: TagWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>;
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput;
    upsert?: PostUpsertWithoutTagsInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>,
      PostUncheckedUpdateWithoutTagsInput
    >;
  };

  export type TagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>;
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput;
    upsert?: TagUpsertWithoutPostsInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<TagUpdateToOneWithWhereWithoutPostsInput, TagUpdateWithoutPostsInput>,
      TagUncheckedUpdateWithoutPostsInput
    >;
  };

  export type TagCreateNestedOneWithoutFollowersInput = {
    create?: XOR<TagCreateWithoutFollowersInput, TagUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: TagCreateOrConnectWithoutFollowersInput;
    connect?: TagWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutTagFollowsInput = {
    create?: XOR<UserCreateWithoutTagFollowsInput, UserUncheckedCreateWithoutTagFollowsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutTagFollowsInput;
    connect?: UserWhereUniqueInput;
  };

  export type TagUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<TagCreateWithoutFollowersInput, TagUncheckedCreateWithoutFollowersInput>;
    connectOrCreate?: TagCreateOrConnectWithoutFollowersInput;
    upsert?: TagUpsertWithoutFollowersInput;
    connect?: TagWhereUniqueInput;
    update?: XOR<
      XOR<TagUpdateToOneWithWhereWithoutFollowersInput, TagUpdateWithoutFollowersInput>,
      TagUncheckedUpdateWithoutFollowersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutTagFollowsNestedInput = {
    create?: XOR<UserCreateWithoutTagFollowsInput, UserUncheckedCreateWithoutTagFollowsInput>;
    connectOrCreate?: UserCreateOrConnectWithoutTagFollowsInput;
    upsert?: UserUpsertWithoutTagFollowsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutTagFollowsInput, UserUpdateWithoutTagFollowsInput>,
      UserUncheckedUpdateWithoutTagFollowsInput
    >;
  };

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput;
    upsert?: PostUpsertWithoutCommentsInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>,
      PostUncheckedUpdateWithoutCommentsInput
    >;
  };

  export type UserUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>;
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
    upsert?: UserUpsertWithoutCommentInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>,
      UserUncheckedUpdateWithoutCommentInput
    >;
  };

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutLikeInput = {
    create?: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>;
    connectOrCreate?: UserCreateOrConnectWithoutLikeInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput;
    upsert?: PostUpsertWithoutLikesInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>,
      PostUncheckedUpdateWithoutLikesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutLikeNestedInput = {
    create?: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>;
    connectOrCreate?: UserCreateOrConnectWithoutLikeInput;
    upsert?: UserUpsertWithoutLikeInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutLikeInput, UserUpdateWithoutLikeInput>,
      UserUncheckedUpdateWithoutLikeInput
    >;
  };

  export type PostCreateNestedOneWithoutSharesInput = {
    create?: XOR<PostCreateWithoutSharesInput, PostUncheckedCreateWithoutSharesInput>;
    connectOrCreate?: PostCreateOrConnectWithoutSharesInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutSharedInput = {
    create?: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>;
    connectOrCreate?: UserCreateOrConnectWithoutSharedInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<PostCreateWithoutSharesInput, PostUncheckedCreateWithoutSharesInput>;
    connectOrCreate?: PostCreateOrConnectWithoutSharesInput;
    upsert?: PostUpsertWithoutSharesInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<PostUpdateToOneWithWhereWithoutSharesInput, PostUpdateWithoutSharesInput>,
      PostUncheckedUpdateWithoutSharesInput
    >;
  };

  export type UserUpdateOneRequiredWithoutSharedNestedInput = {
    create?: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>;
    connectOrCreate?: UserCreateOrConnectWithoutSharedInput;
    upsert?: UserUpsertWithoutSharedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutSharedInput, UserUpdateWithoutSharedInput>,
      UserUncheckedUpdateWithoutSharedInput
    >;
  };

  export type PostCreateNestedOneWithoutFeedInput = {
    create?: XOR<PostCreateWithoutFeedInput, PostUncheckedCreateWithoutFeedInput>;
    connectOrCreate?: PostCreateOrConnectWithoutFeedInput;
    connect?: PostWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutFeedInput = {
    create?: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFeedInput;
    connect?: UserWhereUniqueInput;
  };

  export type PostUpdateOneRequiredWithoutFeedNestedInput = {
    create?: XOR<PostCreateWithoutFeedInput, PostUncheckedCreateWithoutFeedInput>;
    connectOrCreate?: PostCreateOrConnectWithoutFeedInput;
    upsert?: PostUpsertWithoutFeedInput;
    connect?: PostWhereUniqueInput;
    update?: XOR<
      XOR<PostUpdateToOneWithWhereWithoutFeedInput, PostUpdateWithoutFeedInput>,
      PostUncheckedUpdateWithoutFeedInput
    >;
  };

  export type UserUpdateOneRequiredWithoutFeedNestedInput = {
    create?: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput>;
    connectOrCreate?: UserCreateOrConnectWithoutFeedInput;
    upsert?: UserUpsertWithoutFeedInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<UserUpdateToOneWithWhereWithoutFeedInput, UserUpdateWithoutFeedInput>,
      UserUncheckedUpdateWithoutFeedInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type PostCreateWithoutAuthorInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    likes?: likeCreateNestedManyWithoutPostInput;
    shares?: shareCreateNestedManyWithoutPostInput;
    feed?: feedCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: likeUncheckedCreateNestedManyWithoutPostInput;
    shares?: shareUncheckedCreateNestedManyWithoutPostInput;
    feed?: feedUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>;
  };

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type feedCreateWithoutUserInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutFeedInput;
  };

  export type feedUncheckedCreateWithoutUserInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type feedCreateOrConnectWithoutUserInput = {
    where: feedWhereUniqueInput;
    create: XOR<feedCreateWithoutUserInput, feedUncheckedCreateWithoutUserInput>;
  };

  export type feedCreateManyUserInputEnvelope = {
    data: feedCreateManyUserInput | feedCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type likeCreateWithoutUserInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutLikesInput;
  };

  export type likeUncheckedCreateWithoutUserInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type likeCreateOrConnectWithoutUserInput = {
    where: likeWhereUniqueInput;
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>;
  };

  export type likeCreateManyUserInputEnvelope = {
    data: likeCreateManyUserInput | likeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutAuthorInput = {
    content: string;
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutCommentsInput;
  };

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    postId: number;
  };

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>;
  };

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type shareCreateWithoutUserInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutSharesInput;
  };

  export type shareUncheckedCreateWithoutUserInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type shareCreateOrConnectWithoutUserInput = {
    where: shareWhereUniqueInput;
    create: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>;
  };

  export type shareCreateManyUserInputEnvelope = {
    data: shareCreateManyUserInput | shareCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type TagFollowCreateWithoutUserInput = {
    createdAt?: Date | string;
    tag: TagCreateNestedOneWithoutFollowersInput;
  };

  export type TagFollowUncheckedCreateWithoutUserInput = {
    id?: number;
    tagId: number;
    createdAt?: Date | string;
  };

  export type TagFollowCreateOrConnectWithoutUserInput = {
    where: TagFollowWhereUniqueInput;
    create: XOR<TagFollowCreateWithoutUserInput, TagFollowUncheckedCreateWithoutUserInput>;
  };

  export type TagFollowCreateManyUserInputEnvelope = {
    data: TagFollowCreateManyUserInput | TagFollowCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type FollowCreateWithoutFollowerInput = {
    createdAt?: Date | string;
    followed: UserCreateNestedOneWithoutFollowingInput;
  };

  export type FollowUncheckedCreateWithoutFollowerInput = {
    id?: number;
    followedId: number;
    createdAt?: Date | string;
  };

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput;
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>;
  };

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[];
    skipDuplicates?: boolean;
  };

  export type FollowCreateWithoutFollowedInput = {
    createdAt?: Date | string;
    follower: UserCreateNestedOneWithoutFollowersInput;
  };

  export type FollowUncheckedCreateWithoutFollowedInput = {
    id?: number;
    followerId: number;
    createdAt?: Date | string;
  };

  export type FollowCreateOrConnectWithoutFollowedInput = {
    where: FollowWhereUniqueInput;
    create: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>;
  };

  export type FollowCreateManyFollowedInputEnvelope = {
    data: FollowCreateManyFollowedInput | FollowCreateManyFollowedInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>;
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>;
  };

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>;
  };

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput;
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>;
  };

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: IntFilter<'Post'> | number;
    title?: StringFilter<'Post'> | string;
    content?: StringFilter<'Post'> | string;
    createdAt?: DateTimeFilter<'Post'> | Date | string;
    authorId?: IntFilter<'Post'> | number;
    likeCount?: IntFilter<'Post'> | number;
    commentCount?: IntFilter<'Post'> | number;
  };

  export type feedUpsertWithWhereUniqueWithoutUserInput = {
    where: feedWhereUniqueInput;
    update: XOR<feedUpdateWithoutUserInput, feedUncheckedUpdateWithoutUserInput>;
    create: XOR<feedCreateWithoutUserInput, feedUncheckedCreateWithoutUserInput>;
  };

  export type feedUpdateWithWhereUniqueWithoutUserInput = {
    where: feedWhereUniqueInput;
    data: XOR<feedUpdateWithoutUserInput, feedUncheckedUpdateWithoutUserInput>;
  };

  export type feedUpdateManyWithWhereWithoutUserInput = {
    where: feedScalarWhereInput;
    data: XOR<feedUpdateManyMutationInput, feedUncheckedUpdateManyWithoutUserInput>;
  };

  export type feedScalarWhereInput = {
    AND?: feedScalarWhereInput | feedScalarWhereInput[];
    OR?: feedScalarWhereInput[];
    NOT?: feedScalarWhereInput | feedScalarWhereInput[];
    id?: IntFilter<'feed'> | number;
    postId?: IntFilter<'feed'> | number;
    userId?: IntFilter<'feed'> | number;
    createdAt?: DateTimeFilter<'feed'> | Date | string;
  };

  export type likeUpsertWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput;
    update: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>;
    create: XOR<likeCreateWithoutUserInput, likeUncheckedCreateWithoutUserInput>;
  };

  export type likeUpdateWithWhereUniqueWithoutUserInput = {
    where: likeWhereUniqueInput;
    data: XOR<likeUpdateWithoutUserInput, likeUncheckedUpdateWithoutUserInput>;
  };

  export type likeUpdateManyWithWhereWithoutUserInput = {
    where: likeScalarWhereInput;
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutUserInput>;
  };

  export type likeScalarWhereInput = {
    AND?: likeScalarWhereInput | likeScalarWhereInput[];
    OR?: likeScalarWhereInput[];
    NOT?: likeScalarWhereInput | likeScalarWhereInput[];
    id?: IntFilter<'like'> | number;
    postId?: IntFilter<'like'> | number;
    userId?: IntFilter<'like'> | number;
    createdAt?: DateTimeFilter<'like'> | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>;
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>;
  };

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput;
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>;
  };

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput;
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>;
  };

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[];
    OR?: CommentScalarWhereInput[];
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[];
    id?: IntFilter<'Comment'> | number;
    content?: StringFilter<'Comment'> | string;
    createdAt?: DateTimeFilter<'Comment'> | Date | string;
    postId?: IntFilter<'Comment'> | number;
    authorId?: IntFilter<'Comment'> | number;
  };

  export type shareUpsertWithWhereUniqueWithoutUserInput = {
    where: shareWhereUniqueInput;
    update: XOR<shareUpdateWithoutUserInput, shareUncheckedUpdateWithoutUserInput>;
    create: XOR<shareCreateWithoutUserInput, shareUncheckedCreateWithoutUserInput>;
  };

  export type shareUpdateWithWhereUniqueWithoutUserInput = {
    where: shareWhereUniqueInput;
    data: XOR<shareUpdateWithoutUserInput, shareUncheckedUpdateWithoutUserInput>;
  };

  export type shareUpdateManyWithWhereWithoutUserInput = {
    where: shareScalarWhereInput;
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyWithoutUserInput>;
  };

  export type shareScalarWhereInput = {
    AND?: shareScalarWhereInput | shareScalarWhereInput[];
    OR?: shareScalarWhereInput[];
    NOT?: shareScalarWhereInput | shareScalarWhereInput[];
    id?: IntFilter<'share'> | number;
    postId?: IntFilter<'share'> | number;
    userId?: IntFilter<'share'> | number;
    createdAt?: DateTimeFilter<'share'> | Date | string;
  };

  export type TagFollowUpsertWithWhereUniqueWithoutUserInput = {
    where: TagFollowWhereUniqueInput;
    update: XOR<TagFollowUpdateWithoutUserInput, TagFollowUncheckedUpdateWithoutUserInput>;
    create: XOR<TagFollowCreateWithoutUserInput, TagFollowUncheckedCreateWithoutUserInput>;
  };

  export type TagFollowUpdateWithWhereUniqueWithoutUserInput = {
    where: TagFollowWhereUniqueInput;
    data: XOR<TagFollowUpdateWithoutUserInput, TagFollowUncheckedUpdateWithoutUserInput>;
  };

  export type TagFollowUpdateManyWithWhereWithoutUserInput = {
    where: TagFollowScalarWhereInput;
    data: XOR<TagFollowUpdateManyMutationInput, TagFollowUncheckedUpdateManyWithoutUserInput>;
  };

  export type TagFollowScalarWhereInput = {
    AND?: TagFollowScalarWhereInput | TagFollowScalarWhereInput[];
    OR?: TagFollowScalarWhereInput[];
    NOT?: TagFollowScalarWhereInput | TagFollowScalarWhereInput[];
    id?: IntFilter<'TagFollow'> | number;
    tagId?: IntFilter<'TagFollow'> | number;
    userId?: IntFilter<'TagFollow'> | number;
    createdAt?: DateTimeFilter<'TagFollow'> | Date | string;
  };

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput;
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>;
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>;
  };

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput;
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>;
  };

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput;
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>;
  };

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[];
    OR?: FollowScalarWhereInput[];
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[];
    id?: IntFilter<'Follow'> | number;
    followerId?: IntFilter<'Follow'> | number;
    followedId?: IntFilter<'Follow'> | number;
    createdAt?: DateTimeFilter<'Follow'> | Date | string;
  };

  export type FollowUpsertWithWhereUniqueWithoutFollowedInput = {
    where: FollowWhereUniqueInput;
    update: XOR<FollowUpdateWithoutFollowedInput, FollowUncheckedUpdateWithoutFollowedInput>;
    create: XOR<FollowCreateWithoutFollowedInput, FollowUncheckedCreateWithoutFollowedInput>;
  };

  export type FollowUpdateWithWhereUniqueWithoutFollowedInput = {
    where: FollowWhereUniqueInput;
    data: XOR<FollowUpdateWithoutFollowedInput, FollowUncheckedUpdateWithoutFollowedInput>;
  };

  export type FollowUpdateManyWithWhereWithoutFollowedInput = {
    where: FollowScalarWhereInput;
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowedInput>;
  };

  export type UserCreateWithoutPostInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutPostInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutPostInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>;
  };

  export type PostTagCreateWithoutPostInput = {
    createdAt?: Date | string;
    tag: TagCreateNestedOneWithoutPostsInput;
  };

  export type PostTagUncheckedCreateWithoutPostInput = {
    id?: number;
    tagId: number;
    createdAt?: Date | string;
  };

  export type PostTagCreateOrConnectWithoutPostInput = {
    where: PostTagWhereUniqueInput;
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>;
  };

  export type PostTagCreateManyPostInputEnvelope = {
    data: PostTagCreateManyPostInput | PostTagCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type CommentCreateWithoutPostInput = {
    content: string;
    createdAt?: Date | string;
    author: UserCreateNestedOneWithoutCommentInput;
  };

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    authorId: number;
  };

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput;
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>;
  };

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type likeCreateWithoutPostInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutLikeInput;
  };

  export type likeUncheckedCreateWithoutPostInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type likeCreateOrConnectWithoutPostInput = {
    where: likeWhereUniqueInput;
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>;
  };

  export type likeCreateManyPostInputEnvelope = {
    data: likeCreateManyPostInput | likeCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type shareCreateWithoutPostInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutSharedInput;
  };

  export type shareUncheckedCreateWithoutPostInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type shareCreateOrConnectWithoutPostInput = {
    where: shareWhereUniqueInput;
    create: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>;
  };

  export type shareCreateManyPostInputEnvelope = {
    data: shareCreateManyPostInput | shareCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type feedCreateWithoutPostInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutFeedInput;
  };

  export type feedUncheckedCreateWithoutPostInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type feedCreateOrConnectWithoutPostInput = {
    where: feedWhereUniqueInput;
    create: XOR<feedCreateWithoutPostInput, feedUncheckedCreateWithoutPostInput>;
  };

  export type feedCreateManyPostInputEnvelope = {
    data: feedCreateManyPostInput | feedCreateManyPostInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutPostInput = {
    update: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>;
    create: XOR<UserCreateWithoutPostInput, UserUncheckedCreateWithoutPostInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutPostInput, UserUncheckedUpdateWithoutPostInput>;
  };

  export type UserUpdateWithoutPostInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type PostTagUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput;
    update: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>;
    create: XOR<PostTagCreateWithoutPostInput, PostTagUncheckedCreateWithoutPostInput>;
  };

  export type PostTagUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagWhereUniqueInput;
    data: XOR<PostTagUpdateWithoutPostInput, PostTagUncheckedUpdateWithoutPostInput>;
  };

  export type PostTagUpdateManyWithWhereWithoutPostInput = {
    where: PostTagScalarWhereInput;
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutPostInput>;
  };

  export type PostTagScalarWhereInput = {
    AND?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
    OR?: PostTagScalarWhereInput[];
    NOT?: PostTagScalarWhereInput | PostTagScalarWhereInput[];
    id?: IntFilter<'PostTag'> | number;
    postId?: IntFilter<'PostTag'> | number;
    tagId?: IntFilter<'PostTag'> | number;
    createdAt?: DateTimeFilter<'PostTag'> | Date | string;
  };

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput;
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>;
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>;
  };

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput;
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>;
  };

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput;
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>;
  };

  export type likeUpsertWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput;
    update: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>;
    create: XOR<likeCreateWithoutPostInput, likeUncheckedCreateWithoutPostInput>;
  };

  export type likeUpdateWithWhereUniqueWithoutPostInput = {
    where: likeWhereUniqueInput;
    data: XOR<likeUpdateWithoutPostInput, likeUncheckedUpdateWithoutPostInput>;
  };

  export type likeUpdateManyWithWhereWithoutPostInput = {
    where: likeScalarWhereInput;
    data: XOR<likeUpdateManyMutationInput, likeUncheckedUpdateManyWithoutPostInput>;
  };

  export type shareUpsertWithWhereUniqueWithoutPostInput = {
    where: shareWhereUniqueInput;
    update: XOR<shareUpdateWithoutPostInput, shareUncheckedUpdateWithoutPostInput>;
    create: XOR<shareCreateWithoutPostInput, shareUncheckedCreateWithoutPostInput>;
  };

  export type shareUpdateWithWhereUniqueWithoutPostInput = {
    where: shareWhereUniqueInput;
    data: XOR<shareUpdateWithoutPostInput, shareUncheckedUpdateWithoutPostInput>;
  };

  export type shareUpdateManyWithWhereWithoutPostInput = {
    where: shareScalarWhereInput;
    data: XOR<shareUpdateManyMutationInput, shareUncheckedUpdateManyWithoutPostInput>;
  };

  export type feedUpsertWithWhereUniqueWithoutPostInput = {
    where: feedWhereUniqueInput;
    update: XOR<feedUpdateWithoutPostInput, feedUncheckedUpdateWithoutPostInput>;
    create: XOR<feedCreateWithoutPostInput, feedUncheckedCreateWithoutPostInput>;
  };

  export type feedUpdateWithWhereUniqueWithoutPostInput = {
    where: feedWhereUniqueInput;
    data: XOR<feedUpdateWithoutPostInput, feedUncheckedUpdateWithoutPostInput>;
  };

  export type feedUpdateManyWithWhereWithoutPostInput = {
    where: feedScalarWhereInput;
    data: XOR<feedUpdateManyMutationInput, feedUncheckedUpdateManyWithoutPostInput>;
  };

  export type UserCreateWithoutFollowersInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutFollowersInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutFollowersInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>;
  };

  export type UserCreateWithoutFollowingInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
  };

  export type UserUncheckedCreateWithoutFollowingInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
  };

  export type UserCreateOrConnectWithoutFollowingInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>;
  };

  export type UserUpsertWithoutFollowersInput = {
    update: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>;
    create: XOR<UserCreateWithoutFollowersInput, UserUncheckedCreateWithoutFollowersInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutFollowersInput, UserUncheckedUpdateWithoutFollowersInput>;
  };

  export type UserUpdateWithoutFollowersInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUpsertWithoutFollowingInput = {
    update: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>;
    create: XOR<UserCreateWithoutFollowingInput, UserUncheckedCreateWithoutFollowingInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutFollowingInput, UserUncheckedUpdateWithoutFollowingInput>;
  };

  export type UserUpdateWithoutFollowingInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
  };

  export type UserUncheckedUpdateWithoutFollowingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
  };

  export type PostTagCreateWithoutTagInput = {
    createdAt?: Date | string;
    post: PostCreateNestedOneWithoutTagsInput;
  };

  export type PostTagUncheckedCreateWithoutTagInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type PostTagCreateOrConnectWithoutTagInput = {
    where: PostTagWhereUniqueInput;
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>;
  };

  export type PostTagCreateManyTagInputEnvelope = {
    data: PostTagCreateManyTagInput | PostTagCreateManyTagInput[];
    skipDuplicates?: boolean;
  };

  export type TagFollowCreateWithoutTagInput = {
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutTagFollowsInput;
  };

  export type TagFollowUncheckedCreateWithoutTagInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type TagFollowCreateOrConnectWithoutTagInput = {
    where: TagFollowWhereUniqueInput;
    create: XOR<TagFollowCreateWithoutTagInput, TagFollowUncheckedCreateWithoutTagInput>;
  };

  export type TagFollowCreateManyTagInputEnvelope = {
    data: TagFollowCreateManyTagInput | TagFollowCreateManyTagInput[];
    skipDuplicates?: boolean;
  };

  export type PostTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput;
    update: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>;
    create: XOR<PostTagCreateWithoutTagInput, PostTagUncheckedCreateWithoutTagInput>;
  };

  export type PostTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagWhereUniqueInput;
    data: XOR<PostTagUpdateWithoutTagInput, PostTagUncheckedUpdateWithoutTagInput>;
  };

  export type PostTagUpdateManyWithWhereWithoutTagInput = {
    where: PostTagScalarWhereInput;
    data: XOR<PostTagUpdateManyMutationInput, PostTagUncheckedUpdateManyWithoutTagInput>;
  };

  export type TagFollowUpsertWithWhereUniqueWithoutTagInput = {
    where: TagFollowWhereUniqueInput;
    update: XOR<TagFollowUpdateWithoutTagInput, TagFollowUncheckedUpdateWithoutTagInput>;
    create: XOR<TagFollowCreateWithoutTagInput, TagFollowUncheckedCreateWithoutTagInput>;
  };

  export type TagFollowUpdateWithWhereUniqueWithoutTagInput = {
    where: TagFollowWhereUniqueInput;
    data: XOR<TagFollowUpdateWithoutTagInput, TagFollowUncheckedUpdateWithoutTagInput>;
  };

  export type TagFollowUpdateManyWithWhereWithoutTagInput = {
    where: TagFollowScalarWhereInput;
    data: XOR<TagFollowUpdateManyMutationInput, TagFollowUncheckedUpdateManyWithoutTagInput>;
  };

  export type PostCreateWithoutTagsInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    author: UserCreateNestedOneWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    likes?: likeCreateNestedManyWithoutPostInput;
    shares?: shareCreateNestedManyWithoutPostInput;
    feed?: feedCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: likeUncheckedCreateNestedManyWithoutPostInput;
    shares?: shareUncheckedCreateNestedManyWithoutPostInput;
    feed?: feedUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>;
  };

  export type TagCreateWithoutPostsInput = {
    name: string;
    createdAt?: Date | string;
    followers?: TagFollowCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    followers?: TagFollowUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput;
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>;
  };

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>;
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput;
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>;
  };

  export type PostUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    likes?: likeUpdateManyWithoutPostNestedInput;
    shares?: shareUpdateManyWithoutPostNestedInput;
    feed?: feedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput;
    shares?: shareUncheckedUpdateManyWithoutPostNestedInput;
    feed?: feedUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>;
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutPostsInput = {
    where?: TagWhereInput;
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>;
  };

  export type TagUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followers?: TagFollowUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followers?: TagFollowUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type TagCreateWithoutFollowersInput = {
    name: string;
    createdAt?: Date | string;
    posts?: PostTagCreateNestedManyWithoutTagInput;
  };

  export type TagUncheckedCreateWithoutFollowersInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    posts?: PostTagUncheckedCreateNestedManyWithoutTagInput;
  };

  export type TagCreateOrConnectWithoutFollowersInput = {
    where: TagWhereUniqueInput;
    create: XOR<TagCreateWithoutFollowersInput, TagUncheckedCreateWithoutFollowersInput>;
  };

  export type UserCreateWithoutTagFollowsInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutTagFollowsInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutTagFollowsInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutTagFollowsInput, UserUncheckedCreateWithoutTagFollowsInput>;
  };

  export type TagUpsertWithoutFollowersInput = {
    update: XOR<TagUpdateWithoutFollowersInput, TagUncheckedUpdateWithoutFollowersInput>;
    create: XOR<TagCreateWithoutFollowersInput, TagUncheckedCreateWithoutFollowersInput>;
    where?: TagWhereInput;
  };

  export type TagUpdateToOneWithWhereWithoutFollowersInput = {
    where?: TagWhereInput;
    data: XOR<TagUpdateWithoutFollowersInput, TagUncheckedUpdateWithoutFollowersInput>;
  };

  export type TagUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostTagUpdateManyWithoutTagNestedInput;
  };

  export type TagUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostTagUncheckedUpdateManyWithoutTagNestedInput;
  };

  export type UserUpsertWithoutTagFollowsInput = {
    update: XOR<UserUpdateWithoutTagFollowsInput, UserUncheckedUpdateWithoutTagFollowsInput>;
    create: XOR<UserCreateWithoutTagFollowsInput, UserUncheckedCreateWithoutTagFollowsInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTagFollowsInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutTagFollowsInput, UserUncheckedUpdateWithoutTagFollowsInput>;
  };

  export type UserUpdateWithoutTagFollowsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutTagFollowsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type PostCreateWithoutCommentsInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostInput;
    likes?: likeCreateNestedManyWithoutPostInput;
    shares?: shareCreateNestedManyWithoutPostInput;
    feed?: feedCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput;
    likes?: likeUncheckedCreateNestedManyWithoutPostInput;
    shares?: shareUncheckedCreateNestedManyWithoutPostInput;
    feed?: feedUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>;
  };

  export type UserCreateWithoutCommentInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>;
  };

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>;
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput;
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>;
  };

  export type PostUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostNestedInput;
    likes?: likeUpdateManyWithoutPostNestedInput;
    shares?: shareUpdateManyWithoutPostNestedInput;
    feed?: feedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput;
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput;
    shares?: shareUncheckedUpdateManyWithoutPostNestedInput;
    feed?: feedUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>;
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>;
  };

  export type UserUpdateWithoutCommentInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type PostCreateWithoutLikesInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    shares?: shareCreateNestedManyWithoutPostInput;
    feed?: feedCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutLikesInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    shares?: shareUncheckedCreateNestedManyWithoutPostInput;
    feed?: feedUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>;
  };

  export type UserCreateWithoutLikeInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutLikeInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutLikeInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>;
  };

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>;
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput;
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>;
  };

  export type PostUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    shares?: shareUpdateManyWithoutPostNestedInput;
    feed?: feedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    shares?: shareUncheckedUpdateManyWithoutPostNestedInput;
    feed?: feedUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserUpsertWithoutLikeInput = {
    update: XOR<UserUpdateWithoutLikeInput, UserUncheckedUpdateWithoutLikeInput>;
    create: XOR<UserCreateWithoutLikeInput, UserUncheckedCreateWithoutLikeInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutLikeInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutLikeInput, UserUncheckedUpdateWithoutLikeInput>;
  };

  export type UserUpdateWithoutLikeInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutLikeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type PostCreateWithoutSharesInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    likes?: likeCreateNestedManyWithoutPostInput;
    feed?: feedCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutSharesInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: likeUncheckedCreateNestedManyWithoutPostInput;
    feed?: feedUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutSharesInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutSharesInput, PostUncheckedCreateWithoutSharesInput>;
  };

  export type UserCreateWithoutSharedInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    feed?: feedCreateNestedManyWithoutUserInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutSharedInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    feed?: feedUncheckedCreateNestedManyWithoutUserInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutSharedInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>;
  };

  export type PostUpsertWithoutSharesInput = {
    update: XOR<PostUpdateWithoutSharesInput, PostUncheckedUpdateWithoutSharesInput>;
    create: XOR<PostCreateWithoutSharesInput, PostUncheckedCreateWithoutSharesInput>;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutSharesInput = {
    where?: PostWhereInput;
    data: XOR<PostUpdateWithoutSharesInput, PostUncheckedUpdateWithoutSharesInput>;
  };

  export type PostUpdateWithoutSharesInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    likes?: likeUpdateManyWithoutPostNestedInput;
    feed?: feedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutSharesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput;
    feed?: feedUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserUpsertWithoutSharedInput = {
    update: XOR<UserUpdateWithoutSharedInput, UserUncheckedUpdateWithoutSharedInput>;
    create: XOR<UserCreateWithoutSharedInput, UserUncheckedCreateWithoutSharedInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutSharedInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutSharedInput, UserUncheckedUpdateWithoutSharedInput>;
  };

  export type UserUpdateWithoutSharedInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    feed?: feedUpdateManyWithoutUserNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutSharedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    feed?: feedUncheckedUpdateManyWithoutUserNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type PostCreateWithoutFeedInput = {
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
    author: UserCreateNestedOneWithoutPostInput;
    tags?: PostTagCreateNestedManyWithoutPostInput;
    comments?: CommentCreateNestedManyWithoutPostInput;
    likes?: likeCreateNestedManyWithoutPostInput;
    shares?: shareCreateNestedManyWithoutPostInput;
  };

  export type PostUncheckedCreateWithoutFeedInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    authorId: number;
    likeCount?: number;
    commentCount?: number;
    tags?: PostTagUncheckedCreateNestedManyWithoutPostInput;
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput;
    likes?: likeUncheckedCreateNestedManyWithoutPostInput;
    shares?: shareUncheckedCreateNestedManyWithoutPostInput;
  };

  export type PostCreateOrConnectWithoutFeedInput = {
    where: PostWhereUniqueInput;
    create: XOR<PostCreateWithoutFeedInput, PostUncheckedCreateWithoutFeedInput>;
  };

  export type UserCreateWithoutFeedInput = {
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostCreateNestedManyWithoutAuthorInput;
    like?: likeCreateNestedManyWithoutUserInput;
    comment?: CommentCreateNestedManyWithoutAuthorInput;
    shared?: shareCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowCreateNestedManyWithoutUserInput;
    followers?: FollowCreateNestedManyWithoutFollowerInput;
    following?: FollowCreateNestedManyWithoutFollowedInput;
  };

  export type UserUncheckedCreateWithoutFeedInput = {
    id?: number;
    email: string;
    password: string;
    name?: string | null;
    roles?: UserCreaterolesInput | string[];
    post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    like?: likeUncheckedCreateNestedManyWithoutUserInput;
    comment?: CommentUncheckedCreateNestedManyWithoutAuthorInput;
    shared?: shareUncheckedCreateNestedManyWithoutUserInput;
    tagFollows?: TagFollowUncheckedCreateNestedManyWithoutUserInput;
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput;
    following?: FollowUncheckedCreateNestedManyWithoutFollowedInput;
  };

  export type UserCreateOrConnectWithoutFeedInput = {
    where: UserWhereUniqueInput;
    create: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput>;
  };

  export type PostUpsertWithoutFeedInput = {
    update: XOR<PostUpdateWithoutFeedInput, PostUncheckedUpdateWithoutFeedInput>;
    create: XOR<PostCreateWithoutFeedInput, PostUncheckedCreateWithoutFeedInput>;
    where?: PostWhereInput;
  };

  export type PostUpdateToOneWithWhereWithoutFeedInput = {
    where?: PostWhereInput;
    data: XOR<PostUpdateWithoutFeedInput, PostUncheckedUpdateWithoutFeedInput>;
  };

  export type PostUpdateWithoutFeedInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    author?: UserUpdateOneRequiredWithoutPostNestedInput;
    tags?: PostTagUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    likes?: likeUpdateManyWithoutPostNestedInput;
    shares?: shareUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutFeedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput;
    shares?: shareUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type UserUpsertWithoutFeedInput = {
    update: XOR<UserUpdateWithoutFeedInput, UserUncheckedUpdateWithoutFeedInput>;
    create: XOR<UserCreateWithoutFeedInput, UserUncheckedCreateWithoutFeedInput>;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutFeedInput = {
    where?: UserWhereInput;
    data: XOR<UserUpdateWithoutFeedInput, UserUncheckedUpdateWithoutFeedInput>;
  };

  export type UserUpdateWithoutFeedInput = {
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUpdateManyWithoutAuthorNestedInput;
    like?: likeUpdateManyWithoutUserNestedInput;
    comment?: CommentUpdateManyWithoutAuthorNestedInput;
    shared?: shareUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUpdateManyWithoutUserNestedInput;
    followers?: FollowUpdateManyWithoutFollowerNestedInput;
    following?: FollowUpdateManyWithoutFollowedNestedInput;
  };

  export type UserUncheckedUpdateWithoutFeedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    roles?: UserUpdaterolesInput | string[];
    post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    like?: likeUncheckedUpdateManyWithoutUserNestedInput;
    comment?: CommentUncheckedUpdateManyWithoutAuthorNestedInput;
    shared?: shareUncheckedUpdateManyWithoutUserNestedInput;
    tagFollows?: TagFollowUncheckedUpdateManyWithoutUserNestedInput;
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput;
    following?: FollowUncheckedUpdateManyWithoutFollowedNestedInput;
  };

  export type PostCreateManyAuthorInput = {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date | string;
    likeCount?: number;
    commentCount?: number;
  };

  export type feedCreateManyUserInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type likeCreateManyUserInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type CommentCreateManyAuthorInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    postId: number;
  };

  export type shareCreateManyUserInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type TagFollowCreateManyUserInput = {
    id?: number;
    tagId: number;
    createdAt?: Date | string;
  };

  export type FollowCreateManyFollowerInput = {
    id?: number;
    followedId: number;
    createdAt?: Date | string;
  };

  export type FollowCreateManyFollowedInput = {
    id?: number;
    followerId: number;
    createdAt?: Date | string;
  };

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUpdateManyWithoutPostNestedInput;
    comments?: CommentUpdateManyWithoutPostNestedInput;
    likes?: likeUpdateManyWithoutPostNestedInput;
    shares?: shareUpdateManyWithoutPostNestedInput;
    feed?: feedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
    tags?: PostTagUncheckedUpdateManyWithoutPostNestedInput;
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput;
    likes?: likeUncheckedUpdateManyWithoutPostNestedInput;
    shares?: shareUncheckedUpdateManyWithoutPostNestedInput;
    feed?: feedUncheckedUpdateManyWithoutPostNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    likeCount?: IntFieldUpdateOperationsInput | number;
    commentCount?: IntFieldUpdateOperationsInput | number;
  };

  export type feedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutFeedNestedInput;
  };

  export type feedUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type feedUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type likeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutLikesNestedInput;
  };

  export type likeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type likeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutAuthorInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput;
  };

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    postId?: IntFieldUpdateOperationsInput | number;
  };

  export type shareUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutSharesNestedInput;
  };

  export type shareUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type shareUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tag?: TagUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type TagFollowUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUpdateWithoutFollowerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    followed?: UserUpdateOneRequiredWithoutFollowingNestedInput;
  };

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    followedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    id?: IntFieldUpdateOperationsInput | number;
    followedId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUpdateWithoutFollowedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    follower?: UserUpdateOneRequiredWithoutFollowersNestedInput;
  };

  export type FollowUncheckedUpdateWithoutFollowedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    followerId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FollowUncheckedUpdateManyWithoutFollowedInput = {
    id?: IntFieldUpdateOperationsInput | number;
    followerId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagCreateManyPostInput = {
    id?: number;
    tagId: number;
    createdAt?: Date | string;
  };

  export type CommentCreateManyPostInput = {
    id?: number;
    content: string;
    createdAt?: Date | string;
    authorId: number;
  };

  export type likeCreateManyPostInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type shareCreateManyPostInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type feedCreateManyPostInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type PostTagUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput;
  };

  export type PostTagUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    tagId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CommentUpdateWithoutPostInput = {
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutCommentNestedInput;
  };

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    content?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type likeUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutLikeNestedInput;
  };

  export type likeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type likeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type shareUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutSharedNestedInput;
  };

  export type shareUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type shareUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type feedUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutFeedNestedInput;
  };

  export type feedUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type feedUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagCreateManyTagInput = {
    id?: number;
    postId: number;
    createdAt?: Date | string;
  };

  export type TagFollowCreateManyTagInput = {
    id?: number;
    userId: number;
    createdAt?: Date | string;
  };

  export type PostTagUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    post?: PostUpdateOneRequiredWithoutTagsNestedInput;
  };

  export type PostTagUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostTagUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    postId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowUpdateWithoutTagInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutTagFollowsNestedInput;
  };

  export type TagFollowUncheckedUpdateWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TagFollowUncheckedUpdateManyWithoutTagInput = {
    id?: IntFieldUpdateOperationsInput | number;
    userId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
