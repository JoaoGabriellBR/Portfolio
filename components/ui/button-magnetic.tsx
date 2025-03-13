"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SPRING_CONFIG = { damping: 100, stiffness: 400 };

type MagneticButtonType = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  border?: boolean;
  type?: "normal" | "3d";
  onClick?: () => void;
};

function MagneticButton({
  children,
  className = "",
  distance = 0.7,
  border = true,
  type = "normal",
  onClick,
}: MagneticButtonType) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, SPRING_CONFIG);
  const springY = useSpring(y, SPRING_CONFIG);

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobile) return;

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
  }, [ref, isHovered, isMobile]);

  return (
    <motion.div
      onClick={onClick}
      className={`${className} cursor-pointer rounded-full flex flex-row items-center justify-center ${
        border &&
        "border border-neutral-700 hover:bg-neutral-500 hover:bg-opacity-10"
      }`}
      ref={ref}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{
        x: isMobile ? 0 : springX,
        y: isMobile ? 0 : springY,
      }}
      aria-label="Magnetic Button"
      {...(type === "3d" && {
        "aria-label": "Magnetic Button",
        initial: { opacity: 0, y: -50, scale: 0.8 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -50, scale: 0.8 },
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 10,
          duration: 0.6,
        },
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.95 },
      })}
    >
      {children}
    </motion.div>
  );
}

export default MagneticButton;
