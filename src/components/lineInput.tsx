import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const LineInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="line-input flex item-center border-b-2 border-gray-400">
        <input
          type={type}
          className={cn(" bg-white  ", className)}
          ref={ref}
          {...props}
        />
        {icon ? icon : null}
      </div>
    );
  }
);
LineInput.displayName = "LineInput";

export { LineInput };
