import { cn } from "@/shared/lib/utils";

// ──────────────────────────────────────────────────────────────
// Heading
// ──────────────────────────────────────────────────────────────
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingVariant = "display" | "title" | "subtitle" | "section";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  variant?: HeadingVariant;
}

const headingVariantStyles: Record<HeadingVariant, string> = {
  display: "text-4xl font-bold tracking-tight text-white md:text-5xl",
  title: "text-2xl font-bold tracking-tight text-white md:text-3xl",
  subtitle: "text-xl font-semibold text-slate-100",
  section: "text-lg font-semibold text-slate-200",
};

export function Heading({
  as: Tag = "h2",
  variant = "title",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(headingVariantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

// ──────────────────────────────────────────────────────────────
// Text
// ──────────────────────────────────────────────────────────────
type TextVariant = "body" | "small" | "muted" | "label";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: "p" | "span" | "div";
  variant?: TextVariant;
}

const textVariantStyles: Record<TextVariant, string> = {
  body: "text-sm text-slate-300 leading-relaxed",
  small: "text-xs text-slate-400 leading-normal",
  muted: "text-sm text-slate-500",
  label: "text-sm font-medium text-slate-200",
};

export function Text({
  as: Tag = "p",
  variant = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(textVariantStyles[variant], className)}
      {...(props as React.HTMLAttributes<HTMLElement>)}
    >
      {children}
    </Tag>
  );
}
