import { motion } from "framer-motion";

export default function SmartphoneMockup({ children }: any) {
  return (
    <div className="relative flex justify-center h-[700px] w-[340px] border-[0.5rem] border-neutral-700 rounded-[3rem] shadow-2xl shadow-neutral-950 dark:shadow-black aspect-[9/16]">
      {children}
      <span className="border border-neutral-950 bg-background w-3 h-3 mt-2 rounded-full"></span>
      <span className="absolute -right-2 top-20 border-4 border-neutral-950 h-10 rounded-[3rem]"></span>
      <span className="absolute -right-2 top-44 border-4 border-neutral-950 h-24 rounded-[3rem]"></span>
    </div>

  );
}

    // <div className="min-h-fit container mx-auto flex justify-center items-center p-4 h-[900px] w-[340px]">
    //   <motion.div
    //     className="relative bg-background rounded-[3rem] shadow-2xl shadow-neutral-950 dark:shadow-black border-[0.5rem] border-neutral-700 p-2 w-full max-w-full"
    //     initial={{ opacity: 0, scale: 0.8 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <div className="w-full aspect-[9/20] bg-background rounded-[3rem] overflow-hidden">
    //       {children}
    //     </div>