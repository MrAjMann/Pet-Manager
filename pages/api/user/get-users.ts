import { prisma } from '@/prisma/client'

export async function handler(req, res) {
    const users = await prisma.user.findMany()

    return res.json(users)

}

export async function exisitingUser(req, res) {
    const user = await prisma.user.findUnique({
        where: { email: req.body.email }
    })

    return res.json(user)

}

