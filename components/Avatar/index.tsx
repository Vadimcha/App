import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { useAuthorize } from '@/app/authorizeStore'
import { P } from '@/components/Typography'
import {logout} from "@/services/api_requests";

const MyAvatar = () => {
    const { currentUser, logOut } = useAuthorize();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>{ currentUser?.name }</DropdownMenuLabel>
                <DropdownMenuLabel>{ currentUser?.role }</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={'/profile'}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <button onClick={async () => {
                        await logout();
                        logOut();
                    }}>Log Out</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MyAvatar;