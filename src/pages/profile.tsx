import Head from 'next/head'
import {Navigation} from "../components/nav/Navigation"
import 'material-icons/iconfont/material-icons.css';
import React, {useState} from "react";
import Script from "next/script";
import Popup from "reactjs-popup";
import Link from "next/link";
import { useRouter } from 'next/router';
// @ts-ignore
import {withIronSession} from "next-iron-session";


// @ts-ignore
export default function Login({user}) {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    // @ts-ignore
    const submitAmount = async (event) => {
        event.preventDefault();
        const token = event.target.token.value;
        const transferType = event.target.transferType.value;
        const amount = event.target.amount.value;

        const res = await fetch('/api/amount', {
            body: JSON.stringify({
                amount,
                transferType,
                token,
                user
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
        });
        const resJSON = await res.json()
        if (res.status === 400) {
            const message = await res.json();
            alert("ERROR: " + message.error);
        } else {

           const session = await fetch("/api/sessions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: resJSON.username,
                    token: token,
                    amount:resJSON.wallet
                })
            });

            alert("success balance has changed!");
            setOpen(false);
            // @ts-ignore
            router.reload(window.location.pathname)
        }

    };
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
                <div className="max-w-2xl mx-auto">
                    <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                        <ul className="flex flex-wrap -mb-px" id="myTab" data-tabs-toggle="#myTabContent"
                            role="tablist">
                            <li className="mr-2" role="presentation">
                                <button
                                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active"
                                    id="profile-tab" data-tabs-target="#profile" type="button" role="tab"
                                    aria-controls="profile" aria-selected="true">Profile
                                </button>
                            </li>
                            <li className="mr-2" role="presentation">
                                <button
                                    className="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
                                    id="wallet-tab" data-tabs-target="#wallet" type="button" role="tab"
                                    aria-controls="wallet" aria-selected="false">Wallet
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div id="myTabContent">
                        <div className="bg-gray-50 p-4 rounded-lg " id="profile" role="tabpanel"
                             aria-labelledby="profile-tab">
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg hidden" id="wallet" role="tabpanel"
                             aria-labelledby="wallet-tab">
                            <div className={"flex"}>
                                <Link href={"#"} className={"w-fit ml-4"} onClick={() => setOpen(o => !o)}>
                                    <svg className={"mr-auto ml-auto"} width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 2V9L14 7M12 9L9.99998 7M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.61556 16.2232 8.87081 16.5036 9.18703 16.6997C9.50324 16.8958 9.8679 16.9998 10.24 17H13.77C14.1421 16.9998 14.5067 16.8958 14.8229 16.6997C15.1392 16.5036 15.3944 16.2232 15.56 15.89L16.73 13.55C16.8131 13.3851 16.9402 13.2464 17.0973 13.1493C17.2544 13.0522 17.4353 13.0006 17.62 13H21.98"
                                            stroke="black" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path
                                            d="M7 4.13C3.46 4.65 2 6.73 2 11V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11C22 6.73 20.54 4.65 17 4.13"
                                            stroke="black" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <p className={"text-black"}>Add</p>
                                </Link>
                                <Link href={"#"} className={"w-fit ml-4"} onClick={() => setOpen(o => !o)}>
                                    <svg className={"mr-auto ml-auto"} width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 9V2L9.99998 4M12 2L14 4M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.61556 16.2232 8.87081 16.5036 9.18703 16.6997C9.50324 16.8958 9.8679 16.9998 10.24 17H13.77C14.1421 16.9998 14.5067 16.8958 14.8229 16.6997C15.1392 16.5036 15.3944 16.2232 15.56 15.89L16.73 13.55C16.8131 13.3851 16.9402 13.2464 17.0973 13.1493C17.2544 13.0522 17.4353 13.0006 17.62 13H21.98"
                                            stroke="black" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                        <path
                                            d="M7 5.13C3.46 5.65 2 7.73 2 12V15C2 20 4 22 9 22H15C20 22 22 20 22 15V12C22 7.73 20.54 5.65 17 5.13"
                                            stroke="black" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"/>
                                    </svg>
                                    <p className={"text-black"}>Withdraw</p>
                                </Link>
                                <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                                    <div
                                        className="modal z-50 w-96 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                                        <div className="relative bg-white rounded-lg drop-shadow dark:bg-gray-700">
                                            <div
                                                className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Deposit / Withdraw
                                                </h3>
                                                <a className="text-black font-bold" onClick={closeModal}>
                                                    &times;
                                                </a>
                                            </div>
                                            <form className={"text-black flex flex-col"} onSubmit={submitAmount}>
                                                <input className={"hidden"} name="token" type="text" value={user.token}/>
                                                <div className={"ml-5 mb-4 mt-4"}>
                                                    <label className={"mr-3"} htmlFor="transferType">Type of transfer:</label>
                                                    <select className={"bg-white border w-5/12"} name="transferType"
                                                            id="transferType">
                                                        <option value="deposit">Deposit</option>
                                                        <option value="withdraw">Withdraw</option>
                                                    </select>
                                                </div>

                                                <div className={"ml-5 mb-4"}>
                                                    <label className={"mr-3"} htmlFor="transferType">Amount:</label>
                                                    <input name={"amount"} className={"bg-white border w-5/12"} type="number"/>
                                                </div>

                                                <button className={"btn-red"}  type="submit">Confirm</button>

                                            </form>
                                        </div>
                                    </div>
                                </Popup>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </main>

            <Script src="https://unpkg.com/@themesberg/flowbite@1.2.0/dist/flowbite.bundle.js"></Script>
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

