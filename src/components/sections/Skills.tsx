import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/ui";
import { motion } from "framer-motion";

const skillGroups = [
  { label: "Backend", value: skills.backend, dotColor: "bg-emerald-500", glowColor: "rgba(16,185,129,0.15)" },
  { label: "AI", value: skills.ai, dotColor: "bg-purple-500", glowColor: "rgba(168,85,247,0.15)" },
  { label: "Frontend", value: skills.frontend, dotColor: "bg-cyan-500", glowColor: "rgba(6,182,212,0.15)" },
  { label: "Data", value: skills.data, dotColor: "bg-indigo-500", glowColor: "rgba(99,102,241,0.15)" },
  { label: "Tools", value: skills.tools, dotColor: "bg-amber-500", glowColor: "rgba(245,158,11,0.15)" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full scroll-mt-nav divider section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="container-main">
        <FadeIn>
          <div className="mb-12">
            <p className="text-label mb-2">Technical Proficiency</p>
            <h2 id="skills-heading" className="heading-section">
              Skills
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {skillGroups.map((group, groupIdx) => {
            const skillList = group.value.split(", ");
            return (
              <FadeIn key={group.label} className="flex flex-col">
                <div className="mb-4 flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${group.dotColor} animate-pulse`} />
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-300">
                    {group.label}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: idx * 0.03 + groupIdx * 0.05 }}
                      whileHover={{
                        y: -1.5,
                        borderColor: "rgba(255,255,255,0.2)",
                        boxShadow: `0 4px 20px ${group.glowColor}`,
                        color: "#ffffff"
                      }}
                      className="rounded-lg border border-white/5 bg-zinc-950/40 px-3 py-1.5 font-mono text-xs text-zinc-400 backdrop-blur-md cursor-default select-none transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
