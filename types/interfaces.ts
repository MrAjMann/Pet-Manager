export interface User {
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    role?: string;
    email: string;
    password: string;
    id: string;

}

declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        role: string;

    }
}