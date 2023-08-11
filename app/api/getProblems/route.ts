import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function GET(request : NextRequest) {
    try {
        const data = await prisma.problem.findMany();
        return NextResponse.json(data);
    } catch(err) {
        return NextResponse.json({ message: "Some error with fetching posts" }, { status: 500 });
    }
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}