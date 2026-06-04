import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock, Shield } from "lucide-react";

const features = [
  {
    Icon: Wrench,
    title: "Опыт 10+ лет",
    desc: "Работаю с холодильниками всех марок: Samsung, LG, Bosch, Atlant, Indesit, Ariston и другими.",
    color: "from-blue-50 to-blue-100/60",
  },
  {
    Icon: Clock,
    title: "Выезд за 60 минут",
    desc: "Приеду в любую точку Твери и области в течение часа после вашего звонка. Без очереди.",
    color: "from-indigo-50 to-indigo-100/60",
  },
  {
    Icon: Shield,
    title: "Гарантия 12 месяцев",
    desc: "На все виды работ и запчасти. Если поломка повторится — приеду и устраню бесплатно.",
    color: "from-sky-50 to-sky-100/60",
  },
];

export const WhySection: React.FC = () => (
  <section id="why" className="w-full bg-[#F8FAFF] py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block text-xs font-mono tracking-[0.3em] text-[#1D4ED8] uppercase mb-3 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
          Почему Александр?
        </span>
        <h2 className="text-3xl md:text-5xl font-black font-sans text-[#1a1a1a] tracking-tight mt-4">
          Быстро, честно, надолго
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(({ Icon, title, desc, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.13, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:shadow-blue-50 transition-shadow"
          >
            <div
              className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 border border-blue-100`}
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
