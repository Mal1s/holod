import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { name: "Михаил К.", initials: "МК", color: "bg-blue-600", text: "Холодильник перестал морозить в пятницу вечером — Александр приехал за 45 минут. Починил за час. Мастер своего дела." },
  { name: "Светлана Т.", initials: "СТ", color: "bg-indigo-500", text: "Поставил диагноз ещё по телефону. Приехал, подтвердил, устранил. Работает как новый. Рекомендую всем." },
  { name: "Дмитрий Р.", initials: "ДР", color: "bg-sky-600", text: "Менял компрессор — цена честная, запчасти оригинальные, гарантия на год. Очень доволен результатом." },
  { name: "Анна В.", initials: "АВ", color: "bg-blue-500", text: "Уже три года ремонтирует всю технику в нашей семье. Надёжный мастер, всегда приходит вовремя." },
];

const stats = [
  { value: "10+", label: "лет опыта" },
  { value: "1200+", label: "ремонтов" },
  { value: "4.9★", label: "рейтинг" },
];

export const ReviewsSection: React.FC = () => (
  <section id="reviews" className="w-full bg-[#EFF6FF] py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-white px-4 py-1.5 rounded-full border border-blue-100">
          Отзывы клиентов
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
          Что говорят клиенты
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {reviews.map(({ name, initials, color, text }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.18 } }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 hover:shadow-lg hover:shadow-blue-50 transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                {initials}
              </div>
              <div>
                <p className="font-bold text-[#1a1a1a] text-sm">{name}</p>
                <div className="text-yellow-400 text-sm tracking-tight">★★★★★</div>
              </div>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-blue-100"
      >
        {stats.map(({ value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-[#1D4ED8] mb-1">{value}</div>
            <div className="text-[#94a3b8] text-xs uppercase tracking-wider font-medium">{label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
