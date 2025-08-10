import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type ParaProps = {
  para: string;
};

export default function Para({ para }: ParaProps) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const split = SplitText.create(".para", { type: "words chars" });
      gsap.from(split.chars, {
        opacity: 0,
        ease: "power3.inOut",
        duration: 0.5,
        stagger: 0.01,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="overflow-clip">
      <p className="tracking-tight text-foreground/75 para ">{para}</p>
    </div>
  );
}
