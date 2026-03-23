import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { TbBrandCpp, TbSql } from "react-icons/tb";
import { SiTypescript, SiNextdotjs, SiRedux, SiRecoil, SiReactquery, SiTailwindcss, SiDjango, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiJsonwebtokens, SiPostman, SiDocker, SiKubernetes, SiTurborepo, SiSocketdotio } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuDatabaseBackup } from "react-icons/lu";

const skillConfig = {
  Java: { icon: FaJava, iconClass: "text-orange-400" },
  Python: { icon: FaPython, iconClass: "text-yellow-400" },
  "C/C++": { icon: TbBrandCpp, iconClass: "text-blue-400" },
  JavaScript: { icon: BiLogoJavascript, iconClass: "text-yellow-300" },
  TypeScript: { icon: SiTypescript, iconClass: "text-blue-400" },
  SQL: { icon: TbSql, iconClass: "text-sky-400" },

  React: { icon: FaReact, iconClass: "text-cyan-400" },
  "Next.js": { icon: SiNextdotjs, iconClass: "text-white" },
  Redux: { icon: SiRedux, iconClass: "text-violet-400" },
  Recoil: { icon: SiRecoil, iconClass: "text-zinc-300" },
  "React Query": { icon: SiReactquery, iconClass: "text-pink-400" },
  HTML5: { icon: FaHtml5, iconClass: "text-orange-500" },
  CSS3: { icon: FaCss3Alt, iconClass: "text-sky-500" },
  "Tailwind CSS": { icon: SiTailwindcss, iconClass: "text-cyan-400" },

  "Node.js": { icon: FaNodeJs, iconClass: "text-green-500" },
  Django: { icon: SiDjango, iconClass: "text-emerald-400" },
  "Express.js": { icon: SiExpress, iconClass: "text-violet-400" },
  WebSockets: { icon: SiSocketdotio, iconClass: "text-lime-400" },
  "REST APIs": { icon: LuDatabaseBackup, iconClass: "text-zinc-300" },
  MongoDB: { icon: SiMongodb, iconClass: "text-green-500" },
  PostgreSQL: { icon: SiPostgresql, iconClass: "text-sky-500" },
  Prisma: { icon: SiPrisma, iconClass: "text-zinc-200" },
  JWT: { icon: SiJsonwebtokens, iconClass: "text-cyan-300" },

  Git: { icon: FaGitAlt, iconClass: "text-orange-500" },
  Postman: { icon: SiPostman, iconClass: "text-orange-400" },
  Docker: { icon: SiDocker, iconClass: "text-sky-400" },
  Kubernetes: { icon: SiKubernetes, iconClass: "text-blue-500" },
  Turborepo: { icon: SiTurborepo, iconClass: "text-zinc-200" },
  "VS Code": { icon: VscVscode, iconClass: "text-sky-500" },
};

export default function SkillBadge({ label }) {
  const config = skillConfig[label];
  const Icon = config?.icon;

  return (
    <div className="inline-flex h-11 items-center gap-2.5 rounded-full border border-zinc-300 bg-white px-5 text-sm font-medium text-zinc-900 shadow-[0_0_0_1px_rgba(0,0,0,0.03)] transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.03)] dark:hover:border-zinc-600 dark:hover:bg-zinc-950">
      {Icon ? <Icon className={`text-[16px] ${config.iconClass}`} /> : null}
      <span>{label}</span>
    </div>
  );
}