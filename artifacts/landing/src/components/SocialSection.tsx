import React from "react";
import { motion } from "framer-motion";
import { SiVk } from "react-icons/si";

const socials = [
  {
    name: "ВКонтакте",
    handle: "alexander.remont.tver",
    desc: "5 000+ друзей и подписчиков",
    href: "https://vk.com/alexander.remont.tver",
    Icon: SiVk,
    bg: "bg-[#0077FF]",
    hover: "hover:bg-[#0060CC]",
    shadow: "shadow-[#0077FF33]",
  },
  {
    name: "Одноклассники",
    handle: "ok.ru/alexander.holodilnik",
    desc: "1 000+ подписчиков",
    href: "https://ok.ru/",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm0 9c2.67 0 5.12.898 6.5 2.236a.75.75 0 0 1-1.06 1.06C16.3 16.68 14.27 16 12 16s-4.3.68-5.44 1.796a.75.75 0 0 1-1.06-1.06C6.88 15.398 9.33 14.5 12 14.5zM12 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
      </svg>
    ),
    bg: "bg-[#EE8208]",
    hover: "hover:bg-[#D4700A]",
    shadow: "shadow-[#EE820833]",
  },
  {
    name: "Avito",
    handle: "avito.ru — Александр, Тверь",
    desc: "Pro-статус · 200+ оценок",
    href: "https://www.avito.ru/tver/predlozheniya_uslug/remont_holodilnikov",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3h-15zm3.75 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM15 7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 13h6a3 3 0 0 1-6 0z" />
      </svg>
    ),
    bg: "bg-[#00AAFF]",
    hover: "hover:bg-[#0090DD]",
    shadow: "shadow-[#00AAFF33]",
  },
  {
    name: "Profi.ru",
    handle: "profi.ru — Александр",
    desc: "Рейтинг 4.9 / 5.0",
    href: "https://profi.ru/",
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 14.2a7.2 7.2 0 0 1-6-3.22c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.2 7.2 0 0 1-6 3.22z" />
      </svg>
    ),
    bg: "bg-[#5B4EE8]",
    hover: "hover:bg-[#4A3DD0]",
    shadow: "shadow-[#5B4EE833]",
  },
];

export const SocialSection: React.FC = () => (
  <section id="social" className="w-full bg-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          Мы в сети
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
          Найдите Александра
          <br className="hidden md:block" /> в соцсетях
        </h2>
        <p className="text-[#64748b] mt-4 text-lg max-w-xl mx-auto">
          Реальные отзывы, фото работ и быстрая связь — в ваших любимых
          приложениях.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {socials.map(({ name, handle, desc, href, Icon, bg, hover, shadow }, i) => (
          <motion.a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.18 } }}
            whileTap={{ scale: 0.97 }}
            className={`flex flex-col items-center text-center rounded-2xl p-7 text-white ${bg} ${hover} shadow-xl ${shadow} transition-colors`}
            data-testid={`link-social-${i}`}
          >
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
            >
              <Icon className="w-10 h-10 mb-4 opacity-90" />
            </motion.div>
            <h3 className="text-lg font-black mb-1">{name}</h3>
            <p className="text-white/70 text-xs font-mono mb-3 break-all">{handle}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 bg-white/20 rounded-full px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
              {desc}
            </span>
          </motion.a>
        ))}
      </div>

      {/* CTA under socials */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-center"
      >
        <p className="text-[#94a3b8] text-sm">
          Или пишите напрямую — отвечаю быстро
        </p>
      </motion.div>
    </div>
  </section>
);
