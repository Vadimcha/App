import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import {verify, decode} from "jsonwebtoken";

export async function GET(request: Request) {
    const cookieStore = cookies()
    const token = cookieStore.get("OutSideJWT");
    if(!token) {
        return NextResponse.json({
            message: "Unauthorized",
            verdict: false,
        }, {
            status: 200,
        })
    }
    const { value } = token
    const secret = process.env.JWT_SECRET || ""

    try {
        verify(value, secret)
        return new Response(JSON.stringify({
            message: "Super",
            id: decode(value),
            verdict: true,
        }), {
            status: 200
        })
    } catch(err) {
        return NextResponse.json({
            message: "Something went wrong ",
            verdict: false,
            id: -1,
        }, {
            status: 400,
        })
    }
}