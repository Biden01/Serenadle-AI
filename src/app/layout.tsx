import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serendale.ai — AI-Powered Blockchain Platform",
  description:
    "Next-generation blockchain platform with 120K TPS, AI-powered security, and Proof of Stake consensus. Build the future of decentralized technology.",
  keywords: ["blockchain", "AI", "cryptocurrency", "smart contracts", "DeFi", "proof of stake"],
  openGraph: {
    title: "Serendale.ai — AI-Powered Blockchain Platform",
    description:
      "Next-generation blockchain platform with 120K TPS, AI-powered security, and Proof of Stake consensus.",
    url: "https://serendale.ai",
    siteName: "Serendale.ai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendale.ai — AI-Powered Blockchain Platform",
    description:
      "Next-generation blockchain platform with 120K TPS, AI-powered security, and Proof of Stake consensus.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
