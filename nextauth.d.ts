import NextAuth from "next-auth"

declare module "next-auth" {
    interface User {
        id: String;
        firstName?: String;
        lastName?: String;
        email: String;
        password: String;

    }

    interface Session extends DefaultSession {
        user: User;


    }
}