import { redirect } from 'next/navigation'
import { VscGithubInverted } from 'react-icons/vsc'

import { auth, signIn } from '@/auth'
import Button from '@/components/Button'

export default async function LoginPage() {
  const session = await auth()
  if (session) redirect('/')
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        action={async () => {
          'use server'
          await signIn('github', {
            redirect: true,
            callbackUrl: '/',
          })
        }}
      >
        <Button variant="primary" icon={VscGithubInverted} type="submit">
          Login using GitHub
        </Button>
      </form>
    </div>
  )
}
