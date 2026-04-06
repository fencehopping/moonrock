import { Reveal } from "./Reveal";

export default function HeadlineBlock({
  eyebrow,
  title,
  subtitle,
  className = "",
  titleClassName = "headline-lg",
  dark = false,
}) {
  return (
    <Reveal className={className}>
      {eyebrow ? (
        <div className={`eyebrow ${dark ? "text-accent" : "text-accent"}`}>{eyebrow}</div>
      ) : null}
      <h2 className={titleClassName}>{title}</h2>
      {subtitle ? (
        <p className={`copy-lg mt-6 max-w-3xl ${dark ? "text-slateSoft" : "text-[#566074]"}`}>
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
