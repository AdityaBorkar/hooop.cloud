import type { UserSchema } from '@/auth'
import type { Infer } from 'superstruct'

import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function getUser() {
  const session = await auth()
  if (!session) redirect('/login')
  const { github } = session
  const user = session.user as Infer<typeof UserSchema>['user']
  return { ...user, ...github }
}
