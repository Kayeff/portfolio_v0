import React from "react";

type WrapperComponentProps = {
  className?: string;
};

type SectionProps = {
  heading?: string;
  children: React.ReactNode;
};

type SpanTextProps = {
  text: string;
};

type ParaProps = {
  para: string;
};

type ExperienceDataT = ExperienceObj[];

type ExperienceObj = {
  id: string;
  companyLink: string;
  companyName: string;
  location: string;
  designation: string;
  timeline: string;
  description: string;
  skills: string[];
};

export type {
  WrapperComponentProps,
  SpanTextProps,
  SectionProps,
  ParaProps,
  ExperienceDataT,
  ExperienceObj,
};
