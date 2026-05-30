import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface FadeInProps {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export function LinkButton({ variant = "primary", className = "", children, ...props }: LinkProps) {
  const base = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-white text-zinc-950 hover:bg-zinc-200 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      : "bg-white/5 text-zinc-300 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:text-white";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function TextLink({ className = "", children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`text-sm text-zinc-400 underline underline-offset-4 decoration-white/20 transition-colors hover:text-white hover:decoration-white/40 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
