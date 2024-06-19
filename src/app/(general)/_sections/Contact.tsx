import { contactList } from "@/constans/contact";
import Link from "next/link";

export default function Contact() {
    return (
        <div
            className="container mx-auto flex flex-col items-center justify-start py-20 gap-5 min-h-screen"
            id="contact"
        >
            <h2 className="text-5xl font-bold">Contact</h2>
            <div className="w-full px-4">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {contactList.map((item, index) => {
                        const { name, username, url } = item;
                        return (
                            <div key={name} className="flex w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl py-2 px-2 justify-start gap-3 items-center dark:text-white border shadow border-slate-200 dark:border-zinc-800 rounded-lg bg-neutral-300 dark:bg-neutral-700 transition-transform">
                                <span className="text-[45px]">
                                    <item.icon />
                                </span>
                                <div className="flex flex-col gap-0">
                                    <span className="text-xl font-semibold">
                                        {name}
                                    </span>
                                    <Link
                                        className="hover:underline break-all" target="_blank"
                                        href={url}
                                    >
                                        {username}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
