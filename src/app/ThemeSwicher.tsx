'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwicher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? 'dark' : theme;
    const isDark = currentTheme === 'dark';

    return (
        <div className="flex flex-col items-center mt-4">
            {isDark ?
                <button
                    className="bg-black-700 hover:bg-black rounded-md border-purple-400 border-2 p-4"
                    onClick={() => setTheme('light')}
                >
                    <span className="text-4xl">
                        <MdOutlineDarkMode />
                    </span>
                </button>
                :
                <button
                    className="bg-gray-100 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
                    onClick={() => setTheme('dark')}
                >
                    <span className="text-4xl">
                        <MdOutlineLightMode />
                    </span>
                </button>}
        </div>
    )
}