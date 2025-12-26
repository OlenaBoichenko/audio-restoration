"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function BeforeAfterSlider({ beforeImage, afterImage, alt }: { beforeImage: string; afterImage: string; alt: string }) {
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
        <Image src={afterImage} alt={`${alt} - After`} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-[#8B6F47] text-[#F5F1E8] px-3 py-1 text-sm font-serif font-semibold">
          After
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={beforeImage} alt={`${alt} - Before`} fill className="object-cover sepia" />
        <div className="absolute top-4 left-4 bg-[#3E2723] text-[#F5F1E8] px-3 py-1 text-sm font-serif font-semibold">
          Before
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

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-[#F5F1E8] p-4 rounded-full shadow-2xl hover:from-[#A0826D] hover:to-[#8B6F47] transition-all duration-300 hover:scale-110 border-4 border-[#F9F6F0]"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your restoration assistant. I can help you with pricing, process questions, and guide you through our services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
      if (msg.includes('vhs')) {
        return "VHS digitization starts from $25 per tape (up to 2 hours). The price varies based on condition:\n\n✓ Good condition: $25-38\n✓ Fair condition: $33-50\n✓ Poor condition: $43-65\n\nWould you like to use our price calculator?";
      }
      if (msg.includes('video') || msg.includes('restoration')) {
        return "Video restoration starts from $75 per hour of footage. This includes:\n\n✓ Complete restoration\n✓ Color grading & stabilization\n✓ Audio enhancement\n\nPrices vary based on condition and complexity. Check our Pricing section for details!";
      }
      if (msg.includes('photo')) {
        return "Photo restoration starts from $30 per photo, including:\n\n✓ Damage repair\n✓ Color correction\n✓ High-resolution scan\n\nBulk discounts available for 10+ photos!";
      }
      if (msg.includes('audio') || msg.includes('cassette')) {
        return "Audio restoration starts from $50 per hour:\n\n✓ Noise & hiss removal\n✓ Voice clarity enhancement\n✓ Professional mastering\n\nCassette transfer: $20 per tape";
      }
      return "Our pricing starts from $25 for basic digitization. Services include:\n\n• VHS Digitization: from $25\n• Video Restoration: from $75/hour\n• Audio Restoration: from $50/hour\n• Photo Restoration: from $30\n\nVolume discounts: 15% off 10+ items, 25% off 25+ items!";
    }

    // How to send material
    if (msg.includes('send') || msg.includes('ship') || msg.includes('mail') || msg.includes('upload')) {
      return "You can send us your materials in two ways:\n\n📧 Digital Files: Use our contact form to get a secure upload link (up to 100MB)\n\n📦 Physical Media: Ship your tapes/photos to us. We provide:\n• Secure, insured handling\n• Original materials returned\n• Tracking for peace of mind\n\nWould you like our shipping address or upload instructions?";
    }

    // Privacy & security
    if (msg.includes('privacy') || msg.includes('security') || msg.includes('safe') || msg.includes('confidential')) {
      return "Your privacy and security are our top priorities:\n\n🔒 Secure Storage - All materials kept in climate-controlled, locked facility\n🛡️ Confidential - We never share or use your content\n✅ Insured - Full insurance coverage for your materials\n📋 Contract - Written confidentiality agreement available\n\nYour memories are treated as irreplaceable treasures!";
    }

    // Quality questions
    if (msg.includes('quality') || msg.includes('good') || msg.includes('guarantee') || msg.includes('result')) {
      return "We guarantee professional quality:\n\n⭐ 10+ years of experience\n⭐ Professional-grade equipment\n⭐ Before/after preview before final delivery\n⭐ Free revisions if you're not satisfied\n⭐ 100% satisfaction guarantee\n\nCheck our Gallery section to see real examples of our work!";
    }

    // Process questions
    if (msg.includes('process') || msg.includes('how does') || msg.includes('how long') || msg.includes('time')) {
      return "Our 6-step process:\n\n1️⃣ Send File/Media\n2️⃣ Free Analysis (1 hour)\n3️⃣ Proposal with pricing\n4️⃣ Restoration work\n5️⃣ Preview for approval\n6️⃣ Delivery + originals returned\n\nTypical turnaround: 3-7 days depending on complexity. Rush service available!";
    }

    // Services
    if (msg.includes('service') || msg.includes('what do you') || msg.includes('can you')) {
      return "We specialize in:\n\n🎥 Video Restoration - VHS, Betamax, MiniDV, 8mm film\n🎵 Audio Restoration - Vinyl, cassettes, reel-to-reel\n📸 Photo Restoration - Repair damage, color correction\n🎬 Event Archives - Weddings, family celebrations\n\nAll formats accepted! What would you like to restore?";
    }

    // Free diagnosis
    if (msg.includes('free') || msg.includes('diagnosis') || msg.includes('assessment')) {
      return "Yes! We offer FREE diagnosis within 1 hour:\n\n✓ No obligation to proceed\n✓ Professional assessment\n✓ Detailed pricing quote\n✓ Restoration recommendations\n\nJust fill out our contact form or send us a file sample!";
    }

    // Discount
    if (msg.includes('discount') || msg.includes('bulk') || msg.includes('multiple')) {
      return "Volume discounts available:\n\n📦 10+ items: 15% discount\n📦 25+ items: 25% discount\n📦 50+ items: Custom pricing\n\nPerfect for large family archives or business projects!";
    }

    // Greeting
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 I'm here to help you restore your precious memories. I can answer questions about:\n\n• Pricing & discounts\n• How to send materials\n• Privacy & security\n• Quality & process\n• Our services\n\nWhat would you like to know?";
    }

    // Thanks
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Feel free to ask anything else. We're here to help preserve your memories! 😊";
    }

    // Default response
    return "I can help you with:\n\n💰 Pricing information\n📦 How to send materials\n🔒 Privacy & security\n✨ Quality guarantee\n⚙️ Our process\n📋 Services we offer\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: Message = {
      text: textToSend,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMsg]);

    // Get bot response
    setTimeout(() => {
      const botResponse = getBotResponse(textToSend);
      const botMsg: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);

    setInputMessage('');
  };

  const quickQuestions = [
    "What are your prices?",
    "How do I send my materials?",
    "Is my data secure?",
    "What's the process?",
  ];

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-[#F5F1E8] px-6 py-4 rounded-full shadow-2xl hover:from-[#A0826D] hover:to-[#8B6F47] transition-all duration-300 hover:scale-110 border-4 border-[#F9F6F0] flex items-center gap-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="font-serif font-semibold">Ask AI Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 left-8 z-50 w-96 h-[600px] bg-[#F9F6F0] border-4 border-[#D4A574] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F5F1E8] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-[#F5F1E8]">AI Assistant</h3>
                <p className="text-xs text-[#EDE7DA]">Online • Here to help</p>
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

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F1E8]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-[#8B6F47] text-[#F5F1E8]'
                      : 'bg-[#EDE7DA] text-[#3E2723] border-2 border-[#D4A574]'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="p-4 bg-[#EDE7DA] border-t-2 border-[#D4A574]">
              <p className="text-xs text-[#5D4037] mb-2 font-serif">Quick questions:</p>
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

          {/* Input */}
          <div className="p-4 bg-[#EDE7DA] border-t-2 border-[#D4A574]">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
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

function PriceCalculator() {
  const [serviceType, setServiceType] = useState("VHS Digitization");
  const [quantity, setQuantity] = useState("1");
  const [condition, setCondition] = useState("good");

  const calculatePrice = () => {
    // Base prices per unit
    const basePrices: { [key: string]: number } = {
      "Video Restoration": 75,
      "Audio Restoration": 50,
      "VHS Digitization": 25,
      "Film Digitization (8mm/Super 8)": 40,
      "Photo Restoration": 30,
      "Cassette Audio Transfer": 20,
    };

    // Condition multipliers
    const conditionMultipliers: { [key: string]: number } = {
      good: 1,
      fair: 1.3,
      poor: 1.7,
    };

    const basePrice = basePrices[serviceType] || 50;
    const multiplier = conditionMultipliers[condition] || 1;

    // Extract number from quantity string
    const quantityNum = parseInt(quantity) || 1;

    const minPrice = Math.round(basePrice * multiplier * quantityNum);
    const maxPrice = Math.round(basePrice * multiplier * quantityNum * 1.5);

    return { min: minPrice, max: maxPrice };
  };

  const priceRange = calculatePrice();

  return (
    <div className="bg-[#EDE7DA] p-8 border-4 border-[#D4A574] shadow-2xl">
      <h3 className="text-3xl font-bold text-[#3E2723] mb-6 font-serif">Price Calculator</h3>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[#5D4037] mb-2 font-serif">
            Service Type
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723]"
          >
            <option>Video Restoration</option>
            <option>Audio Restoration</option>
            <option>VHS Digitization</option>
            <option>Film Digitization (8mm/Super 8)</option>
            <option>Photo Restoration</option>
            <option>Cassette Audio Transfer</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5D4037] mb-2 font-serif">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g., 2"
            className="w-full px-4 py-3 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723]"
          />
          <p className="text-xs text-[#5D4037] mt-1">
            {serviceType.includes("Video") || serviceType.includes("Audio") ? "Hours of content" :
             serviceType.includes("Photo") ? "Number of photos" : "Number of tapes/items"}
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5D4037] mb-2 font-serif">
            Condition
          </label>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="w-full px-4 py-3 border-2 border-[#D4A574] bg-[#F5F1E8] text-[#3E2723]"
          >
            <option value="good">Good - Minor issues</option>
            <option value="fair">Fair - Some damage</option>
            <option value="poor">Poor - Significant restoration needed</option>
          </select>
        </div>

        <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-6 text-center">
          <div className="text-[#F5F1E8]">
            <div className="text-sm mb-2 font-serif">Estimated Price Range</div>
            <div className="text-4xl font-bold font-serif">${priceRange.min} - ${priceRange.max}</div>
            <div className="text-sm mt-2">Price depends on complexity and condition</div>
          </div>
        </div>

        <a
          href="#contact"
          className="block w-full bg-[#8B6F47] text-[#F5F1E8] px-6 py-3 font-semibold hover:bg-[#A0826D] transition font-serif text-center"
        >
          Get Exact Quote
        </a>
      </div>

      <p className="text-sm text-[#5D4037] mt-6 text-center">
        Free diagnosis included - No obligation to proceed
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F1E8] to-[#EDE7DA]">
      {/* Navigation */}
      <nav className="bg-[#F9F6F0] shadow-md sticky top-0 z-50 border-b-2 border-[#D4A574]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#8B6F47] font-serif">RestoreMedia</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">Services</a>
              <a href="#process" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">Process</a>
              <a href="#gallery" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">Gallery</a>
              <a href="#pricing" className="text-[#5D4037] hover:text-[#8B6F47] transition font-serif">Pricing</a>
              <a href="#contact" className="bg-[#8B6F47] text-[#F5F1E8] px-4 py-2 rounded-sm hover:bg-[#A0826D] transition font-serif">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Before/After Comparison */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#3E2723] mb-6 font-serif leading-tight">
                Restore Your <span className="text-[#8B6F47]">Precious Memories</span> to Life
              </h2>
              <p className="text-xl text-[#5D4037] mb-8 leading-relaxed">
                From damaged tapes to degraded recordings, we transform your cherished memories
                into pristine digital quality. Trust us with your family archive.
              </p>

              <div className="bg-[#E8DCC8] border-l-4 border-[#8B6F47] p-6 mb-8">
                <p className="text-lg font-semibold text-[#3E2723] mb-2 font-serif">
                  Free Diagnosis in 1 Hour
                </p>
                <p className="text-[#5D4037]">
                  Send us your file and get a professional assessment absolutely free
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#8B6F47] text-[#F5F1E8] px-8 py-4 text-lg font-semibold hover:bg-[#A0826D] transition shadow-lg font-serif flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Upload Your File
                </button>
                <a
                  href="#contact"
                  className="border-2 border-[#8B6F47] text-[#8B6F47] px-8 py-4 text-lg font-semibold hover:bg-[#F9F6F0] transition font-serif text-center"
                >
                  Get Consultation
                </a>
              </div>

              <div className="mt-8 flex items-center gap-8 text-[#5D4037]">
                <div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">1000+</div>
                  <div className="text-sm">Projects Restored</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#8B6F47] font-serif">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right side - Before/After Comparison */}
            <div className="relative aspect-[4/3] shadow-2xl border-8 border-[#F9F6F0]">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&h=600&fit=crop&q=80"
                afterImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&q=80"
                alt="Video restoration example"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#3E2723] text-[#F5F1E8] px-6 py-2 text-sm font-serif whitespace-nowrap">
                Drag to compare
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">Our Services</h2>
            <p className="text-xl text-[#5D4037]">Professional restoration for every format</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Restoration */}
            <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
              <div className="relative aspect-video mb-6 overflow-hidden">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop&q=80"
                  afterImage="https://images.unsplash.com/photo-1574267432644-f734b327326f?w=600&h=400&fit=crop&q=80"
                  alt="Video restoration"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">Video Restoration</h3>
              <ul className="space-y-2 text-[#5D4037] mb-4">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Noise reduction & grain removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Image stabilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Color correction & enhancement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Scratch & artifact removal</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
                Learn More →
              </a>
            </div>

            {/* Audio Restoration */}
            <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
              <div className="relative aspect-video mb-6 overflow-hidden bg-gradient-to-br from-[#E8DCC8] to-[#D4A574] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <div className="text-[#3E2723] font-serif text-sm">Before: Hiss, clicks, noise</div>
                  <div className="text-[#8B6F47] font-serif font-semibold">After: Crystal clear</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">Audio Restoration</h3>
              <ul className="space-y-2 text-[#5D4037] mb-4">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Remove hiss, clicks & pops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Enhance voice clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Professional mastering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Vinyl & cassette digitization</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
                Learn More →
              </a>
            </div>

            {/* Digitization */}
            <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
              <div className="relative aspect-video mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop&q=80"
                  alt="VHS tapes digitization"
                  fill
                  className="object-cover sepia"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">Tape & Film Digitization</h3>
              <ul className="space-y-2 text-[#5D4037] mb-4">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>VHS, Betamax, MiniDV</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>8mm, Super 8 film</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Cassettes & reel-to-reel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Safe handling guaranteed</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
                Learn More →
              </a>
            </div>

            {/* Event Archive Enhancement */}
            <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
              <div className="relative aspect-video mb-6 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&q=80"
                  alt="Wedding video restoration"
                  fill
                  className="object-cover sepia"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">Event Archive Enhancement</h3>
              <ul className="space-y-2 text-[#5D4037] mb-4">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Wedding videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Family celebrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Historical footage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Complete remastering</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
                Learn More →
              </a>
            </div>

            {/* Photo Restoration */}
            <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
              <div className="relative aspect-video mb-6 overflow-hidden">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=600&h=400&fit=crop&q=80"
                  afterImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop&q=80"
                  alt="Photo restoration"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">Photo Restoration</h3>
              <ul className="space-y-2 text-[#5D4037] mb-4">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Repair tears & damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Color restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Remove stains & fading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Digital enhancement</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
                Learn More →
              </a>
            </div>

            {/* Custom Projects */}
            <div className="bg-[#F5F1E8] border-4 border-[#D4A574] p-6 hover:shadow-2xl transition group">
              <div className="relative aspect-video mb-6 overflow-hidden bg-gradient-to-br from-[#8B6F47] to-[#A0826D] flex items-center justify-center">
                <div className="text-center text-[#F5F1E8]">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <div className="font-serif font-semibold">Custom Solutions</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3 font-serif">Custom Projects</h3>
              <ul className="space-y-2 text-[#5D4037] mb-4">
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Unique formats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Large archives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Special requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#8B6F47] mr-2">✓</span>
                  <span>Consultation included</span>
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-6 py-2 hover:bg-[#A0826D] transition font-serif">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-[#EDE7DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">How It Works</h2>
            <p className="text-xl text-[#5D4037]">Transparent, secure, and professional process</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-[#F5F1E8] font-serif">1</span>
              </div>
              <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] min-h-[160px]">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="font-bold text-[#3E2723] mb-2 font-serif">Send File</h3>
                <p className="text-sm text-[#5D4037]">Upload your file or bring physical media</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-[#F5F1E8] font-serif">2</span>
              </div>
              <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] min-h-[160px]">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <h3 className="font-bold text-[#3E2723] mb-2 font-serif">Free Analysis</h3>
                <p className="text-sm text-[#5D4037]">We assess condition & possibilities in 1 hour</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-[#F5F1E8] font-serif">3</span>
              </div>
              <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] min-h-[160px]">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="font-bold text-[#3E2723] mb-2 font-serif">Proposal</h3>
                <p className="text-sm text-[#5D4037]">Detailed options and transparent pricing</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-[#F5F1E8] font-serif">4</span>
              </div>
              <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] min-h-[160px]">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                <h3 className="font-bold text-[#3E2723] mb-2 font-serif">Restoration</h3>
                <p className="text-sm text-[#5D4037]">Expert work using professional tools</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-[#F5F1E8] font-serif">5</span>
              </div>
              <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] min-h-[160px]">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h3 className="font-bold text-[#3E2723] mb-2 font-serif">Preview</h3>
                <p className="text-sm text-[#5D4037]">Review results before final delivery</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-[#8B6F47] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-[#F5F1E8] font-serif">6</span>
              </div>
              <div className="bg-[#F9F6F0] p-4 border-2 border-[#D4A574] min-h-[160px]">
                <svg className="w-12 h-12 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="font-bold text-[#3E2723] mb-2 font-serif">Delivery</h3>
                <p className="text-sm text-[#5D4037]">Receive files in your preferred format + originals</p>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-8 text-center">
            <h3 className="text-3xl font-bold text-[#F5F1E8] mb-4 font-serif">Your Memories Are Safe With Us</h3>
            <p className="text-[#EDE7DA] text-lg mb-6">
              We handle every project with the utmost care and confidentiality. Your original materials
              are treated as irreplaceable treasures and returned safely.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[#F5F1E8]">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-serif">Secure Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-serif">Confidential</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-serif">Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">Our Work</h2>
            <p className="text-xl text-[#5D4037]">See the transformation yourself - drag to compare</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="relative aspect-video shadow-2xl border-4 border-[#D4A574] mb-4">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&h=600&fit=crop&q=80"
                  afterImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop&q=80"
                  alt="Family archive restoration"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2 font-serif">Family Home Movies</h3>
              <p className="text-[#5D4037]">Damaged VHS from 1987 restored to pristine digital quality</p>
            </div>

            <div>
              <div className="relative aspect-video shadow-2xl border-4 border-[#D4A574] mb-4">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop&q=80"
                  afterImage="https://images.unsplash.com/photo-1574267432644-f734b327326f?w=800&h=600&fit=crop&q=80"
                  alt="Wedding video restoration"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2 font-serif">Wedding Video 1992</h3>
              <p className="text-[#5D4037]">Color correction, stabilization, and audio enhancement</p>
            </div>

            <div>
              <div className="relative aspect-video shadow-2xl border-4 border-[#D4A574] mb-4">
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=800&h=600&fit=crop&q=80"
                  afterImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&q=80"
                  alt="8mm film restoration"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2 font-serif">8mm Film from 1960s</h3>
              <p className="text-[#5D4037]">Complete restoration including scratch removal and color grading</p>
            </div>

            <div>
              <div className="relative aspect-video shadow-2xl border-4 border-[#D4A574] mb-4 bg-gradient-to-br from-[#E8DCC8] to-[#D4A574] flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                  <div className="text-[#3E2723] font-serif mb-2">Audio Sample Available</div>
                  <div className="text-[#5D4037] text-sm">Before: Heavy hiss and distortion</div>
                  <div className="text-[#8B6F47] text-sm font-semibold">After: Crystal clear voice</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#3E2723] mb-2 font-serif">Cassette Audio Restoration</h3>
              <p className="text-[#5D4037]">Family interviews from 1975 cleaned and enhanced</p>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="inline-block bg-[#8B6F47] text-[#F5F1E8] px-8 py-4 text-lg font-semibold hover:bg-[#A0826D] transition shadow-lg font-serif">
              Start Your Project →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#EDE7DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">What Our Clients Say</h2>
            <p className="text-xl text-[#5D4037]">Real stories from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B6F47] rounded-full flex items-center justify-center text-2xl font-serif text-[#F5F1E8] mr-4">
                  SM
                </div>
                <div>
                  <div className="font-bold text-[#3E2723] font-serif">Sarah Mitchell</div>
                  <div className="text-sm text-[#5D4037]">Family Archive Project</div>
                </div>
              </div>
              <div className="text-[#8B6F47] mb-4 text-3xl">"</div>
              <p className="text-[#5D4037] italic mb-4">
                We thought our parents' wedding video was lost forever. The VHS was damaged and wouldn't play.
                RestoreMedia worked magic—now we have a beautiful digital version that we'll treasure for generations.
                I cried when I saw it!
              </p>
              <div className="flex text-[#8B6F47]">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B6F47] rounded-full flex items-center justify-center text-2xl font-serif text-[#F5F1E8] mr-4">
                  JC
                </div>
                <div>
                  <div className="font-bold text-[#3E2723] font-serif">James Chen</div>
                  <div className="text-sm text-[#5D4037]">Audio Restoration</div>
                </div>
              </div>
              <div className="text-[#8B6F47] mb-4 text-3xl">"</div>
              <p className="text-[#5D4037] italic mb-4">
                I had old cassette tapes of my grandmother telling family stories. They were full of hiss and barely
                audible. The restoration brought her voice back to life so clearly—it's like she's in the room with us
                again. Thank you so much!
              </p>
              <div className="flex text-[#8B6F47]">
                ★★★★★
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B6F47] rounded-full flex items-center justify-center text-2xl font-serif text-[#F5F1E8] mr-4">
                  ER
                </div>
                <div>
                  <div className="font-bold text-[#3E2723] font-serif">Emily Rodriguez</div>
                  <div className="text-sm text-[#5D4037]">8mm Film Digitization</div>
                </div>
              </div>
              <div className="text-[#8B6F47] mb-4 text-3xl">"</div>
              <p className="text-[#5D4037] italic mb-4">
                My father shot 8mm films in the 1960s. I found them in the attic and had no way to watch them.
                RestoreMedia not only digitized them but enhanced the colors and stabilized the footage. Seeing my
                grandparents young again was priceless.
              </p>
              <div className="flex text-[#8B6F47]">
                ★★★★★
              </div>
            </div>
          </div>

          <div className="mt-12 text-center bg-[#F9F6F0] p-8 border-4 border-[#D4A574]">
            <p className="text-2xl text-[#3E2723] font-serif mb-4">
              "Every project is personal to us. Your memories matter."
            </p>
            <p className="text-[#5D4037]">— RestoreMedia Team</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">Transparent Pricing</h2>
            <p className="text-xl text-[#5D4037]">Affordable restoration starting from $25</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Pricing Calculator */}
            <PriceCalculator />

            {/* Pricing Cards */}
            <div className="space-y-6">
              <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[#3E2723] font-serif">VHS Digitization</h4>
                    <p className="text-[#5D4037]">Per tape, up to 2 hours</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#5D4037]">From</div>
                    <div className="text-3xl font-bold text-[#8B6F47] font-serif">$25</div>
                  </div>
                </div>
                <ul className="space-y-2 text-[#5D4037] text-sm">
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Digital MP4 file</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Basic color correction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Original tape returned</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[#3E2723] font-serif">Video Restoration</h4>
                    <p className="text-[#5D4037]">Per hour of footage</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#5D4037]">From</div>
                    <div className="text-3xl font-bold text-[#8B6F47] font-serif">$75</div>
                  </div>
                </div>
                <ul className="space-y-2 text-[#5D4037] text-sm">
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Complete restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Color grading & stabilization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Audio enhancement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[#3E2723] font-serif">Audio Restoration</h4>
                    <p className="text-[#5D4037]">Per hour of audio</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#5D4037]">From</div>
                    <div className="text-3xl font-bold text-[#8B6F47] font-serif">$50</div>
                  </div>
                </div>
                <ul className="space-y-2 text-[#5D4037] text-sm">
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Noise & hiss removal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Voice clarity enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Professional mastering</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#F5F1E8] p-6 border-4 border-[#D4A574]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-bold text-[#3E2723] font-serif">Photo Restoration</h4>
                    <p className="text-[#5D4037]">Per photo</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#5D4037]">From</div>
                    <div className="text-3xl font-bold text-[#8B6F47] font-serif">$30</div>
                  </div>
                </div>
                <ul className="space-y-2 text-[#5D4037] text-sm">
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Damage repair & restoration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>Color correction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B6F47] mr-2">✓</span>
                    <span>High-resolution scan</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#8B6F47] to-[#A0826D] p-8 text-center">
            <h3 className="text-3xl font-bold text-[#F5F1E8] mb-4 font-serif">Volume Discounts Available</h3>
            <p className="text-[#EDE7DA] text-lg mb-6">
              Multiple tapes, large archives, or ongoing projects? Contact us for special pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-[#F5F1E8]">
              <div className="bg-white/10 px-6 py-3 rounded">
                <div className="text-2xl font-bold font-serif">10+ items</div>
                <div className="text-sm">15% discount</div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded">
                <div className="text-2xl font-bold font-serif">25+ items</div>
                <div className="text-sm">25% discount</div>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded">
                <div className="text-2xl font-bold font-serif">50+ items</div>
                <div className="text-sm">Custom pricing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#EDE7DA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-4 font-serif">Send for Free Diagnosis</h2>
            <p className="text-xl text-[#5D4037]">Get your professional assessment in 1 hour - absolutely free</p>
          </div>

          <form className="space-y-6 bg-[#F9F6F0] p-8 border-4 border-[#D4A574] shadow-2xl">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-[#3E2723] mb-2 font-serif">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-4 border-2 border-[#D4A574] bg-[#F5F1E8] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-[#3E2723] text-lg"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block text-lg font-medium text-[#3E2723] mb-2 font-serif">
                Email or Phone *
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                required
                className="w-full px-4 py-4 border-2 border-[#D4A574] bg-[#F5F1E8] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-[#3E2723] text-lg"
                placeholder="john@email.com or +1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-[#3E2723] mb-2 font-serif">
                Tell us about your project (optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-4 border-2 border-[#D4A574] bg-[#F5F1E8] focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-[#3E2723] text-lg"
                placeholder="What do you want to restore? VHS tapes, old photos, audio cassettes...?"
              ></textarea>
            </div>

            <div className="border-4 border-dashed border-[#8B6F47] p-8 text-center bg-[#EDE7DA] hover:bg-[#E8DCC8] transition cursor-pointer">
              <svg className="w-16 h-16 mx-auto mb-4 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-[#3E2723] text-lg mb-2 font-serif font-semibold">Attach Your File</p>
              <p className="text-[#5D4037] mb-2">Click to upload or drag & drop</p>
              <p className="text-sm text-[#5D4037]">Support all formats - Max 100MB</p>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#8B6F47] to-[#A0826D] text-[#F5F1E8] px-8 py-5 text-xl font-bold hover:from-[#A0826D] hover:to-[#8B6F47] transition shadow-2xl font-serif"
            >
              Send for Diagnosis →
            </button>

            <div className="bg-[#E8DCC8] border-l-4 border-[#8B6F47] p-4 text-center">
              <p className="text-[#3E2723] font-semibold font-serif">
                ⚡ We'll respond within 1 hour during business hours
              </p>
              <p className="text-sm text-[#5D4037] mt-1">
                Free diagnosis • No obligation • Your files are safe
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
              <h3 className="font-semibold text-[#3E2723] mb-2 font-serif">Phone</h3>
              <p className="text-[#5D4037]">+1 (555) 123-4567</p>
            </div>
            <div className="bg-[#EDE7DA] p-6 border-2 border-[#D4A574]">
              <svg className="w-8 h-8 mx-auto mb-3 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-[#3E2723] mb-2 font-serif">Hours</h3>
              <p className="text-[#5D4037]">Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      {/* Footer */}
      <footer className="bg-[#3E2723] text-[#F5F1E8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-serif">RestoreMedia</h3>
              <p className="text-[#D4A574]">
                Professional audio and video restoration services. Preserving memories since 2014.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-serif">Services</h4>
              <ul className="space-y-2 text-[#D4A574]">
                <li><a href="#services" className="hover:text-[#F5F1E8] transition">Video Restoration</a></li>
                <li><a href="#services" className="hover:text-[#F5F1E8] transition">Audio Restoration</a></li>
                <li><a href="#services" className="hover:text-[#F5F1E8] transition">Digitization</a></li>
                <li><a href="#services" className="hover:text-[#F5F1E8] transition">Photo Restoration</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-serif">Company</h4>
              <ul className="space-y-2 text-[#D4A574]">
                <li><a href="#process" className="hover:text-[#F5F1E8] transition">How It Works</a></li>
                <li><a href="#gallery" className="hover:text-[#F5F1E8] transition">Portfolio</a></li>
                <li><a href="#pricing" className="hover:text-[#F5F1E8] transition">Pricing</a></li>
                <li><a href="#testimonials" className="hover:text-[#F5F1E8] transition">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-[#F5F1E8] transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-serif">Contact</h4>
              <ul className="space-y-2 text-[#D4A574]">
                <li>info@restoremedia.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon-Fri: 9AM-6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5D4037] mt-8 pt-8 text-center text-[#D4A574]">
            <p>&copy; 2024 RestoreMedia. All rights reserved. Your memories, our expertise.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
