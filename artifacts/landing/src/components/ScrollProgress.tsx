import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setHeight(latest * (window.innerHeight - 30));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed right-0 top-0 w-1 h-screen pointer-events-none z-50">
      <motion.div
        className="w-full bg-[#004FFF] absolute shadow-[0_0_8px_#004FFF]"
        style={{
          top: height,
          height: 30,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
    </div>
  );
};
