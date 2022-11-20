import Head from 'next/head'
import Image from "next/image";
import {Navigation} from "../components/nav/Navigation"
import 'material-icons/iconfont/material-icons.css';
import React from "react";
import ReactTooltip from 'react-tooltip';

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
                        <h2  className={"w-fit ml-auto mr-auto font-medium text-xl"}>Next matches</h2>
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
                <div>
                    <article className={"mr-auto ml-auto flex flex-wrap mt-10 max-w-4xl"}>
                        <section className={'flex border-l-2 border-main-red mr-16 mb-6 shadow rounded w-fit w-96'}>
                            <Image className={"w-10 h-10 object-cover "} src={"/car.png"} alt={"car icon"} width={550} height={425}/>
                            <h3 data-tip data-for='race1' className={"text-lg mt-auto mb-auto underline ml-3 "}>Car name 1</h3>
                            <ReactTooltip id='race1' place={"bottom"} type='dark' effect='solid'>
                                <p>Team: Team 1</p>
                                <div><p>Vehicle</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Ai-drive</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Track</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                            </ReactTooltip>
                            <div className={"mt-auto mb-auto ml-3"}>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                            </div>
                            <button className={"btn-red"}>X1.5</button>
                        </section>
                        <section className={'flex border-l-2 border-main-red mr-16 mb-6 shadow rounded w-fit w-96'}>
                            <Image className={"w-10 h-10 object-cover "} src={"/car.png"} alt={"car icon"} width={550} height={425}/>
                            <h3 data-tip data-for='race2' className={"text-lg mt-auto mb-auto underline ml-3 "}>Car name 2</h3>
                            <ReactTooltip id='race2' place={"bottom"} type='dark' effect='solid'>
                                <p>Team: Team 2</p>
                                <div><p>Vehicle</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Ai-drive</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Track</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                            </ReactTooltip>
                            <div className={"mt-auto mb-auto ml-3"}>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                            </div>
                            <button className={"btn-red"}>X1.5</button>
                        </section>
                        <section className={'flex border-l-2 border-main-red mr-16 mb-6 shadow rounded w-fit w-96'}>
                            <Image className={"w-10 h-10 object-cover "} src={"/car.png"} alt={"car icon"} width={550} height={425}/>
                            <h3 data-tip data-for='race3' className={"text-lg mt-auto mb-auto underline ml-3 "}>Car name 3</h3>
                            <ReactTooltip id='race3' place={"bottom"} type='dark' effect='solid'>
                                <p>Team: Team 3</p>
                                <div><p>Vehicle</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Ai-drive</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Track</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                            </ReactTooltip>
                            <div className={"mt-auto mb-auto ml-3"}>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                            </div>
                            <button className={"btn-red"}>X1.5</button>
                        </section>
                        <section className={'flex border-l-2 border-main-red mr-16 mb-6 shadow rounded w-fit w-96'}>
                            <Image className={"w-10 h-10 object-cover "} src={"/car.png"} alt={"car icon"} width={550} height={425}/>
                            <h3 data-tip data-for='race4' className={"text-lg mt-auto mb-auto underline ml-3 "}>Car name 4</h3>
                            <ReactTooltip id='race4' place={"bottom"} type='dark' effect='solid'>
                                <p>Team: Team 4</p>
                                <div><p>Vehicle</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Ai-drive</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Track</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                            </ReactTooltip>
                            <div className={"mt-auto mb-auto ml-3"}>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                            </div>
                            <button className={"btn-red"}>X1.5</button>
                        </section>
                        <section className={'flex border-l-2 border-main-red mr-16 mb-6 shadow rounded w-fit w-96'}>
                            <Image className={"w-10 h-10 object-cover "} src={"/car.png"} alt={"car icon"} width={550} height={425}/>
                            <h3 data-tip data-for='race5' className={"text-lg mt-auto mb-auto underline ml-3 "}>Car name 5</h3>
                            <ReactTooltip id='race5' place={"bottom"} type='dark' effect='solid'>
                                <p>Team: Team 5</p>
                                <div><p>Vehicle</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Ai-drive</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                                <div><p>Track</p> <div className={"mt-auto mb-auto ml-3"}>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star</span>
                                    <span className="material-icons">star_half</span>
                                </div></div>
                            </ReactTooltip>
                            <div className={"mt-auto mb-auto ml-3"}>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star</span>
                                <span className="material-icons">star_half</span>
                            </div>
                            <button className={"btn-red"}>X1.5</button>
                        </section>


                    </article>

                </div>

            </main>

        </>
    )
}

