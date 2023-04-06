import { prisma } from "@/prisma/client";
import { NextRequest } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function createBooking(
// 	req: NextApiRequest,
// 	res: NextApiResponse
// ) {
// 	const { userId, petId, bookingStartDate, bookingEndDate } = req.body as {
// 		userId: string;
// 		petId: string;
// 		bookingStartDate: string;
// 		bookingEndDate: string;
// 	};

// 	const bookingCreatedData = await prisma.booking.create({
// 		data: {
// 			userId: userId,
// 			petId: petId,
// 			bookingStartDate: bookingStartDate,
// 			bookingEndDate: bookingEndDate,
// 		},
// 	});
// 	// console.log('bookingCreated', bookingCreatedData);

// 	return res.status(200).json({ message: "Booking created" });
// }

export async function POST(req: NextRequest) {
	const body = await req.json();
	console.log("body", body);

	// const bookingCreatedData = await prisma.booking.create({
	// 	data: {
	// 		userId: body.user.id,
	// 		petId: body.pet.id,
	// 		bookingStartDate: body.startDate,
	// 		bookingEndDate: body.endDate,
	// 	},
	// });
	// console.log("bookingCreated", bookingCreatedData);

	return new Response("Ok");
}
