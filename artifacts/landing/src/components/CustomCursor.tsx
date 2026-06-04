import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isCtaHovering, setIsCtaHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsVisible(false);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-card');
        
      const isCta = target.classList.contains('main-cta');
        
      setIsHovering(!!isClickable);
      setIsCtaHovering(!!isCta);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - (isHovering ? 16 : 4),
        y: mousePosition.y - (isHovering ? 16 : 4),
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    >
      <motion.div
        animate={{
          width: isHovering ? 32 : 8,
          height: isHovering ? 32 : 8,
          backgroundColor: isHovering ? "transparent" : "#004FFF",
          border: isHovering ? "2px solid #004FFF" : "none",
          boxShadow: isHovering ? "0 0 10px rgba(0, 79, 255, 0.5)" : "0 0 8px #004FFF",
        }}
        transition={{ duration: 0.2 }}
        className="rounded-full flex items-center justify-center overflow-hidden"
      >
        {isCtaHovering && (
          <div className="w-full h-full opacity-50" style={{
            backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJub25lIiAvPgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iIzAwNEZGRiIgLz4KPC9zdmc+')",
            backgroundSize: "4px 4px"
          }} />
        )}
      </motion.div>
    </motion.div>
  );
};
