"use client";

import { AlertTriangle } from "lucide-react";

export function GlobalErrorContent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 mb-6">
              <AlertTriangle className="h-10 w-10 text-red-500" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Application Error
            </h1>
            <p className="text-gray-400 mb-8">
              A critical error has occurred. Please refresh the page or try again later.
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gray-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}