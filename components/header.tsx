"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import { ModeToggle } from "./mode-toggle";
import { BorderNavbar } from "./border-navbar";

import { Link } from "@/i18n/navigation";
import LanguageSelector from "./language-selector";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LanguageSelectorWeb from "./language-selector-web";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(false); // Mostra o botão do menu
  const mobileMenuVariant = {
    opened: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { y: "-100%", transition: { duration: 0, ease: "easeInOut" } },
  };
  const t = useTranslations("Header");

  const NAV_ITEMS = [
    { id: 0, title: t("nav1"), href: "/" },
    { id: 1, title: t("nav2"), href: "/about" },
    { id: 2, title: t("nav3"), href: "/contact" },
  ];

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  // Detecta se a tela é mobile
  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    const handleResizeOrScroll = () => {
      if (window.scrollY > 80 || isMobile()) {
        setShowMobileMenuButton(true);
      } else {
        setShowMobileMenuButton(false);
        setMobileNavOpen(false); // Fecha o menu mobile se Web Menu aparecer
      }
    };

    window.addEventListener("scroll", handleResizeOrScroll);
    window.addEventListener("resize", handleResizeOrScroll);
    handleResizeOrScroll(); // Verifica já no carregamento

    return () => {
      window.removeEventListener("scroll", handleResizeOrScroll);
      window.removeEventListener("resize", handleResizeOrScroll);
    };
  }, []);

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <motion.div className="text-2xl font-bold uppercase relative z-50 cursor-pointer">
        <Link href="/">
          <GiWolfHead className="text-7xl text-foreground" aria-label="Logo" />
        </Link>
      </motion.div>

      {/* MENU WEB (some em mobile) */}
      <div className="hidden md:flex mr-0 lg:mr-[-7rem]">
        <BorderNavbar>
          {NAV_ITEMS.map((item, index) => (
            <>
              {index !== 0 && (
                <p className="bg-foreground rounded-full h-1 w-1"></p>
              )}
              <FlipLink
                type="web"
                key={item.id}
                href={item.href}
                aria-label={item.title}
              >
                {`${item.title}`}
              </FlipLink>
            </>
          ))}
        </BorderNavbar>
      </div>

      {/* MENU DE IDIOMAS  */}
      <div className="hidden md:flex flex-row items-center justify-center gap-x-4 m-0 p-0">
        <LanguageSelectorWeb />
        <ModeToggle type="web" />
      </div>

      {/* BOTÃO MENU MOBILE (só aparece em mobile ou com scroll) */}
      {showMobileMenuButton && (
        <motion.div
          className="fixed z-50 top-4 right-4"
          onClick={toggleMobileNav}
          aria-label="Toggle navigation menu"
          initial={{ opacity: 0, y: -50, scale: 0.8 }} // Começa mais acima e menor
          animate={{ opacity: 1, y: 0, scale: 1 }} // Faz o movimento de quicar na posição original
          exit={{ opacity: 0, y: -50, scale: 0.8 }} // Sobe e encolhe ao sumir
          transition={{
            type: "spring", // Tipo de animação elástica
            stiffness: 300, // Quanto mais alto, mais rápido o bounce
            damping: 10, // Controla o quanto ele balança depois do bounce
            duration: 0.6,
          }}
          whileHover={{ scale: 1.1 }} // Efeito de crescimento ao passar o mouse
          whileTap={{ scale: 0.95 }} // Dá aquele efeito de "apertar" ao clicar
        >
          <MagneticButton
            distance={1}
            className={`${
              mobileNavOpen ? "text-neutral-200" : "text-foreground "
            } p-5`}
          >
            {mobileNavOpen ? (
              <CgClose
                className="text-4xl shadow-2xl"
                aria-label="Close menu"
              />
            ) : (
              <CgMenuMotion
                className="text-4xl shadow-2xl"
                aria-label="Open menu"
              />
            )}
          </MagneticButton>
        </motion.div>
      )}

      {/* MENU MOBILE */}
      <motion.div
        variants={mobileMenuVariant}
        animate={mobileNavOpen ? "opened" : "closed"}
        className="fixed top-0 right-0 z-40 w-[36rem] h-screen shadow-lg bg-[#0c0c0c] flex flex-col items-start justify-start px-24 pt-40 pb-24"
      >
        <Link href="mailto:joaoname9@gmail.com">
          <p className="bg-clip-text text-transparent tracking-normal break-words bg-gradient-to-b from-neutral-100 to-neutral-200 dark:bg-gradient-to-b dark:from-neutral-400 dark:to-neutral-700">
            joaoname9@gmail.com
          </p>
        </Link>

        <p className="w-full h-[0.04rem] bg-neutral-600 mb-10"></p>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="h-full container mx-auto flex flex-col justify-between gap-10"
        >
          <div className="flex flex-col gap-10">
            {NAV_ITEMS.map((item) => (
              <FlipLink key={item.id} href={item.href} aria-label={item.title}>
                {item.title}
              </FlipLink>
            ))}
          </div>

          <div className="flex flex-row justify-around items-center gap-3">
            <LanguageSelector />
            <MagneticButton distance={1} className={`p-4`}>
              <ModeToggle />
            </MagneticButton>
            <Link href="https://github.com/JoaoGabriellBR" target="blank">
              <MagneticButton distance={1} className={`p-4`}>
                <FaGithub className="text-background dark:text-foreground text-[1.2rem]" />
              </MagneticButton>
            </Link>

            <Link
              href="https://www.linkedin.com/in/joaogabriel-silva"
              target="blank"
            >
              <MagneticButton distance={1} className={`p-4`}>
                <FaLinkedin className="text-background dark:text-foreground text-[1.2rem]" />
              </MagneticButton>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
