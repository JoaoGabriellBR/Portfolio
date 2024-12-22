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
      className="container px-4 py-10 mx-auto relative rounded-lg overflow-hidden radial-gradient-bg
             [--gradient-center:#f3f4f6] [--gradient-edge:#f3f4f6]
             dark:[--gradient-center:#02081765] dark:[--gradient-edge:#020817]"
    >
      <div className="h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 lg:gap-12">
        
        <HeroTitle title="Vamos criar" subtitle="algo juntos?" size="md" spacing="ml-2 lg:block" />

        {/* Botões de ação */}
        <div className="w-full lg:w-1/2 flex flex-row justify-center lg:justify-start gap-4">
          {contacts.map((contact) => (
            <Link href={contact.link} target="blank">
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
