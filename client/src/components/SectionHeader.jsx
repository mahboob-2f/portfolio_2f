export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base font-light text-zinc-400 sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}