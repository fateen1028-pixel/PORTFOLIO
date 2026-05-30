import { type MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { CaseStudy } from "@/data/portfolio";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { TextLink } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: CaseStudy;
  href: string;
  featured?: boolean;
  isActive?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function ProjectCard({ project, href, featured = false, isActive = false, className, onClick }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={cn(
        "project-card group relative flex h-full w-full flex-col cursor-pointer transition-all duration-300",
        isActive
          ? "border-zinc-300 ring-2 ring-white/5 bg-zinc-900/60 shadow-[0_0_30px_rgba(255,255,255,0.06)] max-md:scale-100 sm:scale-[1.01]"
          : "hover:-translate-y-0.5",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <ProjectVisual
        src={project.preview.src}
        alt={project.preview.alt}
        aspect={featured ? "hero" : "video"}
        projectName={project.name}
        priority={featured}
        className="rounded-b-none border-0 shadow-none relative z-0"
      />
      <div className="relative z-0 flex flex-1 flex-col border-t border-white/8 p-4 max-lg:gap-0 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className={featured ? "text-lg font-semibold leading-snug text-white" : "text-base font-semibold leading-snug text-white"}>
              {project.name}
            </h3>
            <p className="mt-1.5 text-sm leading-snug text-zinc-400">{project.subtitle}</p>
          </div>
          <ArrowUpRight
            size={18}
            className={cn(
              "shrink-0 text-zinc-600 transition-all duration-200",
              isActive ? "text-zinc-300 translate-x-0.5 -translate-y-0.5" : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-zinc-300"
            )}
          />
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-400 max-lg:mb-1 max-md:min-h-0 sm:min-h-[2.75rem]">
          {project.summary}
        </p>
        <p className="mt-auto pt-3 font-mono text-[10px] font-medium leading-relaxed tracking-wide text-zinc-500 uppercase max-lg:line-clamp-none max-lg:break-words max-lg:pb-1 sm:pt-4 sm:text-[11px] sm:line-clamp-2">
          {project.stack}
        </p>
      </div>
    </a>
  );
}

export function ProjectCardCompact({ project, href }: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <a 
      href={href} 
      onMouseMove={handleMouseMove}
      className="project-card relative group flex flex-col sm:flex-row sm:items-stretch overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="sm:w-2/5 relative z-0">
        <ProjectVisual
          src={project.preview.src}
          alt={project.preview.alt}
          aspect="video"
          projectName={project.name}
          className="h-full rounded-b-none border-0 shadow-none sm:rounded-r-none sm:rounded-bl-xl object-cover"
        />
      </div>
      <div className="relative z-0 flex flex-1 flex-col justify-center border-t border-white/8 p-4 sm:border-t-0 sm:border-l sm:p-5">
        <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
        <p className="mt-1 text-sm text-zinc-500">{project.subtitle}</p>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{project.summary}</p>
        <TextLink href={href} className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-zinc-300">
          Read case study →
        </TextLink>
      </div>
    </a>
  );
}
