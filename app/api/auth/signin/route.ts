import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {sign} from "jsonwebtoken";
import {serialize} from "cookie";
import {hashPassword} from "@/services/hashing";

const MAX_AGE = 60 * 60 * 24 * 30
async function createCookie(id: string) {
    try {
        const secret = process.env.JWT_SECRET || "";
        const token = sign({
            id,
        }, secret, {
            expiresIn: MAX_AGE,
        })
        const serialized = serialize("OutSideJWT", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV == "production",
            sameSite: "strict",
            maxAge: MAX_AGE,
            path: "/"
        })
        // TODO Сделать добавление пользователя в store
        return new Response(JSON.stringify({
            message: 'Authenticated!',
            err: null,
            authorize: true,
        }), {
            status: 200,
            headers: { 'Set-Cookie': serialized}
        })
    } catch(err) {
        return NextResponse.json({
            message: "Unauthorized",
            err: err,
            authorized: false,
        }, {
            status: 401,
        })
    }

}

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
        return await createCookie(user.id.toString())
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