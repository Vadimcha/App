import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request : NextRequest) {
    try {
        const req = await request.json();
        const data = req.data
        const problem = await prisma.problem.create({
            data: {
                title: data.title,
                date: data.date,
                content: data.content,
                role: data.role
            }
        })

        return NextResponse.json(
            {
                message: "Успешно!",
                id: problem.id,
                description: `Задача "${(data.title.length > 10 ? `${data.title.slice(0, 10)}...` : data.title)}" успешно создана`,
                status: 200,
            },
            { status: 200 }
        );
    } catch(err) {
        return NextResponse.json(
            {
                message: "Что-то пошло не так",
                description: String(err),
                status: 404,
            },
            { status: 500 }
        );
    }
}