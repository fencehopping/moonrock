export default function FloatingChip({ children, className = "" }) {
  return (
    <div
      className={`rounded-full border border-white/10 bg-[#111827]/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_14px_28px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}
