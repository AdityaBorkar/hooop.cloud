'use client'

import type { ReactNode } from 'react'

import Link from 'next/link'
import { useParams, useSelectedLayoutSegment } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function NavLink({
  link,
  children,
  className,
}: {
  link?: string
  children: string | NonNullable<ReactNode>
  className?: string
}) {
  const { projectId } = useParams()
  const slugHref = link !== undefined ? link : children.toString().toLowerCase()
  const slugActive = useSelectedLayoutSegment() || 'dashboard'
  return (
    <Link
      href={`/${
        Array.isArray(projectId) ? projectId.join('') : projectId
      }/${slugHref}`}
      className={twMerge(
        'rounded-full border border-neutral-800 bg-neutral-950 px-4 py-1.5 text-sm font-medium text-neutral-400 transition-all',
        slugActive === children.toString().toLowerCase() || slugActive === link
          ? 'bg-neutral-100 text-black'
          : 'hover:bg-neutral-900 hover:text-neutral-300',
        className,
      )}
    >
      {children}
    </Link>
  )
}
