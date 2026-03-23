import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { SiUdemy } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import SectionPill from "./SectionPill";

const certifications = [
  {
    title: "Web Development and DevOps",
    issuer: "100xDEVS",
    date: "May 2025",
    icon: "100x",
    href: "#",
  },
  {
    title: "Next.js",
    issuer: "Udemy",
    date: "March 2026",
    icon: "udemy",
    href: "#",
  },
  {
    title: "Python and Django",
    issuer: "Udemy",
    date: "February 2026",
    icon: "udemy",
    href: "#",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google / Coursera",
    date: "September 2024",
    icon: "google",
    href: "#",
  },
];

function CertIcon({ type }) {
  if (type === "udemy")
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-white">
        <SiUdemy size={20} className="text-purple-400" />
      </div>
    );
  if (type === "google")
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
        <FaGoogle size={18} className="text-blue-400" />
      </div>
    );
  // 100x
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-white">
      100x
    </div>
  );
}

export default function CertificationsSection() {
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
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-3 text-base text-zinc-500">Courses and certifications I've completed.</p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 px-5 py-4 odd:bg-zinc-50 even:bg-white dark:odd:bg-zinc-900 dark:even:bg-zinc-900/50"
            >
              <div className="flex items-center gap-4">
                <CertIcon type={cert.icon} />
                <div>
                  <p className="font-semibold text-black dark:text-white">{cert.title}</p>
                  <p className="text-xs text-zinc-500">{cert.issuer} · {cert.date}</p>
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
          <a
            href="#"
            className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-black dark:hover:text-white"
          >
            See all certificates
            <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
