import Head from 'next/head'
import Image from "next/image";
import {Navigation} from "../components/nav/Navigation"
import Link from "next/link";


export default function Login() {
    return (
        <>
            <Head>
                <title>Mars Win</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header>
                <Navigation/>
            </header>
            <main>
                <div className={"border-2 w-8/12 ml-auto mr-auto rounded-lg flex bg-white "}>
                    <Image className={"bg-slate-50 p-1"} src={"/login.svg"} width={422} height={324} alt={"login"}/>
                    <div className={"flex mr-auto ml-auto flex-col w-6/12"}>
                        <h2 className={"mr-auto mt-1 mb-2 ml-auto text-black text-2xl"}>Mars Win</h2>
                        <form className={"flex  flex-col"} action="">
                            <input className={"bg-gray-50 m-1 text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-slate-50 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"} type="text" placeholder={"Email"}/>
                            <input className={"bg-gray-50 m-1 text-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-slate-50 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"} type="password" placeholder={"Password"}/>
                            <input className={"m-1  mr-5 ml-5 btn-red rounded-lg"} type="submit" value={"Login"}/>
                            <Link className={"ml-auto mr-auto text-black underline"} href={"/register"}>Create an account</Link>

                        </form>
                    </div>
                </div>
            </main>

        </>
    )
}
