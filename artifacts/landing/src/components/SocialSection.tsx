import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiVk } from "react-icons/si";
import okImg from "@assets/одноклассники_1780760279020.png";
import avitoImg from "@assets/авито_1780760284378.jpg";
import profiImg from "@assets/профи.ru_1780760288550.jpg";
import rutubeImg from "@assets/рутубе_1780760274046.png";

interface Social {
  name: string;
  stat: string;
  statLabel: string;
  href: string;
  imgSrc?: string;
  accentColor: string;
  useVkIcon?: boolean;
  imageScale?: number;
  imagePadding?: string;
}

const topShelf: Social[] = [
  {
    name: "ВКонтакте",
    stat: "5 000+",
    statLabel: "друзей",
    href: "https://vk.com/id401580420",
    accentColor: "#0077FF",
    useVkIcon: true,
    imageScale: 1.4,
    imagePadding: "p-0",
  },
  {
    name: "Одноклассники",
    stat: "1 000+",
    statLabel: "подписчиков",
    href: "https://ok.ru/profile/575591001485",
    imgSrc: okImg,
    accentColor: "#FF8C00",
    imageScale: 1.2,
    imagePadding: "p-0.5",
  },
  {
    name: "Авито",
    stat: "5.0",
    statLabel: "рейтинг",
    href: "https://www.avito.ru/tver/predlozheniya_uslug/remont_holodilnikov_2109964398",
    imgSrc: avitoImg,
    accentColor: "#00AAFF",
    imageScale: 1.5,
    imagePadding: "p-0",
  },
];

const bottomShelf: Social[] = [
  {
    name: "Профи.ру",
    stat: "4.9",
    statLabel: "из 5.0",
    href: "https://profi.ru/profile/AleksandrovAA226",
    imgSrc: profiImg,
    accentColor: "#FF3B5C",
    imageScale: 1.5,
    imagePadding: "p-0",
  },
  {
    name: "Rutube",
    stat: "Видео",
    statLabel: "канал",
    href: "https://rutube.ru/channel/35722035",
    imgSrc: rutubeImg,
    accentColor: "#1A3A8A",
    imageScale: 1.2,
    imagePadding: "p-0.5",
  },
];

