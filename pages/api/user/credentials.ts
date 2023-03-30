import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma/client";
// import sha256 from "crypto-js/sha256";


export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
) {


    if (req.method === "POST") {
        await handlePOST(res, req);

    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
}


// const hashPassword = async (password: string) => {


//     return sha256(password).toString();
// }


async function handlePOST(res: NextApiResponse, req: NextApiRequest) {

    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        },

    })

    // console.log(user.password, req?.body?.password);

    if (user && user.password === req.body.password) {

        return res.status(200).json(user)
    } else {
        res.status(401).json({ message: "Invalid credentials" })

    }
};