import Provider from "@/components/middleware/provider";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { hostName } from "@/constans/general";

const fontFamily = Poppins({
    weight: ["100", "200", "400", "500", "600", "700", "800", "900", "300"],
    subsets: ["latin"],
});

export const metadata = {
    metadataBase: new URL(hostName),
    title: {
        default: "Homepage",
        template: `%s | michaels;`,
        keywords: [
            "Michael Setiawan",
            "Michael Setiawan Website",
            "MichaelS",
            "Michael S ITHB",
            "Michael S ITHB",
        ],
    },
    description:
        "Hi!, I'm Michael. On this platform, you'll discover a comprehensive overview of my professional journey, encompassing my CV, portfolio, highlighted projects.",
    viewport: {
        width: "device-width",
        height: "device-height",
        initialScale: 1,
        maximumScale: 1,
        minimumScale: 1,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={fontFamily.className}>
                <Provider>
                    <div className="bg-neutral-0 dark:bg-neutral-900">
                        <div className="min-h-screen w-full overflow-x-hidden flex flex-col pt-24 px-4 sm:px-6 md:px-8 lg:px-12">
                            {children}
                        </div>
                        <Footer />
                    </div>
                </Provider>
            </body>
        </html>
    );
}
