import React, { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const MastheadVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        xl: "text-8xl md:text-9xl lg:text-10xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl, md:text-3xl, lg: text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface MastheadProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof MastheadVariants> {}

const Masthead = forwardRef<HTMLHeadingElement, MastheadProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(MastheadVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);
Masthead.displayName = "Masthead";
export default Masthead;