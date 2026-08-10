import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
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
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly Account: "Account";
    readonly VerificationToken: "VerificationToken";
    readonly PasswordResetToken: "PasswordResetToken";
    readonly TwoFactorToken: "TwoFactorToken";
    readonly TwoFactorConfirmation: "TwoFactorConfirmation";
    readonly HostProfile: "HostProfile";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "account" | "verificationToken" | "passwordResetToken" | "twoFactorToken" | "twoFactorConfirmation" | "hostProfile";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
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
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Account: {
            payload: Prisma.$AccountPayload<ExtArgs>;
            fields: Prisma.AccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findFirst: {
                    args: Prisma.AccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                findMany: {
                    args: Prisma.AccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                create: {
                    args: Prisma.AccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                createMany: {
                    args: Prisma.AccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                delete: {
                    args: Prisma.AccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                update: {
                    args: Prisma.AccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                deleteMany: {
                    args: Prisma.AccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>[];
                };
                upsert: {
                    args: Prisma.AccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccountPayload>;
                };
                aggregate: {
                    args: Prisma.AccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccount>;
                };
                groupBy: {
                    args: Prisma.AccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccountCountAggregateOutputType> | number;
                };
            };
        };
        VerificationToken: {
            payload: Prisma.$VerificationTokenPayload<ExtArgs>;
            fields: Prisma.VerificationTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
                };
                findFirst: {
                    args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
                };
                findMany: {
                    args: Prisma.VerificationTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[];
                };
                create: {
                    args: Prisma.VerificationTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
                };
                createMany: {
                    args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[];
                };
                delete: {
                    args: Prisma.VerificationTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
                };
                update: {
                    args: Prisma.VerificationTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[];
                };
                upsert: {
                    args: Prisma.VerificationTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VerificationTokenPayload>;
                };
                aggregate: {
                    args: Prisma.VerificationTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVerificationToken>;
                };
                groupBy: {
                    args: Prisma.VerificationTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VerificationTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VerificationTokenCountAggregateOutputType> | number;
                };
            };
        };
        PasswordResetToken: {
            payload: Prisma.$PasswordResetTokenPayload<ExtArgs>;
            fields: Prisma.PasswordResetTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findFirst: {
                    args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                findMany: {
                    args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                create: {
                    args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                createMany: {
                    args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                delete: {
                    args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                update: {
                    args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[];
                };
                upsert: {
                    args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>;
                };
                aggregate: {
                    args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePasswordResetToken>;
                };
                groupBy: {
                    args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PasswordResetTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PasswordResetTokenCountAggregateOutputType> | number;
                };
            };
        };
        TwoFactorToken: {
            payload: Prisma.$TwoFactorTokenPayload<ExtArgs>;
            fields: Prisma.TwoFactorTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TwoFactorTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>;
                };
                findFirst: {
                    args: Prisma.TwoFactorTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>;
                };
                findMany: {
                    args: Prisma.TwoFactorTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>[];
                };
                create: {
                    args: Prisma.TwoFactorTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>;
                };
                createMany: {
                    args: Prisma.TwoFactorTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TwoFactorTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>[];
                };
                delete: {
                    args: Prisma.TwoFactorTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>;
                };
                update: {
                    args: Prisma.TwoFactorTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.TwoFactorTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TwoFactorTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TwoFactorTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>[];
                };
                upsert: {
                    args: Prisma.TwoFactorTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorTokenPayload>;
                };
                aggregate: {
                    args: Prisma.TwoFactorTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTwoFactorToken>;
                };
                groupBy: {
                    args: Prisma.TwoFactorTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TwoFactorTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TwoFactorTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TwoFactorTokenCountAggregateOutputType> | number;
                };
            };
        };
        TwoFactorConfirmation: {
            payload: Prisma.$TwoFactorConfirmationPayload<ExtArgs>;
            fields: Prisma.TwoFactorConfirmationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TwoFactorConfirmationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>;
                };
                findFirst: {
                    args: Prisma.TwoFactorConfirmationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>;
                };
                findMany: {
                    args: Prisma.TwoFactorConfirmationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>[];
                };
                create: {
                    args: Prisma.TwoFactorConfirmationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>;
                };
                createMany: {
                    args: Prisma.TwoFactorConfirmationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TwoFactorConfirmationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>[];
                };
                delete: {
                    args: Prisma.TwoFactorConfirmationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>;
                };
                update: {
                    args: Prisma.TwoFactorConfirmationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>;
                };
                deleteMany: {
                    args: Prisma.TwoFactorConfirmationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TwoFactorConfirmationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TwoFactorConfirmationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>[];
                };
                upsert: {
                    args: Prisma.TwoFactorConfirmationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TwoFactorConfirmationPayload>;
                };
                aggregate: {
                    args: Prisma.TwoFactorConfirmationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTwoFactorConfirmation>;
                };
                groupBy: {
                    args: Prisma.TwoFactorConfirmationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TwoFactorConfirmationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TwoFactorConfirmationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TwoFactorConfirmationCountAggregateOutputType> | number;
                };
            };
        };
        HostProfile: {
            payload: Prisma.$HostProfilePayload<ExtArgs>;
            fields: Prisma.HostProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HostProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HostProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>;
                };
                findFirst: {
                    args: Prisma.HostProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HostProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>;
                };
                findMany: {
                    args: Prisma.HostProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>[];
                };
                create: {
                    args: Prisma.HostProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>;
                };
                createMany: {
                    args: Prisma.HostProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HostProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>[];
                };
                delete: {
                    args: Prisma.HostProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>;
                };
                update: {
                    args: Prisma.HostProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.HostProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HostProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HostProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>[];
                };
                upsert: {
                    args: Prisma.HostProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HostProfilePayload>;
                };
                aggregate: {
                    args: Prisma.HostProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHostProfile>;
                };
                groupBy: {
                    args: Prisma.HostProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HostProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HostProfileCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly password: "password";
    readonly role: "role";
    readonly isTwoFactorEnabled: "isTwoFactorEnabled";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly provider: "provider";
    readonly providerAccountId: "providerAccountId";
    readonly refresh_token: "refresh_token";
    readonly access_token: "access_token";
    readonly expires_at: "expires_at";
    readonly token_type: "token_type";
    readonly scope: "scope";
    readonly id_token: "id_token";
    readonly session_state: "session_state";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationTokenScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly token: "token";
    readonly expires: "expires";
};
export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum];
export declare const PasswordResetTokenScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly token: "token";
    readonly expires: "expires";
};
export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum];
export declare const TwoFactorTokenScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly token: "token";
    readonly expires: "expires";
};
export type TwoFactorTokenScalarFieldEnum = (typeof TwoFactorTokenScalarFieldEnum)[keyof typeof TwoFactorTokenScalarFieldEnum];
export declare const TwoFactorConfirmationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
};
export type TwoFactorConfirmationScalarFieldEnum = (typeof TwoFactorConfirmationScalarFieldEnum)[keyof typeof TwoFactorConfirmationScalarFieldEnum];
export declare const HostProfileScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly username: "username";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly profilePhoto: "profilePhoto";
    readonly bio: "bio";
    readonly hostCategory: "hostCategory";
    readonly hostTypes: "hostTypes";
    readonly experienceTypes: "experienceTypes";
    readonly primaryLocation: "primaryLocation";
    readonly destinations: "destinations";
    readonly travelVibes: "travelVibes";
    readonly groupSize: "groupSize";
    readonly yearsExperience: "yearsExperience";
    readonly tripsHosted: "tripsHosted";
    readonly travelersHosted: "travelersHosted";
    readonly instagram: "instagram";
    readonly youtube: "youtube";
    readonly website: "website";
    readonly linkedin: "linkedin";
    readonly organizationName: "organizationName";
    readonly logo: "logo";
    readonly orgWebsite: "orgWebsite";
    readonly orgDescription: "orgDescription";
    readonly teamSize: "teamSize";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HostProfileScalarFieldEnum = (typeof HostProfileScalarFieldEnum)[keyof typeof HostProfileScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    account?: Prisma.AccountOmit;
    verificationToken?: Prisma.VerificationTokenOmit;
    passwordResetToken?: Prisma.PasswordResetTokenOmit;
    twoFactorToken?: Prisma.TwoFactorTokenOmit;
    twoFactorConfirmation?: Prisma.TwoFactorConfirmationOmit;
    hostProfile?: Prisma.HostProfileOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
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
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
