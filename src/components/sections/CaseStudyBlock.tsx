import type { CaseStudy } from "@/data/portfolio";
import { FlowDiagram } from "@/components/diagrams/FlowDiagram";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { FadeIn, LinkButton } from "@/components/ui";
import { GitHubIcon } from "@/components/ui/SocialIcons";

interface CaseStudyBlockProps {
  project: CaseStudy;
  featured?: boolean;
  showPreview?: boolean;
}

function NarrativeSection({ label, content }: { label: string; content: string }) {
  return (
    <div>
      <h3 className="text-label mb-2">{label}</h3>
      <p className="text-body">{content}</p>
    </div>
  );
}

export function CaseStudyBlock({
  project,
  featured = false,
  showPreview = true,
}: CaseStudyBlockProps) {
  return (
    <FadeIn>
      <article id={project.id}>
        {showPreview && (
          <div className={featured ? "mb-8" : "mb-6"}>
            <ProjectVisual
              src={project.preview.src}
              alt={project.preview.alt}
              aspect={featured ? "hero" : "wide"}
              projectName={project.name}
              priority={featured}
            />
          </div>
        )}

        <header className="mb-10 w-full max-lg:max-w-none lg:max-w-3xl">
          <p className="text-label mb-2">{project.subtitle}</p>
          <h2 className={featured ? "heading-section" : "heading-project"}>{project.name}</h2>
          <p className="mt-3 text-body">{project.summary}</p>
          <p className="mt-3 break-words font-mono text-xs text-zinc-500">{project.stack}</p>
        </header>

        <div className="grid grid-cols-1 gap-6 max-md:gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8 lg:gap-x-14">
          <NarrativeSection label="The problem" content={project.problem} />
          <NarrativeSection label="Why it was difficult" content={project.difficulty} />
          <NarrativeSection label="What I built" content={project.built} />
          <NarrativeSection label="What I learned" content={project.learned} />
        </div>

        {project.architecture && (
          <div className="divider mt-10 pt-8">
            <h3 className="text-label mb-4">Architecture</h3>
            <FlowDiagram nodes={project.architecture} compact animated={false} />
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-4 max-lg:flex-col max-lg:items-stretch max-lg:[&_a]:justify-start md:gap-6 lg:flex-row">
          <LinkButton href={project.links.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon size={16} />
            View source
          </LinkButton>
          {project.links.demo && project.links.demo !== "#" && (
            <LinkButton href={project.links.demo} variant="secondary" target="_blank" rel="noopener noreferrer">
              Live demo
            </LinkButton>
          )}
        </div>
      </article>
    </FadeIn>
  );
}
