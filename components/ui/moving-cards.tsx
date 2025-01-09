"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const MovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  const speedValue = {
    fast: "20s",
    normal: "40s",
    slow: "80s",
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          "--animation-duration": speedValue[speed],
          "--animation-direction": direction === "left" ? "forwards" : "reverse",
        } as React.CSSProperties}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full flex-shrink-0 rounded-2xl border border-slate-700 bg-slate-800 px-8 py-6"
            key={idx}
          >
            <blockquote>
              <p className="text-sm leading-6 text-slate-300">{item.quote}</p>
            </blockquote>
            <div className="mt-6 flex items-center gap-x-4">
              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  {item.name}
                </p>
                <p className="text-sm leading-6 text-slate-400">{item.title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};