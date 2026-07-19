import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import { languageBootstrapScript } from "@/data/i18n/bootstrap";
import { zh } from "@/data/i18n/zh";
import "./globals.css";

export const metadata: Metadata = { title: zh.site.title, description: zh.site.description };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: languageBootstrapScript }} /></head>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
