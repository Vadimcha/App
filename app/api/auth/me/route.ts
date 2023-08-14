import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import {verify} from "jsonwebtoken";

export async function GET(request: Request) {
    const cookieStore = cookies()

    const token = cookieStore.get("OutSiteJWT");
    if(!token) {
        return NextResponse.json({
            message: "Unauthorized",
        }, {
            status: 401,
        })
    }
    const { value } = token
    const secret = process.env.JWT_SECRET || ""

    try {
        verify(value, secret)

        const response = {
            message: "Super",
            jwt_token: value,
        }
        return new Response(JSON.stringify(response), { status: 200 })
    } catch(err) {
        return NextResponse.json({
            message: "Something went wrong ",
        }, {
            status: 400,
        })
    }
    console.log(token)
}