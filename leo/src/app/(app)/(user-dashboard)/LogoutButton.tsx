'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="rounded-md px-5 py-2 transition-all hover:bg-neutral-800"
    >
      Logout
    </button>
  )
}
