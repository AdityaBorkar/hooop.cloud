'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

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
  const { build } = props
  const { projectId } = useParams()
  return (
    <Link
      href={`/${projectId}/deployments/${build.id}`}
      className='relative grid grid-cols-[40%_1fr_1fr_1fr] gap-y-1 rounded-lg border border-neutral-800 bg-neutral-900 px-8 py-4 text-sm text-neutral-200'
    >
      <div className='font-mono'>pr-id (pr-title)</div>
      <div>{build.id}</div>
      <div>{/* No Failed Tests */}</div>
      <div>{build.createdBy.userName}</div>
      <div>Env: {build.envName}</div>
      <Link target='_blank' href={build.url}>
        {build.status}
        <span className='ml-1'>({toTime(build.duration)})</span>
      </Link>
      <div>{/* Coverage: 80% */}</div>
      <div>{build.createdAt.toLocaleString('en')}</div>
    </Link>
  )
}

function toTime(ms: number) {
  const secs = (ms / 1000) % 60
  const mins = Math.floor(ms / 1000 / 60)
  return mins ? `${mins}m. ${secs}s.` : `${secs}s.`
}
