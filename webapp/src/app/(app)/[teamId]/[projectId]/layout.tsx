'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Navbar from '../../../../elements/Navbar'
import NavLink from './~components/NavLink'
import UnauthorizedPage from '@/elements/UnauthorizedPage'

// import useUser from '@/hooks/useUser'
// import { useDatabase } from '@/replocal'
// import { DbRangeKey } from '@/packages/replocal'
// import { HeadMetadata } from '@/components/HeadMetadata'

type ProjectLayoutProps = {
  children: React.ReactNode
  params: { projectId: string }
}

// export const metadata: Metadata = {
//   title: `${project.name} - %s`,
// }

export default function ProjectLayout({
  params: { projectId },
  children,
}: ProjectLayoutProps) {
  // const user = useUser()
  // const idb = useDatabase()
  // const project = idb.read({
  //   tableName: 'Projects',
  //   keyRange: DbRangeKey.only(projectId),
  // })

  const project: ProjectRecordType = {
    id: projectId,
    team: {
      id: 'sst',
      name: 'SST',
    },
    accessList: ['1'],
    createdAt: 0,
    name: 'SST Console',
    createdBy: '1',
    status: 'OK',
    thumbnail: '',
  }

  if (!project) notFound()
  // if (!project.accessList.includes(user.id || '')) return <Page401 />
  return (
    <div className="relative min-h-screen">
      <Navbar
        team={{
          id: project.team.id,
          name: project.team.name,
        }}
        project={{
          id: projectId,
          name: project.name,
        }}
      >
        <NavLink href="alerts">Alerts</NavLink>
        <NavLink href="">Dashboard</NavLink>
        <NavLink href="analytics">Analytics</NavLink>
        <NavLink href="performance">Performance</NavLink>
        <NavLink href="infra">Infrastructure</NavLink>
        <NavLink href="deployments">Deployments</NavLink>
        <NavLink href="settings">Settings</NavLink>
      </Navbar>

      <div className="mx-auto max-w-[64rem] 2xl:max-w-[80rem]">{children}</div>
    </div>
  )
}
