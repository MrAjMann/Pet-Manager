import { log } from "console";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

type UserInfo = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;

    // }

    // export async function GET(request: Request, response: Response) {


    //     return NextResponse.json({ data });


}