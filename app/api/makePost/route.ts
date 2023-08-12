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
        return NextResponse.json(`Ее я получил данные и создал задачу!`);
    } catch(err) {
        return NextResponse.json({ message: "Some error with fetching" }, { status: 500 });
    }
}