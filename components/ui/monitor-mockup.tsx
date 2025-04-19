import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MonitorMockupProps {
  children: ReactNode;
}

const MonitorMockup: React.FC<MonitorMockupProps> = ({ children }) => {
  return (
    <div className="min-h-fit container mx-auto flex justify-center items-center p-4 w-full ">
      <motion.div
        className="relative bg-background rounded-[3rem] shadow-2xl shadow-neutral-950 dark:shadow-black bg-neutral-700 border-[0.5rem] border-b-[2rem] border-neutral-700 p-2 w-full max-w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full aspect-[16/9] bg-background rounded-[3rem] overflow-hidden">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default MonitorMockup;
