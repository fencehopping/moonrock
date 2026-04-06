import { motion } from "framer-motion";
import AdminDashboardMockup from "./components/AdminDashboardMockup";
import ComparisonTable from "./components/ComparisonTable";
import CostCard from "./components/CostCard";
import DeviceMockup from "./components/DeviceMockup";
import FeatureCard from "./components/FeatureCard";
import HeadlineBlock from "./components/HeadlineBlock";
import ProgressLadder from "./components/ProgressLadder";
import { Reveal, RevealGroup, fadeUp } from "./components/Reveal";
import Section from "./components/Section";
import TierSection from "./components/TierSection";

const gapCards = [
  "Information is fragmented",
  "Decisions feel high-stakes",
  "Support disappears between touchpoints",
  "Progress is hard to see or sustain",
];

const ladderSteps = [
  {
    title: "Content Experience",
    description: "A lightweight guided web experience that delivers core information clearly.",
  },
  {
    title: "Tracked Experience",
    description: "Adds user accounts, saved progress, and direct communication capabilities.",
  },
  {
    title: "Managed Platform",
    description: "Adds administrative tools so your team can manage and evolve the experience.",
  },
  {
    title: "Full Ecosystem",
    description: "Expands into native apps, integrations, and long-term digital infrastructure.",
  },
];

const tierOneSections = [
  {
    eyebrow: "A",
    title: "What it includes",
    items: [
      "Responsive web app",
      "Core educational content",
      "Simple decision-tree flows",
      "Guided user experience",
    ],
  },
  {
    eyebrow: "B",
    title: "What it does not include",
    items: [
      "No user accounts or logins",
      "No saved progress",
      "No CRM or communication system",
      "No admin dashboard or content management tools",
    ],
  },
  {
    eyebrow: "C",
    title: "Why this tier exists",
    items: [
      "Fast to launch",
      "Lower upfront investment",
      "Strong way to validate the concept before building deeper infrastructure",
    ],
  },
];

const tierTwoSections = [
  {
    eyebrow: "A",
    title: "New capabilities unlocked",
    items: ["User registration and login", "Saved progress", "Basic user profiles", "Resumable journeys"],
  },
  {
    eyebrow: "B",
    title: "Communication layer",
    items: ["Email or SMS touchpoints", "Reminders and nudges", "Re-engagement opportunities", "Early marketing list building"],
  },
  {
    eyebrow: "C",
    title: "What this enables",
    items: ["Better retention", "More measurable engagement", "More tailored experiences", "Stronger relationship with users over time"],
  },
  {
    eyebrow: "D",
    title: "What still remains limited",
    items: [
      "No robust internal admin system",
      "Content changes may still require developer support",
      "Limited analytics depth",
      "Limited operational tooling",
    ],
  },
];

const tierThreeSections = [
  {
    eyebrow: "A",
    title: "Administrative control",
    items: ["Admin dashboard", "Create and edit modules", "Manage journeys and decision paths", "Update content over time"],
  },
  {
    eyebrow: "B",
    title: "Operational power",
    items: [
      "Internal visibility into usage",
      "Performance and engagement tracking",
      "Better iteration cycles",
      "Reduced dependency on technical support for content changes",
    ],
  },
  {
    eyebrow: "C",
    title: "User experience upgrades",
    items: [
      "More personalized pathways",
      "Smarter engagement flows",
      "More dynamic content structures",
      "Better continuity across the user journey",
    ],
  },
  {
    eyebrow: "D",
    title: "Why this tier matters",
    items: [
      "Supports scaling programs",
      "Makes the platform sustainable",
      "Gives the organization ownership",
      "Turns a one-time build into an evolving support system",
    ],
    emphasis: true,
  },
];

const ongoingCosts = [
  {
    tier: "Tier 1",
    cost: "~$10–$50/month",
    notes: "Minimal hosting, simple deployment, low operational complexity.",
  },
  {
    tier: "Tier 2",
    cost: "~$100–$500/month",
    notes: "Database, authentication, email or SMS tools, analytics, and user data storage.",
  },
  {
    tier: "Tier 3",
    cost: "~$300–$1,000/month",
    notes: "Admin systems, expanded automation, deeper analytics, more storage, and operational tooling.",
  },
  {
    tier: "Tier 4",
    cost: "~$500–$2,000+/month",
    notes: "Native app support, advanced backend infrastructure, integrations, monitoring, and higher-scale operations.",
  },
];

