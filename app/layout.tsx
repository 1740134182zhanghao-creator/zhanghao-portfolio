import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = { title: site.title, description: site.description };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="zh-CN" className="scroll-smooth"><body>{children}</body></html>;
}
