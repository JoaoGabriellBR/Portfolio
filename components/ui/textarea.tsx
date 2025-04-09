import * as React from "react";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { textSizes } from "@/utils/text-sizes";

type TextAreaProps = HTMLMotionProps<"textarea"> &
  React.ComponentPropsWithoutRef<"textarea"> & {
    label: string;
  };

var textAreaStyles = "text-foreground dark:text-white tracking-wide break-words";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <motion.textarea
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className={cn(`${textSizes.md} ${textAreaStyles} peer flex min-h-[80px] w-full rounded-md border-b-2 border-neutral-400 dark:border-neutral-800 bg-background px-3 pt-4 pb-2 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-normal`,            
            className
          )}
          ref={ref}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={props.id}
          className={cn(`${textSizes.md} ${textAreaStyles} absolute duration-300 transform -translate-y-6 scale-75 top-4 left-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none font-semibold dark:font-normal`
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
