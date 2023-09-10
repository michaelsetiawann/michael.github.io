import { hostName } from "@/constans/general";
import { getAllBlogPost } from "./(blogs)/blog/[slug]/_utils/getData";

export default async function sitemap() {
    const baseUrl = hostName;

    const blogs = await getAllBlogPost();

    const blogsUrls = blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.meta.date),
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },

        ...blogsUrls,
    ];
}
