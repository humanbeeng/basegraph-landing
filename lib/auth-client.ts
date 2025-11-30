import { createAuthClient } from "better-auth/react"

const resolvedBaseURL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() ||
  (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000")

export const { signIn, signOut, useSession } = createAuthClient({
  baseURL: resolvedBaseURL,
})

