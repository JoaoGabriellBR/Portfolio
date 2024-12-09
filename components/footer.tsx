"use client";

import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { SiAdidas } from "react-icons/si";
import { FaArrowTrendUp, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbWorldBolt } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { GiDirewolf } from "react-icons/gi";
import { GiWolfHead } from "react-icons/gi";

export const Footer = () => {
  const navigationItems = [
    {
      title: "Projetos",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Adidas Shopping",
          href: "/reports",
          logo: <SiAdidas />,
        },
        {
          title: "UpWrite",
          href: "/statistics",
          logo: <FaArrowTrendUp />,
        },
        {
          title: "WorldNews",
          href: "/dashboards",
          logo: <TbWorldBolt />,
        },
        {
          title: "Solar Toy",
          href: "/recordings",
          logo: <RiLightbulbFlashFill />,
        },
      ],
    },
    {
      title: "Sobre",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Sobre mim",
          href: "/about",
        },
        {
          title: "Experiências",
          href: "/fundraising",
        },
        {
          title: "Tecnologias",
          href: "/investors",
        },
        {
          title: "Contato",
          href: "/contact",
        },
      ],
    },
  ];

  const socialMedias = [
    {
      id: "email",
      tooltip: "Meu Email",
      icon: MdEmail,
      href: "mailto:joaoname9@gmail.com",
    },
    {
      id: "linkedin",
      tooltip: "Meu Linkedin",
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/joaogabriel-silva",
    },
    {
      id: "github",
      tooltip: "Meu GitHub",
      icon: FaGithub,
      href: "https://github.com/JoaoGabriellBR",
    },
  ];

  return (
    <footer className="w-full row-start-3 py-10 lg:py-20 bg-foreground text-background px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">
          <div className="flex gap-2 flex-col w-full md:w-1/2">
            <GiWolfHead className="text-9xl" />
            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-left">
              Managing a small business today is already tough.
            </p>
            {/* <ModeToggle /> */}
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-end gap-4 md:gap-12 w-1/3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start justify-between gap-2"
              >
                {item.href ? (
                  <Link href={item.href}>
                    <span className="text-xl">{item.title}</span>
                  </Link>
                ) : (
                  <p className="text-xl">{item.title}</p>
                )}
                {item.items &&
                  item.items.map((subItem) => (
                    <Link key={subItem.title} href={subItem.href}>
                      <span className="text-md">{subItem.title}</span>
                    </Link>
                  ))}
              </div>
            ))}
          </div>

          <div className="w-1/3 flex items-end justify-start md:justify-end ">
            <nav className="w-[10rem] flex flex-row justify-between items-center">
              {socialMedias.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  data-tooltip-delay-show={400}
                >
                  {/* <div className="w-20 h-20 flex justify-center items-center rounded-full cursor-pointer hover:opacity-80"> */}
                    <social.icon className="text-2xl font-bold" />
                  {/* </div> */}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
