"use client";

import { Link } from "@/i18n/navigation";
import { AnimatedText } from "./ui/animated-text";
import { ButtonArrow } from "./ui/button-arrow";
import Typography from "./ui/typography";
import { usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Footer() {
  const pathname = usePathname();
  const t = useTranslations("Footer");

  const contacts = [
    {
      text: pathname === "/contact" ? "GitHub" : t("button"),
      link:
        pathname === "/contact"
          ? "https://github.com/joaoGabriellBR"
          : "/contact",
    },
    { text: "LinkedIn", link: "https://linkedin.com/in/joaogabriel-silva" },
  ];

  return (
    <footer
      className="relative rounded-lg overflow-hidden radial-gradient-bg
             [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6]
             dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817]"
    >
      <div className="container px-4 mx-auto h-screen flex flex-col justify-center items-center space-y-6">
        <div className="min-h-14 lg:min-h-32 flex flex-wrap justify-center items-center text-center gap-x-2 lg:gap-x-4">
          <Typography text={t("title")} size="xl4" color="white" />
          <Typography text={t("subtitle")} size="xl4" color="silver" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row justify-center lg:justify-start gap-4">
          {contacts.map((contact, index) => (
            <Link
              key={index}
              href={contact.link}
              target={pathname === "/contact" ? "blank" : ""}
            >
              <ButtonArrow text={contact.text} />
            </Link>
          ))}
        </div>
      </div>

      {/* Animated Text */}
      <div className="absolute bottom-0 left-0 w-full hidden lg:flex justify-center pointer-events-none z-0">
        <AnimatedText
          text="JOÃO GABRIEL SILVA"
          className="text-[10vw] text-zinc-200 dark:text-neutral-700"
        />
      </div>
    </footer>
  );
}
