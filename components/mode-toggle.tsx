"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

export function ModeToggle({ type }: { type?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const textSize =
  "text-sm sm:text-sm md:text-md lg:text-[1.2rem] xl:text-[1.2rem]";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Evita renderização até que o cliente esteja pronto
  }

  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="cursor-pointer"
    >
      {theme === "dark" ? (
        <AiOutlineMoon
          className={`${
            type === "web"
              ? "text-foreground"
              : "text-background dark:text-foreground"
          } ${textSize} rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100`}
          onClick={() => setTheme("light")}
        />
      ) : (
        <AiOutlineSun
          className={`${
            type === "web"
              ? "text-foreground"
              : "text-background dark:text-foreground"
          } ${textSize} rotate-0 scale-100 transition-all dark:-rotate-90`}
          onClick={() => setTheme("dark")}
        />
      )}
    </motion.div>
  );
}
