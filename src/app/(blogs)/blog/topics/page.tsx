import { blogTopics } from "@/constans/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog's Topics",
    description: "Topics explored in my blog",
};

export default function Page() {
    return (
        <div className="w-full mx-auto md:w-[650px]">
            <header>
                <h1 className="text-5xl font-bold text-center">Topics.</h1>
            </header>
            <div className="mx-auto w-fit mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
                {blogTopics.map((blog) => (
                    <Link
                        href={`/blog/topics/${blog.slug}`}
                        key={blog.name}
                        className="max-w-[285px] py-4 px-5 rounded-lg bg-neutral-300 dark:bg-neutral-800 hover:scale-105 transition-transform"
                    >
                        <h2 className="text-3xl font-semibold">
                            {blog.name.toUpperCase()}
                        </h2>
                        <span className="line-clamp-4">{blog.description}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
