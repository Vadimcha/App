import axios from "axios";

const api_url = process.env.NEXT_PUBLIC_API;
export async function makeProblem(values: Object) {
    const res = await axios.post(`${api_url}api/makeProblem`, values).then(res => res.data)
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
export async function login(username: string, password: string) {
    const res = await axios.post(`${api_url}api/auth/login`, { username, password }).then(res => res.data)
    return res
}
export async function getCookie() {
    const res = await axios.get(`${api_url}api/auth/me`).then(res => res.data)
    return res
}