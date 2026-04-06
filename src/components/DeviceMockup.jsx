import FloatingChip from "./FloatingChip";

function PhoneShell({ children, className = "" }) {
  return (
    <div className={`rounded-[36px] bg-[#0F1523] p-3 shadow-[0_28px_70px_rgba(8,14,28,0.28)] ${className}`}>
      <div className="overflow-hidden rounded-[28px] bg-white p-4">{children}</div>
    </div>
  );
}

function AppHeader() {
  return <div className="mb-4 h-5 rounded-full bg-[linear-gradient(90deg,#4F8CFF_0%,#7AA7FF_100%)]" />;
}

function ModuleCard({ soft = false, tall = false }) {
  return (
    <div
      className={`rounded-2xl ${soft ? "bg-[#E6EEFF]" : "bg-[#EEF3FC]"} ${
        tall ? "h-24" : "h-14"
      }`}
    />
  );
}

function ProgressBars() {
  return (
    <div className="space-y-3">
      <div className="h-3 w-[78%] rounded-full bg-accent" />
      <div className="h-3 w-[56%] rounded-full bg-[#D7E4FF]" />
      <div className="h-3 w-[84%] rounded-full bg-accent" />
    </div>
  );
}

export default function DeviceMockup({ variant = "content", chips = [] }) {
  if (variant === "content") {
    return (
      <div className="relative mx-auto max-w-[320px]">
        <PhoneShell>
          <AppHeader />
          <div className="space-y-3">
            <ModuleCard tall />
            <ModuleCard />
            <div className="h-3 w-[74%] rounded-full bg-accent" />
            <div className="h-3 w-[46%] rounded-full bg-[#D7E4FF]" />
          </div>
        </PhoneShell>
      </div>
    );
  }

  if (variant === "tracked") {
    return (
      <div className="relative mx-auto max-w-[390px]">
        <div className="rounded-[34px] border border-white/10 bg-[#101726] p-5 shadow-glow">
          <PhoneShell className="mx-auto max-w-[280px]">
            <AppHeader />
            <div className="mb-4 grid gap-3 rounded-2xl border border-[#DCE5F7] bg-[#F9FBFF] p-4">
              <div className="h-4 w-24 rounded-full bg-[#D7E4FF]" />
              <div className="h-10 rounded-xl bg-[#EFF4FD]" />
              <div className="h-10 rounded-xl bg-[#EFF4FD]" />
              <div className="h-10 rounded-xl bg-accent" />
            </div>
            <div className="mb-4 rounded-2xl border border-[#DCE5F7] bg-[#F9FBFF] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-[#10203A]">Progress</div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent">68%</div>
              </div>
              <div className="h-3 rounded-full bg-[#E1EAFE]">
                <div className="h-3 w-[68%] rounded-full bg-accent" />
              </div>
            </div>
            <div className="space-y-3">
              <ModuleCard />
              <ModuleCard soft />
              <div className="flex gap-2">
                <div className="rounded-full bg-[#E8F0FF] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  Reminder
                </div>
                <div className="rounded-full bg-[#E8F0FF] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
                  SMS
                </div>
              </div>
            </div>
          </PhoneShell>
        </div>

        {chips.map((chip) => (
          <FloatingChip key={chip.label} className={`absolute hidden md:block print-hide ${chip.position}`}>
            {chip.label}
          </FloatingChip>
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[460px]">
      <div className="relative flex items-end justify-center gap-5">
        <PhoneShell className="w-[170px] rotate-[-5deg]">
          <AppHeader />
          <ModuleCard />
          <div className="mt-3 space-y-3">
            <div className="h-3 w-[72%] rounded-full bg-accent" />
            <div className="h-3 w-[50%] rounded-full bg-[#D7E4FF]" />
          </div>
        </PhoneShell>
        <PhoneShell className="w-[170px] rotate-[5deg]">
          <AppHeader />
          <ModuleCard soft />
          <div className="mt-3 rounded-2xl bg-[#F2F6FE] p-3">
            <div className="h-10 rounded-xl bg-[#DFE9FD]" />
          </div>
          <div className="mt-3 flex gap-2">
            <div className="h-3 flex-1 rounded-full bg-accent" />
            <div className="h-3 w-12 rounded-full bg-[#D7E4FF]" />
          </div>
        </PhoneShell>

        <div className="absolute left-1/2 top-10 hidden h-[72%] w-px -translate-x-1/2 bg-[linear-gradient(180deg,rgba(79,140,255,0.7),rgba(79,140,255,0.12))] md:block print-hide" />
        <div className="absolute right-2 top-14 hidden rounded-full border border-[#DDE5F2] bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent shadow-panel md:block print-hide">
          iPhone + Android
        </div>
        <div className="absolute left-4 bottom-8 hidden rounded-full border border-[#DDE5F2] bg-white px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent shadow-panel md:block print-hide">
          Push + ecosystem
        </div>
      </div>
    </div>
  );
}
