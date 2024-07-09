'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function ProjectInfraNavLink(props: {
  children: string
  link?: string
}) {
  const pathSplit = usePathname().split('/')

  const projectId = pathSplit[1]
  const section = pathSplit[3] || ''

  const href =
    props.link !== undefined
      ? props.link
      : props.children.toLowerCase().replaceAll(' ', '-')

  return (
    <Link
      href={`/${projectId}/infra/${href}`}
      className={twMerge(
        'rounded-md px-4 py-2 font-medium text-neutral-400',
        section === href
          ? 'bg-neutral-200 text-neutral-900'
          : 'hover:bg-neutral-900 hover:text-neutral-300',
      )}
    >
      {props.children}
    </Link>
  )
}
