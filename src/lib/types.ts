import { LucideProps } from "lucide-react";

export type CounterWidgetType = {
  icon: React.FC<LucideProps>;
  name: string;
  number: number;
  isIncrease: boolean;
  value: number;
  color: string;
};

export type ItemsCard = {
  icon: React.FC<LucideProps>;
  title: string;
  color: string;
};
