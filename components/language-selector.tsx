import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const languages = [
  { locale: "de", label: "Deutsch" },
  { locale: "en", label: "English" },
  { locale: "es", label: "Español" },
  { locale: "fr", label: "Français" },
  { locale: "pt", label: "Português" },
];

const LanguageSelector = () => {
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
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 transition"
      >
        <FaGlobe />
        {languages.map(
          (language) =>
            currentLocale === language.locale && <p>{language.label}</p>
        )}
      </button>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: openUpwards ? 10 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: openUpwards ? 10 : -10 }}
          className={`absolute ${
            openUpwards ? "bottom-full mb-2" : "mt-2"
          } w-48 bg-neutral-900 border-2 border-neutral-800 rounded-2xl shadow-lg overflow-hidden`}
        >
          {languages.map((language) => (
            <div
              key={language.locale}
              className="flex flex-row justify-start items-center gap-2 px-4 py-2 hover:bg-neutral-800 cursor-pointer transition"
            >
              {currentLocale === language.locale && (
                <p className="bg-background dark:bg-foreground rounded-full h-1 w-1"></p>
              )}
              <Link
                className="whitespace-nowrap text-[1rem] font-extralight text-background dark:text-foreground"
                href={pathname}
                locale={language.locale}
              >
                {language.label}
              </Link>
            </div>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default LanguageSelector;
