"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavigationLinks } from "./navigation-links";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            <NavigationLinks className="flex flex-col space-y-4" />
          </div>
        </div>
      )}
    </div>
  );
}