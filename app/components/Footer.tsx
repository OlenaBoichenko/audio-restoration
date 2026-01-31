"use client";

import { useLang } from "./LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#3E2723] text-[#F5F1E8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">RestoreMedia</h3>
            <p className="text-[#D4A574]">
              {t(
                "Professional audio and photo restoration services. Preserving memories since 2014.",
                "Профессиональная реставрация аудио и фото. Сохраняем воспоминания с 2014 года."
              )}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-serif">{t("Services", "Услуги")}</h4>
            <ul className="space-y-2 text-[#D4A574]">
              <li><a href="#services" className="hover:text-[#F5F1E8] transition">{t("Audio Restoration", "Реставрация аудио")}</a></li>
              <li><a href="#services" className="hover:text-[#F5F1E8] transition">{t("Director's Audio", "Режиссёрская обработка")}</a></li>
              <li><a href="#services" className="hover:text-[#F5F1E8] transition">{t("Photo Restoration", "Реставрация фото")}</a></li>
              <li><a href="#services" className="hover:text-[#F5F1E8] transition">{t("Memories to Life", "Оживление воспоминаний")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-serif">{t("Company", "Компания")}</h4>
            <ul className="space-y-2 text-[#D4A574]">
              <li><a href="#process" className="hover:text-[#F5F1E8] transition">{t("How It Works", "Как мы работаем")}</a></li>
              <li><a href="#pricing" className="hover:text-[#F5F1E8] transition">{t("Pricing", "Цены")}</a></li>
              <li><a href="#testimonials" className="hover:text-[#F5F1E8] transition">{t("Testimonials", "Отзывы")}</a></li>
              <li><a href="#contact" className="hover:text-[#F5F1E8] transition">{t("Contact", "Контакты")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-serif">{t("Contact", "Контакты")}</h4>
            <ul className="space-y-2 text-[#D4A574]">
              <li>info@restoremedia.com</li>
              <li>+1 (555) 123-4567</li>
              <li>{t("Mon-Fri: 9AM-6PM EST", "Пн-Пт: 9:00-18:00 МСК")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#5D4037] mt-8 pt-8 text-center text-[#D4A574]">
          <p>&copy; 2025-2026 RestoreMedia. {t("All rights reserved. Your memories, our expertise.", "Все права защищены. Ваши воспоминания — наш профессионализм.")}</p>
        </div>
      </div>
    </footer>
  );
}
