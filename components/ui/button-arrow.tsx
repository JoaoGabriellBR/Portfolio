import { FaArrowRight } from "react-icons/fa";

const ButtonArrow = ({ children }: any) => {
    return (
      <>
        <button className='group relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-transparent font-medium text-neutral-950 dark:text-zinc-200 border-2 border-neutral-950 dark:border-zinc-200 transition-all duration-300 hover:w-40 text-2xl'>
          <div className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100'>
            {children}
          </div>
          <div className='absolute right-3.5 text-2xl'>
            <FaArrowRight/>
          </div>
        </button>
      </>
    );
  };
  
  export default ButtonArrow;
  