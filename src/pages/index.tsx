import Head from 'next/head'
import Image from "next/image";
import {Navigation} from "../components/nav/Navigation"
import Link from "next/link";
// @ts-ignore
import {withIronSession} from "next-iron-session";

// @ts-ignore
export default function Home({user}) {
    return (
        <>
            <Head>
                <title>Mars Win</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header>
                <Navigation user={user}/>
            </header>
            <main>
                <div className={'flex justify-around'}>
                    <Image width={400} height={400} src={"/Revenue.svg"} alt={'revenue image'} className={''}></Image>
                    <div className={'flex flex-col mt-auto mb-auto'}>
                        <h1 className={"text-5xl mb-2"}>Mars Win</h1>
                        <p className={"mb-7"} >  Race your money to the top!</p>

                        <Link className={"btn-red mr-auto ml-auto"} href="/bet">Get started</Link>
                    </div>
                </div>
                <div className={'flex justify-around mt-10 mr-10 ml-20'}>
                    <div className={'flex flex-col mt-auto mb-auto '}>
                        <h2 className={"w-6/12 text-2xl mb-4 text-center"}>Formula Mars</h2>
                        <p className={"w-6/12"} >We are formula Mars and we want to provide an entertainment for everyone here living on Mars.</p>
                        <p className={"w-6/12 "}>Our races are based on ai driven vehicles, this way we make it save that no one can get hurt by crashing. </p>

                    </div>
                    <Image width={400} height={400} src={"/win.svg"} alt={'revenue image'} className={''}></Image>
                </div>
            </main>

        </>
    )
}

export const getServerSideProps = withIronSession(// @ts-ignore
    async ({ req, res }) => {
        const user = req.session.get("user");

        if (!user) {
            res.statusCode = 404;
            res.end();
            return { props: {} };
        }

        return {
            props: { user }
        };
    },
    {
        cookieName: "MYSITECOOKIE",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false
        },
        password: "123456789101121311415161718162loljiogfhdfgdfghgfsddf"
    }
);
