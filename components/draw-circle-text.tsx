import React from "react";
import { motion } from "framer-motion";

export const DrawCircleText = () => {
  return (
    <div className="text-foreground dark:text-white">
      <h1 className="text-center flex flex-col text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[12rem]">
        <span>Minha</span>
        <span className="relative">
          Trajetória
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-3 -top-4 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 2 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#fb2c36"
              strokeWidth="3"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
};
