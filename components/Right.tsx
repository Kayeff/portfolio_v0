import { experienceData, socials, techstack } from "@/constants/data";
import Para from "./Para";
import { ArrowUpRight, Send } from "lucide-react";
import { right } from "@/constants/content";
import Section from "./Section";

export default function Right() {
  return (
    <div className="w-[62%] text-foreground">
      <div className="h-screen overflow-y-auto w-full flex flex-col no-scrollbar">
        {/* About */}
        <Section heading={right.about.heading}>
          <Para para={right.about.para} />
        </Section>

        {/* Projects */}
        <Section heading={right.projects.heading}>
          <p>{right.projects.para}</p>
        </Section>

        {/* Experience */}
        <Section heading={right.experience.heading}>
          <ul className="w-full flex flex-col">
            {experienceData.map((data) => (
              <li className="w-full grid grid-cols-[40%_60%]" key={data.id}>
                <p>{data.timeline}</p>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg tracking-tight font-semibold">
                      {data.designation} .{" "}
                      <a
                        href="https://corenettechltd.com/"
                        className="hover:underline"
                      >
                        {data.companyName}
                      </a>
                    </h1>
                    <p className="text-sm text-foreground/75">
                      {data.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm">Skills</p>
                    <ul className="w-full flex flex-wrap gap-3">
                      {data.skills.map((skill) => (
                        <li
                          key={skill}
                          className="bg-foreground text-background text-sm px-1 font-medium cursor-default"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Tech Stack */}
        <Section heading={right.techstack.heading}>
          <ul className="w-full grid grid-cols-2 gap-2">
            {techstack.map((skill) => (
              <li
                key={skill}
                className="border text-foreground border-foreground hover:bg-foreground hover:text-background text-sm px-1 font-medium duration-300 group"
              >
                <span className="group-hover:translate-x-2.5 duration-300 inline-block cursor-default">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Contact */}
        <Section heading={right.contact.heading}>
          <form action="" className="w-full grid grid-cols-2 gap-2">
            <div className="w-full">
              <input
                type="text"
                className="w-full border border-foreground/20 outline-none p-2 focus:border-foreground px-3"
                placeholder="name"
                autoComplete="off"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="w-full border border-foreground/20 focus:border-foreground outline-none p-2 px-3"
                placeholder="email"
                autoComplete="off"
              />
            </div>
            <div className="w-full col-span-2">
              <textarea
                name=""
                id=""
                className="h-52 w-full border border-foreground/20 focus:border-foreground p-2 outline-none resize-none px-3"
                placeholder="message"
              />
            </div>
            <button className="w-max duration-200 text-background py-2 px-10 cursor-pointer col-span-2 bg-foreground font-medium">
              <Send size={20} strokeWidth={1.5} />
            </button>
          </form>
        </Section>

        {/* Elsewhere */}
        <Section heading={right.elsewhere.heading}>
          <ul className="w-full flex items-center justify-between">
            {socials.map((item) => (
              <li
                className="w-full p-2 py-1 hover:bg-foreground hover:text-background cursor-pointer duration-200"
                key={item.type}
              >
                <a
                  href={item.link}
                  target="_blank"
                  className="tracking-tight text-sm font-medium flex items-center gap-0.5"
                >
                  <span>{item.type}</span>
                  <span>
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}
