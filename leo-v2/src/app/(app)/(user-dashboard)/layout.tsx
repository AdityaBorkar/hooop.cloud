import Link from 'next/link'

import AccountBox from '@/components/AccountBox'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=''>
      <nav className='flex w-full flex-row justify-between border-b border-neutral-800 px-10 py-2 text-neutral-300'>
        <Link
          href='/'
          className='rounded-md px-5 py-2 transition-all hover:bg-neutral-800'
        >
          Leo
        </Link>
        <AccountBox />
      </nav>

      <div>{children}</div>
    </div>
  )
}
