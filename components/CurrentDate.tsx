"use client";
import { geistSans } from "@/fonts/fonts";
import moment from "moment";
import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(moment().format("LTS"));
    setDay(moment().format("dddd"));

    const intervalID = setInterval(() => {
      setCurrentDate(moment().format("LTS"));
      setDay(moment().format("dddd"));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  if (!currentDate && !day) return;

  return (
    <div className="w-max flex items-center gap-2 bg-foreground text-background px-2 text-sm md:text-base">
      <p className={`font-medium ${geistSans.className}`}>{day}</p>
      <p className="size-2 bg-background rounded-full" />
      <p className="font-medium">{currentDate}</p>
    </div>
  );
}
