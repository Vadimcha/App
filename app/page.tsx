import Image from 'next/image'
import {ThemeToggler} from "@/components/ThemeToggler";
import Header from "@/components/Header";
import Content from "@/components/Content";
import {Toaster} from "@/components/ui/toaster";

export default function Home() {
  return (
    <>
        <Header />
        <Content>
            Главная страница
        </Content>
    </>
  )
}
