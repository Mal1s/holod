import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NodeInfo {
  id: number;
  title: string;
  desc: string;
  label: string;
  cx: number;
  cy: number;
}

const nodes: NodeInfo[] = [
  { id: 0, title: "Компрессор", desc: "Сердце холодильника. Не охлаждает? Возможно, проблема с компрессором. Ремонт от 2500₽", label: "КОМПРЕССОР", cx: 160, cy: 340 },
  { id: 1, title: "Плата управления", desc: "Мозг системы. Сбои температуры, хаотичная работа — неисправность платы. Ремонт от 1800₽", label: "ПЛАТА УПРАВЛЕНИЯ", cx: 220, cy: 80 },
  { id: 2, title: "Испаритель", desc: "Нарастание льда, плохое охлаждение — засор или утечка хладагента. Ремонт от 2000₽", label: "ИСПАРИТЕЛЬ", cx: 90, cy: 200 },
  { id: 3, title: "Вентилятор", desc: "Шум, неравномерное охлаждение — замена вентилятора. Ремонт от 1200₽", label: "ВЕНТИЛЯТОР", cx: 240, cy: 220 },
];

const FridgeSVG: React.FC<{ hoveredNode: number | null; onHover: (id: number | null) => void }> = ({ hoveredNode, onHover }) => (
  <svg
    viewBox="0 0 300 400"
    className="w-full h-full max-h-[60vh]"
    style={{ filter: "drop-shadow(0 0 20px rgba(0,79,255,0.15))" }}
  >
    <defs>
      <linearGradient id="fridgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#060606" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <filter id="nodeGlow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="activeGlow">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Main fridge body */}
    <rect x="60" y="20" width="180" height="360" rx="4" fill="url(#fridgeGrad)" stroke="#004FFF" strokeWidth="1" strokeOpacity="0.5" />

    {/* Upper compartment door */}
    <rect x="64" y="24" width="172" height="110" rx="2" fill="none" stroke="#004FFF" strokeWidth="0.6" strokeOpacity="0.35" />

    {/* Lower compartment door */}
    <rect x="64" y="140" width="172" height="236" rx="2" fill="none" stroke="#004FFF" strokeWidth="0.6" strokeOpacity="0.35" />

    {/* Door divider line */}
    <line x1="60" y1="137" x2="240" y2="137" stroke="#004FFF" strokeWidth="1" strokeOpacity="0.6" />

    {/* Handle top */}
    <rect x="135" y="55" width="4" height="30" rx="2" fill="#004FFF" opacity="0.9" filter="url(#nodeGlow)" />

    {/* Handle bottom */}
    <rect x="135" y="165" width="4" height="30" rx="2" fill="#004FFF" opacity="0.9" filter="url(#nodeGlow)" />

    {/* Internal scan lines */}
    {[160, 175, 190, 205, 220, 235, 250, 265, 280, 295, 310].map((y) => (
      <line key={y} x1="70" y1={y} x2="230" y2={y} stroke="#004FFF" strokeWidth="0.25" strokeOpacity="0.12" />
    ))}

    {/* Corner marks */}
    <path d="M64,24 L64,36 M64,24 L76,24" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.8" />
    <path d="M236,24 L236,36 M236,24 L224,24" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.8" />
    <path d="M64,376 L64,364 M64,376 L76,376" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.8" />
    <path d="M236,376 L236,364 M236,376 L224,376" stroke="#004FFF" strokeWidth="1.5" strokeOpacity="0.8" />

    {/* Compressor bump at bottom */}
    <rect x="75" y="377" width="150" height="8" rx="3" fill="#004FFF" opacity="0.18" />

    {/* Connector lines from nodes to body */}
    {nodes.map((n) => {
      const isHovered = hoveredNode === n.id;
      const bodyX = n.cx < 150 ? 64 : 236;
      return (
        <line
          key={n.id}
          x1={n.cx}
          y1={n.cy}
          x2={bodyX}
          y2={n.cy}
          stroke="#004FFF"
          strokeWidth={isHovered ? 1 : 0.5}
          strokeOpacity={isHovered ? 0.7 : 0.25}
          strokeDasharray="4 3"
        />
      );
    })}

    {/* Interactive nodes */}
    {nodes.map((n) => {
      const isHovered = hoveredNode === n.id;
      return (
        <g
          key={n.id}
          style={{ cursor: "pointer" }}
          onMouseEnter={() => onHover(n.id)}
          onMouseLeave={() => onHover(null)}
          data-testid={`node-${n.id}`}
        >
          {/* Outer pulse ring */}
          <circle
            cx={n.cx}
            cy={n.cy}
            r={isHovered ? 18 : 12}
            fill="none"
            stroke="#004FFF"
            strokeWidth="1"
            strokeOpacity={isHovered ? 0.5 : 0.2}
            className={isHovered ? "node-pulse-ring" : ""}
          />
          {/* Inner dot */}
          <circle
            cx={n.cx}
            cy={n.cy}
            r={isHovered ? 7 : 5}
            fill="#004FFF"
            filter={isHovered ? "url(#activeGlow)" : "url(#nodeGlow)"}
            opacity={isHovered ? 1 : 0.85}
          />
          {/* Label */}
          <text
            x={n.cx + (n.cx < 150 ? -18 : 18)}
            y={n.cy - 14}
            fill="#004FFF"
            fontSize="7"
            fontFamily="JetBrains Mono, monospace"
            textAnchor={n.cx < 150 ? "end" : "start"}
            opacity={isHovered ? 1 : 0.5}
            letterSpacing="1"
          >
            {n.label}
          </text>
        </g>
      );
    })}
  </svg>
);

