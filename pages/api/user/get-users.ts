import { prisma } from '@/prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    const users = await prisma.user.findMany()

    return res.json(users)

}

export async function exisitingUser(req: NextApiRequest, res: NextApiResponse) {
    const user = await prisma.user.findUnique({
        where: { email: req.body.email }
    })

    return res.json(user)

}

