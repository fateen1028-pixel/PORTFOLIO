import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/portfolio";
import { FadeIn, TextLink } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-nav divider section-padding-sm"
      aria-labelledby="contact-heading"
    >
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2 id="contact-heading" className="heading-section mb-4">
              Contact
            </h2>
            <p className="text-body mb-8">
              Open to backend, full-stack, and AI engineering opportunities. Feel free to reach out directly.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 max-md:w-full max-md:flex-col max-md:items-stretch">
              {/* Copy Email Micro-interaction */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/5 bg-zinc-950/40 px-4 py-2.5 font-mono text-sm text-zinc-300 backdrop-blur-md transition-all duration-200 hover:border-white/10 hover:text-white hover:bg-zinc-900/60 active:scale-98 group cursor-pointer max-md:w-full max-md:justify-start"
                title="Click to copy email address"
              >
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Check size={15} className="text-emerald-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="mail"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Mail size={15} className="text-zinc-400 group-hover:text-zinc-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <span className={cn(copied ? "text-emerald-400 font-medium" : "", "max-md:break-all max-md:text-left")}>
                  {copied ? "Email Copied!" : siteConfig.email}
                </span>
                {!copied && (
                  <Copy size={11} className="ml-1 opacity-0 group-hover:opacity-40 transition-opacity duration-200 text-zinc-400" />
                )}
              </button>

              <TextLink href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-1.5">
                  <LinkedInIcon size={14} />
                  LinkedIn
                </span>
              </TextLink>
              <TextLink href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-1.5">
                  <GitHubIcon size={14} />
                  GitHub
                </span>
              </TextLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <Phone size={14} className="text-zinc-600" />
                {siteConfig.phone}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-zinc-600" />
                {siteConfig.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 p-5 max-lg:mt-2 backdrop-blur-md shadow-2xl sm:p-8">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-800/20 to-transparent pointer-events-none" />
              
              <h3 className="text-xl font-medium text-white mb-6">Send a message</h3>
              
              <form 
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // In a real app, you would handle the form submission here (e.g., Formspree, EmailJS)
                  alert("Thanks for your message! This is a demo form.");
                }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium tracking-wide text-zinc-400 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-zinc-500 focus:bg-zinc-800/80 focus:ring-1 focus:ring-zinc-500"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium tracking-wide text-zinc-400 ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-zinc-500 focus:bg-zinc-800/80 focus:ring-1 focus:ring-zinc-500"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-medium tracking-wide text-zinc-400 ml-1">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-zinc-500 focus:bg-zinc-800/80 focus:ring-1 focus:ring-zinc-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium tracking-wide text-zinc-400 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-zinc-500 focus:bg-zinc-800/80 focus:ring-1 focus:ring-zinc-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                >
                  Send Message
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    →
                  </motion.span>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
