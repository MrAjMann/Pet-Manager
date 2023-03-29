export async function handler(req, res) {
    const users = await prisma.user.findMany()

    return res.json(users)

}