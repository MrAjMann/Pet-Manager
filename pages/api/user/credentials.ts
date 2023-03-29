import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";
import sha256 from "crypto-js/sha256";

// console.log('prisma', prisma);

// console.log('opened file handlPOST')

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {


    if (req.method === "POST") {
        await handlePOST(res, req);
        // console.log('if POST', await req.body.password);
        console.log('handlPOST')

    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}


const hashPassword = async (password: string) => {
    console.log("password", password);

    return sha256(password).toString();
}


async function handlePOST(res, req: NextApiRequest) {

    if (req) {
        console.log('req.body', req.body.password);
    }


    const user = await prisma.user.findFirst({
        where: {
            email: req.body.email,
        }
    })

    // console.log(user.password, req?.body?.password);

    if (user) {
        console.log("user", user);
        return res.status(200).json(user)
    } else {
        // console.log("Invalid credentials");

        res.status(401).json({ message: "Invalid credentials" })
    }
};