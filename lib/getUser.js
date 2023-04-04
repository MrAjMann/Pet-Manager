import { prisma } from "../prisma/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/pages/api/auth/[...nextauth]";

export async function getUser() {
	const currentSession = await getServerSession(options);

	if (!currentSession) {
		return undefined;
	}
	const userEmail = currentSession.user.email
		? currentSession.user.email
		: null;

	const foundUser = await prisma?.user.findUnique({
		where: {
			email: userEmail,
		},
	});

	if (!foundUser) {
		return undefined;
	}

	return foundUser;
}
