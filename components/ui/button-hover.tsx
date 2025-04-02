// import { Text } from "./text";
import Typography from "./typography";
import Link from "next/link";

export const ButtonHover = ({ children, href }: any) => {
  return (
    <Link href={href}>
      <button
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
        after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer font-normal"
      >
        <Typography text={children} size="sm" />
      </button>
    </Link>
  );
};
