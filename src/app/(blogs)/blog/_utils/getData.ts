import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { blogDir } from "@/constans/blog";

export type Blog = {
    meta: {
        [key: string]: any;
    };
    content: string;
    slug: string;
};

// only return the slug and metadata
export async function getAllBlogPost(): Promise<Omit<Blog, "content">[]> {
    const files = fs.readdirSync(path.join(blogDir));

    const blogs: Omit<Blog, "content">[] = files.map((filename) => {
        const fileContent = fs.readFileSync(
            path.join(blogDir, filename),
            "utf-8"
        );

        const { data: fronMatter } = matter(fileContent);

        return {
            meta: fronMatter,
            slug: filename.replace(".mdx", ""),
        };
    });

    return blogs;
}

// return all props of blog
export async function getBlogPostBySlug(slug: string): Promise<Blog> {
    const markdownFile = fs.readFileSync(
        path.join(blogDir, slug + ".mdx"),
        "utf-8"
    );

    const { data: fontMatter, content } = matter(markdownFile);

    return {
        meta: fontMatter,
        content: content,
        slug: slug,
    };
}
