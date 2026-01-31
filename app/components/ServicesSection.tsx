"use client";

import { useLang } from "./LangContext";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function ServicesSection() {
  const { t } = useLang();

  return (
    <section id="services" className="py-20 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">{t("Our Services", "Наши услуги")}</h2>
          <p className="text-xl text-[#5D4037]">{t("Professional restoration for every format", "Профессиональная реставрация любого формата")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Audio Restoration */}
          <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
            <div className="relative aspect-video mb-6 overflow-hidden bg-gradient-to-br from-[#E8DCC8] to-[#D4A574] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto mb-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                <div className="text-[#3E2723] font-serif text-sm">{t("Before: Hiss, clicks, noise", "До: Шум, щелчки, треск")}</div>
                <div className="text-[#8B6F47] font-serif font-semibold">{t("After: Crystal clear", "После: Кристально чисто")}</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">{t("Audio Restoration", "Реставрация аудио")}</h3>
            <ul className="space-y-2 text-[#5D4037] mb-4">
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Remove hiss, clicks & pops", "Удаление шумов, щелчков и треска")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Enhance voice clarity", "Улучшение чёткости голоса")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Professional mastering", "Профессиональный мастеринг")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Vinyl & cassette digitization", "Оцифровка винила и кассет")}</span>
              </li>
            </ul>
            <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
              {t("Learn More", "Подробнее")} →
            </a>
          </div>

          {/* Director's Audio Processing */}
          <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
            <div className="relative aspect-video mb-6 overflow-hidden bg-gradient-to-br from-[#8B6F47] to-[#A0826D] flex items-center justify-center">
              <div className="text-center text-[#F5F1E8]">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <div className="font-serif font-semibold">{t("Professional Sound", "Профессиональный звук")}</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">{t("Director's Audio Processing", "Режиссёрская обработка аудио")}</h3>
            <ul className="space-y-2 text-[#5D4037] mb-4">
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Professional mixing & mastering", "Профессиональное сведение и мастеринг")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Sound design", "Звуковой дизайн")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Podcast & interview editing", "Обработка подкастов и интервью")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Voiceover & dubbing", "Озвучивание и дубляж")}</span>
              </li>
            </ul>
            <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
              {t("Learn More", "Подробнее")} →
            </a>
          </div>

          {/* Photo Restoration */}
          <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
            <div className="relative aspect-video mb-6 overflow-hidden">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600&h=400&fit=crop&q=80"
                afterImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop&q=80"
                alt={t("Photo restoration", "Реставрация фото")}
                beforeLabel={t("Before", "До")}
                afterLabel={t("After", "После")}
              />
            </div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">{t("Photo Restoration", "Реставрация фото")}</h3>
            <ul className="space-y-2 text-[#5D4037] mb-4">
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Repair tears & damage", "Восстановление разрывов и повреждений")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Color restoration", "Восстановление цвета")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Remove stains & fading", "Удаление пятен и выцветания")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Digital enhancement", "Цифровое улучшение")}</span>
              </li>
            </ul>
            <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
              {t("Learn More", "Подробнее")} →
            </a>
          </div>

          {/* Bringing Memories to Life */}
          <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
            <div className="relative aspect-video mb-6 overflow-hidden bg-gradient-to-br from-[#E8DCC8] to-[#D4A574] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-20 h-20 mx-auto mb-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div className="text-[#3E2723] font-serif text-sm">{t("Static photo", "Статичное фото")}</div>
                <div className="text-[#8B6F47] font-serif font-semibold">{t("Comes alive!", "Оживает!")}</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">{t("Bringing Memories to Life", "Оживление воспоминаний")}</h3>
            <ul className="space-y-2 text-[#5D4037] mb-4">
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Animate old photographs", "Анимация старых фотографий")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Create video stories from archives", "Создание видеоисторий из архивов")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Colorize black & white photos", "Колоризация чёрно-белых фото")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#8B6F47] mr-2">✓</span>
                <span>{t("Slideshow with effects", "Слайд-шоу с эффектами")}</span>
              </li>
            </ul>
            <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
              {t("Learn More", "Подробнее")} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
