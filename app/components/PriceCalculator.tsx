"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

export default function PriceCalculator() {
  const { lang, t } = useLang();

  const serviceOptions = [
    { key: "audio_restoration", en: "Audio Restoration", ru: "Реставрация аудио" },
    { key: "director_audio", en: "Director's Audio Processing", ru: "Режиссёрская обработка аудио" },
    { key: "photo_restoration", en: "Photo Restoration", ru: "Реставрация фото" },
    { key: "memories", en: "Bringing Memories to Life", ru: "Оживление воспоминаний" },
  ];

  const [serviceKey, setServiceKey] = useState(serviceOptions[0].key);
  const [quantity, setQuantity] = useState("1");
  const [condition, setCondition] = useState("good");

  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      audio_restoration: 50,
      director_audio: 75,
      photo_restoration: 30,
      memories: 40,
    };

    const conditionMultipliers: Record<string, number> = {
      good: 1,
      fair: 1.3,
      poor: 1.7,
    };

    const basePrice = basePrices[serviceKey] || 50;
    const multiplier = conditionMultipliers[condition] || 1;
    const quantityNum = parseInt(quantity) || 1;

    const minPrice = Math.round(basePrice * multiplier * quantityNum);
    const maxPrice = Math.round(basePrice * multiplier * quantityNum * 1.5);

    return { min: minPrice, max: maxPrice };
  };

  const priceRange = calculatePrice();

  const getQuantityHint = () => {
    if (serviceKey === "audio_restoration" || serviceKey === "director_audio") {
      return t("Hours of audio", "Часов аудио");
    }
    return t("Number of photos", "Количество фото");
  };

  return (
    <div className="bg-[#EDE7DA] p-8 border-4 border-[#D4A574] shadow-2xl">
      <h3 className="text-3xl font-bold text-[#3E2723] mb-6 font-serif">{t("Price Calculator", "Калькулятор цен")}</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#5D4037] mb-2 font-serif">
            {t("Service Type", "Тип услуги")}
          </label>
          <select
            value={serviceKey}
            onChange={(e) => setServiceKey(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723]"
          >
            {serviceOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {lang === "ru" ? opt.ru : opt.en}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5D4037] mb-2 font-serif">
            {t("Quantity", "Количество")}
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={t("e.g., 2", "напр., 2")}
            className="w-full px-4 py-3 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723]"
          />
          <p className="text-xs text-[#5D4037] mt-1">{getQuantityHint()}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5D4037] mb-2 font-serif">
            {t("Condition", "Состояние")}
          </label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723]"
          >
            <option value="good">{t("Good - Minor issues", "Хорошее - Незначительные проблемы")}</option>
            <option value="fair">{t("Fair - Some damage", "Среднее - Есть повреждения")}</option>
            <option value="poor">{t("Poor - Significant restoration needed", "Плохое - Требуется серьёзная реставрация")}</option>
          </select>
        </div>

        <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-6 text-center">
          <div className="text-[#F5F1E8]">
            <div className="text-sm mb-2 font-serif">{t("Estimated Price Range", "Примерный диапазон цен")}</div>
            <div className="text-4xl font-bold font-serif">${priceRange.min} - ${priceRange.max}</div>
            <div className="text-sm mt-2">{t("Price depends on complexity and condition", "Цена зависит от сложности и состояния")}</div>
          </div>
        </div>

        <a
          href="#contact"
          className="block w-full bg-[#8B6F47] text-[#F5F1E8] px-6 py-3 font-semibold hover:bg-[#A0826D] transition font-serif text-center"
        >
          {t("Get Exact Quote", "Получить точную цену")}
        </a>
      </div>

      <p className="text-sm text-[#5D4037] mt-6 text-center">
        {t("Free diagnosis included - No obligation to proceed", "Бесплатная диагностика - Без обязательств")}
      </p>
    </div>
  );
}
