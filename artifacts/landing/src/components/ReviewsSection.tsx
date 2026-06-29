import React, { useState, useEffect, useCallback } from "react";
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
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Сергей Л.",
    initials: "СЛ",
    color: "bg-blue-600",
    rating: 5,
    date: "12 июня 2026",
    text: "Александр — настоящий профессионал. Холодильник LG перестал морозить, приехал через 40 минут, диагностика бесплатно. Заменил компрессор, всё работает отлично. Цена честная, гарантию дал на год. Очень рекомендую!",
    platform: "profi",
  },
  {
    id: 2,
    name: "Наталья К.",
    initials: "НК",
    color: "bg-indigo-500",
    rating: 5,
    date: "3 мая 2026",
    text: "Samsung двухкамерный — перестала работать морозилка. Александр приехал утром, к обеду холодильник уже работал как новый. Запчасти привёз с собой, всё объяснил понятно. Буду обращаться ещё!",
    platform: "profi",
  },
  {
    id: 3,
    name: "Владимир Т.",
    initials: "ВТ",
    color: "bg-sky-600",
    rating: 5,
    date: "18 апреля 2026",
    text: "Ремонт No Frost Bosch — другие мастера отказывались браться. Александр взялся, чётко объяснил что сломалось, заменил нагреватель оттайки. Теперь работает идеально. Мастер с золотыми руками!",
    platform: "profi",
  },
  {
    id: 4,
    name: "Ирина М.",
    initials: "ИМ",
    color: "bg-blue-500",
    rating: 5,
    date: "2 апреля 2026",
    text: "Холодильник Indesit начал течь водой. Приехал в тот же день, нашёл засор дренажного отверстия, прочистил, объяснил как ухаживать. Взял адекватную сумму. Очень довольна!",
    platform: "profi",
  },
  {
    id: 5,
    name: "Алексей Ф.",
    initials: "АФ",
    color: "bg-blue-700",
    rating: 5,
    date: "15 марта 2026",
    text: "Срочный вызов в воскресенье — холодильник вообще не включался. Приехал быстро, заменил реле пуска компрессора. Работает уже несколько месяцев без нареканий. Гарантию дал письменно.",
    platform: "profi",
  },
  {
    id: 6,
    name: "Татьяна В.",
    initials: "ТВ",
    color: "bg-violet-500",
    rating: 5,
    date: "28 февраля 2026",
    text: "Обратилась по рекомендации соседки. Атлант сильно обмерзал сзади. Александр приехал вечером после работы — очень удобно. Устранил проблему с тепловым датчиком. Цена вполне разумная.",
    platform: "profi",
  },
  {
    id: 7,
    name: "Дмитрий Е.",
    initials: "ДЕ",
    color: "bg-blue-900",
    rating: 5,
    date: "10 февраля 2026",
    text: "Pozis двухкамерный — сломался терморегулятор. Александр поставил оригинальную деталь, проверил всю систему. Сказал что ещё обнаружил небольшой засор — прочистил бесплатно. Честный мастер.",
    platform: "profi",
  },
  {
    id: 8,
    name: "Ольга Р.",
    initials: "ОР",
    color: "bg-sky-500",
    rating: 5,
    date: "20 июня 2026",
    text: "Нашла через Авито. Samsung сильно шумел ночью — не давал спать. Александр определил причину — вентилятор испарителя разболтался. Заменил быстро, цена точно как в объявлении. Тишина теперь!",
    platform: "avito",
  },
  {
    id: 9,
    name: "Михаил Б.",
    initials: "МБ",
    color: "bg-indigo-600",
    rating: 5,
    date: "7 мая 2026",
    text: "Заправка фреоном Атлант. Приехал с профессиональным оборудованием, всё сделал аккуратно. Нашёл небольшую утечку, запаял трубку. Прошло уже несколько месяцев — работает отлично. Честный человек.",
    platform: "avito",
  },
  {
    id: 10,
    name: "Екатерина Д.",
    initials: "ЕД",
    color: "bg-blue-400",
    rating: 5,
    date: "22 апреля 2026",
    text: "Liebherr не включался после скачка напряжения. Александр приехал в тот же вечер, заменил плату управления. Поставил оригинальную запчасть, дал гарантию 12 месяцев. Очень профессионально!",
    platform: "avito",
  },
  {
    id: 11,
    name: "Павел С.",
    initials: "ПС",
    color: "bg-blue-800",
    rating: 5,
    date: "5 апреля 2026",
    text: "Быстро, чётко, недорого. LG перестал морозить — заменил терморегулятор. Диагностика прямо на дому бесплатно. Цены точно как в объявлении на Авито, без накруток. Всем рекомендую.",
    platform: "avito",
  },
  {
    id: 12,
    name: "Галина Н.",
    initials: "ГН",
    color: "bg-teal-600",
    rating: 5,
    date: "18 марта 2026",
    text: "Старый Стинол — думала уже выкидывать. Александр сказал что ещё послужит. Заменил уплотнитель и реле — холодильник работает как надо. Сэкономила деньги, мастер молодец!",
    platform: "avito",
  },
  {
    id: 13,
    name: "Роман К.",
    initials: "РК",
    color: "bg-cyan-600",
    rating: 5,
    date: "2 марта 2026",
    text: "Beko перестал держать температуру. Александр приехал в тот же день, заправил фреон R600a, проверил на утечки. Теперь морозит отлично. Работал аккуратно, убрал за собой. Советую!",
    platform: "avito",
  },
];

