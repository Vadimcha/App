import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request : NextRequest, { params }: { params: { id: string } }) {
    try {
        const data = await prisma.problem.findUnique({
            where: {
                id: Number(params.id),
            },
        })
        return NextResponse.json(data);
    } catch(err) {
        return NextResponse.json({ message: "Some error with fetching problem data" }, { status: 500 });
    }
}