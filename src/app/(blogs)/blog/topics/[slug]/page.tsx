import { blogTopics } from "@/constans/blog";
import { Blog, allBlogs } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";
import { AiOutlineCompass } from "react-icons/ai";

type Props = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    const paths = blogTopics.map((topic) => ({ slug: topic.slug }));
    return paths;
}

export function generateMetadata({ params }: Props) {
    const topic = blogTopics.find((topic) => topic.slug === params.slug);
    const metadata: Metadata = {
        title: topic?.name + " | glennprays;",
        description: `My blogs talking about ${topic?.name}`,
    };
    return metadata;
}

function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="w-[285px] bg-neutral-300 dark:bg-neutral-800 py-3 px-3 rounded-lg flex flex-col gap-2 hover:scale-105 transition-transform"
        >
            <span className="text-xl font-semibold hover:underline line-clamp-3">
                {blog.title}
            </span>

            <div className="flex gap-2 text-xs">
                <time dateTime={blog.date} className="">
                    {format(parseISO(blog.date), "LLLL d, yyyy")}
                </time>
                ·<span className="">{blog.reading_time} min read</span>
            </div>
            <span className="line-clamp-2">{blog.description}</span>
        </Link>
    );
}

export default function Page({ params }: Props) {
    const topic = blogTopics.find((topic) => topic.slug === params.slug);
    const blogs = allBlogs
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .filter((blog) => blog.flattened_tag === params.slug);
    return (
        <div className="w-full mx-auto md:w-[650px] ">
            <header className="flex flex-col gap-2">
                <span className="text-xl font-semibold">
                    Blog&apos;s Topic:
                </span>
                <h1 className=" font-bold text-5xl">{topic?.name}</h1>
                <span className="text-sm">{topic?.description}</span>
                <div className="w-full flex">
                    <Link
                        href={`/blog/topics`}
                        className="flex gap-2 items-center rounded-full py-1 px-2 bg-neutral-300 dark:bg-neutral-700"
                    >
                        <AiOutlineCompass /> More Topics
                    </Link>
                </div>
            </header>
            <div className="mt-10 mx-auto w-fit grid grid-cols-1 min-[769px]:grid-cols-2 gap-8 flex-wrap">
                {blogs.map((blog) => (
                    <BlogCard key={blog.title} blog={blog} />
                ))}
            </div>
        </div>
    );
}
