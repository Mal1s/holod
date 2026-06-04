import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock, Shield } from "lucide-react";

export const WhySection: React.FC = () => {
  const features = [
    {
      icon: <Wrench className="w-8 h-8 text-[#1D4ED8]" />,
      title: "Опыт 10+ лет",
      desc: "Работаю с холодильниками всех марок: Samsung, LG, Bosch, Atlant и другими"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1D4ED8]" />,
      title: "Выезд за 60 минут",
      desc: "Приеду в любую точку Твери и области в течение часа"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#1D4ED8]" />,
      title: "Гарантия 12 месяцев",
      desc: "На все работы и запчасти. Если сломается — приеду бесплатно"
    }
  ];

  return (
    <section className="w-full bg-[#F8F8F6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1D4ED8] font-bold tracking-widest text-sm uppercase mb-4">ПОЧЕМУ АЛЕКСАНДР?</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#1a1a1a]">Ремонт быстро, честно, надолго</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-[#E2E8F0] flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">{feature.title}</h4>
              <p className="text-[#64748b] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
