import { FaArrowRight } from "react-icons/fa";
import React from "react";

function ButtonHover({ children }: any) {
  return (
    <>
      <div
        className="border-none group relative cursor-pointer p-2 w-32 
      bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 rounded-full overflow-hidden text-neutral-200 dark:text-neutral-950 text-center font-semibold"
      >
        <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          {children}
        </span>

        <div className="flex gap-2 text-neutral-950 dark:text-neutral-200 z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
          <span>{children}</span>
          <FaArrowRight />
        </div>

        <div
          className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg 
        bg-neutral-200 dark:bg-neutral-950 scale-[1] group-hover:bg-neutral-200 dark:group-hover:bg-neutral-950  
        group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "
        ></div>
      </div>
    </>
  );
}

export default ButtonHover;
