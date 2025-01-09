"use client";

import { GlobalErrorContent } from "@/components/ui/error/global-error-content";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <GlobalErrorContent error={error} reset={reset} />;
}