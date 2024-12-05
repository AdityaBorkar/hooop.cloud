import Link from 'next/link'
<<<<<<< HEAD
import { redirect } from 'next/navigation'

import AccountBox from '@/components/AccountBox'
import getUser from '@/utils/getUser'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUser()
  if (!user) redirect('/login')

=======

import LogoutButton from './LogoutButton'

export default function Layout({ children }: { children: React.ReactNode }) {
>>>>>>> b030934 (progress)
  return (
    <div className="">
      <nav className="flex w-full flex-row justify-between border-b border-neutral-800 px-10 py-2 text-neutral-300">
        <Link
          href="/"
          className="rounded-md px-5 py-2 transition-all hover:bg-neutral-800"
        >
          Leo
        </Link>
<<<<<<< HEAD
        <AccountBox user={user} />
=======
        <LogoutButton />
>>>>>>> b030934 (progress)
      </nav>

      <div>{children}</div>
    </div>
  )
}
