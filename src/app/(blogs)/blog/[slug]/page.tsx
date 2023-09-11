import { allBlogs } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from 'date-fns'

type Props = {
    params: {
        slug: string;
    };
};

export async function generateStaticParams() {
    const paths = allBlogs.map((blog) => ({ slug: blog.slug }));

    return paths;
}

export function generateMetadata({ params }: Props) {
    const blog = allBlogs.find((blog) => blog.slug === params.slug);
    return {
        title: blog?.title,
        description: blog?.description,
        robots: {
            index: true,
            nocache: false,
        },
    };
}

export default async function Page({ params }: Props) {
    const blog = allBlogs.find((blog) => blog.slug === params.slug);

    const Content = getMDXComponent(blog?.body.code || "");

    return (
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-i dark:prose-invert mx-auto">
            <h1>{blog?.title}</h1>
            <time dateTime={blog?.date} className="mb-1 text-xs text-gray-600">
                {format(parseISO(blog?.date || ""), "LLLL d, yyyy")}
            </time>
            <Content />
        </article>
    );
}
