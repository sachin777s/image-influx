import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Image-Influx",
    description: "Image Influx provide copyright free images and videos.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(
                "min-h-screen bg-background font-sans antialiased")}>
                <div className="relative flex flex-col items-center">
                    <main className="container mx-auto max-w-screen-2xl pt-16 px-6 flex-grow">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
