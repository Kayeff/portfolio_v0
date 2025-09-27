import { right } from "@/constants/content";
import Section from "./Section";
import React from "react";
import { howcanihelpu } from "@/constants/data";
import { BadgeCheck } from "lucide-react";

export default function WhatICanDoForYou() {
  return (
    <Section heading={right.whaticandoforu.heading}>
      <ul className="w-full grid grid-cols-2 gap-2">
        {howcanihelpu.map((item) => (
          <li
            key={item.id}
            className="px-1 flex items-center justify-between gap-2 duration-300 group cursor-default hover:bg-foreground hover:text-background hover:px-2"
          >
            <div className="flex items-center gap-2">
              <BadgeCheck size={20} />
              <p className="tracking-tighter">{item.title}</p>
            </div>
            {/* <item.icon
              className="opacity-0 group-hover:opacity-100 duration-300"
              size={20}
            /> */}
          </li>
        ))}
      </ul>
    </Section>
  );
}
