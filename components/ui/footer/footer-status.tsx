"use client";

import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export function FooterStatus() {
  const isOperational = true;

  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon
        icon={faCircle}
        className={cn(
          "h-2 w-2",
          isOperational ? "text-green-500" : "text-red-500"
        )}
      />
      <span className="text-sm text-gray-400">
        {isOperational ? "All systems operational" : "System issues detected"}
      </span>
    </div>
  );
}