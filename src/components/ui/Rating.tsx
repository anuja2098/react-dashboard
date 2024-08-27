import { Star } from "lucide-react";

// type Props = {};

const Rating = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex gap-2 p-1">
          {Array.from({ length: 5 }, () => (
            <Star fill="#111" strokeWidth={0} />
          ))}
        </div>
        <div className="absolute top-0 flex gap-2 p-1">
          <Star fill="yellow" strokeWidth={0} />
          <Star fill="yellow" strokeWidth={0} />
          <Star fill="yellow" strokeWidth={0} />
          <Star fill="yellow" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
};

export default Rating;
