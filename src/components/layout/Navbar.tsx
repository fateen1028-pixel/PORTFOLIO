import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { navLinks } from "@/data/portfolio";
import { useActiveSection } from "@/lib/useActiveSection";
import { smoothScrollTo } from "@/lib/smoothScrollTo";
import { cn } from "@/lib/utils";

const sectionIds = ["home", "work", "skills", "about", "contact"];

function MagneticItem({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Magnetic pull strength calculation
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}

export function Navbar() {
  const activeSection = useActiveSection(sectionIds);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    smoothScrollTo(id);
  };

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      {/* Top Translucent Bar (Appears on scroll) */}
      <div 
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 pointer-events-none",
          "h-16 sm:h-20", // Heights covering the logo area
          isScrolled 
            ? "bg-zinc-950/60 backdrop-blur-md border-b border-white/5 opacity-100" 
            : "bg-transparent opacity-0"
        )}
      />

      {/* Fixed Logo - Top Left */}
      <div 
        className={cn(
          "fixed left-[max(1rem,env(safe-area-inset-left,0px))] top-[max(1rem,env(safe-area-inset-top,0px))] z-50 transition-opacity duration-300 sm:left-8 sm:top-8",
           isScrolled ? "opacity-100" : "opacity-100"
        )}
      >
        <MagneticItem>
          <BrandLogo
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          />
        </MagneticItem>
      </div>

      {/* Floating Glassmorphic Dock - Bottom Center */}
      <header className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-3 max-lg:px-2 sm:bottom-8 sm:px-4 pointer-events-none">
        <motion.nav
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.1 }}
          className="flex w-fit items-center justify-center rounded-full border border-white/30 bg-zinc-900/90 p-1.5 backdrop-blur-3xl shadow-[0_20px_40px_-5px_rgba(0,0,0,1),_0_0_20px_rgba(255,255,255,0.15)] pointer-events-auto sm:p-2"
          aria-label="Main navigation"
        >
          <ul className="flex items-center justify-center shrink-0">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              
              return (
                <li key={link.href} className="relative">
                  <MagneticItem>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={cn(
                        "relative block px-2.5 py-2 text-[11px] font-medium transition-colors duration-300 z-10 max-lg:leading-tight sm:px-5 sm:py-2 sm:text-[13px] lg:px-5 lg:text-sm",
                        isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                      )}
                    >
                      {link.label}
                    </a>
                  </MagneticItem>

                  {/* Gooey Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="dockIndicator"
                      className="absolute inset-0 z-0 rounded-full bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        mass: 0.5,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="mx-1.5 h-5 w-px shrink-0 rounded-full bg-white/10 max-lg:mx-1 sm:mx-3 sm:h-6" />

          {/* Pulsating Micro-animated Status Orb */}
          <MagneticItem>
            <div className="group relative flex shrink-0 items-center justify-center p-2 max-lg:p-1.5 sm:p-3 cursor-help">
              <div className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></span>
              </div>
              
              {/* Tooltip matching color scheme constraints */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 transform-gpu pointer-events-none">
                <div className="bg-zinc-800 text-emerald-400 text-[11px] sm:text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-500/20 shadow-xl whitespace-nowrap tracking-wide">
                  Available for Internships
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-zinc-800" />
                </div>
              </div>
            </div>
          </MagneticItem>
        </motion.nav>
      </header>
    </>
  );
}
