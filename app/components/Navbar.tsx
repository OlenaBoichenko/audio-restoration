"use client";

import { useLang } from "./LangContext";

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();

  return (
    <nav className="bg-[#F9F6F0] shadow-md sticky top-0 z-50 border-b-2 border-[#D4A574]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold text-[#8B6F47] font-serif hover:text-[#A0826D] transition cursor-pointer"
            >
              RestoreMedia
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">{t("Services", "Услуги")}</a>
            <a href="#process" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">{t("How It Works", "Процесс")}</a>
            <a href="#pricing" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">{t("Pricing", "Цены")}</a>
            <a href="#contact" className="bg-[#8B6F47] text-[#F5F1E8] px-4 py-2 rounded-sm hover:bg-[#A0826D] transition font-serif">
              {t("Contact", "Контакты")}
            </a>
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 border-2 border-[#8B6F47] text-[#8B6F47] px-3 py-1.5 rounded-sm hover:bg-[#8B6F47] hover:text-[#F5F1E8] transition font-serif text-sm font-semibold"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              {lang === "ru" ? "EN" : "RU"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
