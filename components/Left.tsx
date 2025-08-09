import { geistSans } from "@/fonts/fonts";
import Para from "./Para";
import ThemeSelect from "./ThemeSelect";
import { left } from "@/constants/content";
import { Copyright } from "lucide-react";
import { sections } from "@/constants/data";

export default function Left() {
  return (
    <div className="text-foreground p-20 flex flex-col justify-between gap-20 fixed left-0 top-0 w-[38%] h-screen">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-4xl tracking-tighter">{left.name}</h1>
          <p className={`${geistSans.className} text-sm`}>{left.role}</p>
        </div>
        <Para para={left.briefPara} />
      </div>
      {/* <ul className="w-full flex flex-col">
        {sections.map((link) => (
          <li
            key={link.id}
            className="w-full flex items-center justify-between"
          >
            <p>{link.title}</p>
            <span className="size-2 rounded-full bg-foreground" />
          </li>
        ))}
      </ul> */}
      <div className="w-full flex items-center justify-between">
        <h1 className="flex items-center gap-1">
          <Copyright size={15} /> {left.footer.copyright}
        </h1>
        <ThemeSelect />
      </div>
    </div>
  );
}
