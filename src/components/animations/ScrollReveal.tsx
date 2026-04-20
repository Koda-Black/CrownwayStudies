"use client";

import { type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade-up" | "fade-in" | "slide-in" | "scale-in";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  className?: string;
}

const variantClasses: Record<AnimationVariant, string> = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "slide-in": "animate-slide-in",
  "scale-in": "animate-scale-in",
};

export function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}: ScrollRevealProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && variantClasses[variant],
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
