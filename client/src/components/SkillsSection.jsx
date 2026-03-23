import SectionPill from "./SectionPill";
import SectionHeader from "./SectionHeader";
import SkillCategory from "./SkillCategory";

const skillGroups = [
  {
    title: "PROGRAMMING LANGUAGES",
    skills: [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      "React",
      "Next.js",
      "Redux",
      "Recoil",
      "React Query",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "BACKEND & DATABASE",
    skills: [
      "Node.js",
      "Django",
      "Express.js",
      "WebSockets",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "JWT",
    ],
  },
  {
    title: "DEV TOOLS & ARCHITECTURE",
    skills: [
      "Git",
      "Postman",
      "Docker",
      "Kubernetes",
      "Turborepo",
      "VS Code",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2">
        <div className="relative h-px w-full bg-zinc-300 dark:bg-zinc-800">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <SectionPill label="Skills" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <SectionHeader
          title="What I work with"
          subtitle="Technologies and tools I use to build software."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          {skillGroups.map((group) => (
            <SkillCategory key={group.title} title={group.title} skills={group.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}