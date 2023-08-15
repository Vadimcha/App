'use client'
import React, {ReactNode, useState} from 'react';
import Header from "@/components/Header";
import Content from "@/components/Content";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {useAuthorize} from "@/app/authorizeStore";
import {H3} from "@/components/Typography";
import Link from "next/link";
import {IUser, Roles} from "@/models/IUser";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {Calendar as CalendarIcon} from "lucide-react";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {Users} from "@/data/Users";
import {makeProblem, register} from "@/services/api_requests";
import {useFormik} from "formik";

interface Stage {
    'CardDescription': ReactNode,
    'Content': ReactNode,
    'FirstButton': ReactNode,
    'SecondButton': ReactNode,
}

const SignIn = () => {
    const [stage, setStage] = useState(0)
    const [progress, setProgress] = React.useState(5)
    const [date, setDate] = useState<Date>()
    const [authorize, setAuthorize] = useState<boolean>(false)
    const { logIn } = useAuthorize()

    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            email: '',
            password: ''
        },
        onSubmit: (async (values) => {
            const res = await register(values)
            setAuthorize(res.authorize)
            if(res.authorize) {
                logIn(values as IUser)

            }
        }),
    });

    const stageContent : Stage[] = [
        {
            'CardDescription': <CardDescription>Введите данные, чтобы зарегестрироваться</CardDescription>,
            'Content': <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">ФИО</Label>
                        <Input
                            id="name"
                            placeholder="Type name"
                            type="email"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="dateBirth" className="text-left">
                            Дата Рождения
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-[280px] justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="role" className="text-left">
                            Роль
                        </Label>
                        <Select onValueChange={(value) => formik.values.role=value}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Выбрать роль" />
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
            </form>,
            'FirstButton': <div></div>,
            'SecondButton': <Button onClick={async () => {
                setStage(prev => prev + 1)
                setProgress(33)
            }} type="button">Дальше</Button>,
        },
        {
            'CardDescription': <CardDescription>Введите данные, чтобы зарегестрироваться</CardDescription>,
            'Content':<form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="Type email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Create a password</Label>
                        <Input
                            id="password"
                            placeholder="Type password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
            </form>,
            'FirstButton': <Button variant="outline" onClick={() => {
                setStage(prev => prev - 1)
                setProgress(5)
            }} type="button">Вернуться</Button>,
            'SecondButton': <Button onClick={() => {
                setStage(prev => prev + 1)
                setProgress(66)
            }} type="button">Дальше</Button>,
        },
        {
            'CardDescription': <CardDescription>Вам на почту было направлен код, введите его</CardDescription>,
            'Content':<form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="code">Код подтверждения</Label>
                        <Input id="code" placeholder="XXXX" autoComplete="off" />
                    </div>
                </div>
            </form>,
            'FirstButton': <Button variant="outline" onClick={() => {
                setStage(prev => prev - 1)
                setProgress(5)
            }} type="button">Вернуться</Button>,
            'SecondButton': <Button onClick={() => {
                setStage(prev => prev + 1)
                setProgress(100)
            }} type="submit">Подтвердить</Button>,
        },
        {
            'CardDescription': authorize ?
                <CardDescription>Успешно!</CardDescription> :
                <CardDescription>Что-то пошло не так</CardDescription>,
            'Content':  authorize ?
                <H3>Здравствуйте some name</H3> :
                <H3>Что-то пошло не так</H3>,
            'FirstButton': authorize ?
                <Button className="w-[100%]" asChild type="button"><Link href='/'>Перейти на главную</Link></Button> :
                <Button className="w-[100%]" variant="outline" onClick={() => {
                    setStage(prev => prev - 2)
                    setProgress(5)
                }} type="button">Начать с начала</Button>,
            'SecondButton': <></>,
        }
    ]


    return (
        <div>
            <Header without_buttons />
            <Content className="flex items-center justify-center">
                <Card className="w-[350px]">
                    <form onSubmit={formik.handleSubmit}>
                        <CardHeader>
                            <CardTitle>Sign In</CardTitle>
                            <Progress value={progress} className="w-[100%] h-2" />
                            { stageContent[stage].CardDescription }
                        </CardHeader>
                        <CardContent>
                            { stageContent[stage].Content }
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            { stageContent[stage].FirstButton }
                            { stageContent[stage].SecondButton }
                        </CardFooter>
                    </form>
                </Card>
            </Content>
        </div>
    );
};

export default SignIn;