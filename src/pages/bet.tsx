import Head from 'next/head'
import Image from "next/image";
import {Navigation} from "../components/nav/Navigation"
import 'material-icons/iconfont/material-icons.css';

import ReactTooltip from 'react-tooltip';
import Script from "next/script";
import Link from "next/link";
import {useSession} from "next-auth/react";
import Popup from 'reactjs-popup';
import {useState} from "react";


// @ts-ignore
export default function Bets({race, raceError, timings}) {
    const {data: session} = useSession();
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    // @ts-ignore
    const submitBet = async (event) => {
        event.preventDefault();

            const driverID = event.target.driver.value;
            const token = event.target.token.value;
            const amount = event.target.amount.value;
            const raceID = event.target.race.value;

         const res = await fetch('/api/bet', {
            body: JSON.stringify({
                driverID,
                amount,
                token,
                raceID
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
         console.log(res.status)
         if (res.status === 400){
             const message = await res.json();
             alert("ERROR: " + message.error);
         } else{
             alert("Bet placed successful!");
             setOpen(false);

         }

    };


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
                    <video className="w-128 h-96 object-cover rounded" id="video" width="800" controls></video>
                    {/* eslint-disable */}
                    <script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
                    {/* eslint-enable  */}
                    <Script id="stream">{`
                        let video = document.getElementById("video");
                        let videoSrc = "https://stream.aronbuffel.be/hls/race.m3u8";
                        if (Hls.isSupported()) { 
                        let hls = new Hls();
                        hls.loadSource(videoSrc);
                        hls.attachMedia(video);
                    }
                        else if (video.canPlayType("application/vnd.apple.mpegurl")) {
                        video.src = videoSrc;
                    }`}
                    </Script>
                    <div className={"ml-5 w-fit"}>
                        <h2 className={"w-fit ml-auto mr-auto font-medium text-xl"}>Next matches</h2>
                        <hr/>
                        {timings.length === 0 ?
                            <p>There are no upcoming races</p> :
                            timings.map((timing: {
                                id: number,
                                name: string,
                                time: string
                            }) => (
                                <div key={timing.id}
                                    className={"p-2 pl-3 pr-3 border-l-2 border-main-red  shadow rounded flex justify-between mt-2"}>
                                    <p className={"mr-6"}>{timing.name}</p>
                                    <p className={"text-zinc-500"}>{timing.time}</p>
                                </div>
                            ))}
                    </div>
                </div>
                <div id={"races"}>
                    <article className={"mr-auto ml-auto flex flex-wrap mt-10 max-w-4xl"}>
                        {raceError !== null ?
                            <p>There are no active races</p> :
                            race.race.drivers.map((driver: {
                                id: number;
                                name: string
                            }) => (
                                <section key={driver.id}
                                    className={'flex border-l-2 justify-between border-main-red mr-16 mb-6 shadow rounded w-fit min-w-96'}>
                                    <Image className={"w-10 h-10 object-cover "} src={"/car.png"} alt={"car icon"}
                                           width={550} height={425}/>
                                    <h3 data-tip data-for={"race-" + driver.id}
                                        className={"text-lg mt-auto mb-auto underline ml-3 "}>{driver.name.split(' ')[0]}</h3>
                                    <ReactTooltip id={"race-" + driver.id} place={"bottom"} type='dark' effect='solid'>
                                        <p>name: {driver.name}</p>
                                        <div><p>Vehicle</p>
                                            <div className={"mt-auto mb-auto ml-3"}>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star_half</span>
                                            </div>
                                        </div>
                                        <div><p>Ai-drive</p>
                                            <div className={"mt-auto mb-auto ml-3"}>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star_half</span>
                                            </div>
                                        </div>
                                        <div><p>Track</p>
                                            <div className={"mt-auto mb-auto ml-3"}>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star</span>
                                                <span className="material-icons">star_half</span>
                                            </div>
                                        </div>
                                    </ReactTooltip>
                                    <div className={"mt-auto mb-auto ml-3"}>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star</span>
                                        <span className="material-icons">star_half</span>
                                    </div>
                                    {session?.user?.name ?
                                        <button type="button" className="btn-red" onClick={() => setOpen(o => !o)}>
                                            Bet
                                        </button> :
                                        <Link href={"/login"}>
                                            <button type="button" className="btn-red">Login</button>
                                        </Link>
                                    }
                                </section>
                            ))}
                    </article>

                    <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                        <div className="modal z-50 w-96 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                            <div className="relative bg-white rounded-lg drop-shadow dark:bg-gray-700">
                            <div
                                className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Bet
                                </h3>
                                <a className="text-black font-bold" onClick={closeModal}>
                                    &times;
                                </a>
                            </div>
                                <form className={"text-black flex flex-col"} onSubmit={submitBet} >
                                    <div className={"ml-2 mt-4"}>
                                    <label className={"mr-2"}  htmlFor="">Driver:</label>
                                    <select name={"driver"} className={"bg-white border mb-4"}>
                                        {race.race.drivers.map((driver: {
                                        id: number;
                                        name: string
                                    }) => (
                                            <option key={driver.id} value={driver.id}>{driver.name}</option>

                                        ))}
                                    </select>
                                    </div>

                                    <input className={"hidden"} name="token" type="text" value={ // @ts-ignore
                                         session?.user?.accessToken}/>
                                    <input className={"hidden"} name="race" type="text" value={race.race.id}/>
                                    <div className={"ml-2 mb-4"}>
                                    <label className={"mr-2"}  htmlFor="">Amount:</label>
                                    <input type="number" min="1" name={"amount"} className={"bg-white border"} max={parseInt(session?.user?.email as string)}/>
                                    </div>
                                    <button className={"btn-red"}  type="submit">Bet</button>
                                </form>
                            </div>
                        </div>
                    </Popup>

                </div>

            </main>

        </>
    )
}

export async function getStaticProps() {
    const liveRace = await fetch('https://go-api-lgafo.ondigitalocean.app/api/races/live', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
        },
    });

    const race = await liveRace.json()
    let raceError = liveRace.status === 400 ? race.error : null;

    const raceHistory = await fetch('https://go-api-lgafo.ondigitalocean.app/api/races', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
        },
    });
    let timings: any[] = [];
    let history = await raceHistory.json()
    // @ts-ignore
    history = history.filter(hist => hist.finished === false)
    // @ts-ignore
    history.forEach(historyRace => {
        let time = liveRace.status !== 400 && historyRace.id === race.race.id ?
            "current" :
            calculateTime(historyRace.date)

        timings.push({
            id: historyRace.id,
            name: historyRace.name,
            time: time
        })

    })

    let historyError = liveRace.status === 400 ? race.error : null;

    return {
        props: {
            race,
            raceError,
            timings,
            historyError
        },
        revalidate: 10,
    }
}

function calculateTime(date: string) {
    let date_future = new Date(date)
    let date_now = new Date();
    // @ts-ignore
    let time: string = Math.floor((date_future - (date_now)) / 1000 / 60 / 60);
    // @ts-ignore
    if ((date_future - (date_now)) / 1000 / 60 / 60 < 1) {
        // @ts-ignore
        time = String(Math.floor((date_future - (date_now)) / 1000 / 60)) + " min";
    } else {
        time = time === "1" ? time + " hour" : time + " hours";
    }
    return time;
}

