import { ExperienceObj } from "@/types/types";

export default function ExperienceList({ data }: { data: ExperienceObj }) {
  return (
    <li className="w-full grid grid-cols-[40%_60%]">
      <p>{data.timeline}</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg tracking-tight font-semibold">
            {data.designation} .{" "}
            <a href="https://corenettechltd.com/" className="hover:underline">
              {data.companyName}
            </a>
          </h1>
          <p className="text-sm text-foreground/90">{data.description}</p>
        </div>
        <div className="flex flex-col gap-2">
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
  );
}
