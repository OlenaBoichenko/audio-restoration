"use client";

import { useState, useEffect, useRef } from "react";
import { useLang } from "./LangContext";

interface Message {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function AIChatbot() {
  const { lang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      {
        text: t(
          "Hello! I'm your restoration assistant. I can help you with pricing, process questions, and guide you through our services. How can I assist you today?",
          "Здравствуйте! Я ваш ассистент по реставрации. Могу помочь с ценами, вопросами о процессе и рассказать об услугах. Чем могу помочь?"
        ),
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
  }, [lang]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.includes("price") || msg.includes("cost") || msg.includes("how much") || msg.includes("цен") || msg.includes("стоим") || msg.includes("сколько")) {
      if (msg.includes("audio") || msg.includes("аудио") || msg.includes("звук")) {
        return t(
          "Audio restoration starts from $50 per hour:\n\n✓ Noise & hiss removal\n✓ Voice clarity enhancement\n✓ Professional mastering\n\nDirector's audio processing starts from $75/hour.",
          "Реставрация аудио — от $50 за час:\n\n✓ Удаление шумов и треска\n✓ Улучшение чёткости голоса\n✓ Профессиональный мастеринг\n\nРежиссёрская обработка аудио — от $75/час."
        );
      }
      if (msg.includes("photo") || msg.includes("фото")) {
        return t(
          "Photo restoration starts from $30 per photo, including:\n\n✓ Damage repair\n✓ Color correction\n✓ High-resolution scan\n\nBulk discounts available for 10+ photos!",
          "Реставрация фото — от $30 за фото:\n\n✓ Восстановление повреждений\n✓ Коррекция цвета\n✓ Сканирование в высоком разрешении\n\nСкидки при заказе от 10 фото!"
        );
      }
      if (msg.includes("memor") || msg.includes("воспомин") || msg.includes("оживл") || msg.includes("anim")) {
        return t(
          "Bringing Memories to Life starts from $40 per photo:\n\n✓ Photo animation\n✓ Video stories from archives\n✓ Black & white colorization\n✓ Slideshows with effects",
          "Оживление воспоминаний — от $40 за фото:\n\n✓ Анимация фотографий\n✓ Видеоистории из архивов\n✓ Колоризация ч/б фото\n✓ Слайд-шоу с эффектами"
        );
      }
      return t(
        "Our pricing:\n\n• Audio Restoration: from $50/hour\n• Director's Audio Processing: from $75/hour\n• Photo Restoration: from $30/photo\n• Bringing Memories to Life: from $40/photo\n\nVolume discounts: 15% off 10+ items, 25% off 25+ items!",
        "Наши цены:\n\n• Реставрация аудио: от $50/час\n• Режиссёрская обработка аудио: от $75/час\n• Реставрация фото: от $30/фото\n• Оживление воспоминаний: от $40/фото\n\nСкидки: 15% от 10 единиц, 25% от 25 единиц!"
      );
    }

    if (msg.includes("send") || msg.includes("ship") || msg.includes("upload") || msg.includes("отправ") || msg.includes("загруз") || msg.includes("прислать")) {
      return t(
        "You can send us your materials in two ways:\n\nDigital Files: Use our contact form to get a secure upload link (up to 100MB)\n\nPhysical Media: Ship your photos to us. We provide:\n• Secure, insured handling\n• Original materials returned\n• Tracking for peace of mind\n\nWould you like our shipping address or upload instructions?",
        "Вы можете отправить материалы двумя способами:\n\nЦифровые файлы: Используйте форму на сайте для загрузки (до 100МБ)\n\nФизические носители: Отправьте фото почтой. Мы гарантируем:\n• Безопасную обработку\n• Возврат оригиналов\n• Отслеживание отправлений\n\nХотите узнать адрес или инструкции по загрузке?"
      );
    }

