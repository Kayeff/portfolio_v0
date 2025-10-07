import Experience from "./Experience";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
import Elsewhere from "./Elsewhere";
import FooterPara from "./FooterPara";
import About from "./About";
import Project from "./Project";
import WhatICanDoForYou from "./WhatICanDoForYou";

export default function Right() {
  return (
    <div className="w-full text-foreground lg:w-[64%]">
      <div className="min-h-screen w-full flex flex-col gap-10 lg:gap-40 lg:p-5">
        {/* About */}
        <About />
        <WhatICanDoForYou />
        {/* Projects */}
        <Project />
        {/* Experience */}
        <Experience />
        {/* Tech Stack */}
        <TechStack />
        {/* Contact */}
        <ContactForm />
        <FooterPara />
      </div>
    </div>
  );
}
