"use client"

import { SessionProvider } from "next-auth/react"

export interface AuthProps {
  children: React.ReactNode
}

export default function Auth({ children }: AuthProps) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
    </>
  )
}
