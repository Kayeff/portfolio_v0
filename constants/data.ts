import {
  BrushCleaning,
  Cable,
  ChevronsLeftRightEllipsis,
  CircleFadingArrowUp,
  LayoutPanelTop,
  PanelTop,
  Pen,
} from "lucide-react";

const experienceData = [
  {
    id: "corenettech",
    companyLink: "https://corenettechltd.com/",
    companyName: "CorenetTech",
    location: "India",
    designation: "Front End Developer",
    timeline: "2025 - Present",
    description:
      "Collaborated with dev teams to define and prioritise features delivering full stack solutions. Created Admin Panel in React & Tailwind CSS with team and optimized using Code splitting.",
    skills: [
      "React JS",
      "Tailwind CSS",
      "Redux",
      "Tanstack Query",
      "TypeScript",
      "Next JS",
      "Front End Development",
      "Performance Optimization",
    ],
  },
];

const sections = [
  { id: "about", title: "/about" },
  { id: "projects", title: "/projects" },
  { id: "experience", title: "/experience" },
  { id: "techstack", title: "/techstack" },
  { id: "contact", title: "/contact" },
];

const techstack = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React JS",
  "React Router",
  "Redux",
  "Tanstack Query",
  "Next JS",
  "TypeScript",
  "Framer Motion",
  "GSAP",
  "Git",
  "GitHub",
  "Python",
];

const howcanihelpu = [
  { id: "work1", title: "Improve your website", icon: CircleFadingArrowUp },
  { id: "work2", title: "Create a new website", icon: PanelTop },
  { id: "work3", title: "Refractor UI", icon: LayoutPanelTop },
  { id: "work4", title: "Create a web app", icon: ChevronsLeftRightEllipsis },
  { id: "work5", title: "Optimize Performance", icon: Cable },
  { id: "work6", title: "Add animations", icon: BrushCleaning },
];

const socials = [
  { type: "Github", link: "https://github.com/Kayeff" },
  {
    type: "LinkedIn",
    link: "https://www.linkedin.com/in/kaif-saiyed-452b851b6/",
  },
  { type: "Twitter", link: "https://x.com/kayefff1" },
  { type: "Instagram", link: "https://www.instagram.com/kayfsaiyed/?__pwa=1" },
];

export { experienceData, sections, techstack, socials, howcanihelpu };
