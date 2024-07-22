import { LoaderIcon } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <LoaderIcon className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}
