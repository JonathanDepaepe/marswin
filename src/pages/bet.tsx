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
                <div className={"flex justify-center"}>
                    <Image className={"w-128 h-96 object-cover rounded"} src={"/livescreen.png"} alt={"livescreen picture"} width={2600} height={1000}/>
                    <div className={"ml-5 w-fit"}>
                        <h2 className={"w-fit ml-auto mr-auto font-medium text-xl"}>Next matches</h2>
                        <hr/>
                        <div  className={"p-2 pl-3 pr-3 border-l-2 border-main-red  shadow rounded flex justify-between mt-2"}>
                            <p className={"mr-6"}>Mars map 2</p>
                            <p className={"text-zinc-500"}>Current</p>
                        </div >
                        <div  className={"p-2 pl-3 pr-3 border-l-2 border-main-red  shadow rounded flex justify-between mt-2"}>
                            <p className={"mr-4"}>Mars map 4</p>
                            <p className={"text-zinc-500"}>1 hour</p>
                        </div>
                        <div  className={"p-2 pl-3 pr-3 border-l-2 border-main-red  shadow rounded flex justify-between mt-2"}>
                            <p>Mars map 3</p>
                            <p className={"text-zinc-500"}>3 hours</p>
                        </div>
                        <div  className={"p-2 pl-3 pr-3 border-l-2 border-main-red  shadow rounded flex justify-between mt-2"}>
                            <p>Mars map 1</p>
                            <p className={"text-zinc-500"}>7 hours</p>
                        </div>
                        <div  className={"p-2 pl-3 pr-3 border-l-2 border-main-red  shadow rounded flex justify-between mt-2"}>
                            <p>Mars map 3</p>
                            <p className={"text-zinc-500"}>9 hours</p>
                        </div>
                    </div>
                </div>





            </main>

        </>
    )
}

