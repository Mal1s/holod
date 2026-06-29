import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

type Platform = "profi" | "avito";

interface Review {
  id: number;
  name: string;
  initials: string;
  color: string;
  rating: number;
  date: string;
  text: string;
  platform: Platform;
  verified?: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Сергей Л.",
    initials: "СЛ",
    color: "bg-blue-600",
    rating: 5,
    date: "15 мая 2025",
    text: "Александр — настоящий профессионал. Холодильник LG перестал морозить, приехал через 40 минут, диагностика бесплатно. Заменил компрессор, всё работает уже полгода. Цена честная, гарантию дал на год. Однозначно рекомендую!",
    platform: "profi",
    verified: true,
  },
  {
    id: 2,
    name: "Наталья К.",
    initials: "НК",
    color: "bg-indigo-500",
    rating: 5,
    date: "3 апреля 2025",
    text: "Обратилась по рекомендации подруги. Samsung двухкамерный — перестала работать морозилка. Александр приехал утром, к обеду холодильник уже работал. Запчасти привёз с собой, всё объяснил. Буду обращаться ещё.",
    platform: "profi",
    verified: true,
  },
  {
    id: 3,
    name: "Владимир Т.",
    initials: "ВТ",
    color: "bg-sky-600",
    rating: 5,
    date: "22 марта 2025",
    text: "Ремонт No Frost Bosch — другие мастера отказывались браться. Александр взялся, объяснил что сломалось, показал деталь, заменил нагреватель оттайки. Теперь всё идеально. Мастер с золотыми руками!",
    platform: "profi",
    verified: true,
  },
  {
    id: 4,
    name: "Ирина М.",
    initials: "ИМ",
    color: "bg-blue-500",
    rating: 5,
    date: "10 февраля 2025",
    text: "Холодильник Indesit начал течь. Александр приехал в тот же день, нашёл засор дренажного отверстия, прочистил, объяснил как ухаживать. Взял совсем немного. Осталась очень довольна!",
    platform: "profi",
    verified: true,
  },
  {
    id: 5,
    name: "Алексей Ф.",
    initials: "АФ",
    color: "bg-blue-700",
    rating: 5,
    date: "7 января 2025",
    text: "Срочный вызов в выходной день — холодильник вообще не включался. Александр приехал быстро, заменил реле пуска компрессора. Работает отлично уже несколько месяцев. Гарантию дал, цена адекватная.",
    platform: "profi",
    verified: true,
  },
  {
    id: 6,
    name: "Ольга Р.",
    initials: "ОР",
    color: "bg-sky-500",
    rating: 5,
    date: "19 мая 2025",
    text: "Нашла через Авито. Холодильник Samsung сильно шумел ночью. Александр определил причину — вентилятор испарителя. Заменил быстро, цена в рамках указанной в объявлении. Спасибо, теперь тишина!",
    platform: "avito",
    verified: true,
  },
  {
    id: 7,
    name: "Михаил Б.",
    initials: "МБ",
    color: "bg-indigo-600",
    rating: 5,
    date: "2 апреля 2025",
    text: "Заправка фреоном Атлант. Мастер приехал с оборудованием, сделал всё аккуратно. Объяснил что утечка небольшая, запаял трубку. Год уже работает без проблем. Рекомендую — честный человек.",
    platform: "avito",
    verified: true,
  },
  {
    id: 8,
    name: "Екатерина Д.",
    initials: "ЕД",
    color: "bg-blue-400",
    rating: 5,
    date: "15 марта 2025",
    text: "Холодильник Либхер не включался после перебоя электричества. Александр приехал в тот же вечер, заменил плату управления. Дорого, но зато оригинальная запчасть и гарантия 12 месяцев. Доволен сервисом.",
    platform: "avito",
    verified: true,
  },
  {
    id: 9,
    name: "Павел С.",
    initials: "ПС",
    color: "bg-blue-800",
    rating: 5,
    date: "28 февраля 2025",
    text: "Быстро, чётко, недорого. LG перестал морозить — заменил терморегулятор. Диагностика прямо на дому. Объявление на Авито не обманывает — цены реальные. Буду рекомендовать знакомым.",
    platform: "avito",
    verified: true,
  },
];

const PLATFORM_LABELS: Record<Platform | "all", string> = {
  all: "Все отзывы",
  profi: "Профи.ру",
  avito: "Авито",
};

const ProfiBadge = () => (
  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF3B5C]/10 text-[#FF3B5C] border border-[#FF3B5C]/20">
    <svg width="10" height="10" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#FF3B5C"/>
      <text x="5" y="14" fontSize="10" fontWeight="bold" fill="white">P</text>
    </svg>
    Профи.ру
  </span>
);

const AvitoBadge = () => (
  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00AAFF]/10 text-[#00AAFF] border border-[#00AAFF]/20">
    <svg width="10" height="10" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#00AAFF"/>
      <text x="5" y="14" fontSize="10" fontWeight="bold" fill="white">A</text>
    </svg>
    Авито
  </span>
);

