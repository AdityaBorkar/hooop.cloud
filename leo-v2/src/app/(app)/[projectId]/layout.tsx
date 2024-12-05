'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HiCog6Tooth, HiHome } from 'react-icons/hi2'

import { DbRangeKey } from '@/packages/replocal'

import AccountBox from '@/components/AccountBox'
import { HeadMetadata } from '@/components/HeadMetadata'
import NavLink from '@/components/NavLink'
import Page401 from '@/components/Page401'
import useUser from '@/hooks/useUser'
import { useDatabase } from '@/replocal'

type ProjectLayoutProps = {
  children: React.ReactNode
  params: { projectId: string }
}

export const dynamic = 'force-static'

export default function ProjectLayout({
  params: { projectId },
  children,
}: ProjectLayoutProps) {
  const user = useUser()
  const idb = useDatabase()
  const project = idb.read({
    tableName: 'Projects',
    keyRange: DbRangeKey.only(projectId),
  })

  if (!project) notFound()
  if (!project.accessList.includes(user.id || '')) return <Page401 />
  return (
    <div className='relative min-h-screen'>
      <HeadMetadata
        metadata={
          {
            // title: {
            //   template: `${project.name} | %s`,
            //   default: project.name,
            // },
          }
        }
      />

      <header className='sticky top-0 left-0 z-50 flex flex-row justify-between border-b border-neutral-800 backdrop-blur-md'>
        <div className='flex h-fit flex-row gap-2 pt-5 pl-8 text-neutral-300'>
          <Link href={'/'}>
            <HiHome className='mt-0.5 size-5' />
          </Link>
          <span>/</span>
          <Link href={`/?org=${project.organization}`}>
            {project.organization}
          </Link>
          <span>/</span>
          <Link href={`/${project.id}`}>{project.name}</Link>
        </div>

        <nav className='flex flex-row justify-center gap-4 py-4'>
          <NavLink>Alerts</NavLink>
          <NavLink link=''>Dashboard</NavLink>
          <NavLink>Analytics</NavLink>
          <NavLink>Performance</NavLink>
          <NavLink link='infra'>Infrastructure</NavLink>
          <NavLink>Deployments</NavLink>
        </nav>

        <div className='flex flex-row gap-4 pt-4 pr-8 text-neutral-300'>
          <NavLink link='settings' className='h-fit p-1.5'>
            <HiCog6Tooth className='size-5' />
          </NavLink>
          <AccountBox />
        </div>
      </header>

      {/* {children} */}
    </div>
  )
}
