import type { Metadata } from "next";
import { Outfit, Playfair_Display, League_Spartan, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const leagueSpartan = League_Spartan({ subsets: ["latin"], variable: "--font-league-spartan" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "OneHundred Honey",
    description: "Bringing the purity of honey to your table.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </head>
            <body className={`${outfit.variable} ${playfair.variable} ${leagueSpartan.variable} ${inter.variable} font-sans`}>{children}</body>
        </html>
    );
}
