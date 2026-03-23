export default function SectionPill({ label }) {
  return (
    <div className="flex h-9 min-w-[70px] items-center justify-center rounded-full bg-zinc-200 px-4 text-sm font-medium text-zinc-900 shadow-md">
      {label}
    </div>
  );
}