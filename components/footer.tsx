"use client";

import Link from "next/link";
import AnimatedText from "./ui/cursor-follow-text";
import ButtonArrow from "./ui/button-arrow";
import HeroTitle from "./ui/hero-title";

export const Footer = () => {
  const contacts = [
    { text: "Contato", link: "https://github.com/joaoGabriellBR" },
    { text: "LinkedIn", link: "https://linkedin.com/in/joaogabriel-silva" },
  ];

  return (
    <footer
      className="container px-4 mx-auto relative rounded-lg overflow-hidden radial-gradient-bg
             [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6]
             dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817]"
    >
      <div className="h-screen flex flex-col justify-center items-center space-y-6">
        <div className="min-h-14 lg:min-h-32 flex flex-wrap justify-center items-center">
          <HeroTitle text="Algum projeto" size="xl" color="white" />
          <HeroTitle text="em mente?" size="xl" color="silver" />
        </div>

        {/* Botões de ação */}
        <div className="flex flex-row justify-center lg:justify-start gap-4">
          {contacts.map((contact, index) => (
            <Link key={index} href={contact.link} target="blank">
              <ButtonArrow>{contact.text}</ButtonArrow>
            </Link>
          ))}
        </div>
      </div>

      {/* Seção separada para o AnimatedText */}
      <div className="absolute bottom-0 left-0 w-full hidden lg:flex justify-center pointer-events-none z-0">
        <AnimatedText
          text="JOÃO GABRIEL SILVA"
          className="text-[8vw] text-zinc-200 dark:text-neutral-700"
        />
      </div>
    </footer>
  );
};
