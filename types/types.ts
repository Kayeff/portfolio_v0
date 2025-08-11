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

export type { WrapperComponentProps, SpanTextProps, SectionProps, ParaProps };
