export default function Section({
  id,
  tone = "light",
  className = "",
  innerClassName = "",
  children,
}) {
  const toneClasses = {
    dark: "bg-navy text-white",
    deep: "bg-[#070B13] text-white",
    light: "bg-white text-[#0F1728]",
    mist: "bg-mist text-[#0F1728]",
  };

  return (
    <section id={id} className={`section-shell ${toneClasses[tone]} ${className}`}>
      <div className="pointer-events-none absolute inset-0 print-hide">
        {tone === "dark" || tone === "deep" ? (
          <>
            <div className="absolute right-[-80px] top-[-60px] h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute left-[8%] top-[14%] h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute inset-0 bg-hero-radial opacity-70" />
          </>
        ) : (
          <>
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute left-[18%] top-[8%] h-24 w-24 rounded-full bg-accent/[0.06] blur-2xl" />
          </>
        )}
      </div>

      <div className={`section-inner relative z-10 ${innerClassName}`}>{children}</div>
    </section>
  );
}
