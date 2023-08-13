import axios from "axios";

export async function makeProblem(values: Object) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}api/makeProblem`, {
        data: values,
    }).then(res => res.data)
    return res
}
export async function getProblems() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}api/getProblems`).then(res => res.data)
    return res
}
export async function getProblem(id: string) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}api/problem/${id}`).then(res => res.data)
    return res
}