"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="mt-16 text-center">
        <h1 className="text-6xl font-bold bg-gradient-to-b from-indigo-600 to-indigo-300 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-lg font-medium mt-4 text-muted-foreground">
          The page you are looking for doesn’t exist.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="rounded-full text-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo px-7 py-2.5 bg-white border-2 border-indigo-500 hover:bg-indigo-50 text-indigo-600 "
          >
            Back to Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
