import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  rightIcon?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, rightIcon, ...props }, ref) => {
    return (
      <div className="flex columns-2 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
        <input
          type={type}
          className={cn(
            "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus:outline-none w-full",
            className
          )}
          ref={ref}
          {...props}
        />
        {rightIcon && <div className="flex items-center">{rightIcon}</div>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
