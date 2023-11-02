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
    }, [isHamburgerOpen]);

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
    }, [prevY]);

    return (
        <motion.nav
            initial={{ y: 0 }}
            transition={{
                duration: 0.23,
                type: 'tween'
            }}
            animate={{ y: isScrollingDown ? -100 : 0 }}
            className={"text-white text-1xl bg-green-800  dark:bg-neutral-900 fixed top-0 left-0 w-full py-5 px-8 md:px-24 flex items-center justify-between z-50 bg-inherit select-none " + (isOnTop || isHamburgerOpen ? "bg-opacity-40 dark:bg-opacity-40" : "bg-opacity-40 dark:bg-opacity-40")}>
            <ThemeSwicher /> 
            <Link id="logo" href='/' className="font-mono font-bold text-2xl select-none">
            </Link>
            <div className="flex items-center">
                {
                    navItems.map((item, index) => (
                        <Link key={item.name} href={item.href} onClick={() => setIsHamburgerOpen(false)} className={"hover:text-blue-400 dark:hover-text-blue-600 hover:underline font-semibold " + (index < navItems.length - 1 ? "mr-10" : "")}>
                            {item.name}
                        </Link>
                    ))
                }
                <Hamburger isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
            </div>
        </motion.nav>
    );
};



