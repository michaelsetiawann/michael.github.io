'use client'
import { ThemeSwicher } from "@/components/theme/ThemeSwicher";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import { navItems } from "@/constans/navigation";

export const Navigation = () => {
    const [isOnTop, setIsOnTop] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevY, setPrevY] = useState(0);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    useEffect(() => {
        if (isHamburgerOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isHamburgerOpen])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const scrollingDown = prevY < currentScrollPos;
            setIsOnTop(currentScrollPos === 0);
            setIsScrollingDown(scrollingDown);
            setPrevY(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [prevY])
    return (
        <motion.nav
            initial={{ y: 0 }}
            transition={{
                duration: 0.23,
                type: 'tween'
            }}
            animate={{ y: isScrollingDown ? -100 : 0 }}
            className={"bg-neutral-200 dark:bg-neutral-900 fixed top-0 left-0 w-full py-5 px-8 md:px-24 flex items-center justify-between z-50 bg-inherit select-none " + (isOnTop || isHamburgerOpen ? "opacity-100" : "opacity-90")}>
            <Link id="logo" href='/' className="font-mono font-bold text-2xl select-none">
                glennprays;
            </Link>
            <div className={"flex justify-between items-center px-8 md:px-24 xl:px-0 w-7/12 max-xl:w-full text-xl max-xl:absolute max-xl:left-0 max-xl:top-0 max-xl:mt-[76px] transition-all max-xl:overflow-x-hidden max-xl:overflow-y-auto max-xl:bg-inherit max-xl:flex-col max-xl:items-start max-xl:justify-start max-xl:gap-4 " + (isHamburgerOpen ? "max-xl:py-5 max-xl:h-[calc(100vh-76px)]" : "max-xl:h-0 max-xl:py-0")} >
                {
                    navItems.map((item) => <Link key={item.name} href={item.href} onClick={() => setIsHamburgerOpen(false)} className={"hover:text-cyan-600 dark:hover:text-amber-500 hover:underline font-semibold "}>{item.name}</Link>)
                }
            </div>
            <ThemeSwicher />
            <Hamburger isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
        </motion.nav>
    )
};
