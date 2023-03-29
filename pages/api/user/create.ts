import { prisma } from '@/prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'






export default async function createUser(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body as { email: string, password: string };

    const createdUserData = await prisma.user.create({
        data: {
            email: email,
            password: password,
        }
    })
    // console.log('createdUserData', createdUserData);


    return res.status(200).json({ message: 'User created' });
}




