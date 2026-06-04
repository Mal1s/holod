import React from "react";
import { motion } from "framer-motion";

export const ReviewsSection: React.FC = () => {
  const reviews = [
    { name: "Михаил К.", text: "Холодильник перестал морозить в пятницу вечером — Александр приехал за 45 минут. Починил за час. Мастер своего дела.", initials: "МК" },
    { name: "Светлана Т.", text: "Поставил диагноз ещё по телефону. Приехал, подтвердил, устранил. Работает как новый.", initials: "СТ" },
    { name: "Дмитрий Р.", text: "Менял компрессор — цена честная, запчасти оригинальные, гарантия на год. Очень доволен.", initials: "ДР" },
    { name: "Анна В.", text: "Уже три года ремонтирует всю технику в нашей семье. Надёжный мастер.", initials: "АВ" },
  ];

  return (
    <section className="w-full bg-[#EFF6FF] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1D4ED8] font-bold tracking-widest text-sm uppercase mb-4">ОТЗЫВЫ КЛИЕНТОВ</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#1a1a1a]">Что говорят клиенты</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-[#1a1a1a]">{review.name}</h4>
                  <div className="text-yellow-400 text-sm">★★★★★</div>
                </div>
              </div>
              <p className="text-[#64748b] text-sm leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto border-t border-[#cbd5e1] pt-12"
        >
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#1D4ED8] mb-2">10+</div>
            <div className="text-[#64748b] font-medium uppercase text-sm">лет опыта</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#1D4ED8] mb-2">1200+</div>
            <div className="text-[#64748b] font-medium uppercase text-sm">ремонтов</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-black text-[#1D4ED8] mb-2">4.9★</div>
            <div className="text-[#64748b] font-medium uppercase text-sm">рейтинг</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
