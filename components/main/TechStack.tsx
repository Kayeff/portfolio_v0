import { techstack, tools } from "@/constants/data";
import React from "react";
import Section from "../common/Section";
import { right } from "@/constants/content";
import StackList from "./StackList";

export default function TechStack() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Section heading={right.techstack.heading}>
        <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
          {techstack.map((skill) => (
            <StackList key={skill} skill={skill} />
          ))}
        </ul>
      </Section>
      <Section heading={right.tools.heading}>
        <ul className="w-full grid grid-cols-1 lg:grid-cols-4 gap-2">
          {tools.map((skill) => (
            <StackList key={skill} skill={skill} />
          ))}
        </ul>
      </Section>
    </div>
  );
}
