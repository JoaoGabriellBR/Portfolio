import { BorderCardProjects } from "./border-card-projects";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function CardProjects() {
  const projects = [
    {
      title: "React.js",
      logo: <FaReact className="text-7xl lg:text-9xl" />,
    },
    {
      title: "Next.js",
      logo: <SiNextdotjs className="text-7xl lg:text-9xl" />,
    },
    {
      title: "Node.js",
      logo: <FaNode className="text-7xl lg:text-9xl" />,
    },
    {
      title: "Docker",
      logo: <FaDocker className="text-7xl lg:text-9xl" />,
    },
    {
      title: "AWS",
      logo: <FaAws className="text-7xl lg:text-9xl" />,
    },
    {
      title: "Tailwind CSS",
      logo: <RiTailwindCssFill className="text-7xl lg:text-9xl" />,
    },
    {
      title: "TypeScript",
      logo: <SiTypescript className="text-7xl lg:text-9xl" />,
    },
    {
      title: "MySQL",
      logo: <SiMysql className="text-7xl lg:text-9xl" />,
    },
  ];

  return projects.map((project, index: any) => (
    <BorderCardProjects key={index}>{project.logo}</BorderCardProjects>
  ));
}
