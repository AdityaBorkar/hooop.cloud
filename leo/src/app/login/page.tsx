import { redirect } from 'next/navigation'

import LoginButton from './LoginButton'
import getUser from '@/utils/getUser'

export default async function LoginPage() {
  const { user } = getUser()

  if (user) redirect('/')
  return (
    <div className="flex h-screen items-center justify-center">
      <LoginButton />
    </div>
  )
}
