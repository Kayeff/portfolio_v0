import Section from "../common/Section";
import { right } from "@/constants/content";

export default function Project() {
  return (
    <Section heading={right.projects.heading}>
      <p>{right.projects.para}</p>
    </Section>
  );
}
