"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

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
        <MagneticButton
          distance={1.5}
          className="text-foreground border border-neutral-800 rounded-full p-5 cursor-pointer hover:bg-neutral-500 hoer:dark:bg-neutral-200 hover:bg-opacity-10"
        >
          {mobileNavOpen ? (
            <MagneticButton className="shadow-2xl" distance={1.5}>
              <CgClose className="text-4xl shadow-2xl" aria-label="Close menu" />
            </MagneticButton>
          ) : (
            <MagneticButton className="shadow-2xl" distance={1.5}>
              <CgMenuMotion className="text-4xl shadow-2xl" aria-label="Open menu" />
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
        <motion.div className="container mx-auto flex flex-col px-4 gap-10">
          {NAV_ITEMS.map((item) => (
            <FlipLink key={item.id} href={item.href} aria-label={item.title}>
              {item.title}
            </FlipLink>
          ))}
          <div className="flex flex-row items-center gap-4">
            <ModeToggle />
            <Button variant="outline">Português</Button>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
