import { WrapperComponentProps } from "@/types/types";
import { twMerge } from "tailwind-merge";

export default function OverlayGradient({ className }: WrapperComponentProps) {
  return (
    <div
      className={twMerge(
        "fixed from-transparent to-background z-10 pointer-events-none",
        className
      )}
    />
  );
}
