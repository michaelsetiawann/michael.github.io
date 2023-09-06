import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { blogDir } from "@/constans/blog";
import { Metadata } from "next";
import { getBlogPostBySlug } from "../_utils/getData";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join(blogDir));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace(".mdx", ""),
        },
    }));

    return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getBlogPostBySlug(params.slug);
    if (!params)
        return {
            title: "Not found",
            description: "The blog page is not found!",
        };

    return {
        title: post.meta.title,
        description: post.meta.description,
        robots: {
            index: true,
            nocache: false,
        },
    };
}

export default async function Page({ params }: Props) {
    const blog = await getBlogPostBySlug(params.slug);

    return (
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i dark:prose-invert mx-auto">
            <h1>{blog.meta.title}</h1>
            <MDXRemote source={blog.content} />
        </article>
    );
}
