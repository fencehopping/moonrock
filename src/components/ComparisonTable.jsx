import { Reveal } from "./Reveal";

function Cell({ value }) {
  if (value) {
    return <span className="text-lg font-bold text-accent">✓</span>;
  }

  return <span className="text-base font-semibold text-[#C2CBD9]">-</span>;
}

export default function ComparisonTable({ rows }) {
  return (
    <Reveal className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-y-3">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Capability
            </th>
            {["Tier 1", "Tier 2", "Tier 3", "Tier 4"].map((tier) => (
              <th
                key={tier}
                className="px-4 py-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-accent"
              >
                {tier}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="print-avoid">
              <td className="rounded-l-2xl border border-r-0 border-[#E1E8F5] bg-white px-4 py-4 text-[15px] font-semibold text-[#0F1728]">
                {row.label}
              </td>
              {row.values.map((value, index) => (
                <td
                  key={`${row.label}-${index}`}
                  className={`border border-[#E1E8F5] bg-white px-4 py-4 text-center ${
                    index === row.values.length - 1 ? "rounded-r-2xl" : "border-l-0"
                  }`}
                >
                  <Cell value={value} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Reveal>
  );
}
