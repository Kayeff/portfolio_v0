"use client";
import { geistSans } from "@/fonts/fonts";
import moment from "moment";
import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState<string | null>(null);

  useEffect(() => {
    setCurrentDate(moment().format("LTS"));

    const intervalID = setInterval(() => {
      setCurrentDate(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  if (!currentDate) return;

  return (
    <div className="w-max px-2 gap-1 flex items-center bg-foreground text-background text-sm md:text-base">
      <p className={`font-medium ${geistSans.className}`}>
        {moment().format("Do MMM YYYY")}
      </p>
      <p className="h-full bg-background" />
      <p className={`font-medium ${geistSans.className}`}>
        {moment().format("dddd")}
      </p>
      <p className="h-full bg-background" />
      <p className="font-medium">{currentDate}</p>
    </div>
  );
}
