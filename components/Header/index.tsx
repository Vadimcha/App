'use client'
import React from 'react';
import {H1, H2, H3, H4, P} from "@/components/Typography";
import {ThemeToggler} from "@/components/ThemeToggler";
import styles from './Header.module.scss'
import MyAvatar from "@/components/Avatar";
import {Button} from "@/components/ui/button";
import {useAuthorize} from "@/app/authorizeStore";
import {Users} from "@/data/Users";
import MyLink from "@/components/MyLink";
import Link from "next/link";

interface HeaderProps {
    without_buttons?: boolean,
}

const Header = ({ without_buttons = false } : HeaderProps) => {
    const links = [{ value: "Задачи", url: "/problems"}, { value: "Сотрудники", url: "/workers"}]
    const { authorize, logIn } = useAuthorize()
    return (
        <div className={styles.header}>
            <Link href={'/'}><H3>App</H3></Link>

            { authorize ?
                <div className={styles.leftPart}>
                    { links.map((link => {
                        return <MyLink href={link.url} key={link.url}>{link.value}</MyLink>
                    })) }
                    <ThemeToggler />
                    <MyAvatar />
                </div> :
                <div className={styles.leftPart}>
                    { links.map((link => {
                        return <MyLink href={link.url} key={link.url}>{link.value}</MyLink>
                    })) }
                    <ThemeToggler />
                    { without_buttons ?
                        <></>
                         :
                        <div className={styles.btnGroup}>
                            <Button onClick={() => logIn(Users[0])}>Login</Button>
                            <Button variant="secondary">Sign In</Button>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default Header;