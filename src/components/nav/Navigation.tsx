import Link from "next/link";
import { DarkModeSelector } from "./DarkModeSelector";

export const Navigation = () => {
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
                <Link className={'btn-red hover:underline'} href={'/login'}>Login / Register</Link>
                </div>
            </nav>
        </>
    )
}