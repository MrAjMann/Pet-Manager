
// import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../prisma/client";
import { NextApiHandler } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
// import { User } from "next-auth";
// const prisma = new PrismaClient();

// console.log('prisma', prisma);


export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	debug: true,
	providers: [
		// ...add more providers
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: "credentials",
			id: "credentials",
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "jsmith",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			 authorize: async (credentials, req) => {
				// const { username, password } = credentials as { username: string, password: string }


				const user = await fetch(`${process.env.NEXTAUTH_URL}/api/user/check-credentials`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/x-www-form-urlencoded",
							accept: "application/json",
						},
						body: Object.entries(credentials)
							.map((e) => e.join("="))
							.join("&"),
					},
				)
					.then((res) => res.json())
					.catch((err) => {
						return null;
					});
				// const user = await res.json();
				// console.log('user', user);


				// console.log('res', res)







				if (user !== null) {
					return user;
				} else {
					console.log('Not authorised');

					return null
				}
			},
		}),
	],



	pages: {
		signIn: "/auth/login",
	},
};

export default NextAuth(authOptions);
