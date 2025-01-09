"use client";

import { useEffect, useState } from "react";
import { PartnerLogo } from "./partner-logo";
import { cn } from "@/lib/utils";

interface PartnerScrollProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

export function PartnerScroll({ 
  items, 
  direction = "left", 
  speed = 30 
}: PartnerScrollProps) {
  const [duplicatedItems] = useState([...items, ...items]);
  
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex gap-8 py-4",
          "animate-scroll whitespace-nowrap",
        )}
        style={{
          "--animation-duration": `${items.length * speed}s`,
          "--animation-direction": direction === "left" ? "normal" : "reverse",
        } as React.CSSProperties}
      >
        {duplicatedItems.map((logo, idx) => (
          <PartnerLogo key={`${logo}-${idx}`} url={logo} />
        ))}
      </div>
    </div>
  );
}