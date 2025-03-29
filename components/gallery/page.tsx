// const projects = [
//   { name: "Dyal Thak", handle: "banner1.png" },
//   { name: "Leidinger Matthias", handle: "banner2.png" },
//   { name: "Mark Rammers", handle: "banner3.png" },
//   { name: "Landon Speers", handle: "banner4.png" },
// ];

// "use client";
// import Image from "next/image";
// import { useEffect } from "react";
// import Lenis from "lenis";
// import { useSpring } from "framer-motion";

// const projects = [
//   { name: "Dyal Thak", handle: "banner1.png" },
//   { name: "Leidinger Matthias", handle: "banner2.png" },
//   { name: "Mark Rammers", handle: "banner3.png" },
//   { name: "Landon Speers", handle: "banner4.png" },
// ];
// export default function GalleryComponent() {
//   const spring = { stiffness: 150, damping: 15, mass: 0.1 };
//   const mousePosition = { x: useSpring(0, spring), y: useSpring(0, spring) };

//   const mouseMove = (e) => {
//     const { clientX, clientY } = e;
//     const targetX = clientX - (window.innerWidth / 2) * 0.25;
//     const targetY = clientY - (window.innerWidth / 2) * 0.3;
//     mousePosition.x.set(targetX);
//     mousePosition.y.set(targetY);
//   };

//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time: any) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <main onMouseMove={mouseMove} className="relative overflow-hidden">
//       {projects.map(({ handle }, i) => (
//         <Gallery key={i} mousePosition={mousePosition} handle={handle} />
//       ))}
//     </main>
//   );
// }

// function Gallery({ handle, mousePosition }: any) {
//   return (
//     <div
//       className="h-[120vh] relative overflow-hidden"
//       style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
//     >
//       <div className="w-full h-full relative">
//         <Image
//           src={`/images/${handle}`}
//           alt="image"
//           fill
//           className="w-full object-cover"
//         />
//       </div>
//       <div
//         className="fixed top-0 left-1/2 transform -translate-x-1/2 h-[30vw] w-[25vw] rounded-[1.5vw] overflow-hidden"
//         style={{
//           transform: `translate(${mousePosition.x.get()}px, ${mousePosition.y.get()}px)`,
//         }}
//       >
//         <Image
//           src={`/images/${handle}`}
//           alt="image"
//           fill
//           className="w-full object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// "use client";
// import Image from "next/image";
// import { useEffect } from "react";
// import Lenis from "lenis";
// import { useSpring, motion } from "framer-motion";

// const projects = [
//   { name: "Dyal Thak", handle: "banner1.png" },
//   { name: "Leidinger Matthias", handle: "banner2.png" },
//   { name: "Mark Rammers", handle: "banner3.png" },
//   { name: "Landon Speers", handle: "banner4.png" },
// ];

// export default function GalleryComponent() {
//   const spring = { stiffness: 150, damping: 15, mass: 0.1 };
//   const mousePosition = { x: useSpring(0, spring), y: useSpring(0, spring) };

//   const mouseMove = (e) => {
//     const { clientX, clientY } = e;
//     mousePosition.x.set(clientX);
//     mousePosition.y.set(clientY);
//   };

//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time: any) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//   }, []);

//   return (
//     <main onMouseMove={mouseMove} className="relative overflow-hidden">
//       {projects.map(({ handle }, i) => (
//         <Gallery key={i} mousePosition={mousePosition} handle={handle} />
//       ))}
//     </main>
//   );
// }

// function Gallery({ handle, mousePosition }: any) {
//   return (
//     <div
//       className="h-[120vh] relative overflow-hidden"
//       style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
//     >
//       <div className="w-full h-full relative">
//         <Image
//           src={`/images/${handle}`}
//           alt="image"
//           fill
//           className="w-full object-cover"
//         />
//       </div>
//       <motion.div
//         className="fixed top-0 left-0 h-[30vw] w-[25vw] rounded-[1.5vw] overflow-hidden pointer-events-none"
//         style={{ x: mousePosition.x, y: mousePosition.y }}
//       >
//         <Image
//           src={`/images/${handle}`}
//           alt="image"
//           fill
//           className="w-full object-cover"
//         />
//       </motion.div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";
import { useSpring, motion } from "framer-motion";

const projects = [
  { name: "Dyal Thak", handle: "banner1.png", handle2: "adidas-mockup1.png" },
  {
    name: "Leidinger Matthias",
    handle: "banner2.png",
    handle2: "adidas-mockup2.png",
  },
  { name: "Mark Rammers", handle: "banner3.png", handle2: "worldnews.png" },
  { name: "Landon Speers", handle: "banner4.png", handle2: "upwrite.png" },
];

export default function GalleryComponent() {
  const spring = { stiffness: 150, damping: 15, mass: 0.1 };
  const mousePosition = { x: useSpring(0, spring), y: useSpring(0, spring) };

  const mouseMove = (e: any) => {
    const { clientX, clientY } = e;
    const offsetX = (12.5 * window.innerWidth) / 100; // Metade da largura da vignette (25vw / 2)
    const offsetY = (15 * window.innerWidth) / 100; // Metade da altura da vignette (30vw / 2)
    mousePosition.x.set(clientX - offsetX);
    mousePosition.y.set(clientY - offsetY);
  };

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main onMouseMove={mouseMove} className="relative overflow-hidden">
      {projects.map(({ handle, handle2 }, i) => (
        <Gallery
          key={i}
          mousePosition={mousePosition}
          handle={handle}
          handle2={handle2}
        />
      ))}
    </main>
  );
}

function Gallery({ handle, handle2, mousePosition }: any) {
  return (
    <div
      className="h-[120vh] relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
    >
      <div className="w-full h-full relative">
        <Image
          src={`/images/${handle}`}
          alt="image"
          fill
          className="w-full object-cover"
        />
      </div>
      <motion.div
        className="fixed top-0 left-0 h-[30vw] w-[25vw] rounded-[1.5vw] overflow-hidden pointer-events-none"
        style={{ x: mousePosition.x, y: mousePosition.y }}
      >
        <Image
          src={`/images/${handle2}`}
          alt="image"
          fill
          className="w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
