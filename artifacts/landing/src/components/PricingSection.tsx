import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, ThermometerSnowflake, Droplets, Cpu, Fan } from "lucide-react";

export const PricingSection: React.FC = () => {
  const services = [
    { icon: <Search />, title: "Диагностика", price: "от 500₽", desc: "Выявление неисправности на дому" },
    { icon: <PenTool />, title: "Замена компрессора", price: "от 2500₽", desc: "С гарантией 12 месяцев", highlight: true },
    { icon: <ThermometerSnowflake />, title: "Заправка хладагентом", price: "от 1500₽", desc: "Восстановление охлаждения" },
    { icon: <Droplets />, title: "Замена испарителя", price: "от 2000₽", desc: "Устранение обмерзания" },
    { icon: <Cpu />, title: "Ремонт платы управления", price: "от 1800₽", desc: "Электроника и автоматика" },
    { icon: <Fan />, title: "Замена вентилятора", price: "от 1200₽", desc: "Тихая работа, равномерное охлаждение" }
  ];

  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1D4ED8] font-bold tracking-widest text-sm uppercase mb-4">УСЛУГИ И ЦЕНЫ</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#1a1a1a]">Прозрачные цены без скрытых доплат</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              className={`relative bg-white p-8 rounded-xl border ${service.highlight ? 'border-[#1D4ED8]' : 'border-[#E2E8F0]'} transition-all duration-300`}
            >
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold px-3 py-1 rounded-full">
                  Популярно
                </div>
              )}
              <div className="text-[#1D4ED8] mb-6">
                {React.cloneElement(service.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">{service.title}</h4>
              <p className="text-[#64748b] mb-6">{service.desc}</p>
              <div className="text-2xl font-black text-[#1D4ED8] mt-auto">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
