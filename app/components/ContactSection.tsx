"use client";

import { useLang } from "./LangContext";

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-20 bg-[#F9F6F0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">{t("Send for Free Diagnosis", "Отправьте на бесплатную диагностику")}</h2>
          <p className="text-xl text-[#5D4037]">{t("Get your professional assessment in 1 hour - absolutely free", "Получите профессиональную оценку за 1 час — абсолютно бесплатно")}</p>
        </div>

        <form className="space-y-6 bg-[#EDE7DA] p-8 border-4 border-[#D4A574] shadow-2xl">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-[#3E2723] mb-2 font-serif">
              {t("Your Name *", "Ваше имя *")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-4 border-2 border-[#D4A574] bg-[#F5F1E8] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-[#3E2723] text-lg"
              placeholder={t("John Doe", "Иван Иванов")}
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-lg font-medium text-[#3E2723] mb-2 font-serif">
              {t("Email or Phone *", "Email или телефон *")}
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              className="w-full px-4 py-4 border-2 border-[#D4A574] bg-[#F5F1E8] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-[#3E2723] text-lg"
              placeholder={t("john@email.com or +1 (555) 123-4567", "ivan@email.com или +7 (999) 123-45-67")}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-[#3E2723] mb-2 font-serif">
              {t("Tell us about your project (optional)", "Расскажите о вашем проекте (необязательно)")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-4 border-2 border-[#D4A574] bg-[#F5F1E8] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-[#3E2723] text-lg"
              placeholder={t("What do you want to restore? Old photos, audio recordings...?", "Что хотите восстановить? Старые фото, аудиозаписи...?")}
            ></textarea>
          </div>

          <div className="border-4 border-dashed border-[#8B6F47] p-8 text-center bg-[#F5F1E8] hover:bg-[#E8DCC8] transition cursor-pointer">
            <svg className="w-16 h-16 mx-auto mb-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-[#3E2723] text-lg mb-2 font-serif font-semibold">{t("Attach Your File", "Прикрепите файл")}</p>
            <p className="text-[#5D4037] mb-2">{t("Click to upload or drag & drop", "Нажмите для загрузки или перетащите файл")}</p>
            <p className="text-sm text-[#5D4037]">{t("Support all formats - Max 100MB", "Все форматы — до 100МБ")}</p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-[#F5F1E8] px-8 py-5 text-xl font-bold hover:from-[#A0826D] hover:to-[#8B6F47] transition shadow-2xl font-serif"
          >
            {t("Send for Diagnosis", "Отправить на диагностику")} →
          </button>

          <div className="bg-[#E8DCC8] border-l-4 border-[#8B6F47] p-4 text-center">
            <p className="text-[#3E2723] font-semibold font-serif">
              {t("We'll respond within 1 hour during business hours", "Ответим в течение 1 часа в рабочее время")}
            </p>
            <p className="text-sm text-[#5D4037] mt-1">
              {t("Free diagnosis - No obligation - Your files are safe", "Бесплатная диагностика - Без обязательств - Ваши файлы в безопасности")}
            </p>
          </div>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#EDE7DA] p-6 border-2 border-[#D4A574]">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-semibold text-[#3E2723] mb-2 font-serif">Email</h3>
            <p className="text-[#5D4037]">info@restoremedia.com</p>
          </div>
          <div className="bg-[#EDE7DA] p-6 border-2 border-[#D4A574]">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3 className="font-semibold text-[#3E2723] mb-2 font-serif">{t("Phone", "Телефон")}</h3>
            <p className="text-[#5D4037]">+1 (555) 123-4567</p>
          </div>
          <div className="bg-[#EDE7DA] p-6 border-2 border-[#D4A574]">
            <svg className="w-8 h-8 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-semibold text-[#3E2723] mb-2 font-serif">{t("Hours", "Часы работы")}</h3>
            <p className="text-[#5D4037]">{t("Mon-Fri: 9AM-6PM EST", "Пн-Пт: 9:00-18:00 МСК")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
