import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const PricingSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const services = [
    { title: "Диагностика на дому", price: "от 500₽", desc: "Точное определение неисправности за 30 минут", highlight: false },
    { title: "Замена компрессора", price: "от 2500₽", desc: "Оригинальные запчасти, гарантия 12 месяцев", highlight: true },
    { title: "Заправка хладагентом", price: "от 1500₽", desc: "Восстановление охлаждающего контура", highlight: false },
    { title: "Замена испарителя", price: "от 2000₽", desc: "Устранение обмерзания и утечек", highlight: false },
    { title: "Ремонт платы управления", price: "от 1800₽", desc: "Диагностика и восстановление электроники", highlight: false },
    { title: "Замена вентилятора", price: "от 1200₽", desc: "Тихая работа, равномерное охлаждение", highlight: false },
  ];

  return (
    <section className="relative w-full h-screen snap-start overflow-hidden bg-black flex flex-col items-center justify-center px-6 py-20" ref={ref}>
      <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-16 tracking-[0.2em] uppercase text-center w-full">ПРАЙС-ЛИСТ УСЛУГ</h2>
      
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`interactive-card relative p-6 bg-[rgba(255,255,255,0.03)] flex flex-col justify-between min-h-[160px] group transition-all duration-300
              ${service.highlight ? 'border border-[#004FFF]' : 'border border-[rgba(255,255,255,0.1)] hover:border-[#333]'}`}
          >
            {service.highlight && (
              <div className="absolute top-0 right-0 bg-[#004FFF] text-black text-[10px] font-bold font-mono px-2 py-1 uppercase">
                РЕКОМЕНДУЕМАЯ
              </div>
            )}
            
            <div>
              <h3 className="text-white font-sans font-bold text-lg mb-2 group-hover:text-[#004FFF] transition-colors">{service.title}</h3>
              <p className="text-gray-400 font-mono text-xs leading-relaxed">{service.desc}</p>
            </div>
            
            <div className="mt-6 border-t border-[#222] pt-4 flex justify-between items-center">
              <span className="text-[#004FFF] font-mono font-bold">{service.price}</span>
              <span className="text-white font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">{"->"}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
