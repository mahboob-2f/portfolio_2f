export default function SocialButtons({ buttons }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <a
            key={button.label}
            href={button.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2.5 rounded-xl border border-zinc-300 bg-white px-4 text-sm font-medium text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-950"
          >
            <Icon size={17} /> {/* FIXED: smaller icon */}
            <span>{button.label}</span>
          </a>
        );
      })}
    </div>
  );
}