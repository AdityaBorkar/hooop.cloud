'use client'

import { signIn } from 'next-auth/react'
import { VscGithubInverted } from 'react-icons/vsc'

export default function LoginButton() {
  // TODO - ON LOGIN COMPLETE GO TO REDIRECT URI
  return (
    <button
      onClick={() => signIn('github')}
      className="mb-[10vh] rounded-md border border-neutral-800 bg-neutral-900 px-6 py-2 text-neutral-300 hover:bg-neutral-800"
    >
      <VscGithubInverted className="mr-2 inline align-[-2px]" />
      Login using GitHub
    </button>
  )
}
