import { contactList } from "@/constans/contact";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact() {
    return (
        <div
            className="container mx-auto flex flex-col items-center justify-start py-20 gap-5 min-h-screen"
            id="contact"
        >
            <h2 className="text-5xl font-bold">Contact</h2>
            <div className="w-full mx-20">
                <div className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {contactList.map((item, index) => {
                        const { name, username, url } = item;
                        return (
                            <div key={name} className="flex w-[305px] py-2 px-2 justify-start gap-3 items-center dark:text-white border shadow border-slate-200 dark:border-zinc-800 rounded-lg bg-neutral-300 dark:bg-neutral-700 transition-transform ">
                                <span className="text-[45px]">
                                    <item.icon />
                                </span>
                                <div className="flex flex-col gap-0">
                                    <span className="text-xl font-semibold">
                                        {name}
                                    </span>
                                    <Link
                                        className="hover:underline" target="_blank"
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
