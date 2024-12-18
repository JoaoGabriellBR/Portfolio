"use client"
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { SiAdidas } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Adidas"
          subheading="Plataforma completa de e-commerce."
          imgSrc="/images/adidas.png"
          href="#"
        />
        <Link
          heading="UpWrite"
          subheading=" Criador de notas com recursos avançados de edição de texto."
          imgSrc="/images/upwrite.png"
          href="#"
        />
        <Link
          heading="World News"
          subheading="Site de noticias baseado no jornal estadunidense The New York Times."
          imgSrc="/images/adidas.png"
          href="#"
        />
        <Link
          heading="Solar Toy"
          subheading="Landing page de um Mini Carro Solar"
          imgSrc="/images/adidas.png"
          href="#"
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }: any) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e: any) => {
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
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-zinc-200 md:py-8"
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
          className="relative z-10 block font-bold transition-colors duration-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tighter break-words"
        >
          {heading.split("").map((head, index) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={index}
            >
              {head}
            </motion.span>
          ))}
        </motion.span>
        <h3 className="text-md text-muted-foreground tracking-tighter break-words">{subheading}</h3>
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
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
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