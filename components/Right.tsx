import Experience from "./Experience";
import TechStack from "./TechStack";
import ContactForm from "./ContactForm";
import Elsewhere from "./Elsewhere";
import FooterPara from "./FooterPara";
import About from "./About";
import Project from "./Project";

export default function Right() {
  return (
    <div className="w-[62%] text-foreground">
      <div className="h-screen overflow-y-auto w-full flex flex-col">
        {/* About */}
        <About />

        {/* Projects */}
        <Project />

        {/* Experience */}
        <Experience />

        {/* Tech Stack */}
        <TechStack />

        {/* Contact */}
        <ContactForm />

        {/* Elsewhere */}
        <Elsewhere />

        <FooterPara />
      </div>
    </div>
  );
}
