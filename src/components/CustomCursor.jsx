import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed w-[8px] h-[8px] border-[1.5px] border-black rounded-full pointer-events-none z-50"
      style={{
        left: position.x - 4, // Centering the cursor
        top: position.y - 4,
      }}
      animate={{ x: position.x - 4, y: position.y - 4 }}
      transition={{ type: "tween", ease: "linear", duration: 0.08 }}
    />
  );
};

export default CustomCursor;