// Карточка-полка
const ShelfCard: React.FC<{ social: Social }> = ({ social }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center justify-between bg-white border-2 border-[#E2E8F0] rounded-2xl px-6 py-5 cursor-pointer overflow-hidden group hover:border-[#60A5FA] hover:shadow-xl transition-all duration-300"
    >
      {/* Голубая подсветка при наведении */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${social.accentColor}08 0%, #EFF6FF 100%)`,
        }}
      />

      <div className="relative z-10 flex items-center gap-5">
        {/* Иконка */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md border border-[#F1F5F9]"
          style={{ background: social.useVkIcon ? social.accentColor : "#FFFFFF" }}
        >
          {social.useVkIcon ? (
            <SiVk className="w-8 h-8 text-white" />
          ) : (
            <img
              src={social.imgSrc}
              alt={social.name}
              className={`w-full h-full object-contain ${social.imagePadding}`}
              style={{ transform: `scale(${social.imageScale})` }}
            />
          )}
        </div>

        {/* Название */}
        <div>
          <h3 className="text-[#0F172A] font-extrabold text-base">{social.name}</h3>
          <p className="text-[#94A3B8] text-sm">{social.statLabel}</p>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-5">
        {/* Статистика */}
        <motion.p
          className="text-2xl font-black"
          style={{ color: social.accentColor }}
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {social.stat}
        </motion.p>

        {/* Стрелка */}
        <motion.div
          animate={{ x: isHovered ? 6 : 0 }}
          className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F8FAFC] border border-[#E2E8F0] group-hover:bg-[#EFF6FF] group-hover:border-[#93C5FD] transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke={social.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
    </motion.a>
  );
};

// Компонент снежинки
const Snowflake: React.FC<{ delay: number; left: number; size: number; duration: number }> = ({ delay, left, size, duration }) => (
  <motion.div
    className="absolute pointer-events-none text-[#93C5FD]"
    style={{
      left: `${left}%`,
      top: "-5%",
      fontSize: `${size}px`,
      opacity: 0,
    }}
    animate={{
      y: ["0vh", "105vh"],
      x: [0, 30, -20, 15, -10],
      opacity: [0, 0.6, 0.5, 0.2, 0],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration: duration,
      delay: delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    ❄
  </motion.div>
);

export const SocialSection: React.FC = () => {
  const [isFridgeOpen, setIsFridgeOpen] = useState(false);

  // Для мобильных — переключение по клику на ручку
  const handleToggle = useCallback(() => {
    setIsFridgeOpen((prev) => !prev);
  }, []);

  // Генерируем снежинки
  const snowflakes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    delay: Math.random() * 10,
    left: Math.random() * 100,
    size: 8 + Math.random() * 16,
    duration: 8 + Math.random() * 12,
  }));

  return (
    <section id="social" className="relative w-full bg-white py-24 px-6 md:px-12 overflow-hidden min-h-screen">

      {/* Снежинки */}
      {snowflakes.map((s) => (
        <Snowflake key={s.id} delay={s.delay} left={s.left} size={s.size} duration={s.duration} />
      ))}

      {/* Лёгкий голубой фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-30 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-50 rounded-full opacity-30 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-50 rounded-full opacity-20 blur-[150px]" />
        {/* Точки сетки */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle, #3B82F6 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-xl mx-auto">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] text-[#2563EB] uppercase mb-4 bg-blue-50 px-6 py-2.5 rounded-full border-2 border-blue-100"
          >
            <span>❄️</span> Социальные сети <span>❄️</span>
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] tracking-tight leading-tight">
            Где найти
            <br />
            Александра
          </h2>
          <p className="text-[#64748B] mt-5 text-lg max-w-md mx-auto">
            Все платформы в одном месте — просто откройте холодильник
          </p>
        </motion.div>

        {/* ХОЛОДИЛЬНИК */}
        <div 
          className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-100/50 border-2 border-[#CBD5E1]"
          style={{ minHeight: "520px" }}
          onMouseEnter={() => setIsFridgeOpen(true)}
          onMouseLeave={() => setIsFridgeOpen(false)}
        >

          {/* Внешняя обводка-свечение */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-[#BFDBFE] via-[#E0E7FF] to-[#BAE6FD] -z-10 blur-sm opacity-60" />

          {/* ДВЕРЦА — анимация открытия */}
          <AnimatePresence>
            {!isFridgeOpen && (
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: "95%", opacity: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
                className="absolute inset-0 z-20 bg-gradient-to-br from-white via-[#F8FAFC] to-[#EFF6FF] rounded-[2.4rem] flex flex-col items-center justify-center border-2 border-[#E2E8F0]"
              >
                {/* Ручка — кликабельная для мобильных */}
                <button
                  onClick={handleToggle}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-36 bg-[#CBD5E1] rounded-l-xl flex items-center shadow-inner cursor-pointer hover:bg-[#B0C4DE] transition-colors group/ handle z-30"
                  aria-label="Открыть холодильник"
                >
                  <div className="w-2 h-24 bg-[#94A3B8] rounded-l-sm ml-0.5 group-hover/handle:bg-[#7A8FA8] transition-colors" />
                </button>

                {/* Содержимое дверцы */}
                <div className="text-center px-6">
                  <motion.div
                    animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-7xl mb-5 drop-shadow-lg pointer-events-none"
                  >
                    🧊
                  </motion.div>
                  <p className="text-[#64748B] text-base font-semibold mb-1 pointer-events-none">
                    Нажмите на ручку
                  </p>
                  <p className="text-[#2563EB] text-sm font-black tracking-widest uppercase pointer-events-none">
                    Соцсети мастера
                  </p>
                </div>

                {/* Декоративный иней */}
                <div className="absolute bottom-10 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent pointer-events-none" />
                <div className="absolute bottom-14 left-14 w-20 h-[1px] bg-[#93C5FD] rotate-6 pointer-events-none" />
                <div className="absolute bottom-16 right-12 w-16 h-[1px] bg-[#7DD3FC] -rotate-3 pointer-events-none" />
                <div className="absolute top-10 right-12 w-14 h-[1px] bg-[#93C5FD] rotate-3 pointer-events-none" />
                <div className="absolute top-14 left-10 w-12 h-[1px] bg-[#7DD3FC] -rotate-6 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Содержимое холодильника */}
          <motion.div
            animate={{ 
              opacity: isFridgeOpen ? 1 : 0.2,
              scale: isFridgeOpen ? 1 : 0.97,
            }}
            transition={{ duration: 0.4 }}
            className="rounded-[2.4rem] overflow-hidden"
          >
            {/* Ручка + кнопка закрытия (видна всегда, когда открыто) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2">
              {/* Ручка */}
              <button
                onClick={handleToggle}
                className="w-4 h-36 bg-[#CBD5E1] rounded-l-xl flex items-center shadow-inner cursor-pointer hover:bg-[#B0C4DE] transition-colors group/handle"
                aria-label="Закрыть холодильник"
              >
                <div className="w-2 h-24 bg-[#94A3B8] rounded-l-sm ml-0.5 group-hover/handle:bg-[#7A8FA8] transition-colors" />
              </button>

              {/* Маленькая стрелка закрытия */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-[10px] text-[#94A3B8] font-medium mb-1">Закрыть</span>
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#94A3B8]"
                  animate={{ 
                    rotate: [0, -15, 0, 15, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <path 
                    d="M3 13C3 13 6.5 9 8 9C9.5 9 13 13 13 13" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M8 9V3" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  <path 
                    d="M5 6L8 3L11 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <circle 
                    cx="8" 
                    cy="13" 
                    r="1" 
                    fill="currentColor"
                  />
                </motion.svg>
              </motion.div>
            </div>

            {/* Верхняя камера */}
            <div className="relative border-b-2 border-[#E2E8F0] bg-gradient-to-b from-white to-[#F8FAFC] pb-2 pr-12">
              {/* Этикетка */}
              <div className="absolute top-4 left-5 z-10">
                <span className="text-[11px] font-bold text-[#2563EB] tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                  🧊 Холодильная камера
                </span>
              </div>
              {/* Подсветка */}
              <div className="absolute top-8 right-16 w-4 h-10 bg-[#93C5FD] rounded-full opacity-30 blur-md" />

              <div className="pt-14 pb-5 px-5 space-y-4">
                {topShelf.map((social, i) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    <ShelfCard social={social} />
                    {i < topShelf.length - 1 && (
                      <div className="mt-4 h-[3px] bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent rounded-full opacity-40" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Нижняя камера (морозилка) */}
            <div className="relative bg-gradient-to-b from-[#F0F9FF] to-[#DBEAFE] pb-2 pr-12">
              {/* Этикетка */}
              <div className="absolute top-4 left-5 z-10">
                <span className="text-[11px] font-bold text-[#2563EB] tracking-widest uppercase bg-blue-100 px-3 py-1 rounded-lg border border-blue-200 flex items-center gap-1.5">
                  <motion.span
                    animate={{ rotate: [0, 20, 0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ❄️
                  </motion.span>
                  Морозильная камера
                </span>
              </div>

              {/* Иней */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7DD3FC] to-transparent" />
                <div className="absolute top-5 right-10 w-14 h-[1px] bg-[#7DD3FC] rotate-6" />
                <div className="absolute top-7 left-14 w-10 h-[1px] bg-[#7DD3FC] -rotate-3" />
                <div className="absolute bottom-5 right-14 w-14 h-[1px] bg-[#7DD3FC] rotate-12" />
                <div className="absolute bottom-8 left-10 w-8 h-[1px] bg-[#7DD3FC] -rotate-6" />
                <div className="absolute top-12 right-6 w-6 h-[1px] bg-[#BAE6FD] rotate-45" />
                <div className="absolute bottom-10 left-20 w-5 h-[1px] bg-[#BAE6FD] -rotate-12" />
              </div>

              <div className="pt-14 pb-5 px-5 space-y-4">
                {bottomShelf.map((social, i) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  >
                    <ShelfCard social={social} />
                    {i < bottomShelf.length - 1 && (
                      <div className="mt-4 h-[3px] bg-gradient-to-r from-transparent via-[#BAE6FD] to-transparent rounded-full" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Ножки */}
            <div className="flex justify-between px-10 pb-2 pt-1 bg-white">
              <div className="w-5 h-2.5 bg-[#CBD5E1] rounded-b-lg shadow-inner" />
              <div className="w-5 h-2.5 bg-[#CBD5E1] rounded-b-lg shadow-inner" />
            </div>
          </motion.div>
        </div>

        {/* Подсказка */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-[#94A3B8] text-sm flex items-center justify-center gap-2"
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🧊
          </motion.span>
          Нажмите на ручку — дверца откроется
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            🧊
          </motion.span>
        </motion.p>
      </div>
    </section>
  );
};