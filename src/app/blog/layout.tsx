import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "This is my blog talking about software engineering and data science.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className="container mx-auto px-8">{children}</div>;
}
