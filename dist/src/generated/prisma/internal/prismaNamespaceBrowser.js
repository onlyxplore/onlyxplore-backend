"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.HostProfileScalarFieldEnum = exports.TwoFactorConfirmationScalarFieldEnum = exports.TwoFactorTokenScalarFieldEnum = exports.PasswordResetTokenScalarFieldEnum = exports.VerificationTokenScalarFieldEnum = exports.AccountScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Account: 'Account',
    VerificationToken: 'VerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    TwoFactorToken: 'TwoFactorToken',
    TwoFactorConfirmation: 'TwoFactorConfirmation',
    HostProfile: 'HostProfile'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    isTwoFactorEnabled: 'isTwoFactorEnabled'
};
exports.AccountScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
};
exports.VerificationTokenScalarFieldEnum = {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
};
exports.PasswordResetTokenScalarFieldEnum = {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
};
exports.TwoFactorTokenScalarFieldEnum = {
    id: 'id',
    email: 'email',
    token: 'token',
    expires: 'expires'
};
exports.TwoFactorConfirmationScalarFieldEnum = {
    id: 'id',
    userId: 'userId'
};
exports.HostProfileScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    username: 'username',
    firstName: 'firstName',
    lastName: 'lastName',
    profilePhoto: 'profilePhoto',
    bio: 'bio',
    hostCategory: 'hostCategory',
    hostTypes: 'hostTypes',
    experienceTypes: 'experienceTypes',
    primaryLocation: 'primaryLocation',
    destinations: 'destinations',
    travelVibes: 'travelVibes',
    groupSize: 'groupSize',
    yearsExperience: 'yearsExperience',
    tripsHosted: 'tripsHosted',
    travelersHosted: 'travelersHosted',
    instagram: 'instagram',
    youtube: 'youtube',
    website: 'website',
    linkedin: 'linkedin',
    organizationName: 'organizationName',
    logo: 'logo',
    orgWebsite: 'orgWebsite',
    orgDescription: 'orgDescription',
    teamSize: 'teamSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map