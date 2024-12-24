"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { CgMenuMotion } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import Link from "next/link";

type NavItem = {
  id: number;
  title: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "Sobre", href: "/about" },
  { id: 2, title: "Contato", href: "/contact" },
];

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileMenuVariant = {
    opened: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <header className="container mx-auto px-4 pt-4 flex justify-between items-center relative">
      {/* Logo */}
      <motion.div className="text-2xl font-bold uppercase relative z-50 cursor-pointer">
        <Link href="/">
          <GiWolfHead className="text-7xl text-neutral-100" />
        </Link>
      </motion.div>

      {/* Botão do menu */}
      <motion.div
        className="relative z-50"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <MagneticButton
          distance={2}
          className="border border-neutral-500 rounded-full p-6 cursor-pointer"
        >
          {mobileNavOpen ? (
            <TfiClose className="text-3xl" />
          ) : (
            <CgMenuMotion className="text-3xl" />
          )}
        </MagneticButton>
      </motion.div>

      {/* Itens do Menu */}
      <motion.div
        variants={mobileMenuVariant}
        animate={mobileNavOpen ? "opened" : "closed"}
        className="fixed top-0 left-0 z-40 w-full h-screen flex bg-neutral-950 flex-col items-center justify-center"
      >
        <motion.div className="space-y-10">
          {NAV_ITEMS.map((item) => (
            <FlipLink href={item.href}>{item.title}</FlipLink>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
