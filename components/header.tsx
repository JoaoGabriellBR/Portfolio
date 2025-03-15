"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MobileMenuButton, MobileMenu } from "./mobile-menu";
import { WebMenu } from "./web-menu";

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
  const isMobile = () => window.innerWidth <= 1000;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleResizeOrScroll = () => {
      lastScrollY = window.scrollY;

      if (window.scrollY > 80 || isMobile()) {
        setShowMobileMenuButton(true);
      } else {
        setShowMobileMenuButton(false);
        if (!mobileNavOpen) {
          setMobileNavOpen(false); // Fecha o menu mobile se Web Menu aparecer, exceto se já estiver aberto
        }
      }
    };

    window.addEventListener("scroll", handleResizeOrScroll);
    window.addEventListener("resize", handleResizeOrScroll);
    handleResizeOrScroll(); // Verifica já no carregamento

    return () => {
      window.removeEventListener("scroll", handleResizeOrScroll);
      window.removeEventListener("resize", handleResizeOrScroll);
    };
  }, [mobileNavOpen]);

  return (
    <header className="container mx-auto px-4 py-4">
      <WebMenu NAV_ITEMS={NAV_ITEMS} />

      {showMobileMenuButton || mobileNavOpen ? (
        <MobileMenuButton
          toggleMobileNav={toggleMobileNav}
          mobileNavOpen={mobileNavOpen}
        />
      ) : null}

      <MobileMenu
        mobileMenuVariant={mobileMenuVariant}
        mobileNavOpen={mobileNavOpen}
        NAV_ITEMS={NAV_ITEMS}
      />
    </header>
  );
}
