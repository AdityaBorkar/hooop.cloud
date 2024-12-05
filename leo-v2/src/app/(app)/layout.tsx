'use client'

import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation'

import useUser from '@/hooks/useUser'
import { DatabaseProvider } from '@/replocal-client'

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = useUser()
  if (!user || !user.id) redirect('/login')

  return (
    <DatabaseProvider dbIdPrefix={'leo'} auth={{ getUser: () => user }}>
      {children}
    </DatabaseProvider>
  )
}

export default dynamic(() => Promise.resolve(ProtectedLayout), { ssr: false })
