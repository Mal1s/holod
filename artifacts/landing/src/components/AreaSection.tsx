import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";

const districts = [
  "Заволжский район", "Московский район", "Пролетарский район", "Центральный район",
  "Юность", "Чайка", "Мамулино", "Соминка", "Мигалово", "Первомайский",
  "Затверечье", "Вагонники", "Власьево", "Химволокно", "Больший Перемерки",
];

const cities = [
  { name: "Ржев", km: "80 км" },
  { name: "Торжок", km: "55 км" },
  { name: "Конаково", km: "45 км" },
  { name: "Кимры", km: "90 км" },
  { name: "Вышний Волочёк", km: "120 км" },
  { name: "Удомля", km: "150 км" },
];

const faqs = [
  {
    q: "Сколько стоит ремонт холодильника в Твери?",
    a: "Диагностика — бесплатно. Замена компрессора — от 5 000 ₽, заправка фреоном — от 2 500 ₽, ремонт платы управления — от 3 500 ₽, устранение утечки — от 2 000 ₽, замена терморегулятора — от 1 500 ₽, ремонт No Frost — от 3 000 ₽. Точную цену назову после диагностики.",
  },
  {
    q: "Как быстро приедет мастер по ремонту холодильника в Твери?",
    a: "По Твери выезжаю в течение 60 минут. По Тверской области — 2–3 часа в зависимости от расстояния. Работаю ежедневно с 8:00 до 22:00 без выходных и праздников.",
  },
  {
    q: "Какая гарантия на ремонт холодильника?",
    a: "Гарантия 12 месяцев на все виды работ. На заменённые запчасти — гарантия производителя. Если поломка повторится в гарантийный срок — ремонт бесплатно.",
  },
  {
    q: "Какие марки холодильников ремонтирует мастер?",
    a: "Samsung, LG, Bosch, Indesit, Atlant, Stinol, Liebherr, Whirlpool, Electrolux, Hotpoint-Ariston, Бирюса, Nord, Саратов, Pozis, Snaige, BEKO, Candy, Sharp, Daewoo и другие.",
  },
  {
    q: "Что делать если холодильник не морозит?",
    a: "Не пытайтесь чинить самостоятельно. Позвоните Александру: +7 (920) 156-02-92 — приеду в течение часа, проведу бесплатную диагностику и устраню неисправность.",
  },
  {
    q: "Ремонтируете холодильники с системой No Frost?",
    a: "Да, специализируюсь на ремонте No Frost. Замена испарителя, вентилятора, нагревателя оттайки, датчиков, ремонт модуля управления — всё выполняю на дому.",
  },
];

const FaqItem: React.FC<{ q: string; a: string; i: number }> = ({ q, a, i }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      className="border border-[#E2E8F0] rounded-2xl overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#F8FAFF] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1a1a1a] text-sm sm:text-base leading-snug" itemProp="name">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#1D4ED8]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              className="px-5 pb-5 pt-1 text-[#64748b] text-sm leading-relaxed"
              itemProp="text"
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const AreaSection: React.FC = () => (
  <>
    {/* ── Районы обслуживания ── */}
    <section
      id="areas"
      className="w-full bg-white py-20 px-4 sm:px-6"
      itemScope
      itemType="https://schema.org/Service"
      aria-label="Районы обслуживания — ремонт холодильников в Твери"
    >
      <meta itemProp="name" content="Ремонт холодильников в Твери и области" />
      <meta itemProp="areaServed" content="Тверь, Тверская область" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            <MapPin className="w-3 h-3" />
            Зона выезда
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-sans text-[#1a1a1a] tracking-tight mt-3">
            Выезжаю по всей Твери и области
          </h2>
          <p className="text-[#64748b] mt-3 text-base max-w-xl mx-auto">
            Ремонт холодильников на дому — без транспортировки. Работаю во всех районах Твери и выезжаю в города области.
          </p>
        </motion.div>

        {/* Районы Твери */}
        <div className="mb-10">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#94a3b8] mb-4 text-center">
            Районы Твери
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {districts.map((d, i) => (
              <motion.span
                key={d}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="inline-flex items-center gap-1.5 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-medium px-3 py-1.5 rounded-full border border-blue-100"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] flex-shrink-0" />
                {d}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Города области */}
        <div>
          <h3 className="text-sm font-mono uppercase tracking-widest text-[#94a3b8] mb-4 text-center">
            Города Тверской области
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 max-w-3xl mx-auto">
            {cities.map(({ name, km }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-[#F8FAFF] rounded-xl p-3 text-center border border-[#E8EFF8]"
              >
                <p className="font-bold text-[#1a1a1a] text-sm">{name}</p>
                <p className="text-[#94a3b8] text-xs mt-0.5">{km}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 bg-[#EFF6FF] rounded-2xl p-6 border border-blue-100"
        >
          <div className="text-center sm:text-left">
            <p className="font-black text-[#1a1a1a] text-lg">Ваш район — в зоне выезда</p>
            <p className="text-[#64748b] text-sm">Уточните время прибытия по телефону</p>
          </div>
          <motion.a
            href="tel:+79201560292"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 px-7 py-3.5 bg-[#1D4ED8] text-white rounded-xl font-bold hover:bg-[#1e40af] transition-colors shadow-md shadow-blue-200"
          >
            +7 (920) 156-02-92
          </motion.a>
        </motion.div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section
      id="faq"
      className="w-full bg-[#F8FAFF] py-20 px-4 sm:px-6"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-label="Частые вопросы о ремонте холодильников"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight mt-3">
            Частые вопросы
          </h2>
          <p className="text-[#64748b] mt-3 text-base">
            Ответы на самые популярные вопросы о ремонте холодильников в Твери
          </p>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} i={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#94a3b8] text-sm mt-8"
        >
          Не нашли ответ?{" "}
          <a href="tel:+79201560292" className="text-[#1D4ED8] font-semibold hover:underline">
            Позвоните: +7 (920) 156-02-92
          </a>
        </motion.p>
      </div>
    </section>
  </>
);
