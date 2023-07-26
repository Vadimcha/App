import {Role} from "@/models/IUser";

export interface IProblem {
    id: number,
    title: string,
    date: string,
    role: Role,
    content: string,
}