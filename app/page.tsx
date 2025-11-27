import { Waitlist } from "@/components/waitlist"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoginButton } from "@/components/login-button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Relay by Basegraph',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Turn Linear tasks into production-ready specs. Relay analyzes your tickets, gathers context from your team, and maps your codebase to generate specs that actually ship.',
    url: 'https://basegraph.app',
    creator: {
      '@type': 'Organization',
      name: 'Basegraph',
      url: 'https://basegraph.app',
      sameAs: ['https://x.com/basegraph'],
    },
    featureList: [
      'Deterministic code analysis',
      'Linear integration',
      'Automated spec generation',
      'Codebase mapping',
      'Team context gathering',
    ],
  }

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Login Button */}
      <div className="fixed z-50 flex items-center gap-3" style={{
        top: 'calc(1.5rem + env(safe-area-inset-top))',
        right: 'calc(4.5rem + env(safe-area-inset-right))'
      }}>
        <LoginButton />
      </div>
      
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Subtle geometric background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24" aria-label="Hero">
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
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'oklch(0.65 0.15 145)' }}></div>
            <span className="font-mono">
              Powered by <strong className="text-foreground">Codegraph</strong>. Deterministic Code Context Lookup.
            </span>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-t border-border/50" aria-labelledby="philosophy-heading">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-[1fr,2fr] gap-8 md:gap-16">
              <div>
                <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-serif font-bold leading-tight">
                  Context Lives in People, Not Just Code.
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-foreground/80">
                  Edge cases don't live in your codebase—they live in your team's heads. Business logic nuances. Production gotchas. That one integration everyone forgets about.
                </p>
                <p className="text-lg leading-relaxed text-foreground/80">
                  Relay asks the right questions. It pulls context from the people who know your product, then maps that against your actual codebase constraints. What you get is a spec that accounts for both the business logic edge cases humans catch and the architectural limitations code analysis reveals.
                </p>
                <p className="text-lg leading-relaxed text-foreground font-medium">
                  This is the step most AI tools skip. We built Relay because planning is too important to automate away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="bg-card/50 border-y border-border/50" aria-labelledby="comparison-heading">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <h2 id="comparison-heading" className="text-3xl md:text-4xl font-serif font-bold mb-16">
              Why Deterministic Beats Semantic
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Problem with current tools */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4 text-muted-foreground">Semantic Search (Cursor, Aider, etc.)</h3>
                <ul className="space-y-4 text-foreground/70">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">×</span>
                    <span>Embeddings miss exact import chains and call graphs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">×</span>
                    <span>Can't verify if a function actually exists or trace its dependencies</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">×</span>
                    <span>Guesses at architecture based on similarity, not structure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">×</span>
                    <span>Reads 50+ files hoping to find the right context</span>
                  </li>
                </ul>
              </div>

              {/* Codegraph approach */}
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Codegraph (Compiler-Based)</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Traces exact import paths and function call chains</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Verifies every symbol exists and maps its relationships</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Understands actual architecture from parse trees, not vibes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>Fetches only the 3-5 files that actually matter</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 p-6 bg-background/50 border border-border rounded-lg">
              <p className="text-lg leading-relaxed text-foreground/90">
                <strong>Result:</strong> Your AI agent gets a spec with verified imports, actual function signatures, and real architectural constraints—not hallucinated ones. No more "this function doesn't exist" or "wrong number of parameters" errors after 20 minutes of generation.
              </p>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="border-b border-border/50" aria-labelledby="integration-heading">
          <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
            <h2 id="integration-heading" className="text-3xl md:text-4xl font-serif font-bold mb-16">
              Ships Where You Work
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-serif font-bold mb-4">Onboarding in Minutes</h3>
                <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                  Connect your Linear workspace. Point to your repo. Done.
                </p>
                <p className="text-foreground/70">
                  No training data to upload. No context windows to configure. Relay immediately understands your codebase through static analysis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold mb-4">No New Dashboard</h3>
                <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                  Relay lives in Linear threads. Specs appear as comments. Your workflow stays intact.
                </p>
                <p className="text-foreground/70">
                  Everything happens where you already work. No context-switching to yet another tool.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-5 py-3">
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span className="font-medium">Linear</span>
              </div>
              
              <span className="text-sm text-muted-foreground font-mono">
                GitHub & Jira coming Q1 2026
              </span>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-b border-border/50" aria-label="Call to action">
          <div className="max-w-4xl mx-auto px-6 py-16 md:py-20 text-center">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Stop letting your AI agents guess. Give them specs that actually work.
            </p>
          </div>
        </section>

        {/* Early Access Note */}
        <section className="border-b border-border/50" aria-labelledby="early-access-heading">
          <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
            <div className="space-y-6">
              <h2 id="early-access-heading" className="text-xl font-serif font-bold">Early Access</h2>
              <p className="text-foreground/80 leading-relaxed">
                Relay is in private beta. Code indexing currently happens on our servers. Self-hosted deployments are on the roadmap for teams with strict data residency requirements.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We're working closely with early adopters to shape the product. We'd love to hear your feedback and thoughts.
              </p>
              <div className="pt-2">
                <Link 
                  href="mailto:nithinraj@basegraph.app"
                  className="inline-flex items-center gap-2 text-sm font-mono text-foreground hover:text-accent transition-colors"
                >
                  Reach out → nithinraj@basegraph.app
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link 
              href="https://x.com/basegraph" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Twitter
            </Link>
            <p className="text-sm text-muted-foreground font-mono">
              © 2025 Basegraph.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
