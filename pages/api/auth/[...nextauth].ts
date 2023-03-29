
// import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../prisma/client";
import { NextApiHandler } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";


export const options: NextAuthOptions = {
	// Configure one or more authentication providers
	debug: true,
	providers: [
		// ...add more providers
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			id: "credentials",
			name: "credentials",
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "jsmith",
				},
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials, req) => {
				// Add logic here to look up the user from the credentials supplied
				const { username, password } = credentials as { username: string, password: string };



				const user = await fetch(
					`${process.env.NEXTAUTH_URL}/api/user/credentials`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							accept: "application/json",
						},
						body: JSON.stringify(credentials),

					},
				)
					.then((res) => res.json())
				// console.log(username, password);

				if (!user) {
					console.log('user not found');
					return null;
				}
				if (user) {
					console.log('user found');
					return user
				}


			},
		}),
	],

	pages: {
		signIn: "/auth/login",
	},
	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
	session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60, updateAge: 24 * 60 * 60 },

	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			// console.log("session.user", session.user);

			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
				// console.log("token.user", token.user);

			}
			return token;
		},
	}


};



const authHandler: NextApiHandler = (req, res) =>
	NextAuth(req, res, options);
export default authHandler;