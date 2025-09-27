import { ParaProps } from "@/types/types";

export default function Para({ para }: ParaProps) {
  // const splitText = para.split(" ").map((word, wordIndex) => (
  //   <span key={wordIndex} className="inline-block mr-2.5">
  //     {word.split("").map((letter, index) => (
  //       <motion.span
  //         initial={{ opacity: 0 }}
  //         whileInView={{ opacity: 1 }}
  //         viewport={{ once: true }}
  //         transition={{
  //           duration: 0.5,
  //           ease: "easeInOut",
  //           delay: 0.04 * wordIndex,
  //         }}
  //         key={index}
  //         className="inline-block"
  //       >
  //         {letter !== " " ? letter : "\u00A0"}
  //       </motion.span>
  //     ))}
  //   </span>
  // ));

  return (
    <div className="overflow-clip">
      <p className="tracking-tight text-foreground/90">{para}</p>
    </div>
  );
}
