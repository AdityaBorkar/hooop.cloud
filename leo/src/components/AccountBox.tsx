import { Infer } from 'superstruct'

import Button from './Button'
import { UserSchema, signOut } from '@/auth'

export default function AccountBox({
  user,
}: {
  user: Infer<typeof UserSchema>['user']
}) {
  return (
    <details className="relative mt-1">
      <summary>
        <img
          src={user.image}
          alt={'User'}
          className="inline-block size-8 rounded-full border border-neutral-700"
        />
      </summary>

      <div className="absolute right-0 top-10 z-50 w-48 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-sm shadow-md">
        <div
          title={user.name}
          className="overflow-hidden text-ellipsis tracking-tighter"
        >
          {user.name}
        </div>
        <div
          title={user.email}
          className="overflow-hidden text-ellipsis tracking-tighter"
        >
          {user.email}
        </div>

        <form
          className="mt-2"
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <Button>Logout</Button>
        </form>
      </div>
    </details>
  )
}
