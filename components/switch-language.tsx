import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/navigation";
import HeroTitle from "./ui/hero-title";
import { IoLanguageOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { useLocale } from "next-intl";
import { HiMiniLanguage } from "react-icons/hi2";

const languages = [
  { locale: "de", label: "Deutsch" },
  { locale: "en", label: "English" },
  { locale: "es", label: "Español" },
  { locale: "fr", label: "Français" },
  { locale: "pt", label: "Português" },
];

export default function SwitchLanguage() {
  const pathname = usePathname();
  const currentLocale = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="cursor-pointer"
        >
          <HiMiniLanguage className="text-foreground h-[5vw] w-[5vw]" />
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[2rem]">
        {languages.map((language) => (
          <motion.div
            key={language.locale}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
          >
            <DropdownMenuItem>
              <Link
                href={pathname}
                locale={language.locale}
                className="flex flex-row justify-between items-center px-4"
              >
                {currentLocale === language.locale && (
                  <FaCheck className="text-3xl" />
                )}

                <HeroTitle
                  letterPadding={false}
                  text={language.label}
                  color="white"
                  size="paragraphy"
                  className="p-4"
                />
              </Link>
            </DropdownMenuItem>
          </motion.div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
