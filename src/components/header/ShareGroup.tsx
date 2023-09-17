"use client";
import {
    FacebookIcon,
    LinkedinIcon,
    WhatsappIcon,
    TelegramIcon,
    EmailIcon,
} from "next-share";
import Link from "next/link";

export default function ShareGroup({
    shareUrl,
    caption,
    size,
}: {
    shareUrl: string;
    caption: string;
    size: number;
}) {
    return (
        <>
            <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    shareUrl
                )}&title=${encodeURIComponent(caption)}&summary=${encodeURIComponent(caption)}&source=`}
                target="_blank"
            >
                <LinkedinIcon round size={size} />
            </Link>
            <Link
                href={`https://t.me/share/url?url=${encodeURIComponent(
                    shareUrl
                )}&text=${encodeURIComponent(caption)}`}
                target="_blank"
            >
                <TelegramIcon round size={size} />
            </Link>
            <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                )}&t=${encodeURIComponent(caption)}`}
                target="_blank"
            >
                <FacebookIcon round size={size} />
            </Link>

            <Link
                href={`https://wa.me/?text=${encodeURIComponent(
                    caption + `\n\n` + shareUrl
                )}`}
                target="_blank"
            >
                <WhatsappIcon round size={size} />
            </Link>

            <Link
                href={`mailto:?&subject=&body=${
                    caption + `\n\n` + encodeURIComponent(shareUrl)
                }`}
                target="_blank"
            >
                <EmailIcon round size={size} />
            </Link>
        </>
    );
}
