"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Jumbotron = ({ title, isHomePage }: any) => {
  const [titleNumber, setTitleNumber] = useState(0);

  const mainTitles = useMemo(
    () => ["Front - end", "Back - end", "Full Stack"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === mainTitles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, mainTitles]);

  return (
    <div className="h-screen w-full px-4 flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Conheça meu GitHub <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col justify-center items-center">
          <h1 className="animate-out uppercase flex flex-col justify-center items-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] max-w-full tracking-tighter font-regular break-words text-center">
              <span className="text-spektr-cyan-50">{title}</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {isHomePage && mainTitles.map((mainTitle, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {mainTitle}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p> */}
          </div>
          {/* <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="outline">
              Contato <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4">
              Linkedin <MoveRight className="w-4 h-4" />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
