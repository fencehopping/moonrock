import { motion } from "framer-motion";
import { fadeUp } from "./Reveal";

export default function CostCard({ tier, cost, notes, dark = true }) {
  return (
    <motion.article
      variants={fadeUp}
      className={`print-avoid rounded-[28px] border p-6 ${
        dark
          ? "border-white/10 bg-white/[0.04] text-white"
          : "border-[#DCE4F2] bg-white text-[#0F1728] shadow-panel"
      }`}
    >
      <div className={`text-[11px] font-bold uppercase tracking-[0.18em] ${dark ? "text-accent" : "text-accent"}`}>
        {tier}
      </div>
      <div className="mt-4 text-[28px] font-[900] leading-none tracking-[-0.05em]">{cost}</div>
      <p className={`mt-4 text-[15px] leading-7 ${dark ? "text-slateSoft" : "text-[#566074]"}`}>{notes}</p>
    </motion.article>
  );
}
