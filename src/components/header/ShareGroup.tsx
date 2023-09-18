"use client";
import Link from "next/link";
import { FiShare, FiMail } from "react-icons/fi";
import {
    BiLogoLinkedin,
    BiLogoTelegram,
    BiLogoFacebook,
    BiLogoWhatsapp,
    BiLinkAlt,
} from "react-icons/bi";
import { IconType } from "react-icons";
import { useEffect, useRef, useState } from "react";

type ShareItem = {
    name: string;
    icon: IconType;
    href: string;
    background: string;
};

function copyText(text: string) {
    navigator.clipboard.writeText(text);
}

export default function ShareGroup({
    shareUrl,
    caption,
}: {
    shareUrl: string;
    caption: string;
}) {
    const shareItems: ShareItem[] = [
        {
            name: "Linkedin",
            icon: BiLogoLinkedin,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                shareUrl
            )}&title=${encodeURIComponent(
                caption
            )}&summary=${encodeURIComponent(caption)}&source=`,
            background: "0077B5",
        },
        {
            name: "Telegram",
            icon: BiLogoTelegram,
            href: `https://t.me/share/url?url=${encodeURIComponent(
                shareUrl
            )}&text=${encodeURIComponent(caption)}`,
            background: "229ED9",
        },
        {
            name: "Facebook",
            icon: BiLogoFacebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
            )}&t=${encodeURIComponent(caption)}`,
            background: "1877f2",
        },
        {
            name: "Whatsapp",
            icon: BiLogoWhatsapp,
            href: `https://wa.me/?text=${encodeURIComponent(
                caption + `\n\n` + shareUrl
            )}`,
            background: "4ac959",
        },
        {
            name: "Mail",
            icon: FiMail,
            href: `mailto:?&subject=&body=${
                caption + `\n\n` + encodeURIComponent(shareUrl)
            }`,
            background: "787878",
        },
    ];

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative text-base">
            <button
                className="py-0.5 px-4 flex gap-1 justify-center items-center border rounded-full border-neutral-900 dark:border-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-800"
                type="button"
                id="share-button"
                onClick={() => setOpen(!open)}
            >
                <FiShare />
                <span>Share</span>
            </button>
            <div
                className={`px-0 py-2 overflow-hidden absolute buttom-0 right-0 mt-1 rounded-md border border-neutral-900 dark:border-neutral-700 w-[170px] bg-neutral-200 dark:bg-neutral-900 drop-shadow font-semibold ${
                    open ? "" : "hidden"
                }`}
                ref={dropdownRef}
                onClick={() => setOpen(false)}
            >
                <button
                    className="py-2 px-5 w-full hover:bg-neutral-300 hover:dark:bg-neutral-800 flex items-center gap-2 mb-2"
                    onClick={() => copyText(`${caption}\n\n${shareUrl}`)}
                >
                    <div
                        className={`p-[5px] rounded-full text-white bg-slate-600`}
                    >
                        <BiLinkAlt />
                    </div>
                    <span>Copy Link</span>
                </button>
                {shareItems.map((item) => {
                    return (
                        <Link href={item.href} target="_blank">
                            <button className="py-2 px-5 w-full hover:bg-neutral-300 hover:dark:bg-neutral-800 flex items-center gap-2 ">
                                <div
                                    className={`p-[5px] rounded-full text-white`}
                                    style={{
                                        backgroundColor: `#${item.background}`,
                                    }}
                                >
                                    <item.icon />
                                </div>
                                <span>{item.name}</span>
                            </button>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
