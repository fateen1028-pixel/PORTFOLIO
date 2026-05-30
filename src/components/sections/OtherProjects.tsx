import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { otherProjects } from "@/data/portfolio";
import { CaseStudyBlock } from "@/components/sections/CaseStudyBlock";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn } from "@/components/ui";

export function OtherProjects() {
  const [activeId, setActiveId] = useState(otherProjects[0]?.id || "");

  const activeProject = otherProjects.find((p) => p.id === activeId);

  return (
    <section
      id="projects"
      className="w-full scroll-mt-nav divider section-padding"
      aria-labelledby="projects-heading"
    >
      <div className="container-main">
        <FadeIn>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="shrink-0">
              <p className="text-label mb-2">Showcase</p>
              <h2 id="projects-heading" className="heading-section">
                Other projects
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500 max-lg:text-left lg:flex-1 lg:text-right lg:max-w-[50%]">
              Click on a card below to load the detailed interactive architectural case study.
            </p>
          </div>
        </FadeIn>

        {/* Card Selection Grid */}
        <div className="mb-14 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.15} className="h-full">
              <ProjectCard
                project={project}
                href={`#${project.id}`}
                isActive={project.id === activeId}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveId(project.id);
                }}
              />
            </FadeIn>
          ))}
        </div>

        {/* Selected Project Showcase with Framer Motion transitions */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeProject && (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="border-t border-white/5 pt-8 max-lg:pt-8 lg:pt-10"
              >
                <CaseStudyBlock project={activeProject} showPreview={true} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
