import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { WrapperComponentProps } from "@/types/types";

export default function Line() {
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.from(lineRef.current, {
      height: 0,
      duration: 2,
    });
  }, []);

  return (
    <div
      ref={lineRef}
      className="fixed top-0 left-[38%] h-screen w-[1px] bg-foreground"
    />
  );
}
