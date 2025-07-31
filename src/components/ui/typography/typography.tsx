// components/ui/typography/typography.tsx
import * as React from "react";
import { cn } from "@supply/lib/utils";
import type { HTMLAttributes, ElementType } from "react";

// Variant mapping
const variantMap = {
  default: {
    tag: "p",
    className: "text-base text-foreground",
  },
  muted: {
    tag: "p",
    className: "text-sm text-muted-foreground",
  },
  lead: {
    tag: "p",
    className: "text-xl text-muted-foreground",
  },
  small: {
    tag: "small",
    className: "text-sm font-medium leading-none",
  },
  blockquote: {
    tag: "blockquote",
    className: "mt-6 border-l-2 pl-6 italic",
  },
  code: {
    tag: "code",
    className: "bg-muted px-1.5 py-1 font-mono text-sm rounded",
  },
} as const;

export type VariantKey = keyof typeof variantMap;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: VariantKey;
  className?: string;
  children: React.ReactNode;
}

export const Typography = ({
  variant = "default",
  className,
  children,
  ...props
}: TypographyProps) => {
  const { tag, className: variantClass } = variantMap[variant];
  const Component = tag as ElementType;

  return (
    <Component className={cn(variantClass, className)} {...props}>
      {children}
    </Component>
  );
};
