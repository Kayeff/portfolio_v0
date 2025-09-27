"use client";
import { geistSans } from "@/fonts/fonts";
import moment from "moment";
import { useEffect, useState } from "react";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState<string>(
    moment().format("LTS")
  );
  const day = moment().format("dddd");

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentDate(moment().format("LTS"));
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="w-max flex items-center gap-2 bg-foreground text-background px-2">
      <p className={`font-medium ${geistSans.className}`}>{day}</p>
      <p className="size-2 bg-background rounded-full" />
      <p className="font-medium">{currentDate}</p>
    </div>
  );
}
