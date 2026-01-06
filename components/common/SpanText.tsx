import { SpanTextProps } from "@/types/types";
import Link from "next/link";

export default function SpanText({ text, href }: SpanTextProps) {
  return (
    <Link href={href} target="_blank" className="hover:underline">
      <span className="text-foreground font-medium">{text}</span>
    </Link>
  );
}