    if (msg.includes("privacy") || msg.includes("security") || msg.includes("safe") || msg.includes("confidential") || msg.includes("безопас") || msg.includes("конфиденц") || msg.includes("надёжн")) {
      return t(
        "Your privacy and security are our top priorities:\n\nSecure Storage - All materials kept in climate-controlled, locked facility\nConfidential - We never share or use your content\nInsured - Full insurance coverage for your materials\nContract - Written confidentiality agreement available\n\nYour memories are treated as irreplaceable treasures!",
        "Ваша конфиденциальность — наш приоритет:\n\nБезопасное хранение — все материалы в защищённом помещении\nКонфиденциальность — мы никогда не используем ваш контент\nСтрахование — полное страховое покрытие\nДоговор — письменное соглашение о конфиденциальности\n\nВаши воспоминания — бесценны!"
      );
    }

    if (msg.includes("quality") || msg.includes("guarantee") || msg.includes("result") || msg.includes("качеств") || msg.includes("гарант") || msg.includes("результат")) {
      return t(
        "We guarantee professional quality:\n\n10+ years of experience\nProfessional-grade equipment\nBefore/after preview before final delivery\nFree revisions if you're not satisfied\n100% satisfaction guarantee",
        "Мы гарантируем профессиональное качество:\n\nБолее 10 лет опыта\nПрофессиональное оборудование\nПредпросмотр до/после перед сдачей\nБесплатные правки при необходимости\n100% гарантия удовлетворённости"
      );
    }

    if (msg.includes("process") || msg.includes("how does") || msg.includes("how long") || msg.includes("процесс") || msg.includes("как работ") || msg.includes("сколько времени") || msg.includes("этап")) {
      return t(
        "Our 6-step process:\n\n1. Send File/Media\n2. Free Analysis (1 hour)\n3. Proposal with pricing\n4. Restoration work\n5. Preview for approval\n6. Delivery + originals returned\n\nTypical turnaround: 3-7 days depending on complexity. Rush service available!",
        "Наш процесс в 6 шагов:\n\n1. Отправьте файл\n2. Бесплатный анализ (1 час)\n3. Предложение с ценой\n4. Работа над реставрацией\n5. Предпросмотр для одобрения\n6. Доставка + возврат оригиналов\n\nСроки: 3-7 дней в зависимости от сложности. Срочная работа возможна!"
      );
    }

    if (msg.includes("service") || msg.includes("what do you") || msg.includes("can you") || msg.includes("услуг") || msg.includes("что вы") || msg.includes("можете")) {
      return t(
        "We specialize in:\n\nAudio Restoration - noise removal, voice enhancement\nDirector's Audio Processing - mixing, mastering, sound design\nPhoto Restoration - damage repair, color correction\nBringing Memories to Life - animation, colorization\n\nWhat would you like to restore?",
        "Мы специализируемся на:\n\nРеставрация аудио — удаление шумов, улучшение голоса\nРежиссёрская обработка аудио — сведение, мастеринг, звуковой дизайн\nРеставрация фото — восстановление повреждений, коррекция цвета\nОживление воспоминаний — анимация, колоризация\n\nЧто хотите восстановить?"
      );
    }

    if (msg.includes("free") || msg.includes("diagnosis") || msg.includes("бесплатн") || msg.includes("диагност") || msg.includes("оценк")) {
      return t(
        "Yes! We offer FREE diagnosis within 1 hour:\n\n✓ No obligation to proceed\n✓ Professional assessment\n✓ Detailed pricing quote\n✓ Restoration recommendations\n\nJust fill out our contact form or send us a file sample!",
        "Да! Мы предлагаем БЕСПЛАТНУЮ диагностику за 1 час:\n\n✓ Без обязательств\n✓ Профессиональная оценка\n✓ Детальный расчёт стоимости\n✓ Рекомендации по реставрации\n\nПросто заполните форму или отправьте файл!"
      );
    }

