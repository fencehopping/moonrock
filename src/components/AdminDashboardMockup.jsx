export default function AdminDashboardMockup() {
  return (
    <div className="mx-auto max-w-[520px] rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-4 shadow-glow">
      <div className="grid overflow-hidden rounded-[26px] bg-[#F9FBFF] md:grid-cols-[88px,1fr]">
        <aside className="border-r border-[#E1E8F5] bg-[#EFF4FC] p-4">
          <div className="mb-4 h-9 rounded-2xl bg-accent" />
          <div className="space-y-3">
            <div className="h-4 rounded-full bg-[#D5E3FD]" />
            <div className="h-4 rounded-full bg-[#D5E3FD]" />
            <div className="h-4 rounded-full bg-[#D5E3FD]" />
            <div className="h-4 rounded-full bg-[#D5E3FD]" />
          </div>
        </aside>

        <div className="p-5">
          <div className="mb-5 grid gap-4 md:grid-cols-[1.2fr,0.8fr]">
            <div className="rounded-3xl border border-[#E1E8F5] bg-white p-4 shadow-[0_10px_28px_rgba(21,31,49,0.04)]">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-[#10203A]">Module performance</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">Live</div>
              </div>
              <div className="flex h-24 items-end gap-2">
                <div className="h-[42%] w-full rounded-t-xl bg-[#D8E5FF]" />
                <div className="h-[56%] w-full rounded-t-xl bg-[#C7D9FF]" />
                <div className="h-[74%] w-full rounded-t-xl bg-accent" />
                <div className="h-[64%] w-full rounded-t-xl bg-[#8CB4FF]" />
                <div className="h-[82%] w-full rounded-t-xl bg-accent" />
              </div>
            </div>

            <div className="rounded-3xl border border-[#E1E8F5] bg-white p-4 shadow-[0_10px_28px_rgba(21,31,49,0.04)]">
              <div className="mb-3 text-sm font-semibold text-[#10203A]">Journey config</div>
              <div className="space-y-3">
                <div className="h-10 rounded-2xl bg-[#EFF4FD]" />
                <div className="h-10 rounded-2xl bg-[#EFF4FD]" />
                <div className="h-10 rounded-2xl bg-accent" />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-[#E1E8F5] bg-white p-4">
              <div className="mb-3 text-sm font-semibold text-[#10203A]">Content modules</div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-[#EFF4FD] p-3">
                  <div className="h-3 w-2/3 rounded-full bg-[#C6D8FF]" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-[#D8E5FF]" />
                </div>
                <div className="rounded-2xl bg-[#EFF4FD] p-3">
                  <div className="h-3 w-3/4 rounded-full bg-[#C6D8FF]" />
                  <div className="mt-3 h-3 w-1/3 rounded-full bg-[#D8E5FF]" />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E1E8F5] bg-white p-4">
              <div className="mb-3 text-sm font-semibold text-[#10203A]">Admin actions</div>
              <div className="space-y-3">
                <div className="h-11 rounded-2xl bg-[#EFF4FD]" />
                <div className="h-11 rounded-2xl bg-[#EFF4FD]" />
                <div className="h-11 rounded-2xl bg-[#EFF4FD]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
