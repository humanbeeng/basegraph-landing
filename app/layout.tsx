import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "@fontsource/libertinus-serif"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Relay by Basegraph",
  description:
    "Turn Linear tasks into production-ready specs. Relay analyzes your tickets, gathers context from your team, and maps your codebase to generate specs that actually ship.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-serif antialiased`}>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
