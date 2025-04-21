"use client";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";
import { useSpring, motion } from "framer-motion";
import SmallImagesGallery from "./description";
import Projects from "../projects";

const projects = [
  {
    name: "Lamborghini",
    handle: "lamborghini/lamborghini-jumbotron.png",
    handle2: "lamborghini/lamborghini-small-image.png",
    projectRoute: "/lamborghini",
  },
  {
    name: "Adidas",
    handle: "adidas/adidas-jumbotron.png",
    handle2: "adidas/adidas-small-image.png",
    projectRoute: "/adidas",
  },
  {
    name: "UpWrite",
    handle: "upwrite/upwrite-jumbotron.png",
    handle2: "upwrite/upwrite-small-image.png",
    projectRoute: "/upwrite",
  },
  {
    name: "World News",
    handle: "worldnews/worldnews-jumbotron.png",
    handle2: "worldnews/worldnews-small-image.png",
    projectRoute: "/worldnews",
  },
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
    <main onMouseMove={mouseMove} className="">
      {/* {projects.map(({ handle, handle2 }, i) => (
        <Gallery
          key={i}
          mousePosition={mousePosition}
          handle={handle}
          handle2={handle2}
        />
      ))} */}
      {/* <SmallImagesGallery mousePosition={mousePosition} projects={projects} /> */}
      <Projects/>
    </main>
  );
}

function Gallery({ handle, handle2, mousePosition }: any) {
  return (
    <div
      id="gallery"
      className="h-[120vh] relative overflow-hidden"
      style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
    >
      <div className="w-full h-full relative">
        {/* <Image
          src={`/images/${handle}`}
          alt="image"
          fill
          className="w-full object-cover"
        /> */}

        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(/images/${handle})` }}
        />
      </div>

      <motion.div
        className="hidden lg:block fixed top-0 left-0 h-[550px] w-[450px] rounded-[1.5vw] overflow-hidden pointer-events-none"
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
