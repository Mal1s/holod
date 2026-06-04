import React, { useState } from "react";

export const FooterSection: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      alert("ЗАЯВКА ОТПРАВЛЕНА");
      setPhone("");
    }
  };

  return (
    <section className="relative w-full h-screen snap-start overflow-hidden bg-black flex flex-col items-center justify-between py-12 px-6">
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto text-center gap-16">
        
        <div>
          <a href="tel:+79000000000" className="inline-block text-5xl md:text-7xl lg:text-8xl font-black font-sans text-white hover:text-[#004FFF] transition-all duration-300 hover:scale-105" style={{ textShadow: "0 0 0 rgba(0,79,255,0)" }} onMouseEnter={(e) => e.currentTarget.style.textShadow = "0 0 30px rgba(0,79,255,0.8)"} onMouseLeave={(e) => e.currentTarget.style.textShadow = "0 0 0 rgba(0,79,255,0)"}>
            +7 (900) 000-00-00
          </a>
          <p className="text-gray-500 font-mono mt-4 uppercase tracking-widest text-sm">Связь напрямую с инженером</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col gap-6">
          <div className="relative">
            <label className="block text-left text-[#004FFF] font-mono text-sm mb-2">
              {">"} ВАШ ТЕЛЕФОН {isFocused && <span className="animate-pulse inline-block w-2 h-[1em] bg-[#004FFF] align-middle ml-1"></span>}
            </label>
            <input 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent border-b-2 border-[#004FFF] text-white font-mono text-xl py-2 outline-none focus:border-white transition-colors"
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>
          <button type="submit" className="main-cta group relative px-8 py-4 bg-transparent text-white font-mono text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:text-black border border-[#004FFF]">
            <span className="relative z-10 pointer-events-none">[ОТПРАВИТЬ]</span>
            <div className="absolute inset-0 bg-[#004FFF] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </button>
          
          <p className="text-gray-500 font-mono text-xs uppercase text-center mt-2">Работаем по Твери и области. Выезд за 60 минут.</p>
        </form>
      </div>

      <footer className="w-full text-center border-t border-[#111] pt-6">
        <p className="text-[#444] font-mono text-xs uppercase">© 2024 Александр. Мастер по ремонту холодильников. Тверь.</p>
      </footer>
    </section>
  );
};
