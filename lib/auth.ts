import { betterAuth } from "better-auth"

const deploymentBaseURL =
  process.env.NEXT_PUBLIC_APP_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")

export const auth = betterAuth({
  baseURL: deploymentBaseURL,
  // No database configuration
  socialProviders: {
    // google: {
    //     clientId: process.env.GOOGLE_CLIENT_ID as string,
    //     clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // },
    // github: {
    //     clientId: process.env.GITHUB_CLIENT_ID as string,
    //     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    //     callbackURL: "/api/auth/callback/github",
    // },
    linear: {
      clientId: process.env.LINEAR_CLIENT_ID as string,
      clientSecret: process.env.LINEAR_CLIENT_SECRET as string,
    },
  },
})