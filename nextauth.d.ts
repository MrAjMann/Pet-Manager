import NextAuth from "next-auth"

declare module "next-auth" {
    interface User {
        firstName?: String;
        lastName?: String;

    }

    interface Session extends DefaultSession {
        user?: User;
    }
}