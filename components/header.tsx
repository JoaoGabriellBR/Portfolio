"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import { ModeToggle } from "./mode-toggle";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import SwitchLanguage from "./switch-language";

const NAV_ITEMS = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "Sobre", href: "/about" },
  { id: 2, title: "Contato", href: "/contact" },
];

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileMenuVariant = {
    opened: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { y: "-100%", transition: { duration: 0, ease: "easeInOut" } },
  };

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  const pathname = usePathname();

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <motion.div className="text-2xl font-bold uppercase relative z-50 cursor-pointer">
        <Link href="/">
          <GiWolfHead className="text-7xl text-foreground" aria-label="Logo" />
        </Link>
      </motion.div>

      {/* Menu Toggle Button */}
      <motion.div
        className="relative z-50"
        onClick={toggleMobileNav}
        aria-label="Toggle navigation menu"
      >
        <MagneticButton distance={1.5} className="text-foreground p-5">
          {mobileNavOpen ? (
            <MagneticButton
              className="shadow-2xl"
              distance={1.5}
              border={false}
            >
              <CgClose
                className="text-4xl shadow-2xl"
                aria-label="Close menu"
              />
            </MagneticButton>
          ) : (
            <MagneticButton
              className="shadow-2xl"
              distance={1.5}
              border={false}
            >
              <CgMenuMotion
                className="text-4xl shadow-2xl"
                aria-label="Open menu"
              />
            </MagneticButton>
          )}
        </MagneticButton>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <motion.div
        variants={mobileMenuVariant}
        animate={mobileNavOpen ? "opened" : "closed"}
        className="fixed top-0 left-0 z-40 w-full h-screen bg-background flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="container mx-auto flex flex-col px-4 gap-10"
        >
          {NAV_ITEMS.map((item) => (
            <FlipLink key={item.id} href={item.href} aria-label={item.title}>
              {item.title}
            </FlipLink>
          ))}
          <div className="flex flex-row justify-end items-center">
            <SwitchLanguage/>
            <ModeToggle />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
