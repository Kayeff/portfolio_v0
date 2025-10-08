import React from "react";
import { twMerge } from "tailwind-merge";

type ThemeColorButtonT = {
  color: string;
  isActive: boolean;
  handleClick: (color: string) => void;
};

export default function ThemeColorButton({
  color,
  isActive,
  handleClick,
}: ThemeColorButtonT) {
  return (
    <li
      onClick={() => handleClick(color)}
      className={twMerge(
        "flex items-center justify-center p-2 cursor-pointer hover:bg-foreground/20",
        isActive && "bg-foreground/20"
      )}
    >
      <button
        className={twMerge(
          "size-5 rounded-full cursor-pointer border border-black/50",
          color === "red" && "bg-tron-red",
          color === "blue" && "bg-tron-blue",
          color === "light" && "bg-whyte"
        )}
      />
    </li>
  );
}
