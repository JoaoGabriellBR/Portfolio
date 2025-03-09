import { BorderTrail } from "./ui/border-trail";
import { Tilt } from "./ui/tilt";
import { motion, Transition } from "motion/react";
import { cn } from "@/lib/utils";

export function BorderNavbar({ children }: any) {
  const BASE_TRANSITION = {
    repeat: Infinity,
    duration: 5,
    ease: "linear",
  };

  return (
    <div
      className="w-[300px] h-[60px] relative border-2 border-neutral-300 dark:border-neutral-900 rounded-full bg-background flex flex-row items-center justify-around p-4 shadow-lg"
      style={{
        // width: "fit", // Largura personalizada
        // height: "60px", // Altura personalizada
      }}
    >
      <div className="animate-pulse pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
        <motion.div
          className={cn("absolute bg-neutral-500")}
          style={{
            width: 100,
            height: 100,
            offsetPath: `rect(0 auto auto 0 round ${100}px)`,
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            ...BASE_TRANSITION,
          }}
        />
      </div>
      {children}
    </div>
  );
}
