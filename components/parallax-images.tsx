import { ReactLenis } from "lenis/react";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const images = [
  {
    src: "/images/parallax/alarm-clock.png",
    alt: "Small image of an alarm clock",
    start: -200,
    end: 200,
    className: "w-1/3",
  },
  {
    src: "/images/parallax/adidas.png",
    alt: "Small image of adidas project",
    start: 200,
    end: -250,
    className: "mx-auto w-2/3",
  },
  {
    src: "/images/parallax/coffe.png",
    alt: "Small image of Koffie project",
    start: -200,
    end: 200,
    className: "ml-auto w-1/3",
  },
  {
    src: "/images/parallax/lamborghini.png",
    alt: "Small image of dark bulls project",
    start: 0,
    end: -500,
    className: "ml-24 w-5/12",
  },
];

export const SmoothScrollHero = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
      }}
    >
      <Hero />
    </ReactLenis>
  );
};

const SECTION_HEIGHT = 2200;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <ParallaxBigImage />
      <ParallaxImages />
    </div>
  );
};

const ParallaxBigImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1700], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1700], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["100%", "100%"]
  );

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 1000],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: "url('/images/darkbulls/mockup-darkbulls-web-4.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {images.map((img, index) => (
        <ParallaxImg
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

const ParallaxImg = ({
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
