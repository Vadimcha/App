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

export function AddProblem() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Добавить задачу</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Добавить задачу</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Название
                        </Label>
                        <Input id="name" placeholder="Type name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-1 items-center gap-4">
                        <Label htmlFor="description" className="text-left">
                            Описание
                        </Label>
                        <Textarea id="description" placeholder="Type your description here." className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-2 items-center gap-4">
                        <Label htmlFor="role" className="text-left">
                            Необходимый специалист
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Специалист" />
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
