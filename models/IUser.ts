export type Role = "Сантехник" | "Бухгалтер" | "Администратор" | "Психолог" | "Программист"
export const Roles = ["Сантехник", "Бухгалтер", "Администратор", "Психолог", "Программист"]

export interface IUser {
    id: number,
    name: string,
    role: Role,
    email: string,
}