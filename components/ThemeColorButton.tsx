"use client";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onClick={() => handleClick(color)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={twMerge(
        "flex items-center justify-center p-2 cursor-pointer hover:bg-foreground/20 relative",
        isActive && "bg-foreground/20"
      )}
    >
      <button
        className={twMerge(
          "size-5 rounded-full cursor-pointer border border-black/50 flex items-center justify-center text-black/50",
          color === "red" && "bg-tron-red",
          color === "green" && "bg-green",
          color === "blue" && "bg-tron-blue",
          color === "light" && "bg-whyte"
        )}
      >
        {isActive && <Check />}
      </button>
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={twMerge(
              "inline-block absolute -bottom-8 bg-black text-sm px-1 left-1/2 -translate-x-1/2 capitalize font-sans w-max",
              color === "red" && "text-tron-red",
              color === "green" && "text-green",
              color === "blue" && "text-tron-blue",
              color === "light" && "text-whyte"
            )}
          >
            {color}
          </motion.span>
        )}
      </AnimatePresence>
    </li>
  );
}
