'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
<<<<<<< HEAD
<<<<<<< HEAD

type BuildData = {
  id: number
  url: string
  status: string
  envName: string
  createdAt: Date
  updatedAt: Date
  duration: number
  createdBy: {
    avatar: string
    userName: string
  }
}

export default function BuildCard(props: { build: BuildData }) {
=======
import { twMerge } from 'tailwind-merge'

export default function BuildCard(props: { build: any }) {
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
=======

type BuildData = {
  id: number
  url: string
  status: string
  envName: string
  createdAt: Date
  updatedAt: Date
  duration: number
  createdBy: {
    avatar: string
    userName: string
  }
}

export default function BuildCard(props: { build: BuildData }) {
>>>>>>> a530fbf (progress)
  const { build } = props
  const { projectId } = useParams()
  return (
    <Link
<<<<<<< HEAD
<<<<<<< HEAD
      href={`/${projectId}/deployments/${build.id}`}
      className="relative grid grid-cols-[40%_1fr_1fr_1fr] gap-y-1 rounded-lg border border-neutral-800 bg-neutral-900 px-8 py-4 text-sm text-neutral-200"
=======
      href={`/${projectId}/deployments/${build.pr}`}
      className={twMerge(
        'relative grid grid-cols-[40%_1fr_1fr_1fr] gap-y-1 rounded-lg border border-neutral-800 bg-neutral-900 px-8 py-4 text-sm',
        build.current && 'border-neutral-300',
      )}
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
    >
<<<<<<< HEAD
=======
      href={`/${projectId}/deployments/${build.id}`}
      className="relative grid grid-cols-[40%_1fr_1fr_1fr] gap-y-1 rounded-lg border border-neutral-800 bg-neutral-900 px-8 py-4 text-sm text-neutral-200"
    >
>>>>>>> a530fbf (progress)
      <div className="font-mono">pr-id (pr-title)</div>
      <div>{build.id}</div>
      <div>{/* No Failed Tests */}</div>
      <div>{build.createdBy.userName}</div>
      <div>Env: {build.envName}</div>
      <Link target="_blank" href={build.url}>
        {build.status}
        <span className="ml-1">({toTime(build.duration)})</span>
      </Link>
      <div>{/* Coverage: 80% */}</div>
      <div>{build.createdAt.toLocaleString('en')}</div>
<<<<<<< HEAD
=======
      {build.current && (
        <div className="absolute right-0 top-0 rounded-md rounded-br-none rounded-tl-none bg-neutral-300 px-2 py-1 text-sm font-semibold text-neutral-800">
          CURRENT
        </div>
      )}
      <div>PR: bqsyg232aas (ft: Analytics)</div>
      <div>No Errors / Warnings</div>
      <div>No Failed Tests</div>
      <div>Aditya Borkar</div>
      <div>Branch: production</div>
      <div>Build Time: 36 sec.</div>
      <div>Coverage: 80%</div>
      <div>08/08/2022 12:45 PM</div>
>>>>>>> 24fd0b0 (progress)
=======
>>>>>>> a530fbf (progress)
    </Link>
  )
<<<<<<< HEAD
}

function toTime(ms: number) {
  const secs = (ms / 1000) % 60
  const mins = Math.floor(ms / 1000 / 60)
  return mins ? `${mins}m. ${secs}s.` : `${secs}s.`
=======
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
}

function toTime(ms: number) {
  const secs = (ms / 1000) % 60
  const mins = Math.floor(ms / 1000 / 60)
  return mins ? `${mins}m. ${secs}s.` : `${secs}s.`
}
