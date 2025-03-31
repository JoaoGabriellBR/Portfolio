import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

interface Project {
  name: string;
  handle: string;
  projectRoute: string;
}

interface DescriptionGalleryProps {
  mousePosition: any;
  projects: Project[];
}

export default function SmallImagesGallery({
  mousePosition,
  projects,
}: DescriptionGalleryProps) {
  const [index, setIndex] = useState<number>(0);
  const { x, y } = mousePosition;

  return (
    <div
      className="w-full h-[120vh] relative"
      style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
    >
      <div className="w-[100%] h-[100%] absolute flex flex-col items-center justify-center gap-8 z-10">
        {projects.map(({ name, projectRoute }, i) => {
          return (
            <Link
              href={`/projects/${projectRoute}`}
              className="cursor-pointer text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] text-foreground m-0"
              onMouseOver={() => {
                setIndex(i);
              }}
              key={`p${i}`}
            >
              {name}
            </Link>
          );
        })}
      </div>

      <motion.div
        className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw]"
        style={{ x, y }}
      >
        <Image
          src={`/images/${projects[index].handle}`}
          className="w-full object-cover"
          alt="image"
          fill
        />
      </motion.div>
    </div>
  );
}
