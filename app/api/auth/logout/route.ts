import {NextRequest, NextResponse} from "next/server";
import { deleteCookie } from 'cookies-next';
import {setCookie} from "@/services/setCookie";
import {hashPassword} from "@/services/hashing";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
    try {
        return await setCookie("1", -1)

        return new NextResponse(JSON.stringify({
            message: "Вы успешно вышли",
            err: null,
        }), {
            status: 200,
        })

    }
    catch (err) {
        return new NextResponse(JSON.stringify({
            message: "Что-то пошло не так",
            err: err,
        }), {
            status: 200,
        })
    }
}