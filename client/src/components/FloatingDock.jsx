import { useEffect, useState } from "react";
import { FaHouse, FaCode, FaFolderOpen, FaEnvelope, FaGraduationCap, FaCertificate } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const navItems = [
  { id: "home", label: "Home", icon: FaHouse },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "projects", label: "Projects", icon: FaFolderOpen },
  { id: "certifications", label: "Certifications", icon: FaCertificate },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

export default function FloatingDock() {
  const [dark, setDark] = useState(true);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative">
              {tooltip === item.id && (
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
                  {item.label}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
                </div>
              )}
              <button
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setTooltip(item.id)}
                onMouseLeave={() => setTooltip(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-all duration-200 hover:scale-110 hover:bg-zinc-100 hover:text-black hover:shadow-[0_0_0_2px_rgba(0,0,0,0.08)] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.08)]"
              >
                <Icon size={16} />
              </button>
            </div>
          );
        })}

        <div className="mx-1 h-6 w-px bg-zinc-300 dark:bg-zinc-700" />

        <div className="relative">
          {tooltip === "theme" && (
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-white dark:bg-zinc-100 dark:text-zinc-900">
              {dark ? "Light Mode" : "Dark Mode"}
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-zinc-900 dark:border-t-zinc-100" />
            </div>
          )}
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setTooltip("theme")}
            onMouseLeave={() => setTooltip(null)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-500 transition-all duration-200 hover:scale-110 hover:bg-zinc-100 hover:text-black hover:shadow-[0_0_0_2px_rgba(0,0,0,0.08)] dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white dark:hover:shadow-[0_0_0_2px_rgba(255,255,255,0.08)]"
          >
            {dark ? <MdLightMode size={17} /> : <MdDarkMode size={17} />}
          </button>
        </div>
      </div>
    </div>
  );
}
