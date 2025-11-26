import { Waitlist } from "@/components/waitlist"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <header className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="mb-6 flex items-center gap-3">
            <Image src="/logo.svg" alt="Relay logo" width={28} height={28} />
            <span className="text-sm font-mono tracking-widest text-muted-foreground uppercase">Relay by Basegraph</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] tracking-tight">
            Turn Linear tasks into<br />
            <span className="text-accent">production-ready specs</span>
          </h1>
          
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-2xl mb-10">
            Relay analyzes your tickets, gathers context from your team, and maps your codebase to generate specs that actually ship. Hand them to any developer or AI agent.
          </p>
          
          <div className="mb-12">
            <Waitlist />
          </div>
          
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="font-mono">
              Powered by <strong className="text-foreground">Codegraph</strong>. Deterministic Code Context Lookup.
            </span>
          </div>
        </header>

        {/* How It Works */}
        <section className="bg-card/50 border-y border-border/50">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Context First, Code Second.
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl">
                Relay ensures your tools understand the full scope of a task before writing a single line of code.
              </p>
            </div>
            
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10">
                <div className="flex items-start">
                  <span className="font-mono text-6xl md:text-7xl font-bold text-border/80 leading-none">01</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-serif font-bold mb-3">Refining Intent</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Relay connects to Linear and GitHub Issues. It reviews new tickets and proactively asks the reporter clarifying questions to resolve ambiguities early.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10">
                <div className="flex items-start">
                  <span className="font-mono text-6xl md:text-7xl font-bold text-border/80 leading-none">02</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-serif font-bold mb-3">Compiler-Grade Analysis</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    Unlike standard semantic search, our Codegraph engine builds a precise map of your codebase. It traces imports, function calls, and definitions to identify exactly which files and logic paths are involved.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10">
                <div className="flex items-start">
                  <span className="font-mono text-6xl md:text-7xl font-bold text-border/80 leading-none">03</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-serif font-bold mb-3">The Implementation Spec</h3>
                  <p className="text-lg leading-relaxed text-foreground/80">
                    The result is a comprehensive <code className="font-mono text-sm bg-muted px-2 py-0.5 rounded">spec.md</code>. This document outlines the architecture, identifies potential edge cases, and provides a clear blueprint. You can hand this spec to any coding agent (or human developer) for flawless execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="border-b border-border/50">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
              Designed for Your Existing Tools.
            </h2>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="font-medium">Linear</span>
              </div>
              
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span className="font-medium">GitHub</span>
              </div>
              
              <span className="text-sm text-muted-foreground font-mono">
                Jira coming Q1 2026
              </span>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-b border-border/50">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                  Human-Centered Engineering.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/80">
                  We are building for a future where AI augments human capability rather than replacing it. Relay is designed to help developers think more deeply about architecture and design, while automating the implementation details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Link 
                href="#" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                Research & Docs
              </Link>
              <Link 
                href="https://github.com/basegraph" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                GitHub
              </Link>
              <Link 
                href="https://twitter.com/basegraph" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
              >
                Twitter
              </Link>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              © 2025 Basegraph.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
