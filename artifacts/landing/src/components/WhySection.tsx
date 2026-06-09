import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock, Shield, BadgeCheck, Banknote, ThumbsUp } from "lucide-react";

const features = [
  {
    Icon: Wrench,
    title: "Опыт 10+ лет",
    desc: "Работаю с холодильниками всех марок: Samsung, LG, Bosch, Atlant, Indesit, Ariston, Stinol, Liebherr, Whirlpool, Electrolux, Hotpoint-Ariston, Бирюса, Nord и другими.",
    color: "from-blue-50 to-blue-100/60",
    keywords: "опытный мастер, ремонт холодильников всех марок",
  },
  {
    Icon: Clock,
    title: "Выезд за 60 минут",
    desc: "Приеду в любую точку Твери и области в течение часа после вашего звонка. Работаю ежедневно с 8:00 до 22:00 без выходных.",
    color: "from-indigo-50 to-indigo-100/60",
    keywords: "срочный выезд, ремонт холодильников на дому",
  },
  {
    Icon: Shield,
    title: "Гарантия 12 месяцев",
    desc: "На все виды работ и запчасти. Если поломка повторится — приеду и устраню бесплатно в рамках гарантии.",
    color: "from-sky-50 to-sky-100/60",
    keywords: "гарантия на ремонт, ремонт холодильников с гарантией",
  },
  {
    Icon: Banknote,
    title: "Честные цены",
    desc: "Озвучиваю точную стоимость до начала ремонта. Никаких скрытых платежей. Оплата только после выполненной работы.",
    color: "from-green-50 to-green-100/60",
    keywords: "недорогой ремонт, честные цены, ремонт холодильников недорого",
  },
  {
    Icon: BadgeCheck,
    title: "Оригинальные запчасти",
    desc: "Использую только проверенные запчасти от производителей. Все комплектующие с гарантией качества.",
    color: "from-purple-50 to-purple-100/60",
    keywords: "оригинальные запчасти, замена компрессора, заправка фреоном",
  },
  {
    Icon: ThumbsUp,
    title: "200+ отзывов",
    desc: "Более 200 положительных отзывов на Авито, Профи.ру и в соцсетях. Рейтинг 4.9 из 5.0.",
    color: "from-amber-50 to-amber-100/60",
    keywords: "отзывы о ремонте, рейтинг мастера, проверенный мастер",
  },
];

export const WhySection: React.FC = () => (
  <section 
    id="why" 
    className="w-full bg-[#F8FAFF] py-24 px-6"
    aria-label="Преимущества мастера по ремонту холодильников"
    itemScope
    itemType="https://schema.org/ItemList"
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
        <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          Почему выбирают Александра
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
          Ремонт холодильников в Твери — быстро, честно, надолго
        </h2>
        <p className="text-[#64748b] mt-4 text-lg max-w-2xl mx-auto">
          Частный мастер с опытом 10+ лет. Выезд на дом за 60 минут. Гарантия 12 месяцев. 
          Диагностика бесплатно. Работаю со всеми марками холодильников.
        </p>
      </motion.div>

      {/* Сетка преимуществ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ Icon, title, desc, color, keywords }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.13, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:shadow-blue-50 transition-shadow"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(i + 1)} />
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={keywords} />

            <div
              className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 border border-blue-100`}
              aria-hidden="true"
            >
              <Icon className="w-7 h-7 text-[#1D4ED8]" strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-bold font-sans text-[#1a1a1a] mb-3">{title}</h3>
            <p className="text-[#64748b] leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);