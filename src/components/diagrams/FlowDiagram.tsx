import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlowDiagramProps {
  nodes: string[];
  animated?: boolean;
  compact?: boolean;
}

// Map tech nodes to customized glowing colors
const nodeThemeMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  "next.js": {
    bg: "bg-zinc-950/80",
    border: "border-white/10 hover:border-zinc-400",
    text: "text-zinc-100",
    glow: "rgba(255,255,255,0.05)",
  },
  "react.js": {
    bg: "bg-cyan-950/30",
    border: "border-cyan-500/20 hover:border-cyan-400/50",
    text: "text-cyan-200",
    glow: "rgba(6,182,212,0.15)",
  },
  client: {
    bg: "bg-blue-950/30",
    border: "border-blue-500/20 hover:border-blue-400/50",
    text: "text-blue-200",
    glow: "rgba(59,130,246,0.15)",
  },
  docker: {
    bg: "bg-sky-950/30",
    border: "border-sky-500/20 hover:border-sky-400/50",
    text: "text-sky-200",
    glow: "rgba(14,165,233,0.15)",
  },
  fastapi: {
    bg: "bg-emerald-950/30",
    border: "border-emerald-500/20 hover:border-emerald-400/50",
    text: "text-emerald-200",
    glow: "rgba(16,185,129,0.15)",
  },
  "node.js": {
    bg: "bg-green-950/30",
    border: "border-green-500/20 hover:border-green-400/50",
    text: "text-green-200",
    glow: "rgba(34,197,94,0.15)",
  },
  "spring boot": {
    bg: "bg-lime-950/30",
    border: "border-lime-500/20 hover:border-lime-400/50",
    text: "text-lime-200",
    glow: "rgba(132,204,22,0.15)",
  },
  langchain: {
    bg: "bg-purple-950/30",
    border: "border-purple-500/20 hover:border-purple-400/50",
    text: "text-purple-200",
    glow: "rgba(168,85,247,0.15)",
  },
  "socket.io": {
    bg: "bg-orange-950/30",
    border: "border-orange-500/20 hover:border-orange-400/50",
    text: "text-orange-200",
    glow: "rgba(249,115,22,0.15)",
  },
  "spring security": {
    bg: "bg-yellow-950/30",
    border: "border-yellow-500/20 hover:border-yellow-400/50",
    text: "text-yellow-200",
    glow: "rgba(234,179,8,0.15)",
  },
  redis: {
    bg: "bg-red-950/30",
    border: "border-red-500/20 hover:border-red-400/50",
    text: "text-red-200",
    glow: "rgba(239,68,68,0.15)",
  },
  mongodb: {
    bg: "bg-teal-950/30",
    border: "border-teal-500/20 hover:border-teal-400/50",
    text: "text-teal-200",
    glow: "rgba(20,184,166,0.15)",
  },
  postgresql: {
    bg: "bg-indigo-950/30",
    border: "border-indigo-500/20 hover:border-indigo-400/50",
    text: "text-indigo-200",
    glow: "rgba(99,102,241,0.15)",
  },
  "cloud host": {
    bg: "bg-zinc-900/60",
    border: "border-zinc-700/30 hover:border-zinc-500/50",
    text: "text-zinc-300",
    glow: "rgba(255,255,255,0.05)",
  },
};

const defaultTheme = {
  bg: "bg-zinc-900/40",
  border: "border-zinc-800 hover:border-zinc-700",
  text: "text-zinc-300",
  glow: "rgba(255,255,255,0.02)",
};

function getNodeTheme(nodeName: string) {
  const normalized = nodeName.toLowerCase();
  return nodeThemeMap[normalized] || defaultTheme;
}

export function FlowDiagram({ nodes, compact = false }: FlowDiagramProps) {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-950/40 p-4 sm:p-6 backdrop-blur-sm">
      <div className="flex flex-col items-stretch gap-3 max-md:gap-3 md:flex-row md:items-center md:justify-between md:gap-2">
        {nodes.map((node, i) => {
          const theme = getNodeTheme(node);
          const isLast = i === nodes.length - 1;

          return (
            <div
              key={`${node}-${i}`}
              className="flex w-full flex-col items-stretch max-md:items-stretch md:w-auto md:flex-1 md:flex-row md:items-center"
            >
              {/* Node Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ y: -2, boxShadow: `0 8px 30px ${theme.glow}` }}
                className={cn(
                  "flex w-full max-w-full items-center justify-center rounded-xl border px-4 py-3 text-center transition-all duration-200 backdrop-blur-md cursor-default max-md:mx-auto md:max-w-[170px]",
                  theme.bg,
                  theme.border,
                  compact ? "py-2.5" : "py-3"
                )}
              >
                <span className={cn("font-mono text-xs font-semibold tracking-tight leading-snug max-md:px-1 md:text-sm", theme.text)}>
                  {node}
                </span>
              </motion.div>

              {/* Connecting Line / Arrow */}
              {!isLast && (
                <div className="flex h-8 w-full items-center justify-center md:h-auto md:w-auto md:flex-1">
                  {/* Vertical Connection (Mobile) */}
                  <div className="relative h-full w-[2px] bg-zinc-800 md:hidden">
                    <motion.div
                      animate={{ top: ["0%", "100%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                      }}
                      className="absolute left-1/2 h-3 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-white to-transparent opacity-60"
                    />
                  </div>

                  {/* Horizontal Connection (Desktop) */}
                  <div className="relative mx-2 hidden h-[2px] w-full bg-zinc-800 md:block">
                    <motion.div
                      animate={{ left: ["0%", "100%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.2,
                        ease: "linear",
                      }}
                      className="absolute top-1/2 h-1.5 w-4 -translate-y-1/2 rounded-full bg-gradient-to-r from-white to-transparent opacity-60"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
