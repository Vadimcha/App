import { create } from 'zustand';
import {IUser} from "@/models/IUser";

interface Authorize {
    authorize: boolean,
    currentUser: IUser | null,
    logOut: () => void,
    logIn: (user : IUser) => void,
}

export const useAuthorize = create<Authorize>((set) => ({
    authorize: false,
    currentUser: null,
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