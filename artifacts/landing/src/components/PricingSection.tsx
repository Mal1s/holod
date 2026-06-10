import React from "react";
import { motion } from "framer-motion";
import { Search, Wrench, Thermometer, Snowflake, Cpu, Fan, Droplets, Zap } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const services = [
  { 
    Icon: Search, 
    title: "Диагностика холодильника на дому", 
    price: "Бесплатно", 
    desc: "Точное выявление неисправности за 30 минут. Бесплатно в случае ремонта.",
    keywords: "диагностика холодильника бесплатно, выезд мастера, ремонт холодильников Тверь",
    isFree: true,
  },
  { 
    Icon: Wrench, 
    title: "Замена компрессора холодильника", 
    price: "от 5 000₽", 
    desc: "Оригинальные запчасти, гарантия 12 месяцев. Замена компрессора Samsung, LG, Bosch, Atlant, Indesit.",
    keywords: "замена компрессора холодильника, ремонт компрессора, компрессор холодильника цена",
    highlight: true,
  },
  { 
    Icon: Droplets, 
    title: "Заправка фреоном холодильника", 
    price: "от 2 500₽", 
    desc: "Заправка хладагентом R600a, R134a, R290. Восстановление охлаждающего контура.",
    keywords: "заправка фреоном, заправка холодильника, хладагент, утечка фреона",
  },
  { 
    Icon: Thermometer, 
    title: "Замена терморегулятора", 
    price: "от 1 500₽", 
    desc: "Замена термостата холодильника. Восстановление правильного температурного режима.",
    keywords: "замена терморегулятора, термостат холодильника, температура холодильника",
  },
  { 
    Icon: Snowflake, 
    title: "Ремонт системы No Frost", 
    price: "от 3 000₽", 
    desc: "Ремонт системы Ноу Фрост. Замена испарителя, вентилятора, нагревателя оттайки, датчиков.",
    keywords: "ремонт No Frost, ноу фрост ремонт, система ноу фрост, обмерзание холодильника",
  },
  { 
    Icon: Cpu, 
    title: "Ремонт платы управления", 
    price: "от 3 500₽", 
    desc: "Диагностика и восстановление электронной платы. Ремонт модуля управления холодильника.",
    keywords: "ремонт платы управления, электроника холодильника, модуль управления, плата холодильника",
  },
  { 
    Icon: Fan, 
    title: "Замена вентилятора испарителя", 
    price: "от 1 200₽", 
    desc: "Тихая работа, равномерное охлаждение. Замена вентилятора в холодильнике.",
    keywords: "замена вентилятора, вентилятор холодильника, шумит холодильник",
  },
  { 
    Icon: Zap, 
    title: "Устранение утечки фреона", 
    price: "от 2 000₽", 
    desc: "Поиск и устранение утечки хладагента. Герметизация системы охлаждения.",
    keywords: "утечка фреона, устранение утечки, холодильник не морозит, ремонт утечки",
  },
];

export const PricingSection: React.FC = () => (
  <section 
    id="pricing" 
    className="w-full bg-white py-24 px-6"
    aria-label="Цены на ремонт холодильников в Твери"
    itemScope
    itemType="https://schema.org/OfferCatalog"
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
          Услуги и цены
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
          Цены на ремонт холодильников в Твери
        </h2>
        <p className="text-[#64748b] mt-4 text-lg max-w-2xl mx-auto">
          Прозрачные цены без скрытых доплат. Окончательная стоимость — после бесплатной диагностики. 
          Работаю со всеми марками холодильников: Samsung, LG, Bosch, Atlant, Indesit, Stinol и другими.
        </p>
      </motion.div>

      {/* Скрытый SEO-заголовок */}
      <h3 className="sr-only">
        Полный список услуг по ремонту холодильников: диагностика холодильника бесплатно, 
        замена компрессора от 5000₽, заправка фреоном от 2500₽, замена терморегулятора от 1500₽, 
        ремонт системы No Frost от 3000₽, ремонт платы управления от 3500₽, 
        замена вентилятора испарителя от 1200₽, устранение утечки фреона от 2000₽.
      </h3>

      {/* Сетка услуг */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ Icon, title, price, desc, highlight, isFree, keywords }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            whileHover={{ y: -5, transition: { duration: 0.18 } }}
            className={`relative bg-white rounded-2xl p-7 border-2 transition-shadow hover:shadow-xl hover:shadow-blue-50 ${
              highlight ? "border-[#1D4ED8] shadow-md shadow-blue-100" : "border-[#E2E8F0]"
            }`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={keywords} />
            <meta itemProp="priceCurrency" content="RUB" />
            <meta itemProp="price" content={price === "Бесплатно" ? "0" : price.replace(/[^0-9]/g, "")} />
            <meta itemProp="availability" content="https://schema.org/InStock" />

            {highlight && (
              <span className="absolute top-4 right-4 bg-[#1D4ED8] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Популярно
              </span>
            )}
            {isFree && (
              <span className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Бесплатно
              </span>
            )}

            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-5" aria-hidden="true">
              <Icon className="w-6 h-6 text-[#1D4ED8]" strokeWidth={1.7} />
            </div>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 pr-16">{title}</h3>
            <p className="text-[#94a3b8] text-sm mb-5 leading-relaxed">{desc}</p>
            <div className="flex items-center justify-between">
              <span className={`text-2xl font-black ${isFree ? "text-green-500" : "text-[#1D4ED8]"}`}>
                {price}
              </span>
              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="text-sm font-semibold text-[#1D4ED8] hover:underline"
                data-testid={`button-order-${i}`}
                aria-label={`Заказать услугу: ${title}`}
              >
                Заказать →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Кнопка звонка */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <motion.a
          href="tel:+79201560292"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#1D4ED8] text-white rounded-xl font-semibold text-lg hover:bg-[#1e40af] transition-colors shadow-lg shadow-blue-200"
          data-testid="button-call-pricing"
          aria-label="Позвонить и узнать цену ремонта холодильника +7 (920) 156-02-92"
        >
          📞 Позвонить и узнать цену
        </motion.a>
        <p className="text-[#94a3b8] text-sm mt-3">
          +7 (920) 156-02-92 · Бесплатная консультация по ремонту холодильников
        </p>
      </motion.div>
    </div> 
  </section>
);