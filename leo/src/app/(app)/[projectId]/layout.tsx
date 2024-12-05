<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { HiCog6Tooth, HiHome } from 'react-icons/hi2'

import db from '@/packages/database'

import AccountBox from '@/components/AccountBox'
import NavLink from '@/components/NavLink'
import Page401 from '@/components/Page401'
import getUser from '@/utils/getUser'

type ProjectLayoutProps = {
  children: React.ReactNode
  params: { projectId: string }
}

// TODO: generateMetadata() Returns error if 404
// export async function generateMetadata({
//   params: { projectId },
// }: ProjectLayoutProps): Promise<Metadata> {
//   const project = await db.read<ProjectRecordType>({
//     table: 'Projects',
//     key: { id: projectId },
//   })
//   return {
//     title: {
//       template: `${project.name} | %s`,
//       default: project.name,
//     },
//   }
// }

export default async function ProjectLayout({
  params: { projectId },
  children,
}: ProjectLayoutProps) {
  const user = await getUser()
  if (!user) redirect('/login')

  const project = await db.read<ProjectRecordType>({
    table: 'Projects',
    key: { id: projectId },
  })
  if (!project) notFound()
  if (!project.accessList.includes(user.id)) return <Page401 />

  return (
    <div className="relative min-h-screen">
      <header className="sticky left-0 top-0 flex flex-row justify-between border-b border-neutral-800">
        <div className="flex h-fit flex-row gap-2 pl-8 pt-5 text-neutral-300">
          <Link href={'/'}>
            <HiHome className="mt-0.5 size-5" />
          </Link>
          <span>/</span>
          <Link href={`/?org=${project.organization}`}>
            {project.organization}
          </Link>
          <span>/</span>
          <Link href={`/${project.id}`}>{project.name}</Link>
        </div>

        <nav className="flex flex-row justify-center gap-4 py-4">
          <NavLink>Alerts</NavLink>
          <NavLink link="">Dashboard</NavLink>
          <NavLink>Analytics</NavLink>
          <NavLink>Performance</NavLink>
          <NavLink link="infra">Infrastructure</NavLink>
          <NavLink>Deployments</NavLink>
        </nav>

        <div className="flex flex-row gap-4 pr-8 pt-4 text-neutral-300">
          <NavLink link="settings" className="h-fit p-1.5">
            <HiCog6Tooth className="size-5" />
          </NavLink>
          <AccountBox user={user} />
        </div>
      </header>

      {children}
    </div>
  )
=======
import { HiHome } from "react-icons/hi2";
import NavLink from "./NavLink";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
=======
import { Metadata, ResolvingMetadata } from 'next'
=======
import type { Metadata } from 'next'
>>>>>>> a530fbf (progress)
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { HiHome } from 'react-icons/hi2'

import db from '@/packages/database'

import NavLink from './NavLink'
<<<<<<< HEAD
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
=======
import getUser from '@/utils/getUser'
>>>>>>> a530fbf (progress)

type Props = {
  children: React.ReactNode
  params: { projectId: string }
}

export default async function ProjectLayout(props: Props) {
  const { user } = getUser()
  const project = await db.read<ProjectRecordType>({
    table: 'Projects',
    key: { id: props.params.projectId, userId: user.id },
  })
  if (!project) notFound()

  return (
    <div className="relative min-h-screen">
      <header className="sticky left-0 top-0 flex flex-row justify-between border-b border-neutral-800">
        <div className="flex h-fit flex-row gap-2 pl-8 pt-5 text-neutral-300">
          <Link href={'/'}>
            <HiHome className="mt-0.5 size-5" />
          </Link>
          <span>/</span>
          <Link href={`/?org=${project.organization}`}>
            {project.organization}
          </Link>
          <span>/</span>
          <Link href={`/${project.id}`}>{project.name}</Link>
        </div>

        <nav className="flex flex-row justify-center gap-4 py-4">
          <NavLink link="/">Dashboard</NavLink>
          <NavLink>Analytics</NavLink>
          <NavLink>Alerts</NavLink>
          <NavLink>Monitoring</NavLink>
          {/* <NavLink>Infrastructure</NavLink> */}
          <NavLink>Deployments</NavLink>
          <NavLink>Settings</NavLink>
        </nav>

        <div className="pr-8 pt-5 text-neutral-300">
          <img
            src={user.image}
            alt={user.name}
            className="size-8 rounded-full"
          />
        </div>
      </header>

      {props.children}
    </div>
<<<<<<< HEAD
  );
>>>>>>> aab19bd (init)
=======
  )
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { user } = getUser()
//   const project = await db.read<ProjectRecordType>({
//     table: 'Projects',
//     key: { id: params.projectId, userId: user.id },
//   })
//   return {
//     title: {
//       template: `${project.name} | %s`,
//       default: project.name,
//     },
//   }
// }
