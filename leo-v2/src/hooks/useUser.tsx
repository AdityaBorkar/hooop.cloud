'use client'

import type { User } from 'next-auth'
import { useSession } from 'next-auth/react'

export default function useUser() {
  const { data: session, status } = useSession()
  return session?.user as User // TODO: FIX TYPES
  // return use(
  //   new Promise(resolve => {
  //     if (status !== 'loading') resolve(session?.user)
  //   }),
  // )
}