export const DiagnosticsSection: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  return (
    <section
      className="relative w-full h-screen snap-start overflow-hidden bg-black flex flex-col items-center justify-center"
      data-testid="section-diagnostics"
    >
      {/* Section title */}
      <div className="absolute top-10 left-0 w-full text-center z-20 px-4">
        <span className="font-mono text-[10px] tracking-[0.5em] text-[#004FFF] opacity-60 uppercase">// СЕКЦИЯ 02</span>
        <h2 className="text-2xl md:text-5xl font-sans font-black text-white tracking-[0.15em] mt-1 uppercase">
          Диагностика системы
        </h2>
      </div>

      {/* Fridge + info layout */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 px-6 mt-12">
        {/* Fridge */}
        <div className="w-48 md:w-72 flex-shrink-0">
          <FridgeSVG hoveredNode={hoveredNode} onHover={setHoveredNode} />
        </div>

        {/* Info card */}
        <div className="flex-1 min-h-[200px] flex items-center">
          <AnimatePresence mode="wait">
            {hoveredNode !== null ? (
              <motion.div
                key={hoveredNode}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full max-w-sm p-6"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(0,79,255,0.35)",
                }}
                data-testid="card-node-info"
              >
                <div className="text-[#004FFF] font-mono text-[10px] mb-3 uppercase tracking-[0.4em]">
                  // СКАНИРОВАНИЕ УЗЛА...
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-black text-white mb-4 uppercase tracking-wide">
                  {nodes[hoveredNode].title}
                </h3>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  {nodes[hoveredNode].desc}
                </p>
                <div className="mt-4 pt-4 border-t border-[#004FFF22]">
                  <span className="font-mono text-[10px] text-[#004FFF] opacity-60 tracking-widest">СТАТУС: АКТИВЕН</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full max-w-sm"
              >
                <p className="text-[#004FFF] font-mono text-sm uppercase tracking-widest animate-pulse">
                  Наведите на узел для анализа
                </p>
                <div className="mt-4 space-y-2 opacity-30">
                  {nodes.map((n) => (
                    <div key={n.id} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#004FFF]" />
                      <span className="font-mono text-xs text-white">{n.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
