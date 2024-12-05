'use client'

import Link from 'next/link'
import { useParams, useSearchParams } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function EnvTag({ children }: { children: string }) {
  const { projectId } = useParams()
  const searchParams = useSearchParams()
  const currentEnv = searchParams.get('env') || 'ALL'
  return (
    <Link
      href={`/${projectId}/deployments?env=${children}`}
      className={twMerge(
        'cursor-pointer rounded bg-neutral-900 px-3 py-1 font-medium text-neutral-400',
        currentEnv === children
          ? 'bg-neutral-300 text-neutral-800'
          : 'hover:bg-neutral-800',
      )}
    >
      {children}
    </Link>
  )
}
