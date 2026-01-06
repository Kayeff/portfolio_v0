import Section from "../common/Section";
import { right } from "@/constants/content";
import Form from "./Form";

export default function ContactForm() {
  return (
    <Section heading={right.contact.heading}>
      <Form />
    </Section>
  );
}
