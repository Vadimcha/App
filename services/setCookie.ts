import {sign} from "jsonwebtoken";
import {serialize} from "cookie";
import {NextResponse} from "next/server";

export async function setCookie(id: string, MAX_AGE: number = 60 * 60 * 24 * 30) {
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