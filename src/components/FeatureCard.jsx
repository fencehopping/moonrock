import { motion } from "framer-motion";
import { fadeUp } from "./Reveal";

export default function FeatureCard({
  eyebrow,
  title,
  body,
  tone = "light",
  className = "",
}) {
  const toneClasses = {
    dark: "glass-dark text-white hover:-translate-y-1",
    light: "border border-[#DDE5F2] bg-white text-[#0F1728] shadow-panel hover:-translate-y-1",
    soft: "border border-[#DDE5F2] bg-[#FBFCFE] text-[#0F1728] shadow-panel hover:-translate-y-1",
    accent:
      "border border-accent/30 bg-[linear-gradient(180deg,#4F8CFF_0%,#6B9DFF_100%)] text-white shadow-[0_18px_50px_rgba(79,140,255,0.24)] hover:-translate-y-1",
  };

  return (
    <motion.article
      variants={fadeUp}
      className={`print-avoid rounded-[28px] p-6 transition duration-300 ${toneClasses[tone]} ${className}`}
    >
      {eyebrow ? (
        <div className={`mb-4 text-[11px] font-bold uppercase tracking-[0.18em] ${tone === "accent" ? "text-white/80" : "text-accent"}`}>
          {eyebrow}
        </div>
      ) : null}
      <h3 className="text-[20px] font-bold leading-tight tracking-[-0.03em]">{title}</h3>
      <p className={`mt-3 text-[15px] leading-7 ${tone === "dark" ? "text-slateSoft" : tone === "accent" ? "text-white/90" : "text-[#566074]"}`}>
        {body}
      </p>
    </motion.article>
  );
}
