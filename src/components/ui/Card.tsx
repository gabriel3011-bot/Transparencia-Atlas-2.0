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
        "bg-[var(--color-atlas-card)] border border-[var(--color-atlas-border)] rounded-xl p-6 shadow-sm hover:border-[var(--color-atlas-copper)]/30 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
