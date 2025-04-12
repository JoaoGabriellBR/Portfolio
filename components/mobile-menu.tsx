import React from "react";
import { motion } from "framer-motion";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { MagneticButton } from "./ui/button-magnetic";
import { FlipLink } from "./ui/flip-link";
import { ModeToggle } from "./mode-toggle";
import { Link } from "@/i18n/navigation";
import LanguageSelector from "./language-selector";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { textSizes } from "@/utils/text-sizes";

type NavItem = {
  title: string;
  href: string;
};

type MobileMenuButtonProps = {
  toggleMobileNav: () => void;
  mobileNavOpen: boolean;
};

type MobileMenuProps = {
  mobileNavOpen: boolean;
  NAV_ITEMS: NavItem[];
};

// Componente de botão do menu (hambúrguer/close)
export const MobileMenuButton = ({
  toggleMobileNav,
  mobileNavOpen,
}: MobileMenuButtonProps) => (
  <motion.div
    className="fixed z-50 top-4 right-4 lg:top-8 lg:right-8 transform translate-x-0 max-w-screen"
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

// Lista de navegação
const NavigationLinks = ({ items }: { items: NavItem[] }) => (
  <div className="flex flex-col ">
    {items.map((item) => (
      <FlipLink key={item.title} href={item.href} aria-label={item.title}>
        {item.title}
      </FlipLink>
    ))}
  </div>
);

// Ícones sociais e ações
const MobileActions = () => (
  <div className="flex flex-row flex-wrap justify-end items-center gap-3 mt-6">
    <LanguageSelector />
    <ModeToggle type="mobile" />
    <ExternalLink href="https://github.com/JoaoGabriellBR" label="GitHub">
      <FaGithub className={`text-foreground dark:text-white ${textSizes.md}`} />
    </ExternalLink>
    <ExternalLink
      href="https://www.linkedin.com/in/joaogabriel-silva"
      label="LinkedIn"
    >
      <FaLinkedin
        className={`text-foreground dark:text-white ${textSizes.md}`}
      />
    </ExternalLink>
  </div>
);

// Link externo com botão magnético
const ExternalLink = ({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) => (
  <Link href={href} target="_blank" aria-label={label}>
    <MagneticButton distance={0.5} className="p-5">
      {children}
    </MagneticButton>
  </Link>
);

// Menu lateral responsivo
export const MobileMenu = ({ mobileNavOpen, NAV_ITEMS }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0, scale: 0.9 }}
      animate={{
        x: mobileNavOpen ? "0%" : "100%",
        opacity: mobileNavOpen ? 1 : 0,
        scale: mobileNavOpen ? 1 : 0.9,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        scale: { duration: 0.5 },
        opacity: { duration: 0.3 },
      }}
      className="fixed top-0 right-0 z-40 w-full max-w-full h-screen bg-background px-4 pt-32 pb-24 overflow-y-auto shadow-lg flex flex-col"
    >
      <div className="w-full h-[1px] bg-neutral-700 mb-8" />
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="flex flex-col justify-between h-full md:h-fit lg:h-full container mx-auto"
      >
        <NavigationLinks items={NAV_ITEMS} />
        <MobileActions />
      </motion.div>
    </motion.div>
  );
};
