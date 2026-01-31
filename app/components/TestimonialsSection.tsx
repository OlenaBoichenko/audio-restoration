"use client";

import { useLang } from "./LangContext";

export default function TestimonialsSection() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="py-20 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">{t("What Our Clients Say", "Отзывы клиентов")}</h2>
          <p className="text-xl text-[#5D4037]">{t("Real stories from real people", "Реальные истории реальных людей")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <blockquote className="bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-xl border-l-8 border-l-[#8B6F47]">
            <div className="text-[#8B6F47] mb-4 text-5xl font-serif leading-none">&laquo;</div>
            <p className="text-[#5D4037] italic text-lg leading-relaxed">
              {t(
                "We had old cassette tapes of our grandmother telling family stories. They were full of hiss and barely audible. The restoration brought her voice back to life so clearly — it's like she's in the room with us again!",
                "У нас были старые кассеты с записями бабушки, где она рассказывала семейные истории. Запись шипела и была едва слышна. После реставрации её голос зазвучал так чисто — как будто она снова рядом с нами!"
              )}
            </p>
            <div className="text-[#8B6F47] mt-4 text-5xl font-serif leading-none text-right">&raquo;</div>
          </blockquote>

          <blockquote className="bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-xl border-l-8 border-l-[#8B6F47]">
            <div className="text-[#8B6F47] mb-4 text-5xl font-serif leading-none">&laquo;</div>
            <p className="text-[#5D4037] italic text-lg leading-relaxed">
              {t(
                "They not only repaired the tears on old photos but restored the colors beautifully. Seeing my grandparents young again was priceless.",
                "Они не только восстановили разрывы на старых фотографиях, но и прекрасно вернули цвета. Увидеть бабушку и дедушку молодыми — бесценно."
              )}
            </p>
            <div className="text-[#8B6F47] mt-4 text-5xl font-serif leading-none text-right">&raquo;</div>
          </blockquote>

          <blockquote className="bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-xl border-l-8 border-l-[#8B6F47]">
            <div className="text-[#8B6F47] mb-4 text-5xl font-serif leading-none">&laquo;</div>
            <p className="text-[#5D4037] italic text-lg leading-relaxed">
              {t(
                "They animated my great-grandmother's old photograph and created a beautiful video story from our family archive. My whole family was moved to tears watching it. Truly magical work!",
                "Они анимировали старую фотографию прабабушки и создали прекрасную видеоисторию из нашего семейного архива. Вся семья была растрогана до слёз. Поистине волшебная работа!"
              )}
            </p>
            <div className="text-[#8B6F47] mt-4 text-5xl font-serif leading-none text-right">&raquo;</div>
          </blockquote>
        </div>

        <div className="mt-12 text-center bg-[#EDE7DA] p-8 border-4 border-[#D4A574]">
          <p className="text-2xl text-[#3E2723] font-serif mb-4">
            {t(
              '"Every project is personal to us. Your memories matter."',
              '«Каждый проект для нас — личный. Ваши воспоминания важны.»'
            )}
          </p>
          <p className="text-[#5D4037]">{t("— RestoreMedia Team", "— Команда RestoreMedia")}</p>
        </div>
      </div>
    </section>
  );
}
