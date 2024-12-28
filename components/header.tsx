"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

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
          <GiWolfHead className="text-7xl text-foreground" />
        </Link>
      </motion.div>

      {/* Botão do menu */}
      <motion.div
        className="relative z-50"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <MagneticButton
          distance={2}
          className="text-foreground border border-neutral-800 rounded-full p-5 cursor-pointer hover:bg-neutral-600 hover:bg-opacity-10"
        >
          {mobileNavOpen ? (
            <CgClose className="text-4xl" />
          ) : (
            <CgMenuMotion className="text-4xl" />
          )}
        </MagneticButton>
      </motion.div>

      {/* Itens do Menu */}
      <motion.div
        variants={mobileMenuVariant}
        animate={mobileNavOpen ? "opened" : "closed"}
        className="fixed top-0 left-0 z-40 w-full h-screen flex bg-background flex-col items-center justify-center"
      >
        <motion.div className=" container mx-auto flex flex-col px-4 gap-10">
          {NAV_ITEMS.map((item) => (
            <FlipLink href={item.href}>{item.title}</FlipLink>
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
