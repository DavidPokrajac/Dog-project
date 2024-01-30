import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata: Metadata = {
    title: "The Dog Project | List of dog breeds and sub-breeds and its images",
    description:
        "Browse the list of dog breeds and its sub-breeds, and discover some of the most beautiful images captured",
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
    creator: "David Pokrajac",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth bg-slate-300">
            <body className="isolate">
                <Header />
                <Navigation />
                {children}
            </body>
        </html>
    );
}
