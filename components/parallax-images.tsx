"use client";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SECTION_HEIGHT = 2000;

export const ParallaxImages = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 10vh)` }}
      className="relative w-full"
    >
      <ParallaxBigImage />
      <ImagesComponent />
      <div className="absolute bottom-0 left-0 right-0" />
    </div>
  );
};

const ParallaxBigImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url('/images/banner1.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxSmallImages = ({
  className,
  alt,
  src,
  start,
  end,
}: {
  className?: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // @ts-ignore
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const ImagesComponent = () => {
  const images = [
    {
      src: "/images/banner1.png",
      alt: "And example of a space launch",
      start: -200,
      end: 200,
      className: "w-1/3",
    },
    {
      src: "/images/banner1.png",
      alt: "And example of a space launch",
      start: 200,
      end: -250,
      className: "mx-auto w-2/3",
    },
    {
      src: "/images/banner1.png",
      alt: "And example of a space launch",
      start: -200,
      end: -200,
      className: "ml-auto w-1/3",
    },
    {
      src: "/images/banner1.png",
      alt: "And example of a space launch",
      start: 0,
      end: -500,
      className: "ml-24 w-5/12",
    },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {images.map((img, index) => (
        <ParallaxSmallImages
          key={index}
          src={img.src}
          alt={img.alt}
          start={img.start}
          end={img.end}
          className={img.className}
        />
      ))}
    </div>
  );
};
