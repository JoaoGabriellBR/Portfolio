import * as React from "react";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

type TextAreaProps = HTMLMotionProps<"textarea"> &
  React.ComponentPropsWithoutRef<"textarea">;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.textarea
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl tracking-normal break-words font-normal",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
