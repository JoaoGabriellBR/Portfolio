"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING_CONFIG = { damping: 100, stiffness: 400 };

type MagneticButtonType = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  border?: boolean;
  onClick?: () => void;
};

function MagneticButton({
  children,
  className = "",
  distance = 0.7,
  border = true,
  onClick,
}: MagneticButtonType) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  useEffect(() => {
    const calculateDistance = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        if (isHovered) {
          x.set(distanceX * distance);
          y.set(distanceY * distance);
        } else {
          x.set(0);
          y.set(0);
        }
      }
    };

    document.addEventListener("mousemove", calculateDistance);

    return () => {
      document.removeEventListener("mousemove", calculateDistance);
    };
  }, [ref, isHovered]);

  return (
    <motion.div
      onClick={onClick}
      className={`${className} cursor-pointer rounded-full flex flex-row items-center justify-center ${
        border &&
        "border border-neutral-700 hover:bg-neutral-500 hover:bg-opacity-10"
      }`}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MagneticButton;
