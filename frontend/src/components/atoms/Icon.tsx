import { cn } from "@/shared/lib/utils";
import type { LucideIcon, LucideProps } from "lucide-react";

export interface IconProps extends LucideProps {
  icon: LucideIcon;
}

/**
 * Wrapper atom for Lucide icons.
 * Ensures consistent sizing and color handling across the app.
 *
 * @example
 * import { Home } from "lucide-react";
 * <Icon icon={Home} size={20} className="text-indigo-400" />
 */
export function Icon({ icon: LucideIconComponent, className, ...props }: IconProps) {
  return (
    <LucideIconComponent
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
