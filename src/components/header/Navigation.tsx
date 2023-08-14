import { ThemeSwicher } from "@/components/theme/ThemeSwicher";

export const Navigation = () => {
    return (
        <nav className="absolute py-5 px-8 flex items-center justify-between w-full ">
            <div className="font-mono font-bold text-3xl">
                glennprays;
            </div>
            <div className="">
                <ThemeSwicher />
            </div>
        </nav>
    )
};
