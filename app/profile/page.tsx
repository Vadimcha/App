'use client'
import Header from "@/components/Header";
import {useAuthorize} from "@/app/authorizeStore";
import {redirect} from "next/navigation";
import Content from "@/components/Content";

const Profile = () => {
    const authorize : boolean = useAuthorize(state => authorize)
    if(!authorize) redirect('/login');
    return (
        <div>
            <Header />
            <Content>
                Профиль
            </Content>
        </div>
    );
};

export default Profile;