import Link from "next/link";
import { DarkModeSelector } from "./DarkModeSelector";
import 'material-icons/iconfont/material-icons.css';


// @ts-ignore
export const Navigation = ({user}) => {
console.log(user)
    return (
        <>
            <nav className={'flex flex-row items-center justify-between w-main-stretch mx-auto mt-8 mb-14'}>
                <div className={'flex flex-row items-center no-underline justify-end text-base font-medium'}>
                    <Link className={'nav-links'} href={'/'}>Home</Link>
                    <Link className={'nav-links'} href={'/bet'}>Bet</Link>
                    <Link className={'nav-links'} href={'/help'}> Help</Link>
                </div>
                <div className={'flex flex-row items-center'}>
                    <DarkModeSelector/>
                    {user?.username ?
                        <Link className="border border p-1 border-main-red rounded mr-4 flex" href="/profile"><span
                            className=" mt-auto mb-auto mr-1 material-icons-outlined">paid</span><p
                            className={"mt-auto mb-auto"}>{user?.amount}</p></Link> :
                        <></>
                    }
                    {user?.username ?
                        <Link className={'btn-red hover:underline'} href={'/profile'}>{user?.username}</Link> :
                        <Link className={'btn-red hover:underline'} href={'/login'}>login</Link>
                    }
                </div>
            </nav>
        </>
    )
}


