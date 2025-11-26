import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "@fontsource/libertinus-serif"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basegraph - Human-Centered AI Code Editor",
  description:
    "Reimagining software development with intelligent collaboration between human creativity and machine precision.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/placeholder-logo.png", type: "image/png" },
      { url: "/placeholder-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/placeholder-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/placeholder-logo.png", sizes: "180x180", type: "image/png" },
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
