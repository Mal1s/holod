import React, { useRef } from "react";
import { motion } from "framer-motion";
import videoSrc from "@assets/kling_20260606_VIDEO_The_person_5916_0_1780760294551.mp4";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
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
              href="tel:+79201560292"
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

        {/* Right: master video */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="hidden md:flex w-1/2 justify-center items-center"
        >
          <div className="relative">
            {/* Glow ring behind video */}
            <div
              className="absolute inset-[-12px] rounded-[2.5rem] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(29,78,216,0.18) 0%, transparent 70%)" }}
            />

           


            {/* Video container — portrait 9:16 */}
            <div
              className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-200 border-4 border-white"
              style={{ width: "420px", aspectRatio: "4/5" }}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1E3A8A88] to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="text-white text-xs font-bold tracking-widest uppercase opacity-90">
                  Александр · Мастер
                </span>
              </div>
            </div>
          </div>
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
};
