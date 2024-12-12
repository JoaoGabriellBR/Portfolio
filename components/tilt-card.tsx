import { Tilt } from "./ui/tilt";
import { SiAdidas } from "react-icons/si";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TbWorldBolt } from "react-icons/tb";
import { RiLightbulbFlashFill } from "react-icons/ri";

export function TiltCard() {
  const projects = [
    {
      title: "Adidas Shopping",
      href: "/reports",
      logo: <SiAdidas className="text-7xl md:text-9xl" />,
      width: "w-[45%]",
    },
    {
      title: "UpWrite",
      href: "/statistics",
      logo: <FaArrowTrendUp className="text-7xl md:text-9xl" />,
      width: "w-[45%]",
    },
    {
      title: "WorldNews",
      href: "/dashboards",
      logo: <TbWorldBolt className="text-7xl md:text-9xl" />,
      width: "w-[45%]",
    },
    {
      title: "Solar Toy",
      href: "/recordings",
      logo: <RiLightbulbFlashFill className="text-7xl md:text-9xl" />,
      width: "45%",
    },
  ];

  return (
    <div
      className={`h-[70rem] md:h-[50rem] grid grid-cols-4 grid-rows-4 md:grid-rows-5 gap-8 w-full container mx-auto px-4 md:p-0`}
    >
      {projects.map((project, index: any) => (
        <Tilt
          key={index}
          rotationFactor={8}
          isRevese
          className={`col-span-4 md:col-span-2 md:row-span-2 flex flex-col items-center justify-center gap-4 overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-950 rounded-[2rem]`}
        >
          {project.logo}
          <h1 className="text-2xl md:text-5xl">{project.title}</h1>
        </Tilt>
      ))}
    </div>
  );
}