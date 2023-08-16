import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {hashPassword} from "@/services/hashing";
import {setCookie} from "@/services/setCookie";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const data = req.data
        const hashedPassword = await hashPassword(data.password)
        const user = await prisma.user.create({
            data: {
                name: data.name,
                role: data.role,
                email: data.email,
                password: hashedPassword,
            }
        })
        return await setCookie(user.id.toString())
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