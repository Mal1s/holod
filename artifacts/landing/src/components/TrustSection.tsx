import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiVk } from "react-icons/si";

// Generic avatars using SVG
const Avatar = ({ initials }: { initials: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="rounded-full">
    <rect width="40" height="40" fill="#111" stroke="#333" strokeWidth="1"/>
    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontFamily="Space Grotesk" fontSize="16">{initials}</text>
  </svg>
);

const TerminalLine = ({ text, delay, start }: { text: string, delay: number, start: boolean }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    } else {
      setVisible(false);
    }
  }, [start, delay]);

  return (
    <div className={`font-mono text-sm ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
      <span className="text-[#004FFF] mr-2">{">"}</span>
      <span className="text-gray-300">{text}</span>
    </div>
  );
};

export const TrustSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const reviews = [
    { initials: "МК", name: "Михаил К.", text: "Холодильник перестал морозить в пятницу вечером — Александр приехал за 45 минут. Починил за час. Профессионал." },
    { initials: "СТ", name: "Светлана Т.", text: "Поставил диагноз по описанию ещё по телефону. Приехал, подтвердил, устранил. Чётко и без лишних слов." },
    { initials: "ДР", name: "Дмитрий Р.", text: "Менял компрессор — цена честная, запчасти оригинальные, гарантия год. Рекомендую." },
    { initials: "АВ", name: "Анна В.", text: "Три года ремонтирует всю технику в нашей семье. Мастер от бога." },
  ];

  const terminalLines = [
    "ЗАГРУЗКА СОЦИАЛЬНОГО МАТРИКСА...",
    "ВКОНТАКТЕ ДРУЗЬЯ: 5,000+",
    "ОДНОКЛАССНИКИ ДРУЗЬЯ: 1,000+",
    "AVITO PRO СТАТУС: ПОДТВЕРЖДЁН",
    "PROFI.RU РЕЙТИНГ: 4.9 / 5.0",
    "СТАТУС: ДОВЕРЕННЫЙ СПЕЦИАЛИСТ ✓"
  ];

  return (
    <section className="relative w-full h-screen snap-start overflow-hidden bg-black flex items-center justify-center px-6 py-12" ref={ref}>
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-12 h-full justify-center items-center">
        
        <div className="w-full md:w-1/2 flex flex-col h-full justify-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-12 tracking-[0.1em] uppercase">СОЦИАЛЬНЫЙ МАТРИКС</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-4 border border-[#222] bg-[rgba(255,255,255,0.03)] flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <Avatar initials={review.initials} />
                  <div>
                    <div className="text-white font-sans font-bold text-sm uppercase">{review.name}</div>
                    <div className="text-[#004FFF] text-xs">★★★★★</div>
                  </div>
                </div>
                <p className="text-gray-400 font-mono text-xs md:text-sm">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-8 h-full justify-center mt-12 md:mt-0">
          <div className="w-full bg-[#050505] border border-[#222] p-6 font-mono text-sm relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#111] flex items-center px-2 gap-1">
               <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
               <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
               <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {terminalLines.map((line, i) => (
                <TerminalLine key={i} text={line} delay={i * 250} start={isInView} />
              ))}
              <div className={`mt-2 ${isInView ? 'opacity-100' : 'opacity-0'} transition-opacity delay-[1500ms]`}>
                <span className="text-[#004FFF] animate-pulse">█</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5 }}
            className="flex gap-8 items-center justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
          >
            {/* Logos purely structural/typographic */}
            <div className="text-white font-black font-sans tracking-tighter text-xl">AVITO</div>
            <div className="text-white font-black font-sans tracking-tighter text-xl">PROFI.RU</div>
            <SiVk className="text-white w-8 h-8" />
            <div className="text-white font-bold text-xl border-2 border-white rounded-md px-2">ОК</div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
