'use client'

import Link from 'next/link'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function NavLink({
  link,
  children,
}: {
  children: string
  link?: string
}) {
  const { projectId } = useParams()
  const selectedSlug = useSelectedLayoutSegment() || 'dashboard'
  const currentSlug = children.toLowerCase()
  return (
    <Link
      href={`/${projectId}/${link || children.toLowerCase()}`}
      className={twMerge(
        'rounded-full border border-neutral-800 bg-neutral-950 px-4 py-1.5 text-sm font-medium text-neutral-400',
        selectedSlug === currentSlug
          ? 'bg-neutral-100 text-black'
          : 'hover:bg-neutral-900 hover:text-neutral-300',
      )}
    >
      {children}
    </Link>
  )
}
