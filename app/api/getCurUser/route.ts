import prisma from "@/prisma/client";
import {NextRequest, NextResponse} from "next/server";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json()
        const id = Number(req.id);
        console.log(`BREAKPOINT ID FROM API ${id} WITH TYPE ${typeof id}`)
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        })
        if(user == null) throw new Error("Пользователь не найден")
        return new NextResponse(JSON.stringify({
            user: user,
            err: null,
        }), {
            status: 200,
        })
    } catch(err) {
        return new NextResponse(JSON.stringify({
            user: null,
            err: err,
        }), {
            status: 200,
        })
    }
}