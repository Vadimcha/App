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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {useAuthorize} from "@/app/authorizeStore";
import {H3} from "@/components/Typography";
import Link from "next/link";

interface Stage {
    'CardDescription': ReactNode,
    'Content': ReactNode,
    'FirstButton': ReactNode,
    'SecondButton': ReactNode,
}

const LogIn = () => {
    const [stage, setStage] = useState(0)
    const [progress, setProgress] = React.useState(5)
    const { authorize, currentUser } = useAuthorize()

    const stageContent : Stage[] = [
        {
            'CardDescription': <CardDescription>Введите почту и пароль, чтобы войти в аккаунт</CardDescription>,
            'Content':<form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Type email" type="email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Type password" type="password" />
                    </div>
                </div>
            </form>,
            'FirstButton': <div></div>,
            'SecondButton': <Button onClick={() => {
                setStage(prev => prev + 1)
                setProgress(50)
            }}>Дальше</Button>,
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
            }}>Вернуться</Button>,
            'SecondButton': <Button onClick={() => {
                setStage(prev => prev + 1)
                setProgress(100)
            }}>Подтвердить</Button>,
        },
        {
            'CardDescription': authorize ?
                                <CardDescription>Успешно!</CardDescription> :
                                <CardDescription>Что-то пошло не так</CardDescription>,
            'Content':  authorize ?
                        <H3>Здравствуйте, {currentUser?.name}</H3> :
                        <H3>Код неверный, попытайтесь еще раз и проверьте правильность почты</H3>,
            'FirstButton': authorize ?
                            <Button className="w-[100%]" asChild><Link href='/'>Перейти на главную</Link></Button> :
                            <Button className="w-[100%]" variant="outline" onClick={() => {
                            setStage(prev => prev - 2)
                            setProgress(5)
                            }}>Начать с начала</Button>,
            'SecondButton': <></>,
        }
    ]


    return (
        <div>
            <Header without_buttons />
            <Content className="flex items-center justify-center">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
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
                </Card>
            </Content>
        </div>
    );
};

export default LogIn;