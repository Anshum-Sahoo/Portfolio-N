export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="font-label text-[10px] text-secondary tracking-widest uppercase py-2 px-4 border border-outline-variant hover:bg-surface-container transition-colors">
      {label}
    </span>
  );
}
