import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { MagneticButton } from "./ui/button-magnetic";
import { languages } from "@/utils/languages";
import { textSizes } from "@/utils/text-sizes";
import { RiPokerSpadesFill } from "react-icons/ri";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [openUpwards, setOpenUpwards] = useState(false);
  const pathname = usePathname();
  const currentLocale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      setOpenUpwards(spaceBelow < 150 && spaceAbove > spaceBelow);
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <MagneticButton
        onClick={() => setIsOpen(!isOpen)}
        distance={0.5}
        className={`${textSizes.lg} w-fit flex gap-2 p-5`}
      >
        <FaGlobe
          className={`text-foreground dark:text-white ${textSizes.md}`}
        />
        <p className={`${textSizes.sm} text-foreground dark:font-normal`}>
          {languages.map(
            (language) => currentLocale === language.locale && language.label
          )}
        </p>
      </MagneticButton>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: openUpwards ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: openUpwards ? 10 : -10 }}
          className={`absolute ${
            openUpwards ? "bottom-full mb-2" : "mt-2"
          } w-48 h-auto bg-background border-2 border-neutral-950 dark:border-neutral-800 rounded-3xl shadow-lg overflow-hidden`}
        >
          {languages.map((language) => (
            <div
              key={language.locale}
              className="flex flex-row justify-start items-center gap-2 px-[1rem] p-[0.7rem] hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer transition"
            >
              <Link
                className="text-foreground"
                href={pathname}
                locale={language.locale}
              >
                <p
                  className={`${textSizes.sm} text-foreground dark:font-normal`}
                >
                  {language.label}
                </p>
              </Link>
              {currentLocale === language.locale && (
                <RiPokerSpadesFill className="text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem] text-foreground dark:text-white" />
              )}
            </div>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
