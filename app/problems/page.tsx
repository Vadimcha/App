'use client'
import Header from "@/components/Header";
import Content from "@/components/Content";
import {H3, H4} from "@/components/Typography";
// import {Problems} from '@/data/Problems'
import {IProblem} from "@/models/IProblem";
import {Problem} from "@/components/Problem";
import styles from './problems.module.scss'
import {Button} from "@/components/ui/button";
import {AddProblem} from "@/components/AddProblem";
import {Metadata} from "next";
import {useEffect, useState} from "react";

async function getProblems() {
    const res = await fetch("/api/getProblems")
    return res.json()
}

const ProblemsPage = () => {
    const [problems, setProblems] = useState<IProblem[] | undefined>()
    useEffect(() => {
        getProblems().then((res) => {
            console.log(res)
            setProblems(res)
        })
    }, [])
    return (
        <div>
            <Header />
            <Content>
                <div className="flex justify-between">
                    <H4>Доступные задачи</H4>
                    <AddProblem />
                </div>
                <div className={styles.problems}>
                    { problems && problems.map((problem : IProblem) => {
                        return <Problem problem={problem} key={problem.id}/>
                    }) }
                </div>
            </Content>
        </div>
    );
};

export default ProblemsPage;