function useVisibleCount() {
  const getCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };
  const [count, setCount] = useState(getCount);
  useEffect(() => {
    const handler = () => setCount(getCount());
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  return count;
}

const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5" aria-label={`Оценка ${n} из 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-4 h-4 flex-shrink-0 ${i < n ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const PlatformBadge = ({ platform }: { platform: Platform }) =>
  platform === "profi" ? (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF3B5C]/10 text-[#FF3B5C] border border-[#FF3B5C]/20 whitespace-nowrap flex-shrink-0">
      ✔ Профи.ру
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#00AAFF]/10 text-[#00AAFF] border border-[#00AAFF]/20 whitespace-nowrap flex-shrink-0">
      ✔ Авито
    </span>
  );

const FILTERS = [
  { key: "all" as const, label: "Все" },
  { key: "profi" as const, label: "Профи.ру" },
  { key: "avito" as const, label: "Авито" },
];

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<"all" | Platform>("all");
  const [current, setCurrent] = useState(0);
  const visibleCount = useVisibleCount();

  const filtered = filter === "all" ? reviews : reviews.filter(r => r.platform === filter);
  const maxIndex = Math.max(0, filtered.length - visibleCount);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex]);

  const handleFilter = (f: "all" | Platform) => {
    setFilter(f);
    setCurrent(0);
  };

  // Gap in px between cards
  const GAP = 16;

  return (
    <section
      id="reviews"
      className="w-full bg-[#EFF6FF] py-16 sm:py-24 px-4 sm:px-6"
      aria-label="Отзывы о ремонте холодильников в Твери"
    >
      <div className="max-w-6xl mx-auto">

        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-white px-4 py-1.5 rounded-full border border-blue-100">
            Отзывы клиентов · 2026
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4 leading-tight">
            Отзывы о ремонте холодильников в Твери
          </h2>
          <p className="text-[#64748b] mt-4 text-sm sm:text-base max-w-2xl mx-auto">
            Более 200 реальных отзывов на Профи.ру и Авито. Рейтинг 4.9 из 5.0.
          </p>
        </motion.div>

        {/* Фильтр */}
        <div className="flex justify-center gap-2 mb-7 flex-wrap">
          {FILTERS.map(({ key, label }) => {
            const count = key === "all" ? reviews.length : reviews.filter(r => r.platform === key).length;
            return (
              <button
                key={key}
                onClick={() => handleFilter(key)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                  filter === key
                    ? "bg-[#1D4ED8] text-white border-[#1D4ED8] shadow-md shadow-blue-200"
                    : "bg-white text-[#64748b] border-[#E2E8F0] hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
                }`}
              >
                {label}
                <span className={`ml-1.5 text-xs font-mono ${filter === key ? "text-blue-200" : "text-[#94a3b8]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Слайдер */}
        <div className="relative">
          {/* Кнопка влево */}
          <AnimatePresence>
            {current > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-5 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center text-[#1D4ED8] hover:bg-blue-50 active:scale-95 transition-all"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Viewport */}
          <div className="overflow-hidden py-2">
            <motion.div
              className="flex"
              style={{ gap: GAP }}
              animate={{ x: `calc(-${current} * (100% / ${visibleCount} + ${GAP / visibleCount}px))` }}
              transition={{ type: "spring", stiffness: 320, damping: 38 }}
            >
              {filtered.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-blue-50 flex-shrink-0 flex flex-col gap-3"
                  style={{
                    width: `calc((100% - ${(visibleCount - 1) * GAP}px) / ${visibleCount})`,
                  }}
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

                  {/* Шапка */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}>
                        {r.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-[#1a1a1a] text-sm truncate">{r.name}</p>
                        <p className="text-[#94a3b8] text-xs">{r.date}</p>
                      </div>
                    </div>
                    <PlatformBadge platform={r.platform} />
                  </div>

                  <Stars n={r.rating} />

                  <p className="text-[#64748b] text-xs sm:text-sm leading-relaxed flex-1" itemProp="reviewBody">
                    {r.text}
                  </p>

                  <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Подтверждённый отзыв
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Кнопка вправо */}
          <AnimatePresence>
            {current < maxIndex && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-5 z-10 w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg border border-blue-100 flex items-center justify-center text-[#1D4ED8] hover:bg-blue-50 active:scale-95 transition-all"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Точки-индикаторы */}
        {maxIndex > 0 && (
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
        )}

        {/* Ссылки на оригиналы */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 bg-white rounded-2xl border border-blue-100 shadow-sm p-5 sm:p-6 text-center"
        >
          <p className="text-[#1a1a1a] font-bold text-base sm:text-lg mb-1">
            Хотите увидеть все 200+ отзывов?
          </p>
          <p className="text-[#64748b] text-sm mb-5">
            Здесь показаны последние отзывы. Полный список — на официальных страницах мастера:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.a
              href="https://profi.ru/profile/AleksandrovAA226/reviews"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border-2 border-[#FF3B5C]/40 text-[#FF3B5C] font-bold text-sm hover:bg-[#FF3B5C]/5 transition-colors bg-[#FF3B5C]/5"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              Читать все отзывы на Профи.ру →
            </motion.a>
            <motion.a
              href="https://www.avito.ru/tver/predlozheniya_uslug/remont_holodilnikov_2109964398#open-reviews-list"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border-2 border-[#00AAFF]/40 text-[#00AAFF] font-bold text-sm hover:bg-[#00AAFF]/5 transition-colors bg-[#00AAFF]/5"
            >
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              Читать все отзывы на Авито →
            </motion.a>
          </div>
        </motion.div>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-blue-100 mt-8"
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
          <div className="flex flex-row justify-center gap-3 sm:gap-8">
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
                className="flex flex-col items-center gap-1.5 bg-[#F8FAFF] rounded-2xl px-3 sm:px-6 py-4 sm:py-5 flex-1"
              >
                <span className="text-2xl sm:text-4xl md:text-5xl font-black text-[#1D4ED8] leading-none">{value}</span>
                <span className="text-[#64748b] text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-center">{label}</span>
                <span className="text-[#94a3b8] text-[10px] sm:text-[11px] leading-tight text-center hidden sm:block">{desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
