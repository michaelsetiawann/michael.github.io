import { ThemeSwicher } from "@/components/theme/ThemeSwicher";
import Link from "next/link";

export const Navigation = () => {
    return ( 
        <nav className="py-5 px-8 flex items-center justify-between z-50 bg-inherit select-none">
            <Link id="logo" href='/' className="font-mono font-bold text-2xl select-none">
                glennprays;
            </Link>
            <ThemeSwicher />
        </nav>
    )
};
