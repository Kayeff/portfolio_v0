import { experienceData } from "@/constants/data";
import Section from "../common/Section";
import { right } from "@/constants/content";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  return (
    <Section heading={right.experience.heading}>
      <ul className="w-full flex flex-col">
        {experienceData.map((data) => (
          <ExperienceList key={data.id} data={data} />
        ))}
      </ul>
    </Section>
  );
}
