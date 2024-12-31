import { Tilt } from "./ui/tilt";
import { SiAdidas } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BorderCardProjects } from "./border-card-projects";

export function CardProjects() {
  const projects = [
    {
      title: "Adidas Shopping",
      href: "/adidas-shopping",
      logo: <SiAdidas className="text-7xl md:text-9xl" />,
    },
    {
      title: "UpWrite",
      href: "/upwrite",
      logo: <FaArrowTrendUp className="text-7xl md:text-9xl" />,
    },
    {
      title: "WorldNews",
      href: "/worldnews",
      logo: <TbWorldBolt className="text-7xl md:text-9xl" />,
    },
    {
      title: "Solar Toy",
      href: "/solartoy",
      logo: <RiLightbulbFlashFill className="text-7xl md:text-9xl" />,
    },
  ];

  return (
    <div
      className={`h-[70rem] md:h-[50rem] grid grid-cols-4 grid-rows-4 md:grid-rows-5 gap-8 w-full container mx-auto px-4 md:p-0`}
    >
      {projects.map((project, index: any) => (
        <BorderCardProjects
          key={index}
        >
          {project.logo}
          <h1 className="text-2xl md:text-5xl">{project.title}</h1>
        </BorderCardProjects>
      ))}
    </div>
  );
}
