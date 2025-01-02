import { FaArrowRight } from "react-icons/fa";

const ButtonArrow = ({ children }: any) => {
  const wordSize = [
    {
      sm: "w-16 h-12 hover:w-40 text-2xl",
      md: "w-20 h-20 hover:w-56 text-2xl",
      lg: "w-20 h-20 hover:w-40 text-4xl"
    }
  ]
  
  const iconSize = [
    {
      sm: "right-3.5 text-2xl",
      md: "right-2 text-3xl"
    }
  ]


    return (
      <>
        <button className='group relative inline-flex   h-28 w-28 hover:w-64 text-3xl   items-center justify-center overflow-hidden rounded-full bg-transparent font-medium text-neutral-950 dark:text-zinc-200 border-2 border-neutral-950 dark:border-zinc-200 transition-all duration-300'>
          <div className='inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100'>
            {children}
          </div>
          <div className='absolute right-2 text-3xl'>
            <FaArrowRight/>
          </div>
        </button>
      </>
    );
  };
  
  export default ButtonArrow;
  