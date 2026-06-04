import React from "react";
import { motion } from "framer-motion";
import { Search, Wrench, Thermometer, Snowflake, Cpu, Fan } from "lucide-react";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const services = [
  { Icon: Search,      title: "Диагностика на дому",       price: "от 500₽",  desc: "Точное выявление неисправности за 30 минут" },
  { Icon: Wrench,      title: "Замена компрессора",         price: "от 2500₽", desc: "Оригинальные запчасти, гарантия 12 месяцев", highlight: true },
  { Icon: Thermometer, title: "Заправка хладагентом",       price: "от 1500₽", desc: "Восстановление охлаждающего контура" },
  { Icon: Snowflake,   title: "Замена испарителя",          price: "от 2000₽", desc: "Устранение обмерзания и утечек" },
  { Icon: Cpu,         title: "Ремонт платы управления",    price: "от 1800₽", desc: "Диагностика и восстановление электроники" },
  { Icon: Fan,         title: "Замена вентилятора",         price: "от 1200₽", desc: "Тихая работа, равномерное охлаждение" },
];

export const PricingSection: React.FC = () => (
  <section id="pricing" className="w-full bg-white py-24 px-6">
    <div className="max-w-6xl mx-auto">
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
          Прозрачные цены без скрытых доплат
        </h2>
        <p className="text-[#64748b] mt-4 text-lg">
          Окончательная стоимость — после диагностики. Никаких сюрпризов.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(({ Icon, title, price, desc, highlight }, i) => (
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
          >
            {highlight && (
              <span className="absolute top-4 right-4 bg-[#1D4ED8] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                Популярно
              </span>
            )}
            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-[#1D4ED8]" strokeWidth={1.7} />
            </div>
            <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 pr-16">{title}</h3>
            <p className="text-[#94a3b8] text-sm mb-5 leading-relaxed">{desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-black text-[#1D4ED8]">{price}</span>
              <motion.button
                onClick={() => scrollTo("contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="text-sm font-semibold text-[#1D4ED8] hover:underline"
                data-testid={`button-order-${i}`}
              >
                Заказать →
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <motion.a
          href="tel:+74822334455"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#1D4ED8] text-white rounded-xl font-semibold text-lg hover:bg-[#1e40af] transition-colors shadow-lg shadow-blue-200"
          data-testid="button-call-pricing"
        >
          📞 Позвонить и узнать цену
        </motion.a>
        <p className="text-[#94a3b8] text-sm mt-3">
          +7 (4822) 33-44-55 · Бесплатная консультация
        </p>
      </motion.div>
    </div>
  </section>
);
