import { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

interface MousePosition {
  x: number;
  y: number;
}

interface Project {
  name: string;
  handle: string;
}

interface DescriptionGalleryProps {
  mousePosition: any;
  projects: Project[];
}

export default function DescriptionGallery({
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
        {projects.map(({ name }, i) => {
          return (
            <p
              className="text-9xl text-foreground cursor-default m-0 uppercase"
              onMouseOver={() => {
                setIndex(i);
              }}
              key={`p${i}`}
            >
              {name}
            </p>
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
