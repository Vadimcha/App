import {NextRequest, NextResponse} from "next/server";
import { deleteCookie } from 'cookies-next';

export async function POST(request: NextRequest) {
    try {
        deleteCookie('OutSideJWT');
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
            status: 400,
        })
    }
    // TODO сделать еще в сторе удаление пользователя
}