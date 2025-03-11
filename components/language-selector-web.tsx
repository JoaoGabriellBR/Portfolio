import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import MagneticButton from "./ui/button-magnetic";
import { languages } from "@/utils/languages";

export default function LanguageSelectorWeb() {
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

  const textColor =
    "bg-clip-text text-transparent tracking-normal break-words bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200";

  const textSize =
    "text-sm sm:text-sm md:text-md lg:text-[1rem] xl:text-[1rem]";

  return (
    <div className="relative" ref={dropdownRef}>
      <MagneticButton
        onClick={() => setIsOpen(!isOpen)}
        distance={0.5}
        className="h-[60px] flex gap-2 p-2 m-0 border-none"
      >
        <FaGlobe className={`${textSize}`} />

        <p className={`${textColor} ${textSize}`}>
          {languages.map(
            (language) => currentLocale === language.locale && language.locale
          )}
        </p>
      </MagneticButton>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: openUpwards ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: openUpwards ? 10 : -10 }}
          className={`absolute min-w-20 w-fit h-auto bg-background border-2 border-neutral-300 dark:border-neutral-800 rounded-3xl shadow-lg overflow-hidden`}
        >
          {languages.map((language) => (
            <div
              key={language.locale}
              className="flex flex-row justify-start items-center gap-2 px-4 py-2 hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer transition"
            >
              <Link
                className="text-background dark:text-foreground"
                href={pathname}
                locale={language.locale}
              >
                <p className={`${textColor} ${textSize}`}>{language.label}</p>
              </Link>
              {currentLocale === language.locale && (
                <p className="bg-foreground rounded-full h-1 w-1"></p>
              )}
            </div>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
