import React from "react";
import { motion } from "framer-motion";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import { ModeToggle } from "./mode-toggle";

import { Link } from "@/i18n/navigation";
import LanguageSelector from "./language-selector";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const MobileMenuButton = ({ toggleMobileNav, mobileNavOpen }: any) => {
  return (
    <motion.div
      className="fixed z-50 top-4 right-4 transform translate-x-0 max-w-screen"
      onClick={toggleMobileNav}
      aria-label="Toggle navigation menu"
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.8 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.6,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MagneticButton distance={1} className="text-foreground p-5">
        {mobileNavOpen ? (
          <CgClose
            className="text-[1.2rem] lg:text-[2rem] shadow-2xl"
            aria-label="Close menu"
          />
        ) : (
          <CgMenuMotion
            className="text-[1.2rem] lg:text-[2rem] shadow-2xl"
            aria-label="Open menu"
          />
        )}
      </MagneticButton>
    </motion.div>
  );
};

export const MobileMenu = ({
  mobileMenuVariant,
  mobileNavOpen,
  NAV_ITEMS,
}: any) => {
  return (
    <motion.div
      variants={mobileMenuVariant}
      animate={mobileNavOpen ? "opened" : "closed"}
      className="fixed top-0 right-0 z-40 w-full h-screen shadow-lg bg-background flex flex-col items-start justify-start px-4 pt-40 pb-24"
    >
      <div className="w-full container mx-auto px-4 pb-10">
        <Link href="mailto:joaoname9@gmail.com">
          <p className="bg-clip-text text-transparent tracking-normal break-words bg-gradient-to-b from-neutral-100 to-neutral-200 dark:bg-gradient-to-b dark:from-neutral-400 dark:to-neutral-700">
            joaoname9@gmail.com
          </p>
        </Link>
      </div>

      <p className="w-full h-[0.04rem] bg-neutral-600 mb-10"></p>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="h-full container mx-auto flex flex-col justify-between gap-y-10"
      >
        <div className="flex flex-col w-fit gap-y-10">
          {NAV_ITEMS.map((item: any) => (
            <FlipLink key={item.id} href={item.href} aria-label={item.title}>
              {item.title}
            </FlipLink>
          ))}
        </div>

        <div className="flex flex-row flex-wrap justify-end items-center gap-3">
          <LanguageSelector />
          <MagneticButton distance={1} className={`p-5`}>
            <ModeToggle type="mobile" />
          </MagneticButton>
          <Link href="https://github.com/JoaoGabriellBR" target="blank">
            <MagneticButton distance={1} className={`p-5`}>
              <FaGithub className="text-foreground text-[1.2rem] lg:text-[2rem]" />
            </MagneticButton>
          </Link>

          <Link
            href="https://www.linkedin.com/in/joaogabriel-silva"
            target="blank"
          >
            <MagneticButton distance={1} className={`p-5`}>
              <FaLinkedin className="text-foreground text-[1.2rem] lg:text-[2rem]" />
            </MagneticButton>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
