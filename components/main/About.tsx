import Section from "../common/Section";
import Para from "../common/Para";
import { right } from "@/constants/content";

export default function About() {
  return (
    <Section heading={right.about.heading}>
      <Para para={right.about.para} />
    </Section>
  );
}
