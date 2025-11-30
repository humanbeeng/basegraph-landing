"use client"

import { useSession } from "@/lib/auth-client"
import { Typewriter } from "@/components/typewriter"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, RefreshCw, Check } from "lucide-react"
import Image from "next/image"
import LinearIconSvg from "@/assets/linear-icon.svg"
import { cn } from "@/lib/utils"
import { Changelog } from "@/components/changelog"
import { useTheme } from "next-themes"
import LogoDark from "@/assets/logo-dark.svg"
import LogoLight from "@/assets/logo-light.svg"

const messages = [
  "Welcome to your dashboard. Connect your Linear and GitHub to get started.",
  "It's only going to take under 30s to establish Relay's context.",
]

// Linear brand logo as SVG component
function LinearIcon({ className }: { className?: string }) {
  const { theme } = useTheme()
  // Wait for theme to be available (client-side)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className={className} />

  return (
    <div className={className}>
      <Image 
        src={theme === 'dark' ? LogoLight : LogoDark} 
        alt="Linear" 
        width={20} 
        height={20} 
        className="w-full h-full"
      />
    </div>
  )
}

interface IntegrationCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onSync: () => void
  isLoading?: boolean
  isConnected?: boolean
  delay?: number
}

function IntegrationRow({ 
  icon, 
  title, 
  description, 
  onSync, 
  isLoading = false, 
  isConnected = false,
}: IntegrationCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 transition-colors hover:bg-muted/50 rounded-lg">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-foreground ring-1 ring-inset ring-border/50">
        {icon}
      </div>
      <div className="flex-1 min-w-0 grid gap-0.5">
        <h4 className="text-sm font-medium leading-none">{title}</h4>
        <p className="text-sm text-muted-foreground leading-normal">
          {description}
        </p>
      </div>
      <Button 
        onClick={onSync} 
        disabled={isLoading || isConnected}
        variant="outline"
        size="sm"
        className={
          `min-w-[90px] h-8 text-xs font-medium transition-all
          ${isConnected 
            ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/15 border-emerald-500/20" 
            : "hover:bg-primary hover:text-primary-foreground"
          }`
        }
      >
        {isLoading ? (
          <>
            <RefreshCw className="size-3 animate-spin mr-1.5" />
            Syncing
          </>
        ) : isConnected ? (
          <>
            <Check className="size-3 mr-1.5" />
            Synced
          </>
        ) : (
          "Connect"
        )}
      </Button>
    </div>
  )
}

export default function DashboardPage() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const hasSynced = useRef(false)
  
  // Integration states
  const [linearLoading, setLinearLoading] = useState(false)
  const [linearConnected, setLinearConnected] = useState(false)
  const [githubLoading, setGithubLoading] = useState(false)
  const [githubConnected, setGithubConnected] = useState(false)
  
  // Animation state
  const [showCard, setShowCard] = useState(false)

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!isPending && !session) {
      router.push("/")
    }
  }, [isPending, session, router])

  // Sync user to Airtable (runs once per session)
  useEffect(() => {
    if (!isPending && session && !hasSynced.current) {
      hasSynced.current = true
      
      fetch("/api/user/sync", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.error("Failed to sync user:", data)
          }
        })
        .catch((err) => {
          console.error("Error syncing user:", err)
        })
    }
  }, [isPending, session])

  const handleLinearSync = async () => {
    setLinearLoading(true)
    // TODO: Implement actual Linear OAuth flow
    // Simulating API call for now
    await new Promise(resolve => setTimeout(resolve, 1500))
    setLinearLoading(false)
    setLinearConnected(true)
  }

  const handleGithubSync = async () => {
    setGithubLoading(true)
    // TODO: Implement actual GitHub OAuth flow
    // Simulating API call for now
    await new Promise(resolve => setTimeout(resolve, 1500))
    setGithubLoading(false)
    setGithubConnected(true)
  }

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
    <div className="flex h-full w-full">
      {/* Main Content */}
      <div className="flex-1 content-spacing max-w-3xl 2xl:max-w-4xl mx-auto">
        {/* Greeting Section */}
        <div className="mb-10">
          <Typewriter 
            messages={["Hey " + session.user?.name?.split(" ")[0] + "!"]} 
            className="h3" 
          />
          <Typewriter 
            messages={messages} 
            className="text-lg text-muted-foreground mt-2" 
            onComplete={() => setShowCard(true)}
          />
        </div>

        {/* Integration Card */}
        <div className={cn(
          "transition-all duration-1000 ease-out",
          showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}>
          <Card className="bg-card/50 shadow-none border-border/60 p-2 gap-1">
            <IntegrationRow
              icon={<LinearIcon className="size-5" />}
              title="Sync with Linear"
              description="This allows Relay to interact with your teammates"
              onSync={handleLinearSync}
              isLoading={linearLoading}
              isConnected={linearConnected}
            />
            
            <IntegrationRow
              icon={<Github className="size-5" />}
              title="Sync with GitHub"
              description="This allows Relay to read and understand your codebase"
              onSync={handleGithubSync}
              isLoading={githubLoading}
              isConnected={githubConnected}
            />
          </Card>
        </div>
      </div>

      {/* Right Sidebar - Changelog */}
      <div className="hidden xl:block w-80 2xl:w-96 border-l border-border/40 bg-background/50 backdrop-blur-sm h-[calc(100vh-3.5rem)] sticky top-0">
        <Changelog />
      </div>
    </div>
  )
}
