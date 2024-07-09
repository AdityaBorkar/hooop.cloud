'use client'

import Link from 'next/link'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: string | NonNullable<React.ReactNode>
  className?: string
}) {
  const { teamId, projectId } = useParams()
  const slugActive = useSelectedLayoutSegment() || 'dashboard'

  return (
    <Link
      href={`/${teamId}/${projectId}/${href}`}
      className={twMerge(
        'rounded-full border border-neutral-800 bg-neutral-950 py-1.5 px-4 text-sm text-neutral-400',
        slugActive === children.toString().toLowerCase() || slugActive === href
          ? 'bg-neutral-100 font-medium text-black'
          : 'hover:bg-neutral-900 hover:text-neutral-300',
        className,
      )}
    >
      {children}
    </Link>
  )
}
