import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

type FormState = "idle" | "sending" | "sent";

export const FooterSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setTimeout(() => setState("sent"), 1200);
  };

  return (
    <section id="contact" className="w-full bg-[#1E3A8A] pt-20 pb-10 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row gap-14 mb-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col items-start gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-1">Александр</h2>
              <p className="text-blue-300 text-lg">Мастер по ремонту холодильников · Тверь</p>
            </div>

            <motion.a
              href="tel:+79201560292"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 text-3xl md:text-4xl font-black hover:text-blue-300 transition-colors"
              data-testid="link-phone-footer"
            >
              <Phone className="w-7 h-7 text-blue-300 flex-shrink-0" />
              +7 (920) 156-02-92
            </motion.a>

            <div className="flex flex-col gap-3 text-blue-200 text-base">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span>Тверь и область — выезд без ограничений</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <span>Работаю ежедневно: 8:00 — 22:00</span>
              </div>
            </div>

            {/* Quick social row */}
            <div className="flex gap-3 mt-2">
              {[
                { label: "ВКонтакте", href: "https://vk.com/id401580420", bg: "bg-[#0077FF]" },
                { label: "ОК", href: "https://ok.ru/profile/575591001485", bg: "bg-[#EE8208]" },
                { label: "Авито", href: "https://www.avito.ru/tver/predlozheniya_uslug/remont_holodilnikov_2109964398", bg: "bg-[#00AAFF]" },
                { label: "Профи.ру", href: "https://profi.ru/profile/AleksandrovAA226", bg: "bg-[#FF3B5C]" },
                { label: "Rutube", href: "https://rutube.ru/channel/35722035", bg: "bg-[#1A3A8A]" },
              ].map(({ label, href, bg }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${bg} text-white text-xs font-bold px-4 py-2 rounded-lg transition-opacity hover:opacity-90`}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[440px] bg-white text-[#1a1a1a] rounded-2xl p-8 shadow-2xl shadow-blue-950"
          >
            <AnimatePresence mode="wait">
              {state === "sent" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center gap-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl"
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-xl font-black text-[#1a1a1a]">Заявка принята!</h3>
                  <p className="text-[#64748b]">
                    Александр перезвонит вам в течение 15 минут.
                  </p>
                  <button
                    onClick={() => { setState("idle"); setForm({ name: "", phone: "" }); }}
                    className="text-sm text-[#1D4ED8] font-semibold hover:underline mt-2"
                  >
                    Отправить ещё одну заявку
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold mb-5 text-center leading-snug">
                    Оставьте заявку —<br />
                    <span className="text-[#1D4ED8]">перезвоню за 15 минут</span>
                  </h3>

                  <div>
                    <label className="block text-sm font-medium text-[#64748b] mb-1.5">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition text-[#1a1a1a] placeholder:text-[#CBD5E1]"
                      placeholder="Иван Иванов"
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#64748b] mb-1.5">
                      Ваш телефон
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition text-[#1a1a1a] placeholder:text-[#CBD5E1]"
                      placeholder="+7 (999) 000-00-00"
                      data-testid="input-phone"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 bg-[#1D4ED8] text-white rounded-xl font-bold text-lg hover:bg-[#1e40af] transition-colors mt-2 disabled:opacity-70 flex items-center justify-center gap-2"
                    data-testid="button-submit-form"
                  >
                    {state === "sending" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full inline-block"
                        />
                        Отправляем…
                      </>
                    ) : (
                      "Отправить заявку"
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-[#94a3b8] mt-2">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-blue-400 text-sm">
          <span>© 2024 Александр · Ремонт холодильников в Твери и области</span>
          <span className="font-mono text-xs">ИП · Работаю с 2014 года</span>
        </div>
      </div>
    </section>
  );
};
