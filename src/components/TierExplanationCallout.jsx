import { Reveal } from "./Reveal";

export default function TierExplanationCallout({ label, text, tone = "light", delay = 0.08 }) {
  const dark = tone === "dark";

  return (
    <Reveal delay={delay} className="print-avoid">
      <div
        className={`max-w-[920px] rounded-[26px] border px-6 py-5 ${
          dark
            ? "border-white/10 bg-[#121827] text-white"
            : "border-[#DCE4F2] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6F9FF_100%)] text-[#0F1728]"
        }`}
      >
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{label}</div>
        <p className={`text-[15px] leading-7 ${dark ? "text-[#C0CBDE]" : "text-[#566074]"}`}>{text}</p>
      </div>
    </Reveal>
  );
}
