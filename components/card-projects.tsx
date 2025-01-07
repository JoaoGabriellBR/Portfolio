import { Tilt } from "./ui/tilt";
import { SiAdidas } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BorderCardProjects } from "./border-card-projects";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export function CardProjects() {
  const projects = [
    {
      title: "Adidas Shopping",
      href: "/adidas-shopping",
      logo: <FaReact className="text-7xl md:text-9xl" />,
    },
    {
      title: "UpWrite",
      href: "/upwrite",
      logo: <SiNextdotjs className="text-7xl md:text-9xl" />,
    },
    {
      title: "WorldNews",
      href: "/worldnews",
      logo: <FaNode className="text-7xl md:text-9xl" />,
    },
    {
      title: "Solar Toy",
      href: "/solartoy",
      logo: <FaDocker className="text-7xl md:text-9xl" />,
    },
    {
      title: "Solar Toy",
      href: "/solartoy",
      logo: <FaAws className="text-7xl md:text-9xl" />,
    },
    {
      title: "Solar Toy",
      href: "/solartoy",
      logo: <RiTailwindCssFill className="text-7xl md:text-9xl" />,
    },
    {
      title: "Solar Toy",
      href: "/solartoy",
      logo: <SiTypescript className="text-7xl md:text-9xl" />,
    },
    {
      title: "Solar Toy",
      href: "/solartoy",
      logo: <SiMysql className="text-7xl md:text-9xl" />,
    },
  ];

  return projects.map((project, index: any) => (
    <BorderCardProjects key={index}>
      {project.logo}
      {/* <h1 className="text-2xl">{project.title}</h1> */}
    </BorderCardProjects>
  ));
}
