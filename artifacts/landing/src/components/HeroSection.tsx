import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const CSSShaderBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="hero-noise-layer" />
    <div className="hero-noise-layer2" />
    <div className="hero-grid-overlay" />
  </div>
);

export const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showSub, setShowSub] = useState(false);
  const fullText = "ИНЖЕНЕРНЫЙ РЕМОНТ ХОЛОДИЛЬНИКОВ";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowSub(true), 300);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xTransform = useTransform(mouseX, [-500, 500], [15, -15]);
  const yTransform = useTransform(mouseY, [-500, 500], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth > 768) {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    }
  };

  return (
    <section
      className="relative w-full h-screen snap-start overflow-hidden flex flex-col md:flex-row items-center justify-center bg-black"
      onMouseMove={handleMouseMove}
      data-testid="section-hero"
    >
      <CSSShaderBackground />

      <div className="relative z-10 w-full h-full flex flex-col md:flex-row max-w-7xl mx-auto px-6 md:px-12">
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center">
          <div className="mb-3">
            <span className="font-mono text-xs tracking-[0.4em] text-[#004FFF] uppercase opacity-80">
              // МАСТЕР АЛЕКСАНДР — ТВЕРЬ
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white mb-6 leading-[1.1]"
            data-testid="headline-hero"
          >
            {typedText}
            <span className="inline-block w-[3px] h-[0.85em] bg-[#004FFF] ml-2 align-middle animate-blink" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: showSub ? 1 : 0, y: showSub ? 0 : 8 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 font-mono text-sm md:text-base mb-12 tracking-wider"
          >
            // Диагностика. Точность. Гарантия.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showSub ? 1 : 0, y: showSub ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              className="main-cta group relative px-8 py-4 bg-transparent text-white font-mono text-sm tracking-widest uppercase overflow-hidden transition-colors duration-300 hover:text-black border border-[#004FFF]"
              data-testid="button-cta-hero"
            >
              <span className="relative z-10 pointer-events-none">[ВЫЗВАТЬ МАСТЕРА]</span>
              <div className="absolute inset-0 bg-[#004FFF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </button>
          </motion.div>
        </div>

        <div className="hidden md:flex w-[55%] h-full items-center justify-center relative pointer-events-none select-none">
          <motion.div
            style={{ x: xTransform, y: yTransform }}
            className="relative w-full max-w-sm aspect-[3/4]"
          >
            <svg
              viewBox="0 0 300 400"
              className="w-full h-full"
              preserveAspectRatio="xMidYMax meet"
            >
              <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#111111" />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Body */}
              <rect x="80" y="30" width="140" height="280" rx="4" fill="url(#bodyGrad)" stroke="#004FFF" strokeWidth="1" strokeOpacity="0.6" />

              {/* Upper door */}
              <rect x="84" y="34" width="132" height="90" rx="2" fill="none" stroke="#004FFF" strokeWidth="0.5" strokeOpacity="0.4" />

              {/* Lower door */}
              <rect x="84" y="130" width="132" height="176" rx="2" fill="none" stroke="#004FFF" strokeWidth="0.5" strokeOpacity="0.4" />

              {/* Handle top */}
              <rect x="140" y="65" width="4" height="28" rx="2" fill="#004FFF" opacity="0.9" filter="url(#glow)" />

              {/* Handle bottom */}
              <rect x="140" y="155" width="4" height="28" rx="2" fill="#004FFF" opacity="0.9" filter="url(#glow)" />

              {/* Scanlines / tech detail */}
              {[160, 175, 190, 205, 220, 235].map((y) => (
                <line key={y} x1="95" y1={y} x2="205" y2={y} stroke="#004FFF" strokeWidth="0.3" strokeOpacity="0.15" />
              ))}

              {/* Corner accent marks */}
              <path d="M84,34 L84,44 M84,34 L94,34" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.9" />
              <path d="M216,34 L216,44 M216,34 L206,34" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.9" />
              <path d="M84,306 L84,296 M84,306 L94,306" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.9" />
              <path d="M216,306 L216,296 M216,306 L206,306" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.9" />

              {/* Side vent lines */}
              {[340, 350, 360].map((y) => (
                <line key={y} x1="85" y1={y - 30} x2="110" y2={y - 30} stroke="#004FFF" strokeWidth="0.5" strokeOpacity="0.5" />
              ))}

              {/* Compressor bump at bottom */}
              <rect x="95" y="308" width="110" height="6" rx="2" fill="#004FFF" opacity="0.25" />

              {/* Head */}
              <ellipse cx="150" cy="10" rx="28" ry="26" fill="#0a0a0a" stroke="#004FFF" strokeWidth="0.5" strokeOpacity="0.3" />
              {/* Shoulders */}
              <path d="M80,30 Q60,28 50,45" stroke="#004FFF" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
              <path d="M220,30 Q240,28 250,45" stroke="#004FFF" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
            </svg>

            {/* Neon underline */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#004FFF]"
              style={{ boxShadow: "0 0 12px #004FFF, 0 0 24px #004FFF88" }} />

            {/* Floating data points */}
            <div className="absolute top-[15%] -right-12 font-mono text-[10px] text-[#004FFF] opacity-60 leading-5">
              <div>RNG: 15KM</div>
              <div>ETA: 60MIN</div>
              <div>STS: READY</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] tracking-widest text-white uppercase">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
