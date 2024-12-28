import React from "react";
import { motion } from "framer-motion";

// export const RevealLinks = () => {
//   return (
//     <section className="grid place-content-center gap-2 bg-green-300 px-8 py-24 text-black">
//       <FlipLink href="#">Twitter</FlipLink>
//       <FlipLink href="#">Linkedin</FlipLink>
//       <FlipLink href="#">Facebook</FlipLink>
//       <FlipLink href="#">Instagram</FlipLink>
//     </section>
//   );
// };

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="text-foreground relative block overflow-hidden whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};