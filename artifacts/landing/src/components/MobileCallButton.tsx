import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export const MobileCallButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-white border-t border-blue-100 shadow-2xl px-4 py-3 flex items-center gap-3">
            <motion.a
              href="tel:+79201560292"
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1D4ED8] text-white py-3.5 rounded-xl font-bold text-base"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              Позвонить мастеру
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 border-2 border-[#1D4ED8] text-[#1D4ED8] py-3.5 px-4 rounded-xl font-bold text-sm"
            >
              Заявка
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
