import { type LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export type IconName = keyof typeof dynamicIconImports;

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  link?: string;
}