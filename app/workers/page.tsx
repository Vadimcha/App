import Header from "@/components/Header";
import Content from "@/components/Content";
import {H4} from "@/components/Typography";
import {AddWorker} from "@/components/AddWorker";
import {WorkersTable} from "@/components/WorkersTable";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'App | Workers',
    description: 'Admin panel app',
}

const Workers = () => {
    return (
        <div>
            <Header />
            <Content>
                <div className="flex justify-between">
                    <H4>Сотрудники</H4>
                    <AddWorker />
                </div>
                <WorkersTable />
            </Content>
        </div>
    );
};

export default Workers;