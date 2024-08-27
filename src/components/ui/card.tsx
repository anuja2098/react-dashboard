import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  className?: string;
}

const Card = (props: IProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "bg-black-gray rounded-sm text-white w-full h-full p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