const comparisonRows = [
  { label: "Responsive web app", values: [true, true, true, true] },
  { label: "Educational modules", values: [true, true, true, true] },
  { label: "Decision-tree guidance", values: [true, true, true, true] },
  { label: "User accounts", values: [false, true, true, true] },
  { label: "Saved progress", values: [false, true, true, true] },
  { label: "Communication tools", values: [false, true, true, true] },
  { label: "Basic personalization", values: [false, true, true, true] },
  { label: "Analytics", values: [false, true, true, true] },
  { label: "Admin dashboard", values: [false, false, true, true] },
  { label: "Content management", values: [false, false, true, true] },
  { label: "Journey management", values: [false, false, true, true] },
  { label: "Native iPhone app", values: [false, false, false, true] },
  { label: "Native Android app", values: [false, false, false, true] },
  { label: "Integrations", values: [false, false, false, true] },
  { label: "Advanced infrastructure", values: [false, false, false, true] },
];

const futureCards = [
  {
    eyebrow: "01",
    title: "Community support experiences",
    body: "Shared spaces, guided group touchpoints, or member experiences can extend support beyond individual modules.",
  },
  {
    eyebrow: "02",
    title: "AI-assisted guidance",
    body: "Future assistance layers can help parents find the right next step without replacing human judgment.",
  },
  {
    eyebrow: "03",
    title: "Partner / referral ecosystem",
    body: "The platform can become a connective layer across providers, referrals, and adjacent services.",
  },
  {
    eyebrow: "04",
    title: "Broader regional or national reach",
    body: "A strong first version creates the operational model for growth beyond a single local program.",
  },
];

function ScrollCue() {
  return (
    <div className="print-hide mt-16 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slateSoft">
      <span>Scroll to explore</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="inline-block h-8 w-px bg-white/30"
      />
    </div>
  );
}

