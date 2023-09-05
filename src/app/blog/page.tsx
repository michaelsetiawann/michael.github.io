import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { blogDir } from "@/constans/blog";

export default function Page() {

    const files = fs.readdirSync(path.join(blogDir));

    const blogs = files.map((filename) => {
        console.log(filename);
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

    return (
        <div>
            <div>
                {blogs.map((blog) => (
                    <Link href={"/blog/" + blog.slug} passHref key={blog.slug}>
                        <div>{blog.meta.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
