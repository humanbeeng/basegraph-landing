"use client"

import { useSession } from "@/lib/auth-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogoutButton } from "@/components/logout-button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

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
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading...</p>
      </main>
    )
  }

  // Not authenticated (will redirect)
  if (!session) {
    return null
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-serif font-bold">
            Basegraph
          </Link>
          <LogoutButton />
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Welcome back!</h1>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="text-lg">{session.user.name || "—"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="text-lg">{session.user.email || "—"}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

