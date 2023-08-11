'use client'
import React, {useEffect, useState} from 'react';
import Header from "@/components/Header";
import Content from "@/components/Content";
import {H2, P} from "@/components/Typography";
import styles from './problem.module.scss'
import {Button} from "@/components/ui/button";
import {ArrowLeftFromLine} from "lucide-react";
import Link from "next/link";
import {Problems} from "@/data/Problems";
import {IProblem} from "@/models/IProblem";

async function getProblems(id: string) {
    const res = await fetch(`/api/problem/${id}`)
    return res.json()
}

const ProblemPage = ({ params }: { params: { id: string } }) => {
    const [curProblem, setCurProblem] = useState<IProblem | undefined>()
    useEffect(() => {
        getProblems(params.id).then((res) =>{
            setCurProblem(res);
        })
    }, [])
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