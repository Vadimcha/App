import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {comparePassword} from "@/services/hashing";
import {setCookie} from "@/services/setCookie";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json()
        const data = req.data
        const user = await prisma.user.findFirst({
            where: {
                email: data.email,
            },
        })
        console.log(`BREAKPOINT LOGIN ${JSON.stringify(user)}`)
        if(user != null)
            console.log(`BREAKPOINT comapaaring ${await comparePassword(data.password, user.password)}`)
        if(user != null && await comparePassword(data.password, user.password)) {
            return await setCookie(user.id.toString())
        } else {
            throw new Error("Uncorrect name or password")
        }
    } catch(err) {
        return NextResponse.json(
            {
                message: "Что-то пошло не так",
                description: String(err),
                status: 404,
            },
            { status: 404 }
        );
    }
}