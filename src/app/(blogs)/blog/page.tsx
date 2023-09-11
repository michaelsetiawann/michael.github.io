import { allBlogs, Blog } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

function BlogCard({ blog }: { blog: Blog }) {
    return (
        <Link href={blog.url} passHref>
            <div>{blog.title}</div>
            <time dateTime={blog.date}>
                {format(parseISO(blog.date), "LLLL d, yyyy")}
            </time>
            <div>{blog.description}</div>
        </Link>
    );
}

export default function Page() {
    const blogs = allBlogs.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return (
        <div className="w-full">
            <div className="mb-7 flex flex-col gap-4">
                <h1 className="text-5xl font-bold">Blogs</h1>
                <span className="text-sm">
                    This is my blog, talking about software engineering and data
                    science.
                </span>
            </div>
            <div>
                {blogs.map((blog) => (
                    <BlogCard blog={blog} key={blog.url} />
                ))}
            </div>
            {blogs ? null : (
                <span className="font-mono text-lg w-full">No blog yet</span>
            )}
        </div>
    );
}
