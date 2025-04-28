import { Link } from "@/i18n/navigation";

export const ButtonHover = ({ children, href, className }: any) => {
  return (
    <Link href={href}>
      <button
        className={`${className} relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
        after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-&lsqb;cubic-bezier(0.65_0.05_0.36_1)&rsqb; hover:after:origin-bottom-left hover:after:scale-x-100 cursor-pointer font-normal`}
      >
        {children}
      </button>
    </Link>
  );
};
