import React from 'react';
import { LucideIcon } from 'lucide-react';

type AnimatedIconProps = {
  icon: LucideIcon;
  className?: string;
  variant?: 'problem' | 'solution' | 'stats';
};

export function AnimatedIcon({ icon: Icon, className = '', variant = 'stats' }: AnimatedIconProps) {
  const variants = {
    problem: "transition-all duration-300 text-[#fcb404] hover:text-[#A2A2A2] group-hover:text-[#A2A2A2]",
    solution: "transition-all duration-300 text-[#546cfc] hover:text-[#A2A2A2] group-hover:text-[#A2A2A2]",
    stats: "transition-all duration-300 hover:text-[#fcb404] group-hover:text-[#fcb404]"
  };

  return <Icon className={`${variants[variant]} ${className}`} />;
}