function PrintHeader() {
  return (
    <header className="print-hide border-b border-[#E4EAF3] bg-white/90 px-6 py-5 backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-proposal items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-accent shadow-[0_0_0_8px_rgba(79,140,255,0.12)]" />
          <div className="text-sm font-semibold text-[#132033]">Support Platform Proposal</div>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0B0F1A]"
        >
          Print / Save as PDF
        </button>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="bg-white">
      <PrintHeader />

      <Section tone="dark" className="pb-28 pt-20 md:pb-32 md:pt-24">
        <div className="grid items-end gap-16 lg:grid-cols-[1.05fr,0.95fr]">
          <Reveal>
            <div className="eyebrow text-accent">Proposal narrative</div>
            <h1 className="headline-xl max-w-[760px] text-white">Support doesn’t stop after the session</h1>
            <p className="copy-lg mt-6 max-w-[620px] text-white">
              Parents need guidance in the moments that matter most.
            </p>
            <p className="copy-lg mt-6 max-w-[670px] text-slateSoft">
              The challenge isn’t the program. It’s what happens in between. Families leave with clarity,
              then return to uncertainty, isolation, and high-pressure decisions.
            </p>
            <ScrollCue />
          </Reveal>

          <Reveal className="print-avoid">
            <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-glow">
              <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-accent/20 blur-2xl print-hide" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Problem</div>
                  <div className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">Between-session support gap</div>
                  <div className="mt-4 h-px bg-white/10" />
                  <div className="mt-4 text-sm leading-7 text-slateSoft">
                    A strong program still leaves families alone during the moments where choices, panic, and confusion spike.
                  </div>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                  <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Proposal</div>
                  <div className="mt-3 text-2xl font-bold tracking-[-0.04em] text-white">A system, not a brochure</div>
                  <div className="mt-4 grid gap-3">
                    <div className="h-3 w-[78%] rounded-full bg-accent" />
                    <div className="h-3 w-[58%] rounded-full bg-white/20" />
                    <div className="h-3 w-[86%] rounded-full bg-accent" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" className="pt-0">
        <HeadlineBlock
          dark
          eyebrow="The gap"
          title="The breakdown happens between sessions"
          subtitle="Today, support is often time-bound, difficult to revisit, and hard to scale. Parents are left navigating emotionally charged decisions without a reliable system to guide them in real time."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.88fr,1.12fr]">
          <Reveal className="print-avoid rounded-[30px] border border-white/10 bg-white/[0.04] p-8">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Why this matters</div>
            <p className="mt-6 text-[19px] leading-9 text-white">
              Sessions create clarity. But without a system that parents can revisit later, that clarity decays
              under stress.
            </p>
            <div className="mt-10 rounded-[24px] border border-white/10 bg-[#121827] p-5">
              <div className="flex items-center justify-between text-sm font-semibold text-white">
                <span>Pressure between visits</span>
                <span>High</span>
              </div>
              <div className="mt-4 h-3 rounded-full bg-white/10">
                <div className="h-3 w-[82%] rounded-full bg-[linear-gradient(90deg,#7AA7FF_0%,#4F8CFF_100%)]" />
              </div>
              <div className="mt-4 flex justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-slateSoft">
                <span>Low clarity</span>
                <span>High stakes</span>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="grid gap-4">
            {gapCards.map((card, index) => (
              <FeatureCard
                key={card}
                eyebrow={`0${index + 1}`}
                title={card}
                body="A parent-facing product should reduce friction here, not simply add more information."
                tone="dark"
              />
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section tone="light">
        <HeadlineBlock
          eyebrow="Reframe"
          title="This isn’t about building an app"
          subtitle="It’s about building a system of support that exists between, around, and beyond your sessions."
          titleClassName="headline-lg"
        />
        <Reveal className="mt-10 max-w-[760px]">
          <p className="copy-lg text-[#566074]">
            The opportunity is not just to digitize information. It is to create a guided experience that helps
            parents learn, make decisions, stay engaged, and feel supported over time.
          </p>
        </Reveal>
      </Section>

      <Section tone="light">
        <HeadlineBlock
          eyebrow="Platform ladder"
          title="There are 4 levels of what this can become"
          subtitle="Each level adds more personalization, operational power, scalability, and long-term value."
        />
        <ProgressLadder steps={ladderSteps} />
      </Section>

      <Section tone="mist">
        <TierSection
          tone="light"
          level="Level 1"
          title="Content Experience"
          price="$10K–$20K"
          label="Lean Pilot"
          intro="This is the fastest and simplest way to get something useful into parents’ hands."
          body="Tier 1 focuses on delivering a clean, mobile-friendly web experience centered around your core educational and support content. It is intentionally lightweight, with no logins, no saved data, and no administrative backend."
          sections={tierOneSections}
          mockup={<DeviceMockup variant="content" />}
        />
      </Section>

      <Section tone="dark">
        <TierSection
          tone="dark"
          level="Level 2"
          title="Tracked Experience"
          price="$20K–$50K"
          label="Foundation Product"
          intro="This is where the experience shifts from content delivery into a real product."
          body="Tier 2 introduces the foundational infrastructure needed to create persistent user experiences. Parents can register, return to where they left off, and receive ongoing communication that keeps them engaged over time."
          sections={tierTwoSections}
          mockup={
            <DeviceMockup
              variant="tracked"
              chips={[
                { label: "Saved progress", position: "right-4 top-10" },
                { label: "User accounts", position: "-left-4 top-36" },
                { label: "Communication tools", position: "right-0 bottom-14" },
              ]}
            />
          }
        />
      </Section>

      <Section tone="dark" className="bg-[radial-gradient(circle_at_top_right,rgba(79,140,255,0.22),transparent_24%),linear-gradient(180deg,#0B0F1A_0%,#10182B_100%)]">
        <TierSection
          tone="dark"
          level="Level 3"
          title="Managed Platform"
          price="$50K–$80K"
          label="Engagement & Scale"
          intro="This is where the product becomes a true platform your team can operate and improve over time."
          body="Tier 3 adds the administrative and operational layer needed to manage content, evolve the experience, and support scale without relying on developers for every change."
          sections={tierThreeSections}
          mockup={<AdminDashboardMockup />}
          emphasized
        />
      </Section>

      <Section tone="light">
        <HeadlineBlock
          eyebrow="Level 4"
          title="Full Ecosystem"
          subtitle="This is the long-term infrastructure play."
        />

        <Reveal className="mt-6 max-w-3xl">
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-[30px] font-[900] leading-none tracking-[-0.05em] text-[#111827]">$80K–$110K</div>
            <div className="rounded-full border border-[#DCE4F2] bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Full Platform
            </div>
          </div>
          <p className="mt-6 text-[16px] leading-8 text-[#566074]">
            Tier 4 expands the platform into a more advanced ecosystem with dedicated device experiences,
            deeper technical infrastructure, and broader scalability potential.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.96fr,1.04fr]">
          <Reveal className="print-avoid flex items-center justify-center rounded-[34px] border border-[#DCE4F2] bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFF_100%)] p-6 shadow-panel">
            <DeviceMockup variant="native" />
          </Reveal>

          <RevealGroup className="grid gap-4 md:grid-cols-2 print-two">
            <FeatureCard
              eyebrow="1"
              title="Native Mobile Apps"
              body="iPhone app, Android app, push notifications, and app-store presence."
              tone="soft"
            />
            <FeatureCard
              eyebrow="2"
              title="Integrations"
              body="CRM connections, external service integrations, data synchronization, and partnership readiness."
              tone="soft"
            />
            <FeatureCard
              eyebrow="3"
              title="Advanced Infrastructure"
              body="More scalable backend systems, stronger performance architecture, security improvements, and higher resilience."
              tone="soft"
            />
            <FeatureCard
              eyebrow="4"
              title="Expanded Experience Design"
              body="Device-specific UX, more advanced personalization, future AI-assisted opportunities, and multi-channel engagement."
              tone="soft"
            />
          </RevealGroup>
        </div>
      </Section>

      <Section tone="dark">
        <HeadlineBlock
          dark
          eyebrow="Ongoing costs"
          title="As the platform grows, so does what powers it"
          subtitle="Higher tiers do not just add features. They add the behind-the-scenes systems required to store data, manage users, deliver communications, support staff workflows, and keep everything reliable over time."
        />

        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4 print-two">
          {ongoingCosts.map((item) => (
            <CostCard key={item.tier} {...item} />
          ))}
        </RevealGroup>

        <Reveal className="mt-10 max-w-4xl">
          <p className="text-[17px] leading-8 text-white">
            These are not just maintenance costs. They are what make reliability, engagement, scalability,
            and long-term ownership possible.
          </p>
          <p className="mt-4 text-[14px] leading-7 text-slateSoft">
            Actual costs depend on usage, communication volume, infrastructure choices, and long-term roadmap decisions.
          </p>
        </Reveal>
      </Section>

      <Section tone="light">
        <HeadlineBlock
          eyebrow="Comparison table"
          title="Each level builds on the last"
          subtitle="A clear view of what gets unlocked as the platform matures."
        />
        <div className="mt-10">
          <ComparisonTable rows={comparisonRows} />
        </div>
      </Section>

      <Section tone="dark">
        <HeadlineBlock
          dark
          eyebrow="Future vision"
          title="What this can become over time"
          subtitle="The right first version does more than solve today’s need. It creates the foundation for future growth."
        />

        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4 print-two">
          {futureCards.map((card) => (
            <FeatureCard key={card.title} eyebrow={card.eyebrow} title={card.title} body={card.body} tone="dark" />
          ))}
        </RevealGroup>

        <Reveal className="mt-10 max-w-3xl">
          <p className="text-[24px] font-bold leading-9 tracking-[-0.04em] text-white">
            This is not just a product decision. It is infrastructure for how support can scale.
          </p>
        </Reveal>
      </Section>

      <Section tone="deep" className="bg-[linear-gradient(180deg,#0B0F1A_0%,#060911_100%)]">
        <Reveal>
          <div className="eyebrow text-accent">Closing</div>
          <h2 className="headline-lg max-w-4xl text-white">You already have the program. This builds the system around it.</h2>
          <p className="mt-8 max-w-3xl text-[18px] leading-8 text-slateSoft">
            Start with a lightweight pilot or build toward a long-term platform. Either way, the goal is the
            same: extend your impact beyond the room and create a support experience that can grow with your mission.
          </p>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.18em] text-white/50">
            Designed as a scalable digital roadmap, not just a one-time build.
          </p>
        </Reveal>
      </Section>
    </div>
  );
}
