'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeSwicher() {
    const [mounted, setMounted] = useState(false);
    const [isOn, setIsOn] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';

    const toggleSwitch = () => {setIsOn(isDark); setTheme(isDark ? 'light' : 'dark')};

    return (
        <div className={('w-14 border-black bg-slate-400 rounded-full flex items-center cursor-pointer ' + (isOn ? 'justify-end' : 'justify-start'))} onClick={toggleSwitch}>
            <motion.div
                className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600  w-7 h-7 rounded-full shadow-md flex items-center justify-center"
                layout
                transition={spring}
            >
                {isDark ? <MdOutlineDarkMode className="text-white" /> : <MdOutlineLightMode className="text-black" />}
            </motion.div>
        </div>
    )
}

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};