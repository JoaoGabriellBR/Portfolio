"use client";
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  const links = [
    {
      heading: "Adidas",
      subheading: "2023",
      imgSrc: "/images/adidas.png",
      href: "https://adidasshopping.vercel.app",
      arial_label: "Adidas Project Image",
    },
    {
      heading: "UpWrite",
      subheading: "2023",
      imgSrc: "/images/upwrite.png",
      href: "https://up-write.vercel.app",
      arial_label: "UpWrite Project Image",
    },
    {
      heading: "World News",
      subheading: "2023",
      imgSrc: "/images/worldnews.png",
      href: "https://siteworldnews.vercel.app",
      arial_label: "World News Project Image",
    },
    {
      heading: "Solar Toy",
      subheading: "2023",
      imgSrc: "/images/solartoy.png",
      href: "https://solartoy.netlify.app",
      arial_label: "Solar Toy Project Image",
    },
  ];

  return (
    <motion.section
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          heading={link.heading}
          subheading={link.subheading}
          imgSrc={link.imgSrc}
          href={link.href}
          arialLabel={link.arial_label}
        />
      ))}
    </motion.section>
  );
};

interface LinkProps {
  heading: string;
  imgSrc: string;
  subheading: string;
  href: string;
  arialLabel: string;
}

const Link = ({ heading, imgSrc, subheading, href, arialLabel }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={arialLabel}
      initial="initial"
      target="blank"
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      onMouseMove={handleMouseMove}
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-800 py-4 transition-colors duration-500 text-foreground md:py-8 cursor-pointer"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block transition-colors duration-500 text-neutral-950 dark:text-neutral-200 tracking-normal break-words text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl"
        >
          {heading.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
        <h3 className="uppercase gap-1.5 text-neutral-500">{subheading}</h3>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-36 w-64 rounded-lg object-cover md:h-52 md:w-96"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-950 dark:text-zinc-200" />
      </motion.div>
    </motion.a>
  );
};
