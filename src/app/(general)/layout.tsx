import { Navigation } from "@/components/header/Navigation";


export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <div className="px-8 flex-grow">{children}</div>
        </>
    );
}
