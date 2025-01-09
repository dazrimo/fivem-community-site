"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  className?: string;
}

export function FlipWords({ words, className }: FlipWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className={cn("inline-block min-w-[200px] text-left", className)}>
      {words[currentIndex]}
    </span>
  );
}