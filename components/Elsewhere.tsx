import { socials } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Section from "./Section";

export default function Elsewhere() {
  return (
    <Section>
      <ul className="w-full grid grid-cols-1 sm:max-md:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-1">
        {socials.map((item) => (
          <li
            className="w-full px-1 hover:bg-foreground border border-foreground hover:text-background cursor-pointer duration-200 group"
            key={item.type}
          >
            <a
              href={item.link}
              target="_blank"
              className="tracking-tight text-sm font-medium flex items-center gap-0.5"
            >
              <span>{item.type}</span>
              <span className="">
                <ArrowUpRight size={15} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
