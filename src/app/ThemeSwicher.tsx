'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwicher() {
    const [mounted, setMounted] = useState(false);
    const {setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    const isDark = resolvedTheme === 'dark';

    return (
        <div className="flex flex-col items-center">
                <button
                    className="rounded-md border-purple-400 border-2 p-4"
                    onClick={() => setTheme(isDark ? 'light' : 'dark')}
                >
                    <span className="text-xl">
                        {
                            isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />
                        }
                    </span>
                </button>
                
        </div>
    )
}