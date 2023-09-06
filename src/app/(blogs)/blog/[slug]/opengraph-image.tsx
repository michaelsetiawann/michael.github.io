import { ImageResponse } from "next/server";
import { getBlogPostBySlug } from "../_utils/getData";
import blogCover from "public/images/blog-cover.png";
import Image from "next/image";
import { Fira_Code } from "next/font/google";
import { hostName } from "@/constans/general";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

type Props = {
    params: {
        slug: string;
    };
};

const fontFira = Fira_Code({
    weight: ["400", "500", "600", "700", "300"],
    subsets: ["latin"],
});

export default async function og({ params }: Props) {
    const blog = getBlogPostBySlug(params.slug);

    return new ImageResponse(
        (
            <div tw="relative w-full h-full flex items-center justify-center text-white">
                {/* Background */}
                <div tw="absolute z-10 flex inset-0">
                    <img
                        tw="flex flex-1"
                    src={`${hostName}/images/blog-cover.png`}
                    />
                </div>
                <div tw="text-7xl">{blog.meta.short_title}</div>
            </div>
        ),
        size
    );
}
