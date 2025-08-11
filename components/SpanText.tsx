import { SpanTextProps } from "@/types/types";

export default function SpanText({ text }: SpanTextProps) {
  return <span className="text-foreground font-medium">{text}</span>;
}
