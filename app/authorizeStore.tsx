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
    authorize: true,
    currentUser: Users[1],
    logOut: () =>
        set((state) => ({
            authorize: false,
            currentUser: null,
        })),
    logIn: (user) =>
        set((state) => ({
            authorize: true,
            currentUser: user,
        }))
}));