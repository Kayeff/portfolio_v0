"use client";
import { motion } from "motion/react";
import ThemeColorButton from "./ThemeColorButton";

type ThemeOptionsT = {
  handleClick: (color: string) => void;
  theme: string;
};

export default function ThemeOptions({ handleClick, theme }: ThemeOptionsT) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-background flex items-center justify-center border border-foreground/50 relative z-[9]"
    >
      <ul className="grid grid-cols-4">
        <ThemeColorButton
          handleClick={handleClick}
          color="red"
          isActive={theme === "red"}
        />
        <ThemeColorButton
          handleClick={handleClick}
          color="green"
          isActive={theme === "green"}
        />
        <ThemeColorButton
          handleClick={handleClick}
          color="blue"
          isActive={theme === "blue"}
        />
        <ThemeColorButton
          handleClick={handleClick}
          color="light"
          isActive={theme === "light"}
        />
      </ul>
    </motion.div>
  );
}
