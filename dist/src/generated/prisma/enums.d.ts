export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly USER: "USER";
    readonly HOST: "HOST";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
