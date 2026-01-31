"use client";

import { useLang } from "./LangContext";

export default function ProcessSection() {
  const { t } = useLang();

  return (
    <section id="process" className="py-20 bg-[#EDE7DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">{t("How It Works", "Как мы работаем")}</h2>
          <p className="text-xl text-[#5D4037]">{t("Transparent, secure, and professional process", "Прозрачный, безопасный и профессиональный процесс")}</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="text-center flex flex-col">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-[#F5F1E8] font-serif">1</span>
            </div>
            <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] flex-1 flex flex-col items-center justify-start">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <h3 className="font-bold text-[#3E2723] mb-2 font-serif">{t("Send File", "Отправьте файл")}</h3>
              <p className="text-sm text-[#5D4037]">{t("Upload your file or bring physical media", "Загрузите файл или принесите носитель")}</p>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-[#F5F1E8] font-serif">2</span>
            </div>
            <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] flex-1 flex flex-col items-center justify-start">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              <h3 className="font-bold text-[#3E2723] mb-2 font-serif">{t("Free Analysis", "Бесплатный анализ")}</h3>
              <p className="text-sm text-[#5D4037]">{t("We assess condition & possibilities in 1 hour", "Оценим состояние и возможности за 1 час")}</p>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-[#F5F1E8] font-serif">3</span>
            </div>
            <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] flex-1 flex flex-col items-center justify-start">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-bold text-[#3E2723] mb-2 font-serif">{t("Proposal", "Предложение")}</h3>
              <p className="text-sm text-[#5D4037]">{t("Detailed options and transparent pricing", "Детальные варианты и прозрачные цены")}</p>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-[#F5F1E8] font-serif">4</span>
            </div>
            <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] flex-1 flex flex-col items-center justify-start">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="font-bold text-[#3E2723] mb-2 font-serif">{t("Restoration", "Реставрация")}</h3>
              <p className="text-sm text-[#5D4037]">{t("Expert work using professional tools", "Профессиональная работа с использованием лучших инструментов")}</p>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-[#F5F1E8] font-serif">5</span>
            </div>
            <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] flex-1 flex flex-col items-center justify-start">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <h3 className="font-bold text-[#3E2723] mb-2 font-serif">{t("Preview", "Предпросмотр")}</h3>
              <p className="text-sm text-[#5D4037]">{t("Review results before final delivery", "Оцените результат перед финальной сдачей")}</p>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-[#F5F1E8] font-serif">6</span>
            </div>
            <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] flex-1 flex flex-col items-center justify-start">
              <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="font-bold text-[#3E2723] mb-2 font-serif">{t("Delivery", "Доставка")}</h3>
              <p className="text-sm text-[#5D4037]">{t("Receive files in your preferred format + originals", "Получите файлы в нужном формате + оригиналы")}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-8 text-center">
          <h3 className="text-3xl font-bold text-[#F5F1E8] mb-4 font-serif">{t("Your Memories Are Safe With Us", "Ваши воспоминания в безопасности")}</h3>
          <p className="text-[#EDE7DA] text-lg mb-6">
            {t(
              "We handle every project with the utmost care and confidentiality. Your original materials are treated as irreplaceable treasures and returned safely.",
              "Мы относимся к каждому проекту с максимальной заботой и конфиденциальностью. Ваши оригиналы — бесценны, и мы вернём их в сохранности."
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[#F5F1E8]">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="font-serif">{t("Secure Storage", "Безопасное хранение")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-serif">{t("Confidential", "Конфиденциально")}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-serif">{t("Insured", "Застраховано")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
