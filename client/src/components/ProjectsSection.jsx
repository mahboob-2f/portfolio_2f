import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import SectionPill from "./SectionPill";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "GroceryHub",
    period: "Under Active Development",
    description:
      "A full-stack MERN grocery web application simulating real e-commerce flows — user authentication, product catalog with search & filter, persistent cart, Stripe payment integration, order management, address book, and an admin dashboard for inventory control.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "TailwindCSS", "JWT"],
    image: "/groceryhub.png",
    source: "#",
    live: "#",
  },
  {
    title: "Momentum",
    period: "Oct 2025 - Dec 2025",
    description:
      "Designed and developed a scalable online video directory platform to showcase and discover entrepreneurial journeys through structured, role-based content.",
    tags: ["React.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Express.js"],
    image: "/momentum.png",
    source: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2">
        <div className="relative h-px w-full bg-zinc-300 dark:bg-zinc-800">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <SectionPill label="My Projects" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <SectionHeader
          title="Check out my latest work"
          subtitle="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
            >
              {/* image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.classList.add("hidden");
                  }}
                />
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-black"
                >
                  <FaGithub size={13} />
                  Source
                </a>
              </div>

              {/* content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">{project.title}</h3>
                    <p className="mt-0.5 text-xs text-zinc-500">{project.period}</p>
                  </div>
                  <a href={project.live} target="_blank" rel="noreferrer" className="mt-0.5 shrink-0 text-zinc-400 hover:text-black dark:hover:text-white">
                    <FiArrowUpRight size={18} />
                  </a>
                </div>

                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-300 px-2.5 py-1 text-xs text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
