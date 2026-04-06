import { motion } from "framer-motion";
import { Reveal, RevealGroup, fadeUp } from "./Reveal";

export default function ProgressLadder({ steps }) {
  return (
    <div className="relative mt-12">
      <div className="absolute left-[23px] top-3 hidden h-[calc(100%-32px)] w-px bg-[#DCE4F2] md:block" />
      <RevealGroup className="space-y-6">
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            variants={fadeUp}
            className="print-avoid grid gap-4 rounded-[28px] border border-[#DCE4F2] bg-white p-6 shadow-panel md:grid-cols-[46px,1fr]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
              {index + 1}
            </div>
            <div>
              <h3 className="text-[24px] font-bold tracking-[-0.04em] text-[#101828]">{step.title}</h3>
              <p className="mt-3 max-w-2xl text-[16px] leading-7 text-[#5B667A]">{step.description}</p>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
      <Reveal className="mt-8 text-[15px] font-medium text-[#5B667A]">
        Each level unlocks new capabilities and new complexity behind the scenes.
      </Reveal>
    </div>
  );
}
