import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
