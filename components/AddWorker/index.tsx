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
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";
import {Roles} from "@/models/IUser";

export function AddWorker() {
    const [date, setDate] = useState<Date>()
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Добавить сотрудника</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Добавить сотрудника</DialogTitle>
                </DialogHeader>

                <div className="grid gap-5 py-4">
                    <div className="grid grid-cols-1 items-center gap-2">
                        <Label htmlFor="name" className="text-left">
                            ФИО
                        </Label>
                        <Input id="name" placeholder="Type name" className="col-span-3" />
                    </div>

                    <div className="grid grid-cols-1 items-center gap-2">
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

                    <div className="grid grid-cols-1 items-center gap-2">
                        <Label htmlFor="email" className="text-left">
                            Почта
                        </Label>
                        <Input id="email" placeholder="Type email" className="col-span-3" type="email" />
                    </div>

                    <div className="grid grid-cols-1 items-center gap-2">
                        <Label htmlFor="role" className="text-left">
                            Роль
                        </Label>
                        <Select>
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
                <DialogFooter>
                    <Button type="submit">Добавить</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
