"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      theme: {theme}
    </button>
  );
}
