"use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  alt,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  beforeImage: string;
  afterImage: string;
  alt: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className="relative w-full h-full cursor-ew-resize select-none"
      onMouseMove={handleMouseMove}
    >
      {/* After image (full) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt={`${alt} - ${afterLabel}`} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-[#8B6F47] text-[#F5F1E8] px-3 py-1 text-sm font-serif font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={beforeImage} alt={`${alt} - ${beforeLabel}`} fill className="object-cover sepia" />
        <div className="absolute top-4 left-4 bg-[#3E2723] text-[#F5F1E8] px-3 py-1 text-sm font-serif font-semibold">
          {beforeLabel}
        </div>
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
