"use client";
import { SectionProps } from "@/types/types";
import { motion } from "motion/react";
import { memo } from "react";

const Section = memo(function Section({ heading, children }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col gap-2.5"
    >
      <h1 className="uppercase text-sm text-balance font-medium text-foreground/90 tracking-tight lg:text-base font-sans">
        {heading}
      </h1>
      {children}
    </motion.section>
  );
});

export default Section;
