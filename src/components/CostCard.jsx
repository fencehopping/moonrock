import { motion } from "framer-motion";
import { fadeUp } from "./Reveal";

export default function CostCard({ title, label, bullets, cost, description, dark = true }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`print-avoid rounded-[28px] border p-6 ${
        dark
          ? "border-white/10 bg-white/[0.035] text-white"
          : "border-[#DCE4F2] bg-white text-[#0F1728] shadow-panel"
      }`}
    >
      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">{label}</div>
      <div className="mt-3 text-[22px] font-bold leading-tight tracking-[-0.04em]">{title}</div>
      <ul className={`mt-4 space-y-2 text-[14px] leading-6 ${dark ? "text-[#C0CBDE]" : "text-[#566074]"}`}>
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-[22px] font-[900] leading-none tracking-[-0.04em]">{cost}</div>
      <p className={`mt-4 text-[14px] leading-7 ${dark ? "text-slateSoft" : "text-[#566074]"}`}>{description}</p>
      <div className={`mt-4 h-px ${dark ? "bg-white/8" : "bg-[#E4EAF4]"}`} />
      <p className={`mt-4 text-[12px] font-bold uppercase tracking-[0.16em] ${dark ? "text-white/55" : "text-[#7B879A]"}`}>
        Typical monthly operating range
      </p>
    </motion.article>
  );
}
