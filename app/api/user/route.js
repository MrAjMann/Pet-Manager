import { log } from "console";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../prisma/client";

import { getServerSession } from "next-auth/next";
import { options } from "@/pages/api/auth/[...nextauth]";

export async function GET(request, response) {
	const session = await getServerSession({ req: options });

	console.log(session);
	return (
		<div>
			<h1>Session</h1>
			{session}
		</div>
	);
}

// export async function getUser() {

//     const foundUser = await prisma?.user.findUnique({
//         where: {
//             email: userEmail,
//         },
//     });

//     if (!foundUser) {
//         return "No user found";
//     }

//     return foundUser;
// }
