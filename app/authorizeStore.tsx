import { create } from 'zustand';
import {IUser} from "@/models/IUser";
import {Users} from "@/data/Users";

interface Authorize {
    authorize: boolean,
    currentUser: IUser | null,
    logOut: () => void,
    logIn: (user : IUser) => void,
}

export const useAuthorize = create<Authorize>((set) => ({
    authorize: false,
    currentUser: null,
    logOut: () => {
        console.log(`BREAKPOINT STORE USER: logout`)
        set((state) => ({
            authorize: false,
            currentUser: null,
        }))
    },
    logIn: (user) => {
        console.log(`BREAKPOINT STORE USER: ${user} with type ${typeof user}`)
        set((state) => ({
            authorize: true,
            currentUser: user,
        }))
    }
}));