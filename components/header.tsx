"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiWolfHead } from "react-icons/gi";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import MagneticButton from "./ui/button-magnetic";
import { FlipLink } from "./ui/reveal-links";
import { ModeToggle } from "./mode-toggle";
import SwitchLanguage from "./switch-language";
import { useTranslations } from "next-intl";
import { BorderNavbar } from "./border-navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import HeroTitle from "./ui/hero-title";
import { Link, usePathname } from "@/i18n/navigation";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar";
import { HiLanguage } from "react-icons/hi2";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileMenuVariant = {
    opened: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
    closed: { y: "-100%", transition: { duration: 0, ease: "easeInOut" } },
  };
  const t = useTranslations("Header");
  const pathname = usePathname();

  const NAV_ITEMS = [
    { id: 0, title: t("nav1"), href: "/" },
    { id: 1, title: t("nav2"), href: "/about" },
    { id: 2, title: t("nav3"), href: "/contact" },
  ];

  const languages = [
    { locale: "de", label: "Deutsch" },
    { locale: "en", label: "English" },
    { locale: "es", label: "Español" },
    { locale: "fr", label: "Français" },
    { locale: "pt", label: "Português" },
  ];

  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <motion.div className="text-2xl font-bold uppercase relative z-50 cursor-pointer">
        <Link href="/">
          <GiWolfHead className="text-7xl text-foreground" aria-label="Logo" />
        </Link>
      </motion.div>

      <BorderNavbar>
        {NAV_ITEMS.map((item) => (
          <>
            <p className="bg-neutral-400 rounded-full w-[0.2rem] h-[0.2rem]"></p>
            <FlipLink key={item.id} href={item.href} aria-label={item.title}>
              {`${item.title}`}
            </FlipLink>
          </>
        ))}
      </BorderNavbar>

      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={"Language"}>
          <div className="flex flex-col space-y-4">
            {languages.map((language) => (
              <Link
                className="whitespace-nowrap text-[1rem] font-extralight text-neutral-400"
                href={pathname}
                locale={language.locale}
              >
                {language.label}
              </Link>
            ))}
          </div>
        </MenuItem>
      </Menu>
      {/* <p>2025</p> */}

      {/* Menu Toggle Button */}
      {/* <motion.div
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
      </motion.div> */}

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
            <SwitchLanguage />
            <ModeToggle />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
