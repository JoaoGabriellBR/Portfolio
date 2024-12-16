"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { SiAdidas } from "react-icons/si";
import { FaArrowTrendUp, FaGithub } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { GiWolfHead } from "react-icons/gi";

export const Header = () => {

  const navigationItems = [
    {
      title: "Projetos",
      description: "Conheça o meu GitHub",
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
      title: "Contato",
      href: "/contact",
      description: "",
    },
    {
      title: "Sobre",
      href: "/about",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 top-0 bg-background px-4 container mx-auto min-h-20 flex flex-row lg:grid lg:grid-cols-3 items-center">

        <div className="justify-start items-center lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink>
                        <Button variant="ghost">{item.title}</Button>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              GitHub
                              <FaGithub/>
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted px-4 py-2 rounded"
                              >
                                <div className="flex flex-row justify-start items-center gap-2">
                                  {subItem.logo}
                                  <span>{subItem.title}</span>
                                </div>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <Link href="/" className="flex lg:justify-center">
          <GiWolfHead className="text-7xl"/>
        </Link>

        <div className="flex flex-row justify-end w-full gap-4">
          <Button variant="ghost">Português</Button>
          <ModeToggle variant="ghost"/>
        </div>

        <div className="flex w-12 lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8 px-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center"
                      >
                        <span className="text-lg">{item.title}</span>
                        <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                      </Link>
                    ) : (
                      <p className="text-lg">{item.title}</p>
                    )}
                    {item.items &&
                      item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex justify-between items-center"
                        >
                          <span className="text-muted-foreground">
                            {subItem.title}
                          </span>
                          <MoveRight className="w-4 h-4 stroke-1" />
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
    </header>
  );
};

export default Header;
