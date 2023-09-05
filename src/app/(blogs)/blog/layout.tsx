import { NavigationBlog } from "@/components/header/NavigationBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "This is my blog, talking about software engineering and data science.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavigationBlog />
            <div className="container mx-auto px-10">{children}</div>
        </>
    );
}
