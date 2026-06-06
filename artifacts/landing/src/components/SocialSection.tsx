import React from "react";
import { motion } from "framer-motion";
import { SiVk } from "react-icons/si";
import okImg from "@assets/одноклассники_1780760279020.png";
import avitoImg from "@assets/авито_1780760284378.jpg";
import profiImg from "@assets/профи.ru_1780760288550.jpg";
import rutubeImg from "@assets/рутубе_1780760274046.png";

interface Social {
  name: string;
  handle: string;
  desc: string;
  href: string;
  imgSrc?: string;
  imgBg?: string;
  accentColor: string;
  useVkIcon?: boolean;
}

const socials: Social[] = [
  {
    name: "ВКонтакте",
    handle: "vk.com/id401580420",
    desc: "5 000+ друзей",
    href: "https://vk.com/id401580420",
    accentColor: "#0077FF",
    useVkIcon: true,
  },
  {
    name: "Одноклассники",
    handle: "ok.ru/profile/575591001485",
    desc: "1 000+ подписчиков",
    href: "https://ok.ru/profile/575591001485",
    imgSrc: okImg,
    imgBg: "#FF8C00",
    accentColor: "#FF8C00",
  },
  {
    name: "Авито",
    handle: "avito.ru — Александр",
    desc: "Pro-статус · 200+ оценок",
    href: "https://www.avito.ru/tver/predlozheniya_uslug/remont_holodilnikov_2109964398",
    imgSrc: avitoImg,
    imgBg: "#F8F8F8",
    accentColor: "#00AAFF",
  },
  {
    name: "Профи.ру",
    handle: "profi.ru/AleksandrovAA226",
    desc: "Рейтинг 4.9 / 5.0",
    href: "https://profi.ru/profile/AleksandrovAA226",
    imgSrc: profiImg,
    imgBg: "#FFF0F0",
    accentColor: "#FF3B5C",
  },
  {
    name: "Rutube",
    handle: "rutube.ru/channel/35722035",
    desc: "Видео работ мастера",
    href: "https://rutube.ru/channel/35722035",
    imgSrc: rutubeImg,
    imgBg: "#0D1B3E",
    accentColor: "#1A3A8A",
  },
];

export const SocialSection: React.FC = () => (
  <section id="social" className="w-full bg-[#F8FAFF] py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          Мы в сети
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
          Найдите Александра
          <br className="hidden md:block" /> в соцсетях
        </h2>
        <p className="text-[#64748b] mt-4 text-lg max-w-xl mx-auto">
          Реальные отзывы, фото и видео работ, быстрая связь.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {socials.map(({ name, handle, desc, href, imgSrc, imgBg, accentColor, useVkIcon }, i) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -6, boxShadow: `0 16px 40px ${accentColor}22`, transition: { duration: 0.18 } }}
            whileTap={{ scale: 0.97 }}
            className="flex flex-col items-center text-center bg-white rounded-2xl p-5 border border-[#E8EFF8] shadow-sm hover:border-[#BFDBFE] transition-all"
            data-testid={`link-social-${i}`}
          >
            {/* Logo */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 overflow-hidden flex-shrink-0"
              style={{ background: useVkIcon ? accentColor : imgBg }}
            >
              {useVkIcon ? (
                <SiVk className="w-9 h-9 text-white" />
              ) : (
                <img
                  src={imgSrc}
                  alt={name}
                  className="w-full h-full object-contain p-1"
                />
              )}
            </div>

            {/* Name */}
            <h3 className="text-sm font-black text-[#1a1a1a] mb-1 leading-tight">{name}</h3>

            {/* Stats badge */}
            <span
              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-2"
              style={{ background: `${accentColor}18`, color: accentColor }}
            >
              {desc}
            </span>

            {/* Handle */}
            <p className="text-[#94a3b8] text-[9px] font-mono leading-tight break-all">
              {handle}
            </p>

            {/* Arrow */}
            <div
              className="mt-3 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: `${accentColor}12` }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 text-center text-[#94a3b8] text-sm"
      >
        Или пишите напрямую — отвечаю быстро
      </motion.p>
    </div>
  </section>
);
