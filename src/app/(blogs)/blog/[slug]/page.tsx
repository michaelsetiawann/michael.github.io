import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import Image from "next/image";
import { hostName } from "@/constans/general";
import ShareGroup from "@/components/header/ShareGroup";

type Props = {
    params: {
        slug: string;
    };
};

async function generateOg(shortTitle: string, slug: string): Promise<string> {
    const fileName = `${slug}.png`;
    const fileUrl = path.join("images", "blog", ".opengraph", fileName);
    const filePath = path.join("public", fileUrl);

    const og = `
    <div style="width: 1200px; height: 630px; text-align: center; position: relative; display: flex; align-items: center; justify-content: center; background-image: url('https://glennprays.tech/images/blog-cover.png'); background-size: cover;">
        <span style="position: absolute; z-index: 20; font-family: monospace; font-size: 75px; font-weight: bolder; word-spacing: -20px; color: white;">
            ${shortTitle}
        </span>
    </div>
`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(og);

    const imageData = await page.screenshot({
        encoding: "base64",
        clip: {
            x: 8,
            y: 8,
            width: 1200,
            height: 630,
        },
    });

    fs.writeFileSync(filePath, imageData, "base64");

    await browser.close();

    return fileUrl;
}

export async function generateStaticParams() {
    const paths = allBlogs.map((blog) => ({ slug: blog.slug }));
    return paths;
}

export async function generateMetadata({ params }: Props) {
    const blog = allBlogs.find((blog) => blog.slug === params.slug);
    const ogPath = await generateOg(blog?.short_title || "", blog?.slug || "");
    const metadata: Metadata = {
        title: blog?.title + " | glennprays;",
        description: blog?.description,
        robots: {
            index: true,
            nocache: false,
        },
        openGraph: {
            images: ogPath,
        },
        twitter: {
            images: ogPath,
        },
        authors: { name: blog?.author },
    };
    return metadata;
}

export default async function Page({ params }: Props) {
    const blog = allBlogs.find((blog) => blog.slug === params.slug);

    const Content = getMDXComponent(blog?.body.code || "");
    const blogCoverPath = path.join(
        "..",
        "..",
        "..",
        "..",
        "images",
        "blog",
        ".opengraph",
        blog?.slug + ".png"
    );

    const blogUrl = `${hostName}/blog/${blog?.slug}`;
    const shareQuote = blog?.description || "";
    return (
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i dark:prose-invert mx-auto prose-h1:my-1 prose-h1:font-bold prose-h2:mt-7 prose-h2:mb-2 prose-img:w-full md:prose-img:w-[500px] prose-video:w-full md:prose-video:w-[500px] prose-li:m-0 prose-code:text-base prose-code:whitespace-pre-wrap  ">
            <time
                dateTime={blog?.date}
                className="mb-1 text-xs text-gray-600 dark:text-neutral-400"
            >
                {format(parseISO(blog?.date || ""), "LLLL d, yyyy")}
            </time>
            <h1>{blog?.title}</h1>
            <Image
                src={blogCoverPath}
                alt={`${blog?.title} blog cover`}
                width={0}
                height={0}
                className="mx-auto w-full md:w-[500px]"
            />
            <div id="share_group" className=" flex gap-1">
                <ShareGroup shareUrl={blogUrl} caption={shareQuote} size={32} />
            </div>
            <Content />
            <span className="text-sm">Author: {blog?.author}</span>
        </article>
    );
}
