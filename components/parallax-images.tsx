// "use client";
// import {
//   motion,
//   useMotionTemplate,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// import { useRef } from "react";

// const SECTION_HEIGHT = 2500;

// export const ParallaxImages = () => {
//   return (
//     <div
//       style={{ height: `calc(${SECTION_HEIGHT}px + 15vh)` }}
//       className="relative w-full"
//     >
//       <ParallaxBigImage />
//       <div className="absolute bottom-0 left-0 right-0" />
//     </div>
//   );
// };

// const ParallaxBigImage = () => {
//   const { scrollY } = useScroll();

//   const clip1 = useTransform(scrollY, [0, 2500], [25, 0]);
//   const clip2 = useTransform(scrollY, [0, 2500], [75, 100]);

//   const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

//   const backgroundSize = useTransform(
//     scrollY,
//     [0, SECTION_HEIGHT + 100],
//     ["170%", "100%"]
//   );
//   const opacity = useTransform(
//     scrollY,
//     [SECTION_HEIGHT, SECTION_HEIGHT + 1500],
//     [1, 0]
//   );

//   return (
//     <motion.div
//       className="sticky top-0 h-screen w-full"
//       style={{
//         clipPath,
//         backgroundSize,
//         opacity,
//         backgroundImage: "url('/images/banner1.png')",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     />
//   );
// };

"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SECTION_HEIGHT = 2500;

export const ParallaxImages = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 5vh)` }}
      className="relative w-full"
    >
      <ParallaxBigImage />
      <div className="absolute bottom-0 left-0 right-0" />
    </div>
  );
};

const ParallaxBigImage = () => {
  const { scrollY } = useScroll();

  // const clip1 = useTransform(scrollY, [0, 2500], [25, 0]);
  // const clip2 = useTransform(scrollY, [0, 2500], [75, 100]);
  
  const clip1 = useTransform(scrollY, [0, 2500], [20, 0]);
  const clip2 = useTransform(scrollY, [0, 2500], [80, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const scale = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 2500],
    [1, 0] // Diminui o tamanho da imagem até desaparecer
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        scale,
        backgroundImage: "url('/images/banner1.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};
