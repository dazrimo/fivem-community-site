"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <FontAwesomeIcon icon={faCubes} className={cn("h-5 w-5 sm:h-6 sm:w-6 text-white")} />
      <span className={cn("font-bold text-white", className)}>Community Name</span>
    </Link>
  );
}