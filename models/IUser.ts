export type Role = "Сантехник" | "Бухгалтер" | "Администратор" | "Психолог" | "Программист" | "Инженер"
export const Roles = ["Сантехник", "Бухгалтер", "Администратор", "Психолог", "Программист", "Инженер"]

export interface IUser {
    id: number,
    name: string,
    role: Role,
    email: string,
    password: string,
}