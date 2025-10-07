import { Send } from "lucide-react";
import Section from "./Section";
import { right } from "@/constants/content";

export default function ContactForm() {
  return (
    <Section heading={right.contact.heading}>
      <form className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="w-full">
          <input
            type="text"
            className="w-full border border-foreground/50 outline-none p-2 focus:border-foreground px-3"
            placeholder="name"
          />
        </div>
        <div className="w-full">
          <input
            type="email"
            className="w-full border border-foreground/50 focus:border-foreground outline-none p-2 px-3"
            placeholder="email"
          />
        </div>
        <div className="w-full lg:col-span-2">
          <textarea
            name="message"
            id="message"
            className="h-52 w-full border border-foreground/50 focus:border-foreground p-2 outline-none resize-none px-3"
            placeholder="message"
          />
        </div>
        <button className="w-max duration-200 text-background py-2 px-10 cursor-pointer bg-foreground font-medium lg:col-span-2">
          <Send size={20} strokeWidth={1.5} />
        </button>
      </form>
    </Section>
  );
}
