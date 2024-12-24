// components/Header.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { CgMenuMotion } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";

// Definição de tipos para os itens do menu
type NavItem = {
  id: number;
  title: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: 0, title: "Home" },
  { id: 1, title: "Sobre" },
  { id: 2, title: "Contato" },
];

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Variantes de animação com Framer Motion
  const mobileMenuVariant = {
    opened: { y: "0%", transition: { duration: 0.6, ease: "easeInOut" } },
    closed: { y: "-100%", transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const ulVariant = {
    opened: { transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  };

  const liVariant = {
    opened: { opacity: 1, y: "0%", transition: { duration: 0.3 } },
    closed: { opacity: 0, y: "100%", transition: { duration: 0.3 } },
  };

  return (
    <header className="container mx-auto px-4 pt-4 flex justify-between items-center relative">
      {/* Logo - agora com z-index para ficar sobre o fundo preto */}
      <motion.div className="text-2xl font-bold uppercase relative z-50">
        <GiWolfHead className="text-7xl" />
      </motion.div>

      {/* Botão do menu para dispositivos móveis */}
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

      {/* Menu Mobile - Alterado o z-index para garantir que o fundo cubra tudo */}
      <motion.div
        variants={mobileMenuVariant}
        animate={mobileNavOpen ? "opened" : "closed"}
        className="fixed top-0 left-0 z-40 w-full h-screen flex bg-neutral-950 flex-col items-center justify-center"
      >
        <motion.ul variants={ulVariant} className="space-y-6">
          {NAV_ITEMS.map((item) => (
            <motion.li
              key={item.id}
              variants={liVariant}
              className="text-white text-2xl uppercase cursor-pointer"
            >
              {item.title}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
};

export default Header;
