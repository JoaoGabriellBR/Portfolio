"use client";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { MobileMenuButton, MobileMenu } from "./mobile-menu";
import { WebMenu } from "./web-menu";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showMobileMenuButton, setShowMobileMenuButton] = useState(false); // Mostra o botão do menu
  const t = useTranslations("Header");

  const NAV_ITEMS = [
    { title: t("nav1"), href: "/" },
    { title: t("nav2"), href: "/about" },
    { title: t("nav3"), href: "/projects" },
    { title: t("nav4"), href: "/contact" },
  ];

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  const isMobile = () => window.innerWidth < 768;

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
    <header className="container mx-auto p-4 relative z-40 h-20">

      <WebMenu NAV_ITEMS={NAV_ITEMS} />

      {showMobileMenuButton || mobileNavOpen ? (
        <MobileMenuButton
          toggleMobileNav={toggleMobileNav}
          mobileNavOpen={mobileNavOpen}
        />
      ) : null}

      <MobileMenu mobileNavOpen={mobileNavOpen} NAV_ITEMS={NAV_ITEMS} />
    </header>
  );
}
