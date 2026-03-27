import SectionPill from "./SectionPill";
import SectionHeader from "./SectionHeader";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2023 – 2027",
    logo: "/lpu-logo.png",
    url: "http://lpu.in",
  },
  {
    institution: "Don Bosco High School",
    degree: "Senior Secondary Certificate (Class 12th)",
    year: "2021",
    logo: "/donbosco-logo.png",
    url: "https://dbhs.edu.in",
  },
  {
    institution: "IQRA Public School",
    degree: "Secondary School Certificate (Class 10th)",
    year: "2019",
    logo: "/iqra-logo.png",
    url: "",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative bg-white py-24 text-black dark:bg-black dark:text-white"
    >
      {/* Top divider with pill */}
      <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2">
        <div className="relative h-px w-full bg-zinc-300 dark:bg-zinc-800">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <SectionPill label="Education" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <SectionHeader
          title="My Academic Background"
          subtitle="Where I studied and the degrees I earned."
        />

        {/* Education Cards */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-between gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 px-6 py-5 shadow-sm transition-all duration-300 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800/60 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:shadow-zinc-900"
            >
              {/* Subtle left accent bar */}
              <div className="absolute left-0 top-1/2 h-[60%] w-[3px] -translate-y-1/2 rounded-r-full bg-zinc-300 transition-colors duration-300 group-hover:bg-zinc-500 dark:bg-zinc-700 dark:group-hover:bg-zinc-400" />

              <div className="flex items-center gap-4 pl-2">
                {/* Logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
                  <img
                    src={item.logo}
                    alt={item.institution}
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<span class="text-lg font-bold text-zinc-400">${item.institution[0]}</span>`;
                    }}
                  />
                </div>

                {/* Text */}
                <div>
                  {/* Clickable institution name */}
                  <a
                    href={item.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => !item.url && e.preventDefault()}
                    className="inline-flex items-center gap-1.5 font-semibold text-black transition-colors duration-200 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
                  >
                    {item.institution}
                    {/* External link icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                    {item.degree}
                  </p>
                </div>
              </div>

              {/* Year badge */}
              <span className="shrink-0 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-500 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}