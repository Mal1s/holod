import React from "react";
import { motion } from "framer-motion";

const reviews = [
  { 
    name: "Михаил К.", 
    initials: "МК", 
    color: "bg-blue-600", 
    text: "Холодильник перестал морозить в пятницу вечером — Александр приехал за 45 минут. Починил за час. Мастер своего дела. Рекомендую всем, кто ищет ремонт холодильников в Твери.",
    keywords: "срочный ремонт холодильника, холодильник не морозит, мастер Тверь",
  },
  { 
    name: "Светлана Т.", 
    initials: "СТ",  
    color: "bg-indigo-500", 
    text: "Поставил диагноз ещё по телефону. Приехал, подтвердил, устранил. Холодильник работает как новый. Очень довольна ремонтом. Честные цены, без обмана.",
    keywords: "диагностика холодильника, честный мастер, ремонт холодильников недорого",
  },
  { 
    name: "Дмитрий Р.", 
    initials: "ДР", 
    color: "bg-sky-600", 
    text: "Менял компрессор на Samsung — цена честная, запчасти оригинальные, гарантия 12 месяцев. Очень доволен результатом. Мастер знает своё дело.",
    keywords: "замена компрессора, оригинальные запчасти, гарантия на ремонт",
  },
  { 
    name: "Анна В.", 
    initials: "АВ", 
    color: "bg-blue-500", 
    text: "Уже три года ремонтирует всю технику в нашей семье. Надёжный мастер, всегда приходит вовремя. Ремонтировал холодильник, стиральную машину — всё отлично.",
    keywords: "надёжный мастер, ремонт бытовой техники, постоянный клиент",
  },
];

const stats = [
  { value: "10+", label: "лет опыта", desc: "ремонта холодильников" },
  { value: "1 200+", label: "ремонтов", desc: "выполнено мастером" },
  { value: "4.9★", label: "рейтинг", desc: "на Профи.ру и Авито" },
];

export const ReviewsSection: React.FC = () => (
  <section 
    id="reviews"  
    className="w-full bg-[#EFF6FF] py-24 px-6"
    aria-label="Отзывы о ремонте холодильников в Твери"
  >
    <div className="max-w-6xl mx-auto">

      {/* Заголовок секции */}
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
          Отзывы о ремонте холодильников в Твери
        </h2>
        <p className="text-[#64748b] mt-4 text-lg max-w-2xl mx-auto">
          Более 200 положительных отзывов на Авито, Профи.ру, ВКонтакте и Одноклассниках. 
          Рейтинг 4.9 из 5.0. Реальные клиенты о работе мастера Александра.
        </p>
      </motion.div>

      {/* Скрытый SEO-заголовок */}
      <h3 className="sr-only">
        Реальные отзывы клиентов о ремонте холодильников: срочный выезд мастера, 
        замена компрессора, диагностика бесплатно, честные цены, гарантия 12 месяцев, 
        ремонт холодильников всех марок в Твери и области.
      </h3>

      {/* Сетка отзывов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {reviews.map(({ name, initials, color, text, keywords }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4, transition: { duration: 0.18 } }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-blue-50 hover:shadow-lg hover:shadow-blue-50 transition-shadow"
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <meta itemProp="name" content={`Отзыв о ремонте холодильника — ${name}`} />
            <meta itemProp="description" content={keywords} />
            <div itemProp="author" itemScope itemType="https://schema.org/Person">
              <meta itemProp="name" content={name} />
            </div>
            <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
              <meta itemProp="ratingValue" content="5" />
              <meta itemProp="bestRating" content="5" />
            </div>
            <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content="Александр — Ремонт холодильников в Твери" />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`} aria-hidden="true">
                {initials}
              </div>
              <div>
                <p className="font-bold text-[#1a1a1a] text-sm">{name}</p>
                <div className="text-yellow-400 text-sm tracking-tight" aria-label="Оценка 5 звёзд из 5">★★★★★</div>
              </div>
            </div>
            <p className="text-[#64748b] text-sm leading-relaxed">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* Статистика */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-6 max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-blue-100"
        itemScope
        itemType="https://schema.org/AggregateRating"
      >
        <meta itemProp="ratingValue" content="4.9" />
        <meta itemProp="bestRating" content="5.0" />
        <meta itemProp="ratingCount" content="200" />
        <meta itemProp="reviewCount" content="200" />
        <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="Александр — Ремонт холодильников в Твери" />
        </div>
        
        {stats.map(({ value, label, desc }, i) => (
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
            <div className="text-[#94a3b8] text-[10px] mt-0.5">{desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);