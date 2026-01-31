"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "ru";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, ru: string) => string;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ru") setLang(saved);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "ru" ? "en" : "ru";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (en: string, ru: string) => (lang === "ru" ? ru : en);

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
