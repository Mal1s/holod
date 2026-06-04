import React from "react";
import { motion } from "framer-motion";

export const FooterSection: React.FC = () => {
  return (
    <section className="w-full bg-[#1E3A8A] pt-20 pb-8 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <div>
            <h2 className="text-4xl font-black mb-2">Александр</h2>
            <p className="text-[#93c5fd] text-lg">Мастер по ремонту холодильников · Тверь</p>
          </div>
          <a 
            href="tel:+79000000000" 
            className="text-4xl md:text-5xl lg:text-6xl font-black font-sans hover:text-[#93c5fd] transition-colors"
          >
            +7 (900) 000-00-00
          </a>
        </div>

        <div className="w-full max-w-md bg-white text-[#1a1a1a] rounded-xl p-8 shadow-xl">
          <h3 className="text-xl font-bold mb-6 text-center">Оставьте заявку — перезвоню в течение 15 минут</h3>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Заявка отправлена!"); }}>
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-1">Ваше имя</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                placeholder="Иван"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#64748b] mb-1">Ваш телефон</label>
              <input 
                type="tel" 
                required
                className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                placeholder="+7 (999) 000-00-00"
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-4 bg-[#1D4ED8] text-white rounded-lg font-bold text-lg hover:bg-[#1e40af] transition-colors mt-2"
            >
              Отправить заявку
            </motion.button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#1e40af] pt-8 text-center text-[#93c5fd] text-sm">
        © 2024 Александр · Ремонт холодильников в Твери
      </div>
    </section>
  );
};
