import { motion } from "framer-motion";
import AdminDashboardMockup from "./components/AdminDashboardMockup";
import ComparisonTable from "./components/ComparisonTable";
import DeviceMockup from "./components/DeviceMockup";
import FeatureCard from "./components/FeatureCard";
import HeadlineBlock from "./components/HeadlineBlock";
import ProgressLadder from "./components/ProgressLadder";
import { Reveal, RevealGroup, fadeUp } from "./components/Reveal";
import Section from "./components/Section";
import TierExplanationCallout from "./components/TierExplanationCallout";
import TierSection from "./components/TierSection";

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

const tierExplanations = {
  level1: {
    label: "In simple terms",
    text: "Think of this like a really well-organized website. Parents can open it on their phone, read helpful information, and follow simple step-by-step guidance. But the system does not remember who they are, so every visit starts fresh.",
  },
  level2: {
    label: "In simple terms",
    text: "Now the system starts to remember you. Parents can create an account, come back to where they left off, and receive reminders or follow-up communication. It feels more personal and more useful over time.",
  },
  level3: {
    label: "In simple terms",
    text: "Now your team gets control behind the scenes. Instead of needing a developer every time something changes, your team can update content, adjust the experience, and see how people are using it. It becomes something you can actively run and improve.",
  },
  level4: {
    label: "In simple terms",
    text: "Now this becomes a full long-term digital system. Parents can use dedicated apps on their phones, the platform can connect with other tools, and the whole experience is built to grow over time. This is the version designed for scale.",
  },
};

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

function ScrollCue({ label = "Scroll to see the platform roadmap" }) {
  return (
    <div className="print-hide mt-16 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-slateSoft">
      <span>{label}</span>
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

      <Section tone="dark" className="flex min-h-[88vh] items-center pb-24 pt-20 md:pb-28 md:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr,0.92fr]">
          <RevealGroup className="max-w-[760px]">
            <motion.div variants={fadeUp}>
              <div className="eyebrow text-accent">Proposal Narrative</div>
            </motion.div>

            <motion.h1 variants={fadeUp} className="headline-xl max-w-[760px] text-white">
              The hardest moments don’t happen in the room.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-8 max-w-[720px] text-[21px] leading-9 text-white/88 md:text-[24px] md:leading-10">
              Support is often delivered in sessions, but the moments when parents need guidance don’t
              always happen on a schedule.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-7 max-w-[680px] text-[16px] leading-8 text-slateSoft">
              This proposal outlines a digital platform designed to extend guidance beyond scheduled
              interactions, so families have access to trusted support when they need it most.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 max-w-[660px] rounded-[24px] border border-white/10 bg-white/[0.05] px-5 py-4">
              <p className="text-[18px] font-semibold leading-8 tracking-[-0.03em] text-white md:text-[20px]">
                What happens when a parent needs help right now, not at the next session?
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <ScrollCue />
            </motion.div>
          </RevealGroup>

          <Reveal className="print-avoid lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-glow">
              <div className="absolute right-[-18px] top-[-20px] h-32 w-32 rounded-full bg-accent/16 blur-3xl print-hide" />
              <div className="absolute bottom-10 left-0 top-10 w-px bg-[linear-gradient(180deg,rgba(79,140,255,0.05),rgba(79,140,255,0.65),rgba(79,140,255,0.05))]" />

              <div className="pl-6">
                <div className="mb-6 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                  Where the gap appears
                </div>

                <div className="space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Scheduled support</div>
                    <div className="mt-3 text-[24px] font-bold tracking-[-0.04em] text-white">Guidance is structured</div>
                    <p className="mt-3 text-[15px] leading-7 text-slateSoft">
                      Support can be thoughtful and effective within planned interactions.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Real-life moment</div>
                    <div className="mt-3 text-[24px] font-bold tracking-[-0.04em] text-white">Needs do not arrive on a schedule</div>
                    <p className="mt-3 text-[15px] leading-7 text-slateSoft">
                      Important questions can surface later, in everyday situations, under pressure.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">Opportunity</div>
                    <div className="mt-3 text-[24px] font-bold tracking-[-0.04em] text-white">Trusted guidance should stay accessible</div>
                    <p className="mt-3 text-[15px] leading-7 text-slateSoft">
                      The platform keeps support available in real-time moments, not only at the next scheduled touchpoint.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark" className="pt-0">
        <div className="max-w-[780px]">
          <HeadlineBlock dark title="Support is structured. Real life isn’t." />

          <Reveal className="mt-8 max-w-[720px]" delay={0.04}>
            <p className="copy-lg text-slateSoft">
              Support is often delivered in scheduled moments: sessions, meetings, conversations. These are
              valuable, but they can’t cover every situation a parent faces in real time.
            </p>
          </Reveal>

          <Reveal className="mt-12 max-w-[760px]" delay={0.12}>
            <p className="text-[24px] font-semibold leading-9 tracking-[-0.03em] text-accent md:text-[28px] md:leading-10">
              What happens when a parent needs help right now, not at the next session?
            </p>
          </Reveal>

          <Reveal className="mt-12" delay={0.18}>
            <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-white/58">
              That’s the gap this platform is designed to fill.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="light">
        <HeadlineBlock
          eyebrow="Platform ladder"
          title="Let's break this into 4 levels of deliverables and complexity."
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
          explanation={tierExplanations.level1}
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
          explanation={tierExplanations.level2}
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
          explanation={tierExplanations.level3}
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

        <div className="mt-10">
          <TierExplanationCallout
            label={tierExplanations.level4.label}
            text={tierExplanations.level4.text}
            tone="light"
          />
        </div>
      </Section>

      <Section tone="dark">
        <div className="max-w-[760px]">
          <HeadlineBlock
            dark
            eyebrow="Ongoing costs"
            title="Simple, scalable operating costs"
            subtitle="As the platform grows, there are some ongoing costs to keep everything running smoothly: things like hosting, data storage, and communication tools."
          />

          <Reveal className="mt-6 max-w-[720px]">
            <p className="text-[16px] leading-8 text-slateSoft">
              These are standard for any modern digital product and scale based on how the platform is used.
            </p>
          </Reveal>

          <Reveal className="mt-10 max-w-[720px]">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-accent">
              Typical factors that influence these costs include:
            </div>
            <ul className="mt-5 space-y-3 text-[16px] leading-8 text-white/88">
              <li>Number of users on the platform</li>
              <li>How much content and data is stored</li>
              <li>Use of email or SMS communication</li>
              <li>Level of platform complexity and integrations</li>
            </ul>
          </Reveal>

          <Reveal className="mt-10 max-w-[740px]">
            <p className="text-[15px] leading-8 text-slateSoft">
              In most cases, these costs start small and grow gradually over time. We’ll align on the right setup
              based on your needs, usage, and long-term goals.
            </p>
          </Reveal>
        </div>
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
