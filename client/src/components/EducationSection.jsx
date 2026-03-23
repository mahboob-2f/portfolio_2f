import SectionPill from "./SectionPill";
import SectionHeader from "./SectionHeader";

const educationData = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech in Computer Science and Engineering",
    year: "2023 - 2027",
    logo: "/lpu-logo.png",
  },
  {
    institution: "Don Bosco High School",
    degree: "Senior Secondary Certificate (Class 12th)",
    year: "2021",
    logo: "/donbosco-logo.png",
  },
  {
    institution: "IQRA Public School",
    degree: "Secondary School Certificate (Class 10th)",
    year: "2019",
    logo: "/iqra-logo.png",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative bg-white py-20 text-black dark:bg-black dark:text-white">
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

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-zinc-200 dark:divide-zinc-800">
          {educationData.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-4 py-6">
              <div className="flex items-center gap-4">
                <img
                  src={item.logo}
                  alt={item.institution}
                  className="h-12 w-12 rounded-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
                <div>
                  <p className="font-semibold text-black dark:text-white">{item.institution}</p>
                  <p className="text-sm text-zinc-500">{item.degree}</p>
                </div>
              </div>
              <span className="shrink-0 text-sm text-zinc-500">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
