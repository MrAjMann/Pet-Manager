export interface User {
    firstName?: String | null | undefined;
    lastName?: String | null | undefined;
    role?: String;
    email: String;
    password: String;
    id: String;

}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        id: String
        role: String;

    }
}