'use client'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Roles} from "@/models/IUser";
import {useFormik} from "formik";

async function makePost(values: Object) {
    const res = await fetch("/api/makePost", {
        method: "POST",
        body: JSON.stringify(values)
    })
    return res.json()
}

export function AddProblem() {
    const formik = useFormik({
        initialValues: {
            title: '',
            role: '',
            content: '',
            date: ''
        },
        onSubmit: (values) => {
            const now = new Date();
            let day = now.getDate(), month = now.getMonth() + 1, year = now.getFullYear();
            values.date = `${(day < 10 ? `0${day}` : day)}.${(month < 10 ? `0${month}` : month)}.${year}`
            console.log(makePost(values).then(res => {
                // Надо будет сделать алерт
                console.log(res)
            }))
        },
    });
    return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Добавить задачу</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Добавить задачу</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-1 items-center gap-4">
                                <Label htmlFor="name" className="text-left">
                                    Название
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Type name"
                                    className="col-span-3"
                                    name="title"
                                    value={formik.values.title}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 items-center gap-4">
                                <Label htmlFor="description" className="text-left">
                                    Описание
                                </Label>
                                <Textarea
                                    id="description"
                                    placeholder="Type your description here."
                                    className="col-span-3"
                                    name="content"
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                                <Label htmlFor="role" className="text-left">
                                    Необходимый специалист
                                </Label>
                                <Select
                                    name="role"
                                    onValueChange={(value) => formik.values.role=value}
                                >
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder={"Специалист"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            { Roles.map((role) => {
                                                return <SelectItem value={role} key={role}>{role}</SelectItem>
                                            }) }
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Добавить</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
    )
}
