import { prisma } from "../prisma/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/pages/api/auth/[...nextauth]";

export async function getPets() {
	const currentSession = await getServerSession(options);

	if (!currentSession) {
		return undefined;
	}
	const userId = currentSession.user.id ? currentSession.user.id : null;

	const foundPets = await prisma?.pets.findMany({
		where: {
			userId: userId,
		},
	});

	if (!foundPets) {
		return undefined;
	}

	return foundPets;
}
