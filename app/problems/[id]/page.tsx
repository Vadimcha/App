import React from 'react';
import Header from "@/components/Header";
import Content from "@/components/Content";
import {H2, P} from "@/components/Typography";
import styles from './problem.module.scss'
import {Button} from "@/components/ui/button";
import {ArrowLeftFromLine} from "lucide-react";
import Link from "next/link";
import {Problems} from "@/data/Problems";
import {IProblem} from "@/models/IProblem";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'App | Problem',
    description: 'Admin panel app',
}

const ProblemPage = ({ params }: { params: { id: string } }) => {
    const curProblem : IProblem | undefined = Problems.find((problem) => problem.id === Number(params.id))

    return (
        <div>
            <Header />
            <Content>
                <div className={styles.topPart}>
                    <H2>{curProblem?.title}</H2>
                    <Button variant="outline" size="icon">
                        <Link href={'/problems'}><ArrowLeftFromLine className="h-4 w-4" /></Link>
                    </Button>
                </div>
                <div className={styles.dscr}>
                    <P>{curProblem?.date}</P>
                    <P>Необходим {curProblem?.role.toLowerCase()}</P>
                </div>
                <P>{curProblem?.content}</P>
                <div className="mt-5 flex w-100 justify-end">
                    <Button>Join to problem</Button>
                </div>
            </Content>
        </div>
    );
};

export default ProblemPage;