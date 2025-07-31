import { Button } from "@supply/components/ui/button";
import clsx from "clsx";
import { Star } from "lucide-react";
import { useState } from "react";

export type StarRatingProps = {
  max?: number;
  value?: number; // controlled
  defaultValue?: number; // uncontrolled
  onChange?: (value: number) => void;
  className?: string;
  readOnly?: boolean;
  size?: number; // optional, default: 24
};

export function StarRating({
  max = 5,
  value,
  defaultValue = 0,
  onChange,
  className,
  readOnly = false,
  size = 24,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeValue = value !== undefined ? value : internalValue;

  const handleClick = (index: number) => {
    if (readOnly) return;
    if (onChange) onChange(index);
    if (value === undefined) setInternalValue(index);
  };

  const stars = Array.from({ length: max }, (_, i) => {
    const filled = hovered !== null ? i < hovered : i < activeValue;
    return (
      <Button
        key={i}
        variant="ghost"
        size="icon"
        onClick={() => handleClick(i + 1)}
        onMouseEnter={() => !readOnly && setHovered(i + 1)}
        onMouseLeave={() => !readOnly && setHovered(null)}
        disabled={readOnly}
        className="p-0.5"
        aria-label={`Rate ${i + 1} star${i + 1 > 1 ? "s" : ""}`}
      >
        <Star
          fill={filled ? "#facc15" : "none"}
          stroke="#facc15"
          width={size}
          height={size}
        />
      </Button>
    );
  });

  return (
    <div className={clsx("inline-flex items-center", className)}>{stars}</div>
  );
}
