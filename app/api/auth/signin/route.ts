import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const data = req.data
        const user = prisma.user.create({
            data: {
                name: data.name,
                role: data.role,
                email: data.email,
                password: data.password,
            }
        })
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