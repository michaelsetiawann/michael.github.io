'use client'
import { ThemeSwicher } from "@/components/theme/ThemeSwicher";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navigation = () => {
    const [isOnTop, setIsOnTop] = useState(false)
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    const [prevY, setPrevY] = useState(0);


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
            className={"fixed top-0 left-0 w-full py-5 px-8 md:px-24 flex items-center justify-between z-50 bg-inherit select-none " + (isOnTop ? "opacity-100" : "opacity-90")}>
            <Link id="logo" href='/' className="font-mono font-bold text-2xl select-none">
                glennprays;
            </Link>
            <div className="flex justify-between items-center w-7/12 text-xl max-xl:hidden">
                <Link href='/' className="hover:text-cyan-600 dark:hover:text-amber-500 hover:underline font-semibold">Home</Link>
                <Link href='/' className="hover:text-cyan-600 dark:hover:text-amber-500 hover:underline font-semibold">Skills</Link>
                <Link href='/' className="hover:text-cyan-600 dark:hover:text-amber-500 hover:underline font-semibold">Portfolio</Link>
                <Link href='/' className="hover:text-cyan-600 dark:hover:text-amber-500 hover:underline font-semibold">Contact</Link>
                <Link href='/' className="hover:text-cyan-600 dark:hover:text-amber-500 hover:underline font-semibold">Blog</Link>
            </div>
            <ThemeSwicher />
        </motion.nav>
    )
};
