import Section from "./Section";
import Para from "./Para";
import { right } from "@/constants/content";

export default function About() {
  return (
    <Section heading={right.about.heading}>
      <Para para={right.about.para} />
    </Section>
  );
}
