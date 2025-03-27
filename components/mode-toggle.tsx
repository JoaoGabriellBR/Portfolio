"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { MagneticButton } from "./ui/button-magnetic";

export const ModeToggle = ({ type }: { type?: "mobile" | "web" }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita renderização antes do cliente estar pronto

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const Icon = theme === "dark" ? AiOutlineMoon : AiOutlineSun;
  const textSize =
    type === "mobile" ? "text-[1.2rem] lg:text-[2rem]" : "text-[1.2rem]";
  const iconClass = `${textSize} text-foreground transition-all dark:rotate-0 dark:scale-100`;

  return type === "web" ? (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="cursor-pointer"
      onClick={toggleTheme}
    >
      <Icon className={iconClass} />
    </motion.div>
  ) : (
    <MagneticButton distance={1} className="p-5" onClick={toggleTheme}>
      <Icon className={iconClass} />
    </MagneticButton>
  );
};
