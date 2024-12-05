'use client'

import { signOut } from 'next-auth/react'

import useUser from '@/hooks/useUser'
import Button from './Button'

export default function AccountBox() {
  const user = useUser()
  if (!user) return
  return (
    <details className='relative mt-1'>
      <summary>
        <img
          src={user?.image || 'accountPlaceholder.svg'}
          alt={'User'}
          className='inline-block size-8 rounded-full border border-neutral-700'
        />
      </summary>

      <div className='absolute right-0 top-10 z-50 w-48 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-1 text-sm shadow-md'>
        <div
          title={user.name || ''}
          className='overflow-hidden text-ellipsis tracking-tighter'
        >
          {user.name}
        </div>
        <div
          title={user.email || ''}
          className='overflow-hidden text-ellipsis tracking-tighter'
        >
          {user.email}
        </div>

        <Button onMouseDown={() => signOut()}>Logout</Button>
      </div>
    </details>
  )
}
