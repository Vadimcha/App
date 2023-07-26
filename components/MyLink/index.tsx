import { Button } from "@/components/ui/button"
import {ReactNode} from "react";
import Link from "next/link";
import styles from './Link.module.scss'

interface MyLinkProps {
    children: ReactNode,
    href?: string,
}


const MyLink = ({ children, href = '#' } : MyLinkProps) => {
    return <Button variant="link" className={styles.btn} asChild><Link href={href}>{children}</Link></Button>
};

export default MyLink;