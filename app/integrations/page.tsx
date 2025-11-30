"use client"

import { useSession } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function IntegrationsPage() {
  const { data: session, isPending } = useSession()
  const router = useRouter()

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/")
    }
  }, [isPending, session, router])

  // Loading state
  if (isPending) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  // Not authenticated (will redirect)
  if (!session) {
    return null
  }

  return (
    <div className="content-spacing">
      <div className="page-header">
        <h1 className="h3">Integrations</h1>
      </div>
      
      <div className="stack stack-lg mt-6">
        <p className="text-muted-foreground">
          Connect your tools to enable Relay's context gathering.
        </p>
        
        {/* Placeholder for integrations - you can expand this later */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Linear Integration Card */}
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="cluster mb-4">
              <div className="p-2 rounded-md bg-muted">
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="h4">Linear</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connect your Linear workspace to sync issues and enable automatic spec generation.
            </p>
            <span className="text-caption text-muted-foreground">Coming soon</span>
          </div>
          
          {/* GitHub Integration Card */}
          <div className="p-6 rounded-lg border border-border bg-card">
            <div className="cluster mb-4">
              <div className="p-2 rounded-md bg-muted">
                <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <h3 className="h4">GitHub</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connect your repositories for code analysis and codebase mapping.
            </p>
            <span className="text-caption text-muted-foreground">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}
