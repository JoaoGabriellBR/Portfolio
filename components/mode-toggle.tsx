"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="cursor-pointer self-end px-4">
      {theme === "dark" ? (
        <Moon
          className="h-[5vw] w-[5vw] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          onClick={() => setTheme("light")}
        />
      ) : (
        <Sun
          className="h-[5vw] w-[5vw] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
