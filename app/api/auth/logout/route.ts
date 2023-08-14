import {NextRequest, NextResponse} from "next/server";
import {sign} from "jsonwebtoken"
import {serialize} from "cookie";
import { deleteCookie } from 'cookies-next';

export async function POST(request: NextRequest) {
    deleteCookie('OutSideJWT');
    // TODO сделать еще в сторе удаление пользователя
}