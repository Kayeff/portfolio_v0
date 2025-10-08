"use client";
import { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { AnimatePresence } from "motion/react";
import ThemeOptions from "./ThemeOptions";
import { twMerge } from "tailwind-merge";

export default function ThemeSelect() {
  const [theme, setTheme] = useState<string>("light");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "red"
      : "light";

    const savedTheme = prefersDark || localStorage.getItem("theme");
    setTheme(savedTheme);
  }, []);

  function toggleOptions() {
    setOpen((prev) => !prev);
  }

  function handleThemeChange(color: string) {
    setTheme(color);
    setOpen(false);
  }

  useEffect(() => {
    const elem = document.documentElement;
    elem.classList.remove("red", "light", "blue");
    elem.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2 overflow-clip relative">
      <AnimatePresence>
        {open && <ThemeOptions handleClick={handleThemeChange} theme={theme} />}
      </AnimatePresence>
      <button
        onClick={toggleOptions}
        className="cursor-pointer flex items-center justify-center p-1.5 rounded-full relative z-10 bg-background border border-foreground/50"
      >
        <span
          className={twMerge(
            "inline-block duration-200",
            open ? "-rotate-90" : "rotate-0"
          )}
        >
          <Settings />
        </span>
      </button>
    </div>
  );
}
