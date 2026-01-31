"use client";

import { useLang } from "./LangContext";
import PriceCalculator from "./PriceCalculator";

export default function PricingSection() {
  const { t } = useLang();

  return (
    <section id="pricing" className="py-20 bg-[#EDE7DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">{t("Transparent Pricing", "Прозрачные цены")}</h2>
          <p className="text-xl text-[#5D4037]">{t("Affordable restoration starting from $30", "Доступная реставрация от $30")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <PriceCalculator />

          <div className="space-y-6">
            <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#3E2723] font-serif">{t("Audio Restoration", "Реставрация аудио")}</h4>
                  <p className="text-[#5D4037]">{t("Per hour of audio", "За час аудио")}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#5D4037]">{t("From", "От")}</div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">$50</div>
                </div>
              </div>
              <ul className="space-y-2 text-[#5D4037] text-sm">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Noise & hiss removal", "Удаление шумов и треска")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Voice clarity enhancement", "Улучшение чёткости голоса")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Professional mastering", "Профессиональный мастеринг")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#3E2723] font-serif">{t("Director's Audio", "Режиссёрская обработка")}</h4>
                  <p className="text-[#5D4037]">{t("Per hour of work", "За час работы")}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#5D4037]">{t("From", "От")}</div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">$75</div>
                </div>
              </div>
              <ul className="space-y-2 text-[#5D4037] text-sm">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Mixing & mastering", "Сведение и мастеринг")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Sound design", "Звуковой дизайн")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Voiceover & dubbing", "Озвучивание и дубляж")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#3E2723] font-serif">{t("Photo Restoration", "Реставрация фото")}</h4>
                  <p className="text-[#5D4037]">{t("Per photo", "За фото")}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#5D4037]">{t("From", "От")}</div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">$30</div>
                </div>
              </div>
              <ul className="space-y-2 text-[#5D4037] text-sm">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Damage repair & restoration", "Восстановление повреждений")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Color correction", "Коррекция цвета")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("High-resolution scan", "Сканирование в высоком разрешении")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-[#3E2723] font-serif">{t("Memories to Life", "Оживление воспоминаний")}</h4>
                  <p className="text-[#5D4037]">{t("Per photo", "За фото")}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#5D4037]">{t("From", "От")}</div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">$40</div>
                </div>
              </div>
              <ul className="space-y-2 text-[#5D4037] text-sm">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Photo animation", "Анимация фотографий")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("B&W colorization", "Колоризация ч/б фото")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>{t("Video stories from archives", "Видеоистории из архивов")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-8 text-center">
          <h3 className="text-3xl font-bold text-[#F5F1E8] mb-4 font-serif">{t("Volume Discounts Available", "Скидки за объём")}</h3>
          <p className="text-[#EDE7DA] text-lg mb-6">
            {t(
              "Multiple items, large archives, or ongoing projects? Contact us for special pricing.",
              "Много материалов, большие архивы или долгосрочные проекты? Свяжитесь с нами для специальных цен."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[#F5F1E8]">
            <div className="bg-white/10 px-6 py-3 rounded">
              <div className="text-2xl font-bold font-serif">{t("10+ items", "10+ единиц")}</div>
              <div className="text-sm">{t("15% discount", "скидка 15%")}</div>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded">
              <div className="text-2xl font-bold font-serif">{t("25+ items", "25+ единиц")}</div>
              <div className="text-sm">{t("25% discount", "скидка 25%")}</div>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded">
              <div className="text-2xl font-bold font-serif">{t("50+ items", "50+ единиц")}</div>
              <div className="text-sm">{t("Custom pricing", "Индивидуальная цена")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
