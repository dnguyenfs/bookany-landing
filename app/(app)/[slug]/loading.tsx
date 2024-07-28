import { LoaderCircleIcon } from "lucide-react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <LoaderCircleIcon className="w-8 h-8 animate-spin text-gray-500" />
    </div>
  );
}
