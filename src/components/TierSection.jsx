import { Reveal, RevealGroup } from "./Reveal";
import FeatureCard from "./FeatureCard";
import TierExplanationCallout from "./TierExplanationCallout";

export default function TierSection({
  tone = "light",
  level,
  title,
  price,
  label,
  intro,
  body,
  sections,
  mockup,
  explanation,
  emphasized = false,
}) {
  const dark = tone === "dark";

  return (
    <div className="grid gap-10">
      <div className="grid gap-12 lg:grid-cols-[1.04fr,0.96fr] lg:items-start">
        <div>
          <Reveal>
            <div className={`eyebrow ${dark ? "text-accent" : "text-accent"}`}>{level}</div>
            <div className="flex flex-wrap items-end gap-4">
              <h2 className="headline-lg">{title}</h2>
              <div
                className={`rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] ${
                  dark
                    ? emphasized
                      ? "border-accent/30 bg-accent/10 text-white"
                      : "border-white/10 bg-white/5 text-white/80"
                    : "border-[#DCE4F2] bg-white text-accent"
                }`}
              >
                {label}
              </div>
            </div>
            <div className={`mt-5 text-[30px] font-[900] leading-none tracking-[-0.05em] ${dark ? "text-white" : "text-[#111827]"}`}>
              {price}
            </div>
            <p className={`mt-6 text-[20px] font-semibold leading-8 ${dark ? "text-white" : "text-[#132033]"}`}>{intro}</p>
            <p className={`mt-4 max-w-2xl text-[16px] leading-8 ${dark ? "text-slateSoft" : "text-[#566074]"}`}>{body}</p>
          </Reveal>

          <RevealGroup
            className={`mt-8 grid gap-4 ${sections.length > 3 ? "md:grid-cols-2" : "md:grid-cols-1"} print-stack`}
          >
            {sections.map((section) => (
              <FeatureCard
                key={section.title}
                eyebrow={section.eyebrow}
                title={section.title}
                body={section.items.join(" • ")}
                tone={dark ? (emphasized && section.emphasis ? "accent" : "dark") : "light"}
                className="min-h-[190px]"
              />
            ))}
          </RevealGroup>
        </div>

        <Reveal className="print-avoid lg:pt-10">
          <div
            className={`rounded-[34px] p-6 ${
              dark
                ? emphasized
                  ? "border border-accent/20 bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-glow"
                  : "glass-dark"
                : "border border-[#DCE4F2] bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFF_100%)] shadow-panel"
            }`}
          >
            {mockup}
          </div>
        </Reveal>
      </div>

      {explanation ? (
        <TierExplanationCallout label={explanation.label} text={explanation.text} tone={dark ? "dark" : "light"} />
      ) : null}
    </div>
  );
}
