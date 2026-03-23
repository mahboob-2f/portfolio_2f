import SkillBadge from "./SkillBadge";

export default function SkillCategory({ title, skills }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wide text-zinc-500 sm:text-sm">
        {title}
      </h3>

      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}