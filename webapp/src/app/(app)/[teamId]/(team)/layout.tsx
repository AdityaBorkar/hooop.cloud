'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound, useParams, useSelectedLayoutSegment } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import Navbar from '@/elements/Navbar'
import UnauthorizedPage from '@/elements/UnauthorizedPage'

// import useUser from '@/hooks/useUser'
// import { useDatabase } from '@/replocal'
// import { DbRangeKey } from '@/packages/replocal'
// import { HeadMetadata } from '@/components/HeadMetadata'

type ProjectLayoutProps = {
  children: React.ReactNode
  params: { teamId: string }
}

// TODO: GENERATE METADATA AND FIGURE SERVICE WORKER + DB AT THE SAME TIME
// export const metadata: Metadata = {
//   title: `${team.name} - %s`,
// }

export default function TeamLayout({
  params: { teamId },
  children,
}: ProjectLayoutProps) {
  // const user = useUser()
  // const idb = useDatabase()
  // const project = idb.read({
  //   tableName: 'Projects',
  //   keyRange: DbRangeKey.only(projectId),
  // })

  const team: TeamRecordType = {
    id: teamId,
    name: 'SST',
    createdAt: '0',
    createdBy: '1',
    members: ['1'],
  }

  if (!team) notFound()
  // if (!team.members.includes(user.id || '')) return <UnauthorizedPage />
  return (
    <div className="relative min-h-screen">
      <Navbar
        team={{
          id: team.id,
          name: team.name,
        }}
      >
        <NavLink href="members">Projects</NavLink>
        <NavLink href="members">Members</NavLink>
        <NavLink href="settings">Settings</NavLink>
        <NavLink href="members">Billing</NavLink>
      </Navbar>

      <div className="mx-auto max-w-[64rem] 2xl:max-w-[80rem]">{children}</div>
    </div>
  )
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string
  children: string | NonNullable<React.ReactNode>
  className?: string
}) {
  const { projectSlug } = useParams()
  const slugActive = useSelectedLayoutSegment() || 'dashboard'
  return (
    <Link
      href={`/${projectSlug}/${href}`}
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
