import { hostName } from "@/constans/general";
import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
    const baseUrl = hostName;

    const blogs = allBlogs;

    const blogsUrls = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },

        ...blogsUrls,
    ];
}
