'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeSwicher() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';

    const toggleSwitch = () => setTheme(isDark ? 'light' : 'dark');

    return (
        <div id="theme-switcher" className={('w-9 sm:w-14 border-black bg-slate-100 rounded-full flex items-center cursor-pointer ' + (isDark ? 'justify-start' : 'justify-end'))} onClick={toggleSwitch}>
            <motion.div
                className="bg-green-600 dark:bg-purple-600 w-7 h-7 max-sm:w-9 max-sm:h-9 rounded-full shadow-md flex items-center justify-center max-sm:text-2xl"
                layout
                transition={spring}
            >
                {isDark ? <MdOutlineDarkMode className="text-white" /> : <MdOutlineLightMode className="text-white" />}
            </motion.div>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};