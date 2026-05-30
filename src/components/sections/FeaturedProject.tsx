import { skillForgeAI } from "@/data/portfolio";
import { CaseStudyBlock } from "@/components/sections/CaseStudyBlock";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { FadeIn } from "@/components/ui";

export function FeaturedProject() {
  return (
    <section
      id="work"
      className="w-full scroll-mt-nav divider section-padding"
      aria-labelledby="featured-heading"
    >
      <div className="container-main">
        <FadeIn>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="shrink-0">
              <p className="text-label mb-2">Case study</p>
              <h2 id="featured-heading" className="heading-section">
                {skillForgeAI.name}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-zinc-500 max-lg:text-left lg:flex-1 lg:text-right lg:max-w-[50%]">{skillForgeAI.summary}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <ProjectVisual
            src={skillForgeAI.preview.src}
            alt={skillForgeAI.preview.alt}
            aspect="hero"
            projectName={skillForgeAI.name}
            priority
            className="mb-10"
          />
        </FadeIn>

        <CaseStudyBlock project={skillForgeAI} featured showPreview={false} />

        {skillForgeAI.screenshots && skillForgeAI.screenshots.length > 1 && (
          <FadeIn>
            <div className="divider mt-12 pt-10">
              <p className="text-label mb-6">Product screens</p>
              <div className="grid gap-5 lg:grid-cols-2">
                {skillForgeAI.screenshots.slice(1).map((shot) => (
                  <ProjectVisual
                    key={shot.label}
                    src={shot.src}
                    alt={shot.alt}
                    label={shot.label}
                    aspect="wide"
                    projectName={shot.label}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
