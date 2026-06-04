import React from "react";
import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="relative w-full min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_#dbeafe_0%,_#eff6ff_40%,_#ffffff_100%)]"
  >
    {/* Decorative blobs */}
    <motion.div
      className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none"
      animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-100 opacity-30 blur-3xl pointer-events-none"
      animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
      transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-16">
      {/* Left: text */}
      <div className="w-full md:w-1/2 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] rounded-full px-4 py-1.5 text-sm font-semibold border border-blue-100"
        >
          <span className="text-yellow-400">⭐</span>
          Рейтинг 4.9 на Profi.ru · 5000+ клиентов ВКонтакте
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(36px,5vw,72px)] font-black font-sans tracking-tight text-[#1a1a1a] leading-[1.1] mb-5"
        >
          Ремонт{" "}
          <span className="relative inline-block">
            холодильников
            <svg
              className="absolute w-full h-[10px] -bottom-1 left-0 text-[#1D4ED8]"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0 8 Q 50 0 100 8 T 200 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          в Твери
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#64748b] text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
        >
          Александр — мастер с 10-летним опытом. Выезд за 60 минут по Твери и
          области. Гарантия на все работы 12 месяцев.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
        >
          <motion.a
            href="tel:+74822334455"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-[#1D4ED8] text-white rounded-xl font-semibold text-lg hover:bg-[#1e40af] transition-colors shadow-lg shadow-blue-200 text-center"
            data-testid="button-call-master"
          >
            Вызвать мастера
          </motion.a>
          <motion.button
            onClick={() => scrollTo("pricing")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-white border-2 border-[#1D4ED8] text-[#1D4ED8] rounded-xl font-semibold text-lg hover:bg-[#EFF6FF] transition-colors"
            data-testid="button-see-prices"
          >
            Узнать цены
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-6 text-[#475569] text-sm font-medium"
        >
          {[
            { icon: "⚡", text: "Выезд 60 мин" },
            { icon: "✓", text: "Гарантия 12 мес", blue: true },
            { icon: "📍", text: "Тверь и область" },
          ].map(({ icon, text, blue }) => (
            <div key={text} className="flex items-center gap-2">
              <span className={blue ? "text-[#1D4ED8]" : ""}>{icon}</span>
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right: fridge illustration */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="hidden md:flex w-1/2 justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            viewBox="0 0 280 420"
            className="w-full max-w-[320px]"
            style={{ filter: "drop-shadow(0 24px 40px rgba(29,78,216,0.12))" }}
          >
            {/* Body */}
            <rect x="40" y="10" width="200" height="390" rx="20" fill="#F0F6FF" stroke="#DBEAFE" strokeWidth="2" />
            {/* Top door */}
            <rect x="50" y="20" width="180" height="120" rx="12" fill="#E0EDFF" stroke="#BFDBFE" strokeWidth="1.5" />
            {/* Bottom door */}
            <rect x="50" y="150" width="180" height="242" rx="12" fill="#E0EDFF" stroke="#BFDBFE" strokeWidth="1.5" />
            {/* Divider */}
            <rect x="40" y="142" width="200" height="10" rx="0" fill="#BFDBFE" />
            {/* Top handle */}
            <rect x="126" y="52" width="8" height="52" rx="4" fill="#1D4ED8" opacity="0.85" />
            {/* Bottom handle */}
            <rect x="126" y="176" width="8" height="76" rx="4" fill="#1D4ED8" opacity="0.85" />
            {/* Vent lines top */}
            <line x1="68" y1="90" x2="100" y2="90" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <line x1="68" y1="100" x2="90" y2="100" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            {/* Vent lines bottom */}
            <line x1="68" y1="200" x2="110" y2="200" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <line x1="68" y1="212" x2="96" y2="212" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            <line x1="68" y1="224" x2="104" y2="224" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
            {/* Brand label */}
            <rect x="90" y="300" width="100" height="28" rx="6" fill="#DBEAFE" />
            <text x="140" y="319" fill="#1D4ED8" fontSize="11" fontFamily="Space Grotesk, sans-serif" fontWeight="700" textAnchor="middle" letterSpacing="2">ALEXANDER</text>
            {/* Shadow/base */}
            <ellipse cx="140" cy="405" rx="80" ry="8" fill="#BFDBFE" opacity="0.4" />
          </svg>
        </motion.div>
      </motion.div>
    </div>

    {/* Scroll hint */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 cursor-pointer"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      onClick={() => scrollTo("why")}
    >
      <span className="text-xs font-mono tracking-widest text-[#64748b] uppercase">Листать</span>
      <div className="w-5 h-8 rounded-full border-2 border-[#94a3b8] flex items-start justify-center pt-1.5">
        <div className="w-1 h-2 rounded-full bg-[#1D4ED8]" />
      </div>
    </motion.div>
  </section>
);
