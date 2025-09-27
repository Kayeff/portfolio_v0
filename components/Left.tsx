import { geistSans } from "@/fonts/fonts";
import Para from "./Para";
import ThemeSelect from "./ThemeSelect";
import { left } from "@/constants/content";
import { Braces, Copyright } from "lucide-react";
import CurrentDate from "./CurrentDate";

export default function Left() {
  return (
    <div className="text-foreground p-20 flex flex-col justify-between gap-20 w-[38%] h-screen">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-1">
          <h1 className="text-4xl tracking-tighter flex items-center gap-2.5">
            {left.name}
          </h1>
          <CurrentDate />
        </div>
        <Para para={left.briefPara} />
      </div>
      <div className="w-full flex items-center justify-between">
        <h1 className="flex items-center gap-1">
          <Copyright size={15} /> {left.footer.copyright}
        </h1>
        <ThemeSelect />
      </div>
    </div>
  );
}
