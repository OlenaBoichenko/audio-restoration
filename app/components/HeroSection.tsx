"use client";

import { useLang } from "./LangContext";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#3E2723] mb-6 font-serif leading-tight">
              {t("Restore Your ", "Верните ваши ")}<span className="text-[#8B6F47]">{t("Precious Memories", "дорогие воспоминания")}</span>{t(" to Life", " к жизни")}
            </h2>
            <p className="text-xl text-[#5D4037] mb-8 leading-relaxed">
              {t(
                "From degraded recordings to damaged photos, we transform your cherished memories into pristine digital quality. Trust us with your family archive.",
                "От повреждённых записей до выцветших фотографий — мы превращаем ваши воспоминания в безупречное цифровое качество. Доверьте нам ваш семейный архив."
              )}
            </p>

            <div className="bg-[#E8DCC8] border-l-4 border-[#8B6F47] p-6 mb-8">
              <p className="text-lg font-semibold text-[#3E2723] mb-2 font-serif">
                {t("Free Diagnosis in 1 Hour", "Бесплатная диагностика за 1 час")}
              </p>
              <p className="text-[#5D4037]">
                {t(
                  "Send us your file and get a professional assessment absolutely free",
                  "Отправьте нам файл и получите профессиональную оценку абсолютно бесплатно"
                )}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#8B6F47] text-[#F5F1E8] px-8 py-4 text-lg font-semibold hover:bg-[#A0826D] transition shadow-lg font-serif flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {t("Upload Your File", "Загрузить файл")}
              </button>
              <a
                href="#contact"
                className="border-2 border-[#8B6F47] text-[#8B6F47] px-8 py-4 text-lg font-semibold hover:bg-[#F9F6F0] transition font-serif text-center"
              >
                {t("Get Consultation", "Получить консультацию")}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-8 text-[#5D4037]">
              <div>
                <div className="text-3xl font-bold text-[#8B6F47] font-serif">1000+</div>
                <div className="text-sm">{t("Projects Restored", "Проектов выполнено")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B6F47] font-serif">10+</div>
                <div className="text-sm">{t("Years Experience", "Лет опыта")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#8B6F47] font-serif">100%</div>
                <div className="text-sm">{t("Satisfaction", "Довольных клиентов")}</div>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] shadow-2xl border-8 border-[#F9F6F0]">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&h=600&fit=crop&q=80"
              afterImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&q=80"
              alt={t("Restoration example", "Пример реставрации")}
              beforeLabel={t("Before", "До")}
              afterLabel={t("After", "После")}
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#3E2723] text-[#F5F1E8] px-6 py-2 text-sm font-serif whitespace-nowrap">
              {t("Drag to compare", "Потяните для сравнения")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
