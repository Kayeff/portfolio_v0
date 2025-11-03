import Para from "./Para";
import ThemeSelect from "./ThemeSelect";
import { left } from "@/constants/content";
import CurrentDate from "./CurrentDate";
import Elsewhere from "./Elsewhere";

export default function Left() {
  return (
    <div className="text-foreground lg:p-5 flex flex-col justify-between gap-20 w-full lg:h-[calc(100vh-10rem)] lg:w-[36%] sticky lg:top-20 left-0 bg-background">
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full relative flex items-center justify-between">
            <h1 className="text-2xl sm:text-4xl tracking-tighter flex items-center gap-2.5 text-balance font-bold font-sans">
              {left.name}
            </h1>
            <div className="absolute top-1/2 -translate-y-1/2 right-0">
              <ThemeSelect />
            </div>
          </div>
          <CurrentDate />
        </div>
        <Para para={left.briefPara} />
      </div>
      <Elsewhere />
    </div>
  );
}
