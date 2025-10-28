import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-soft",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gradient-primary text-primary-foreground hover:shadow-colored-primary hover:scale-105",
        secondary: "border-transparent bg-gradient-secondary text-secondary-foreground hover:shadow-colored-secondary hover:scale-105",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-medium hover:scale-105",
        outline: "text-foreground border-2 hover:bg-accent hover:scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
