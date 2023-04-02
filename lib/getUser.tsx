import { log } from "console";
import { prisma } from "../prisma/client";

export async function getUser(email: string) {
	const user = await prisma?.user.findUnique({
		where: {
			email: email,
		},
	});

	// if (!user) throw new Error("failed to fetch user");
	console.log(user);
	return user;
}