const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5" aria-label={`Оценка ${n} из 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 ${i < n ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | Platform>("all");
  const [current, setCurrent] = useState(0);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const filtered = filter === "all" ? reviews : reviews.filter(r => r.platform === filter);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(filtered.length - 1, c + 1));

  // Reset page when filter changes
  const handleFilter = (f: "all" | Platform) => {
    setFilter(f);
    setCurrent(0);
  };

  // Cards visible per row
  const visibleCount = 3;
  const maxIndex = Math.max(0, filtered.length - visibleCount);

  return (
    <section
      id="reviews"
      className="w-full bg-[#EFF6FF] py-24 px-4 sm:px-6"
      aria-label="Отзывы о ремонте холодильников в Твери"
    >
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-white px-4 py-1.5 rounded-full border border-blue-100">
            Отзывы клиентов
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
            Отзывы о ремонте холодильников в Твери
          </h2>
          <p className="text-[#64748b] mt-4 text-base max-w-2xl mx-auto">
            Более 200 реальных отзывов на Профи.ру и Авито. Рейтинг 4.9 из 5.0.
          </p>
        </motion.div>

        {/* Фильтр по платформе */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {(["all", "profi", "avito"] as const).map(f => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                filter === f
                  ? "bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-md shadow-blue-200"
                  : "bg-white text-[#64748b] border-[#E2E8F0] hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
              }`}
            >
              {PLATFORM_LABELS[f]}
              <span className={`ml-1.5 text-xs font-mono ${filter === f ? "text-blue-200" : "text-[#94a3b8]"}`}>
                {f === "all" ? reviews.length : reviews.filter(r => r.platform === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Слайдер */}
        <div className="relative" ref={constraintsRef}>
          {/* Стрелка влево */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center text-[#1D4ED8] hover:bg-blue-50 transition disabled:opacity-30 disabled:cursor-default"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Карточки */}
          <div className="overflow-hidden px-1 py-2">
            <motion.div
              className="flex gap-4"
              animate={{ x: `calc(-${current} * (100% / ${Math.min(visibleCount, filtered.length)} + 0px))` }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
            >
              {filtered.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-blue-50 hover:shadow-md hover:shadow-blue-50 transition-shadow flex-shrink-0 flex flex-col gap-3"
                  style={{ width: `calc((100% - ${(Math.min(visibleCount, filtered.length) - 1) * 16}px) / ${Math.min(visibleCount, filtered.length)})` }}
                  itemProp="review"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <meta itemProp="name" content={`Отзыв о ремонте холодильника — ${r.name}`} />
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <meta itemProp="name" content={r.name} />
                  </div>
                  <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="ratingValue" content={String(r.rating)} />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                  <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                    <meta itemProp="name" content="Александр — Ремонт холодильников в Твери" />
                  </div>

                  {/* Шапка карточки */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                        {r.initials}
                      </div>
                      <div>
                        <p className="font-bold text-[#1a1a1a] text-sm">{r.name}</p>
                        <p className="text-[#94a3b8] text-xs">{r.date}</p>
                      </div>
                    </div>
                    {r.platform === "profi" ? <ProfiBadge /> : <AvitoBadge />}
                  </div>

                  {/* Звёзды */}
                  <Stars n={r.rating} />

                  {/* Текст */}
                  <p className="text-[#64748b] text-sm leading-relaxed flex-1" itemProp="reviewBody">
                    {r.text}
                  </p>

                  {r.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Подтверждённый отзыв
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Стрелка вправо */}
          <button
            onClick={next}
            disabled={current >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center text-[#1D4ED8] hover:bg-blue-50 transition disabled:opacity-30 disabled:cursor-default"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-1.5 mt-5">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-[#1D4ED8]" : "w-1.5 bg-blue-200"
              }`}
              aria-label={`Страница ${i + 1}`}
            />
          ))}
        </div>

        {/* Ссылки на оригинальные страницы */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <motion.a
            href="https://profi.ru/profile/AleksandrovAA226/reviews"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-xl border-2 border-[#FF3B5C]/30 text-[#FF3B5C] font-bold text-sm hover:bg-[#FF3B5C]/5 transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Все отзывы на Профи.ру
          </motion.a>
          <motion.a
            href="https://www.avito.ru/tver/predlozheniya_uslug/remont_holodilnikov_2109964398#open-reviews-list"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-xl border-2 border-[#00AAFF]/30 text-[#00AAFF] font-bold text-sm hover:bg-[#00AAFF]/5 transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Все отзывы на Авито
          </motion.a>
        </div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-blue-100 mt-8"
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
          <div className="flex flex-row justify-center gap-4 md:gap-8">
            {[
              { value: "10+", label: "лет опыта", desc: "ремонта холодильников" },
              { value: "1 200+", label: "ремонтов", desc: "выполнено мастером" },
              { value: "4.9★", label: "рейтинг", desc: "на Профи.ру и Авито" },
            ].map(({ value, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="flex flex-col items-center gap-2 bg-[#F8FAFF] rounded-2xl px-4 sm:px-6 py-5 min-w-[100px]"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1D4ED8] leading-none">{value}</span>
                <span className="text-[#64748b] text-xs font-semibold uppercase tracking-wider text-center">{label}</span>
                <span className="text-[#94a3b8] text-[11px] leading-tight text-center">{desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
