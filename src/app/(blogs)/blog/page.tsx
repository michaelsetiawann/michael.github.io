import { getAllBlogPost } from "./_utils/getData";
import Link from "next/link";

export default async function Page() {
    const blogs = await getAllBlogPost();

    return (
        <div className="w-full">
            <div>
                {blogs.map(({ slug, meta }) => {
                    const date = new Date(meta.date);
                    return (
                        <Link href={"/blog/" + slug} passHref key={slug}>
                            <div>{meta.title}</div>
                            <div>{date.toLocaleDateString()}</div>
                            <div>{meta.description}</div>
                        </Link>
                    );
                })}
            </div>
            {blogs ? null : (
                <span className="font-mono text-lg w-full">No blog yet</span>
            )}
            <span className="font-mono text-lg w-full">No blog yet</span>
        </div>
    );
}
