import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import videoSrc from "@assets/kling_20260606_VIDEO_The_person_5916_0_1780760294551.mp4";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      video.pause();
    };

    video.addEventListener("ended", handleEnded);

    // На случай если видео уже загружено и закончилось
    if (video.readyState >= 4 && video.ended) {
      video.pause();
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_#dbeafe_0%,_#eff6ff_40%,_#ffffff_100%)]"
      aria-label="Главный экран — ремонт холодильников в Твери"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100 opacity-40 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-indigo-100 opacity-30 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-16">
        {/* Left: text */}
        <div className="w-full md:w-1/2 flex flex-col items-start">

          {/* Рейтинг и соцдоказательство */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] rounded-full px-4 py-1.5 text-sm font-semibold border border-blue-100"
          >
            <span className="text-yellow-400" aria-hidden="true">⭐</span>
            <span>Рейтинг 4.9 на Profi.ru · 5000+ клиентов ВКонтакте · 200+ отзывов на Авито</span>
          </motion.div>

          {/* Главный заголовок H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(36px,5vw,72px)] font-black font-sans tracking-tight text-[#1a1a1a] leading-[1.1] mb-5"
            itemProp="headline"
          >
            Ремонт{" "}
            <span className="relative inline-block">
              холодильников
              <svg
                className="absolute w-full h-[10px] -bottom-1 left-0 text-[#1D4ED8]"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
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
            в Твери — выезд за 60 минут
          </motion.h1>

          {/* Скрытый SEO-подзаголовок H2 */}
          <h2 className="sr-only">
            Частный мастер Александр — срочный ремонт холодильников на дому в Твери и Тверской области.
            Выезд мастера по ремонту холодильников за 60 минут. Гарантия 12 месяцев на все виды работ.
            Бесплатная диагностика холодильника. Ремонт холодильников всех марок: Samsung, LG, Bosch,
            Indesit, Atlant, Stinol, Liebherr, Whirlpool, Electrolux, Hotpoint-Ariston, Бирюса, Nord,
            Саратов, Pozis, Snaige, BEKO, Candy, Sharp, Daewoo. Замена компрессора холодильника,
            заправка фреоном R600a и R134a, ремонт платы управления, ремонт системы No Frost,
            устранение утечки фреона, замена терморегулятора, замена вентилятора испарителя,
            ремонт нагревателя оттайки, замена датчиков температуры. Недорогой ремонт холодильников
            с гарантией. Честные цены без скрытых платежей. Звоните: +7 (920) 156-02-92.
          </h2>

          {/* Описание */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#64748b] text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            itemProp="description"
          >
            Александр — частный мастер по ремонту холодильников с опытом 10+ лет.
            Срочный выезд за 60 минут по Твери и области. Гарантия 12 месяцев на все
            виды работ. Бесплатная диагностика холодильника. Честные цены без скрытых
            платежей. Работаю ежедневно с 8:00 до 22:00.
          </motion.p>

          {/* Кнопки */}
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
              aria-label="Позвонить мастеру по ремонту холодильников +7 (920) 156-02-92"
              title="Вызвать мастера по ремонту холодильников в Твери"
            >
              Вызвать мастера
            </motion.a>
            <motion.button
              onClick={() => scrollTo("pricing")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white border-2 border-[#1D4ED8] text-[#1D4ED8] rounded-xl font-semibold text-lg hover:bg-[#EFF6FF] transition-colors"
              data-testid="button-see-prices"
              aria-label="Посмотреть цены на ремонт холодильников"
            >
              Узнать цены
            </motion.button>
          </motion.div>

          {/* Иконки преимуществ */}
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
                <span className={blue ? "text-[#1D4ED8]" : ""} aria-hidden="true">{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: master video — один раз при загрузке, останавливается на последнем кадре */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="hidden md:flex w-1/2 justify-center items-center"
        >
          <div className="relative">
            {/* Glow ring behind video */}
            <div
              className="absolute inset-[-12px] rounded-[2.5rem] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(29,78,216,0.18) 0%, transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Video container */}
            <div
              className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-200 border-4 border-white"
              style={{ width: "420px", aspectRatio: "4/5" }}
              itemProp="video"
              itemScope
              itemType="https://schema.org/VideoObject"
            >
              <meta itemProp="name" content="Александр — мастер по ремонту холодильников в Твери" />
              <meta itemProp="description" content="Видео-визитка мастера по ремонту холодильников Александра" />
              <meta itemProp="thumbnailUrl" content="https://remont-holodilnikov-tver.onrender.com/master-thumb.jpg" />
              <meta itemProp="uploadDate" content="2026-06-10T08:00:00+03:00" />
              <meta itemProp="contentUrl" content="https://remont-holodilnikov-tver.onrender.com/assets/kling_20260606_VIDEO_The_person_5916_0_1780760294551-Crme_TcX.mp4" />
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ display: "block" }}
                title="Александр — мастер по ремонту холодильников в Твери"
                preload="metadata"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1E3A8A88] to-transparent pointer-events-none" aria-hidden="true" />
              <div className="absolute bottom-4 left-0 w-full text-center">
                <span className="text-white text-xs font-bold tracking-widest uppercase opacity-90">
                  Александр · Мастер
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};