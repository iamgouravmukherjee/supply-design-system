// components/ui/typograpy/heading.tsx
import { cn } from "@supply/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

type HeadingLevel = "1" | "2" | "3" | "4" | "5" | "6";
type HeadingTag = `h${HeadingLevel}`;

const headingVariants = cva("scroll-m-20 tracking-tight", {
  variants: {
    level: {
      "1": "text-4xl font-bold",
      "2": "text-3xl font-semibold",
      "3": "text-2xl font-semibold",
      "4": "text-xl font-medium",
      "5": "text-lg font-medium",
      "6": "text-base font-medium",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    tone: {
      default: "",
      muted: "text-muted-foreground",
      accent: "text-primary",
    },
    transform: {
      none: "",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
  },
  defaultVariants: {
    level: "1",
    align: "left",
    tone: "default",
    transform: "none",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level?: HeadingLevel;
  children: React.ReactNode;
}

export const Heading = ({
  level = "1",
  align,
  tone,
  transform,
  className,
  children,
  ...props
}: HeadingProps) => {
  const Tag = `h${level}` as HeadingTag;

  return (
    <Tag
      className={cn(
        headingVariants({ level, align, tone, transform }),
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};
