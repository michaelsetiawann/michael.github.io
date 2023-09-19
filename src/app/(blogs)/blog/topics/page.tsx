import { blogCategories } from "@/constans/blog";
import { flattenText } from "@/utils/formater";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-full mx-auto md:w-[650px]">
            <header>
                <h1 className="text-5xl font-bold text-center">Topics.</h1>
            </header>
            <div className="mx-auto mt-16 flex flex-wrap gap-16 justify-center ">
                {blogCategories.map((blog) => (
                    <Link
                        href={`/blog/tag/${flattenText(
                            blog.name.toLocaleLowerCase()
                        )}`}
                        key={blog.name}
                        className="w-[285px] py-4 px-5 rounded-lg bg-neutral-300 dark:bg-neutral-800 hover:scale-105 transition-transform"
                    >
                        <h2 className="text-3xl font-semibold">
                            {blog.name.toUpperCase()}
                        </h2>
                        <span>{blog.description}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
