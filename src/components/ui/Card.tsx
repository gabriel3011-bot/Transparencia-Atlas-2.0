import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-[var(--color-atlas-card)] border border-[var(--color-atlas-border)]/60 rounded-xl p-6 hover:border-[var(--color-atlas-copper)]/20 transition-colors duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
