'use client'
import Header from "@/components/Header";
import Content from "@/components/Content";
import {H3, H4} from "@/components/Typography";
import {IProblem} from "@/models/IProblem";
import {Problem} from "@/components/Problem";
import styles from './problems.module.scss'
import {AddProblem} from "@/components/AddProblem";
import {useEffect, useState} from "react";
import axios from "axios";

async function getProblems() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}api/getProblems`).then(res => res.data)
    return res
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