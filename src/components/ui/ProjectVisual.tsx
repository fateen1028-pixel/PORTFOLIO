import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProjectVisualProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  aspect?: "video" | "wide" | "hero";
  projectName?: string;
  priority?: boolean;
}

const aspectClasses = {
  video: "aspect-video",
  wide: "aspect-[16/10]",
  hero: "aspect-[16/9] sm:aspect-[2/1]",
};

export function ProjectVisual({
  src,
  alt,
  label,
  className,
  aspect = "wide",
  projectName,
  priority = false,
}: ProjectVisualProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-surface-elevated shadow-[0_8px_40px_rgba(0,0,0,0.35)]",
        className
      )}
    >
      <div className={cn("relative w-full bg-zinc-900", aspectClasses[aspect])}>
        {!error ? (
          <>
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-zinc-800/80" aria-hidden="true" />
            )}
            <img
              src={src}
              alt={alt}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300",
                loaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
          </>
        ) : (
          <ProjectVisualFallback name={projectName ?? alt} />
        )}
      </div>
      {label && (
        <figcaption className="border-t border-white/8 px-4 py-2.5 text-xs text-zinc-500">
          {label}
        </figcaption>
      )}
    </figure>
  );
}

function ProjectVisualFallback({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-surface-elevated to-zinc-950 p-8">
      <div className="mb-4 h-12 w-12 rounded-lg border border-white/10 bg-white/5" />
      <p className="text-sm font-medium text-zinc-400">{name}</p>
      <p className="mt-1 text-xs text-zinc-600">Image unavailable</p>
    </div>
  );
}
