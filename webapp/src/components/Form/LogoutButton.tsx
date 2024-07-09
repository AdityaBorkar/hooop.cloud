'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      type="submit"
      onClick={() => signOut({ callbackUrl: '/login' })}
      className="rounded-md py-2 px-5 transition-all hover:bg-neutral-800"
    >
      Logout
    </button>
  )
}