    if (msg.includes("discount") || msg.includes("bulk") || msg.includes("скидк") || msg.includes("опт")) {
      return t(
        "Volume discounts available:\n\n10+ items: 15% discount\n25+ items: 25% discount\n50+ items: Custom pricing\n\nPerfect for large family archives or business projects!",
        "Скидки за объём:\n\n10+ единиц: скидка 15%\n25+ единиц: скидка 25%\n50+ единиц: индивидуальная цена\n\nИдеально для больших семейных архивов!"
      );
    }

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("привет") || msg.includes("здравств") || msg.includes("добрый")) {
      return t(
        "Hello! I'm here to help you restore your precious memories. I can answer questions about:\n\n• Pricing & discounts\n• How to send materials\n• Privacy & security\n• Quality & process\n• Our services\n\nWhat would you like to know?",
        "Здравствуйте! Я помогу вам восстановить дорогие воспоминания. Могу ответить на вопросы о:\n\n• Ценах и скидках\n• Отправке материалов\n• Конфиденциальности\n• Качестве и процессе\n• Наших услугах\n\nЧто хотите узнать?"
      );
    }

    if (msg.includes("thank") || msg.includes("thanks") || msg.includes("спасибо") || msg.includes("благодар")) {
      return t(
        "You're welcome! Feel free to ask anything else. We're here to help preserve your memories!",
        "Пожалуйста! Задавайте любые вопросы. Мы здесь, чтобы сохранить ваши воспоминания!"
      );
    }

    return t(
      "I can help you with:\n\nPricing information\nHow to send materials\nPrivacy & security\nQuality guarantee\nOur process\nServices we offer\n\nWhat would you like to know more about?",
      "Я могу помочь с:\n\nИнформация о ценах\nКак отправить материалы\nКонфиденциальность\nГарантия качества\nНаш процесс\nНаши услуги\n\nО чём хотите узнать подробнее?"
    );
  };

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      text: textToSend,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMsg]);

    setTimeout(() => {
      const botResponse = getBotResponse(textToSend);
      const botMsg: Message = {
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);

    setInputMessage("");
  };

  const quickQuestions = lang === "ru"
    ? ["Какие у вас цены?", "Как отправить материалы?", "Мои данные в безопасности?", "Как проходит процесс?"]
    : ["What are your prices?", "How do I send my materials?", "Is my data secure?", "What's the process?"];

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-[#F5F1E8] px-6 py-4 rounded-full shadow-2xl hover:from-[#A0826D] hover:to-[#8B6F47] transition-all duration-300 hover:scale-110 border-4 border-[#F9F6F0] flex items-center gap-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="font-serif font-semibold">{t("Ask AI Assistant", "AI-ассистент")}</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 w-96 h-[600px] bg-[#F9F6F0] border-4 border-[#D4A574] shadow-2xl flex flex-col">
          <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5F1E8] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#F5F1E8]">{t("AI Assistant", "AI-ассистент")}</h3>
                <p className="text-xs text-[#EDE7DA]">{t("Online - Here to help", "Онлайн - Готов помочь")}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#F5F1E8] hover:text-white transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F1E8]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-[#8B6F47] text-[#F5F1E8]"
                      : "bg-[#EDE7DA] text-[#3E2723] border-2 border-[#D4A574]"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="p-4 bg-[#EDE7DA] border-t-2 border-[#D4A574]">
              <p className="text-xs text-[#5D4037] mb-2 font-serif">{t("Quick questions:", "Быстрые вопросы:")}</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-xs bg-[#F9F6F0] border border-[#8B6F47] text-[#8B6F47] px-3 py-1 rounded-full hover:bg-[#8B6F47] hover:text-[#F5F1E8] transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 bg-[#EDE7DA] border-t-2 border-[#D4A574]">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={t("Type your question...", "Задайте вопрос...")}
                className="flex-1 px-4 py-2 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
              />
              <button
                onClick={() => handleSendMessage()}
                className="bg-[#8B6F47] text-[#F5F1E8] px-4 py-2 hover:bg-[#A0826D] transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
