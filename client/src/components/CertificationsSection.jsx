import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import SectionPill from "./SectionPill";
import { useState } from "react"; // FIXED: added state for show all / show less

const certifications = [
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys | Springboard",
    date: "August 2025",
    icon: "chatgpt",
    href: "https://drive.google.com/file/d/1m3mtM63ODIIfKk2Hf44v1yOgvZyavwDo/view?usp=drive_link",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL | IIT KGP",
    date: "March 2026",
    icon: "nptel",
    href: "https://drive.google.com/file/d/1b5o6xNrK0_BabnYD97TPG-ZWU2AqY4zd/view?usp=drive_link",
  },
  {
    title: "Object – Oriented Programming",
    issuer: "LPU",
    date: "December 2024",
    icon: "lpu",
    href: "https://drive.google.com/file/d/1f1XZSONpTIHc6yD6HWrLKQzwFcp2ZW1i/view?usp=drive_link",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "December 2023",
    icon: "freecodecamp",
    href: "https://drive.google.com/file/d/13wzSsmDmjm7Scxo_FNHvJdjA9LUg6gYN/view?usp=drive_link",
  },

  // FIXED: dummy certificates added below
  {
    title: "Think Design Prototype",
    issuer: "LPU",
    date: "July 2025",
    icon: "lpu",
    href: "https://drive.google.com/file/d/188mjVRDKQRsBZxQk3zAjIqJPb0x0tvAo/view?usp=drive_link",
  },

];

function CertIcon({ type }) {
  if (type === "nptel")
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800">
        <img src="/NPTEL_logo.png" alt="nptel logo" />
      </div>
    );

  if (type === "freecodecamp")
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800">
        <img src="/freecodecamp_logo.png" alt="freecodecamp logo" />
      </div>
    );

  if (type === "lpu")
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800">
        <img src="/lpu-logo.png" alt="LPU logo" />
      </div>
    );

  if (type === "chatgpt")
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800">
        <img src="/infosys.png" alt="Infosys Springboard logo" loading="lazy" />
      </div>
    );

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-800 text-xs font-bold text-zinc-700 dark:text-white">
      ?
    </div>
  );
}

export default function CertificationsSection() {
  const [showAll, setShowAll] = useState(false); // FIXED: state added

  const visibleCertifications = showAll ? certifications : certifications.slice(0, 4); // FIXED: show 4 initially

  return (
    <section id="certifications" className="relative bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2">
        <div className="relative h-px w-full bg-zinc-300 dark:bg-zinc-800">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <SectionPill label="Certifications" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Courses and certifications I've completed.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          {visibleCertifications.map((cert, index) => ( // FIXED: changed from certifications to visibleCertifications
            <div
              key={index}
              className="flex items-center justify-between gap-4 px-5 py-4 odd:bg-zinc-50 even:bg-white dark:odd:bg-zinc-900 dark:even:bg-zinc-900/50"
            >
              <div className="flex items-center gap-4">
                <CertIcon type={cert.icon} />

                <div>
                  <p className="text-sm font-semibold text-black dark:text-white">
                    {cert.title}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {cert.issuer} · {cert.date}
                  </p>
                </div>
              </div>

              <a
                href={cert.href}
                target="_blank"
                rel="noreferrer"
                className="flex shrink-0 items-center gap-1.5 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <FiArrowUpRight size={14} />
                View
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)} // FIXED: toggle logic added
            className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-black dark:hover:text-white"
          >
            {showAll ? "Show less certificates" : "See all certificates"} {/* FIXED: text changes */}
            <FiArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}