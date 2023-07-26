import Header from "@/components/Header";
import Content from "@/components/Content";
import {H3, H4} from "@/components/Typography";
import {Problems} from '@/data/Problems'
import {IProblem} from "@/models/IProblem";
import {Problem} from "@/components/Problem";
import styles from './problems.module.scss'
import {Button} from "@/components/ui/button";
import {AddProblem} from "@/components/AddProblem";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'App | Problems',
    description: 'Admin panel app',
}

const ProblemsPage = () => {
    return (
        <div>
            <Header />
            <Content>
                <div className="flex justify-between">
                    <H4>Доступные задачи</H4>
                    <AddProblem />
                </div>
                <div className={styles.problems}>
                    { Problems.map((problem : IProblem) => {
                        return <Problem problem={problem} key={problem.id}/>
                    }) }
                </div>
            </Content>
        </div>
    );
};

export default ProblemsPage;