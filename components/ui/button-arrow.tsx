import { IoIosArrowRoundForward } from "react-icons/io";
import HeroTitle from "./hero-title";

const ButtonArrow = ({ children }: any) => {
  return (
    <>
      <button className="group relative inline-flex w-20 h-20 hover:w-40 items-center justify-center overflow-hidden rounded-full bg-transparent font-medium border-2 border-neutral-950 dark:border-zinc-200 transition-all duration-300">
        <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
          <HeroTitle
            text={children}
            letterPadding={false}
            size="very_small"
            color="white"
          />
        </div>

        <div className="absolute right-1 text-3xl">
          <IoIosArrowRoundForward className=" bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-950 dark:bg-gradient-to-b dark:from-neutral-100 dark:to-neutral-200 text-4xl" />
        </div>
      </button>
    </>
  );
};

export default ButtonArrow;
