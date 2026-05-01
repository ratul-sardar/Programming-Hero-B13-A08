import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="bg-background relative z-40 w-full min-h-[90dvh] flex items-center justify-center">
      <Spinner size="xl" />
    </div>
  );
}
