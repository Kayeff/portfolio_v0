import { techstack } from "@/constants/data";
import React from "react";
import Section from "./Section";
import { right } from "@/constants/content";
import StackList from "./StackList";

export default function TechStack() {
  return (
    <Section heading={right.techstack.heading}>
      <ul className="w-full grid grid-cols-1 lg:grid-cols-3 gap-2">
        {techstack.map((skill) => (
          <StackList key={skill} skill={skill} />
        ))}
      </ul>
    </Section>
  );
}
