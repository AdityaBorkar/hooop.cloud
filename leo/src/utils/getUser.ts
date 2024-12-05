<<<<<<< HEAD
import { redirect } from 'next/navigation'
import { Infer } from 'superstruct'

import { UserSchema, auth } from '@/auth'

export default async function getUser() {
  const session = await auth()
  if (!session) redirect('/login')
  const { github } = session
  const user = session.user as Infer<typeof UserSchema>['user']
  return { ...user, ...github }
=======
import { headers } from 'next/headers'
import { Infer } from 'superstruct'

import { UserSchema } from './auth'

export default function getUser() {
  const header = headers()
  const user: Infer<typeof UserSchema> = JSON.parse(
    header.get('x-app-auth') || '{"user":null}',
  )
  return user
>>>>>>> 91fc705 (progress)
}
