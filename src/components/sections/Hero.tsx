import { motion } from "framer-motion";
import { siteConfig, skillForgeAI } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { LinkButton } from "@/components/ui";

export function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full scroll-mt-nav section-padding-sm overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Tech Coding Background */}
      <div 
        className="absolute inset-0 -z-20 opacity-20 select-none pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          transform: "scale(1.05)", // Slight scale to hide blurred edges
        }}
      />
      {/* Premium Tech Grid & Glowing Orbs Background */}
      <div className="absolute inset-0 -z-10 max-lg:hidden bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.015),transparent_60%)]" />
      <div 
        className="absolute inset-0 -z-10 max-lg:opacity-0 lg:opacity-30 animate-slow-pan max-lg:[mask-image:none] lg:[mask-image:radial-gradient(ellipse_90%_70%_at_center,black,transparent_92%)]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      <div className="absolute top-[20%] left-[-10%] -z-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      <div className="container-main">
        <div className="grid max-lg:items-stretch items-center gap-10 max-lg:gap-12 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
          {/* Hero Left - Animated Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="align-mobile-start flex w-full flex-col max-lg:pl-14 max-lg:text-left"
          >
            {/* Pulsing Availability Beacon on Mobile */}
            <motion.div 
              variants={itemVariants} 
              className="flex sm:hidden items-center gap-1.5 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400 w-fit mb-4"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              Available for Internships
            </motion.div>

            <motion.p variants={itemVariants} className="text-label mb-3 font-semibold tracking-widest text-zinc-500">
              {siteConfig.title}
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              id="hero-heading"
              className="mb-4 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white max-lg:break-words max-lg:whitespace-normal sm:mb-5 sm:text-5xl lg:mb-5 lg:text-6xl lg:whitespace-nowrap lg:leading-[1.1] bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent"
            >
              {siteConfig.name}
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-zinc-400 text-base leading-relaxed font-normal max-lg:pr-1 sm:text-lg">
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 flex w-full max-lg:flex-col max-lg:items-stretch flex-wrap items-center gap-x-4 gap-y-3 max-lg:gap-y-3 [&_a]:max-lg:w-full [&_a]:max-lg:justify-start sm:gap-y-4 lg:flex-row lg:[&_a]:w-auto">
              <LinkButton href="#work">View work</LinkButton>
              <LinkButton variant="secondary" href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                Resume
              </LinkButton>
              <LinkButton variant="secondary" href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-1.5">
                  <GitHubIcon size={14} />
                  GitHub
                </span>
              </LinkButton>
            </motion.div>
          </motion.div>

          {/* Hero Right - Card with Custom Glow Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative w-full max-lg:mt-6 max-lg:mb-2"
          >
            {/* Glowing spotlight ring backlighting */}
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-zinc-500/5 via-transparent to-purple-500/5 opacity-50 blur-xl" />
            <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-zinc-800/10 to-zinc-700/5 blur-sm" />

            <div className="relative w-full max-lg:pb-2">
              <p className="text-label mb-3 font-semibold text-zinc-500">Featured System</p>
              <ProjectCard project={skillForgeAI} href="#work" featured className="w-full max-w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
