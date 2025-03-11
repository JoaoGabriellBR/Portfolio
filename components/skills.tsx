import BorderSkills from "./border-skills";
import { SiNextdotjs, SiTypescript, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaDocker, FaAws } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {
  const skillsStyles = "text-7xl lg:text-9xl";
  const skills = [
    {
      title: "React.js",
      logo: <FaReact className={skillsStyles} />,
    },
    {
      title: "Next.js",
      logo: <SiNextdotjs className={skillsStyles} />,
    },
    {
      title: "Node.js",
      logo: <FaNode className={skillsStyles} />,
    },
    {
      title: "Docker",
      logo: <FaDocker className={skillsStyles} />,
    },
    {
      title: "AWS",
      logo: <FaAws className={skillsStyles} />,
    },
    {
      title: "Tailwind CSS",
      logo: <RiTailwindCssFill className={skillsStyles} />,
    },
    {
      title: "TypeScript",
      logo: <SiTypescript className={skillsStyles} />,
    },
    {
      title: "MySQL",
      logo: <SiMysql className={skillsStyles} />,
    },
  ];

  return skills.map((skill, index: number) => (
    <BorderSkills key={index}>{skill.logo}</BorderSkills>
  ));
}
