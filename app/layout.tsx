import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Zhang Hao — AI Creative Video Designer",
  description: "Premium portfolio for Zhang Hao, an AI Creative Video Designer creating AI-powered commercial videos for global e-commerce brands.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-white text-black antialiased`}>{children}</body>
    </html>
  );
}
