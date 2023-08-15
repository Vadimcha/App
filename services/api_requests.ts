import axios from "axios";
import {useAuthorize} from "@/app/authorizeStore";

const api_url = process.env.NEXT_PUBLIC_API;
export async function makeProblem(values: Object) {
    const res = await axios.post(`${api_url}api/makeProblem`, {
        data: values
    }).then(res => res.data)
    return res
}
export async function getProblems() {
    const res = await axios.get(`${api_url}api/getProblems`).then(res => res.data)
    return res
}
export async function getProblem(id: string) {
    const res = await axios.get(`${api_url}api/problem/${id}`).then(res => res.data)
    return res
}

export async function logout() {
    const res = await axios.post(`${api_url}api/auth/logout`)
}
export async function register(values: Object) {
    const res = await axios.post(`${api_url}api/auth/signin`, {
        data: values,
    }).then(res => res.data)
    return res
}