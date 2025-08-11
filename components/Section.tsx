import { SectionProps } from "@/types/types";

export default function Section({ heading, children }: SectionProps) {
  return (
    <section className="w-full flex flex-col gap-4 p-20">
      <h1 className="uppercase text-sm">{heading}</h1>
      {children}
    </section>
  );
}
