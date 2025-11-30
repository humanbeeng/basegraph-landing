"use client"

import { useSession } from "@/lib/auth-client"
import { Typewriter } from "@/components/typewriter"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

const messages = [
  "Welcome to your dashboard. Connect your Linear and GitHub to get started.",
  "It's only going to take under 30s to establish Relay's context.",
]

export default function DashboardPage() {
  const { data: session, isPending } = useSession()
  const router = useRouter()
  const hasSynced = useRef(false)

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
        <h1 className="h3">Hey {session.user?.name?.split(" ")[0]}!</h1>
      </div>
      <Typewriter messages={messages} className="text-lg" />
    </div>
  )
}
