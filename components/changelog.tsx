"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface LogEntry {
  date: string
  title: string
  description: string
  tag?: string
}

const changelogs: LogEntry[] = [
  {
    date: "Today",
    title: "Responsive Layouts",
    description: "Fixed layout scaling for 2K and 4K monitors. The dashboard now breathes better on larger screens.",
    tag: "Design"
  },
  {
    date: "Yesterday",
    title: "GitHub Integration",
    description: "Added initial support for syncing GitHub repositories. You can now connect your account in the dashboard.",
    tag: "Feature"
  },
  {
    date: "2 days ago",
    title: "Linear Sync Speed",
    description: "Optimized the Linear sync process. Context establishment now takes under 30s.",
    tag: "Performance"
  },
  {
    date: "Nov 25",
    title: "Typewriter Effect",
    description: "Added a smooth typewriter effect to the welcome greeting. Because details matter.",
    tag: "UI"
  },
  {
    date: "Nov 24",
    title: "Project Kickoff",
    description: "Initial commit. Relay is born.",
    tag: "Milestone"
  }
]

export function Changelog({ className }: { className?: string }) {
  return (
    <aside className={cn("flex flex-col h-full p-6 border-l border-border/40 bg-sidebar/30", className)}>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif font-bold text-lg tracking-tight text-foreground">Shipping Logs</h3>
        <Badge variant="secondary" className="text-[10px] h-5 px-1.5 font-mono text-muted-foreground border-0 bg-muted/50">
          v0.1.0
        </Badge>
      </div>
      
      <div className="flex-1 overflow-y-auto -mr-4 pr-4 custom-scrollbar">
        <div className="relative border-l border-border/40 ml-2 space-y-10 pb-6">
          {changelogs.map((log, index) => (
            <div key={index} className="relative pl-6 group">
              {/* Timeline dot */}
              <div className={cn(
                "absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background transition-colors duration-300",
                index === 0 ? "bg-primary animate-pulse" : "bg-muted-foreground/20 group-hover:bg-muted-foreground/40"
              )} />
              
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-muted-foreground/80">{log.date}</span>
                  {log.tag && (
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full font-medium tracking-wide uppercase",
                      log.tag === "Feature" && "bg-blue-500/10 text-blue-600 dark:text-blue-400",
                      log.tag === "Design" && "bg-pink-500/10 text-pink-600 dark:text-pink-400",
                      log.tag === "Performance" && "bg-amber-500/10 text-amber-600 dark:text-amber-400",
                      log.tag === "UI" && "bg-purple-500/10 text-purple-600 dark:text-purple-400",
                      log.tag === "Milestone" && "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                    )}>
                      {log.tag}
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-medium leading-none text-foreground/90">{log.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {log.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
