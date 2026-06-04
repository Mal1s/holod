import React from "react";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#EFF6FF_100%)]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] rounded-full px-4 py-1.5 text-sm font-medium"
          >
            <span className="text-yellow-500">⭐</span> Рейтинг 4.9 на Profi.ru · 5000+ клиентов ВКонтакте
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(36px,5vw,72px)] font-black font-sans tracking-tight text-[#1a1a1a] leading-[1.1] mb-6"
          >
            Ремонт <span className="relative inline-block">
              холодильников
              <svg className="absolute w-full h-[12px] -bottom-2 left-0 text-[#1D4ED8]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 20 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> в Твери
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#64748b] text-lg md:text-xl max-w-lg mb-8"
          >
            Александр — мастер с 10-летним опытом. Выезд за 60 минут, гарантия 12 месяцев.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 bg-[#1D4ED8] text-white rounded-lg font-medium text-lg hover:bg-[#1e40af] transition-colors shadow-sm"
            >
              Вызвать мастера
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              className="px-8 py-4 bg-white border border-[#1D4ED8] text-[#1D4ED8] rounded-lg font-medium text-lg hover:bg-[#EFF6FF] transition-colors"
            >
              Узнать цены
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-[#1a1a1a] font-medium text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">⚡</span> Выезд 60 мин
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#1D4ED8] text-xl">✓</span> Гарантия 12 мес
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📍</span> Тверь и область
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex w-1/2 justify-center items-center"
        >
          <svg viewBox="0 0 300 450" className="w-full max-w-[360px] drop-shadow-2xl" preserveAspectRatio="xMidYMid meet">
            <rect x="50" y="20" width="200" height="400" rx="16" fill="#F8F8F6" stroke="#E2E8F0" strokeWidth="2" />
            <rect x="58" y="28" width="184" height="120" rx="8" fill="#F0F4FF" />
            <rect x="58" y="156" width="184" height="256" rx="8" fill="#F0F4FF" />
            
            <rect x="146" y="60" width="8" height="40" rx="4" fill="#1D4ED8" />
            <rect x="146" y="180" width="8" height="60" rx="4" fill="#1D4ED8" />
            
            <rect x="70" y="420" width="160" height="10" rx="4" fill="#64748b" opacity="0.2" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
