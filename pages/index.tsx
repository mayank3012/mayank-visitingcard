import Contacts from "@/components/Contacts";
import Info from "@/components/Info";
import Main from "@/components/Main";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Mayank | Visiting Card
        </title>
      </Head>
      <div className="flex justify-center items-center">
        <div className="sm:rounded-3xl w-full sm:w-[440px] shadow-lg shadow-gray-600 sm:my-5">
          <Main />
          <Info />
          <Contacts />
        </div>
      </div>
    </>
  )
}
