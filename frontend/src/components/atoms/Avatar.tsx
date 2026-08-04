import Image from "next/image";
import { cn, getInitials } from "@/shared/lib/utils";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, string> = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-xl",
};

const pixelSizes: Record<AvatarSize, number> = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64,
};

export function Avatar({ name = "", src, size = "md", className }: AvatarProps) {
  const initials = getInitials(name);
  const px = pixelSizes[size];

  return (
    <div
      role="img"
      aria-label={name || "Avatar"}
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full",
        "bg-gradient-to-br from-indigo-500 to-violet-600",
        "font-semibold text-white select-none",
        sizeStyles[size],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={name || "Avatar"}
          width={px}
          height={px}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{initials || "?"}</span>
      )}
    </div>
  );
}
