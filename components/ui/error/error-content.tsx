"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export function ErrorContent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-400 mb-8">
          An unexpected error has occurred. Our team has been notified and is working to fix the issue.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gray-200"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}