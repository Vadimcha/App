'use client'
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useAuthorize} from "@/app/authorizeStore";
import {IUser} from "@/models/IUser";
import {checkCookies, getCurUser} from "@/services/api_requests";

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children } : AuthLayoutProps) {
    const { logIn } = useAuthorize()
    const [id, setId] = useState<number>(-1)
    useLayoutEffect(() => {
        checkCookies().then(res => {
            console.log(res)
            const verdict = res.verdict;
            console.log(`BREAKPOINT VERDICT ${verdict}`)
            if(verdict) {
                setId(res.id.id)
            }
        })
    }, [])
    useEffect(() => {
        if(id != -1) {
            const res = getCurUser(id.toString()).then(res => {
                const data = res.data
                console.log(`BREAKPOINT DATA ${JSON.stringify(data)}`)
                if(data.err == null) {
                    logIn(data.user as IUser)
                }
            })
        }
    }, [id])
    return (
        <div>
            {children}
        </div>
    );
};