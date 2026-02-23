import React from "react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon = ({ name, className, size = 24 }: IconProps) => {
  const IconComponent = (Icons as any)[name];

  if (!IconComponent) {
    return <Icons.HelpCircle className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
};
