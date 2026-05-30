import { siteConfig } from "@/data/portfolio";
import { FadeIn } from "@/components/ui";
import { GraduationCap, Award, MapPin } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-nav divider section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* About Text */}
          <FadeIn>
            <p className="text-label mb-2">My Story</p>
            <h2 id="about-heading" className="heading-section mb-6">
              About Me
            </h2>
            <p className="text-zinc-400 leading-relaxed text-base sm:text-lg mb-6">
              {siteConfig.summary}
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm">
              I believe in writing clean, well-tested code that resolves actual workflow bottlenecks. My current focus is designing solid backend architectures, implementing async pipelines, and integrating scalable LLM agent models.
            </p>
          </FadeIn>

          {/* Structured Detail Stack */}
          <FadeIn>
            <div className="space-y-4">
              {/* Education Block */}
              <div className="group relative rounded-2xl border border-white/5 bg-zinc-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <div className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r-full bg-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors group-hover:border-cyan-500/30 group-hover:text-cyan-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-label mb-1 text-zinc-500 group-hover:text-zinc-400 transition-colors">Education</p>
                    <h3 className="text-sm font-semibold text-white">{siteConfig.education.degree}</h3>
                    <p className="mt-0.5 text-xs text-zinc-500">{siteConfig.education.status}</p>
                  </div>
                </div>
              </div>

              {/* Certification Block */}
              <div className="group relative rounded-2xl border border-white/5 bg-zinc-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <div className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r-full bg-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-label mb-1 text-zinc-500 group-hover:text-zinc-400 transition-colors">Certification</p>
                    <h3 className="text-sm font-semibold text-white">{siteConfig.certification}</h3>
                    <p className="mt-0.5 text-xs text-zinc-500">Verified Professional Development</p>
                  </div>
                </div>
              </div>

              {/* Location Block */}
              <div className="group relative rounded-2xl border border-white/5 bg-zinc-950/40 p-5 backdrop-blur-md transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <div className="absolute left-0 top-1/2 h-10 w-[3px] -translate-y-1/2 rounded-r-full bg-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition-colors group-hover:border-purple-500/30 group-hover:text-purple-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-label mb-1 text-zinc-500 group-hover:text-zinc-400 transition-colors">Location & Mobility</p>
                    <h3 className="text-sm font-semibold text-white">{siteConfig.location}</h3>
                    <p className="mt-0.5 text-xs text-zinc-500">Open to Relocation & Remote Work</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
