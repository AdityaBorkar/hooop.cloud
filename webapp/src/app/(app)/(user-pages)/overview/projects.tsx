import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function ProjectGridView(props: { project: ProjectRecordType }) {
  const { project } = props
  return (
    <Link
      href={`/${project.team.id}/${project.id}`}
      className="relative rounded-lg border border-neutral-800 bg-neutral-950 hover:border-neutral-500 hover:bg-neutral-900"
    >
      <div className="relative h-40 w-full rounded-t-md bg-neutral-800">
        <img src={project.thumbnail} alt="" className="w-72" />
        <div
          className={twMerge(
            'absolute top-2 right-2 rounded-md py-1 px-2 text-xs font-semibold',
            project.status === 'OK' && 'bg-green-300 text-green-800',
            project.status === 'WARNING' && 'bg-amber-300 text-amber-800',
            project.status === 'ERROR' && 'bg-red-300 text-red-800',
          )}
        >
          {project.status === 'OK'
            ? 'HEALTHY'
            : // @ts-expect-error
              `${project.statusCount?.[project.status.toLowerCase()]} ${project.status}`}
        </div>
      </div>
      <div className="py-2 px-6">
        <div>{project.name}</div>
        <div className="mt-0.5 text-neutral-400">{project.team.name}</div>
      </div>
    </Link>
  )
}

export function ProjectListView(props: { project: ProjectRecordType }) {
  const { project } = props
  return (
    <Link
      href={`/${project.team.id}/${project.id}`}
      className="relative grid grid-cols-[1fr_2fr_4fr_1fr] rounded-lg border border-neutral-800 bg-neutral-950 py-4 px-8 hover:border-neutral-500 hover:bg-neutral-900"
    >
      <div className="mt-0.5 text-neutral-400">{project.team.name}</div>
      <div>{project.name}</div>
      <div></div>
      <div
        className={twMerge(
          'relative right-0 w-fit rounded-md py-1 px-2 text-right text-xs font-semibold',
          project.status === 'OK' && 'bg-green-300 text-green-800',
          project.status === 'WARNING' && 'bg-amber-300 text-amber-800',
          project.status === 'ERROR' && 'bg-red-300 text-red-800',
        )}
      >
        {project.status === 'OK'
          ? 'HEALTHY'
          : // @ts-expect-error
            `${project.statusCount?.[project.status.toLowerCase()]} ${project.status}`}
      </div>
    </Link>
  )
}
