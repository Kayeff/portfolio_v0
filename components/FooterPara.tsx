import React from "react";
import SpanText from "./SpanText";
import Section from "./Section";

export default function FooterPara() {
  return (
    <Section>
      <p className="tracking-tight text-foreground/75">
        This website is built with{" "}
        <SpanText href="https://nextjs.org/" text="Next JS" />, written in{" "}
        <SpanText href="https://www.typescriptlang.org/" text="TypeScript" />.
        Styled using{" "}
        <SpanText href="https://tailwindcss.com/" text="Tailwind CSS" /> with a
        touch of subtle animations using{" "}
        <SpanText href="https://motion.dev/" text="Framer Motion" />, and icons
        using <SpanText href="https://lucide.dev/" text="Lucide" />.
      </p>
    </Section>
  );
}
