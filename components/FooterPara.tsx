import React from "react";
import SpanText from "./SpanText";
import Section from "./Section";

export default function FooterPara() {
  return (
    <Section>
      <p className="tracking-tight text-foreground/75">
        This website is built with <SpanText text="Next JS" />, written in{" "}
        <SpanText text="TypeScript" />. Styled using{" "}
        <SpanText text="Tailwind CSS" /> with a touch of subtle animations using{" "}
        <SpanText text="Framer Motion" />.
      </p>
    </Section>
  );
}
