import { FaArrowRight } from "react-icons/fa";
import HeroTitle from "./hero-title";
import { IoIosArrowRoundForward } from "react-icons/io";

const ButtonArrow = ({ children }: any) => {
  const wordSize = [
    {
      sm: "w-16 h-12 hover:w-40 text-2xl",
      md: "w-20 h-20 hover:w-56 text-2xl",
      lg: "w-20 h-20 hover:w-40 text-4xl",
    },
  ];

  const iconSize = [
    {
      sm: "right-3.5 text-2xl",
      md: "right-2 text-3xl",
    },
  ];

  return (
    <>
      <button className="group relative inline-flex   w-20 h-20 hover:w-40 text-2xl  items-center justify-center overflow-hidden rounded-full bg-transparent font-medium text-neutral-950 dark:text-zinc-200 border-2 border-neutral-950 dark:border-zinc-200 transition-all duration-300">
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
          {children}
        </div>
        <div className="absolute right-2 text-3xl">
          <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
        </div>
      </button>
    </>
  );
};

export default ButtonArrow;
