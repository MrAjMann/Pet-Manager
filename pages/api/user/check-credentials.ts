import { NextApiRequest, NextApiResponse } from "next";


export default async function handle( req: NextApiRequest, res: NextApiResponse ) {
    if (req.method === 'POST') {
        await handlePost(res, req);
    }
    else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`,
        );
    }
  
}


const hashPassword = async (password: string) => {
    return sha256(password).toString();
}