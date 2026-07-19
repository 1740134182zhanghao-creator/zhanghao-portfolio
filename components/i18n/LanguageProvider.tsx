"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Locale, type Messages } from "@/data/i18n";

const STORAGE_KEY = "portfolio-language";

type LanguageContextValue = {
  locale: Locale;
  messages: Messages;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initialLocale = document.documentElement.dataset.locale;
    setLocale(initialLocale === "en" ? "en" : "zh");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const currentMessages = messages[locale];
    localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = currentMessages.htmlLang;
    document.documentElement.dataset.locale = locale;
    document.title = currentMessages.site.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", currentMessages.site.description);
  }, [locale, ready]);

  const value = useMemo<LanguageContextValue>(() => ({
    locale,
    messages: messages[locale],
    setLocale,
    toggleLocale: () => setLocale((current) => current === "zh" ? "en" : "zh"),
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
