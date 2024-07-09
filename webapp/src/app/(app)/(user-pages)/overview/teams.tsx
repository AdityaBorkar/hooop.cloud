import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export function TeamGridView(props: { team: TeamRecordType }) {
  const { team } = props
  return (
    <Link
      href={`/${team.team.id}/${team.id}`}
      className="relative rounded-lg border border-neutral-800 bg-neutral-950 hover:border-neutral-500 hover:bg-neutral-900"
    >
      <div className="relative h-40 w-full rounded-t-md bg-neutral-800">
        <img src={team.thumbnail} alt="" className="w-72" />
        <div
          className={twMerge(
            'absolute top-2 right-2 rounded-md py-1 px-2 text-xs font-semibold',
            team.status === 'OK' && 'bg-green-300 text-green-800',
            team.status === 'WARNING' && 'bg-amber-300 text-amber-800',
            team.status === 'ERROR' && 'bg-red-300 text-red-800',
          )}
        >
          {team.status === 'OK'
            ? 'HEALTHY'
            : // @ts-expect-error
              `${team.statusCount?.[team.status.toLowerCase()]} ${team.status}`}
        </div>
      </div>
      <div className="py-2 px-6">
        <div>{team.name}</div>
        <div className="mt-0.5 text-neutral-400">{team.team.name}</div>
      </div>
    </Link>
  )
}

export function TeamListView(props: { team: TeamRecordType }) {
  const { team } = props
  return (
    <Link
      href={`/${team.team.id}/${team.id}`}
      className="relative grid grid-cols-[1fr_2fr_4fr_1fr] rounded-lg border border-neutral-800 bg-neutral-950 py-4 px-8 hover:border-neutral-500 hover:bg-neutral-900"
    >
      <div className="mt-0.5 text-neutral-400">{team.team.name}</div>
      <div>{team.name}</div>
      <div></div>
      <div
        className={twMerge(
          'relative right-0 w-fit rounded-md py-1 px-2 text-right text-xs font-semibold',
          team.status === 'OK' && 'bg-green-300 text-green-800',
          team.status === 'WARNING' && 'bg-amber-300 text-amber-800',
          team.status === 'ERROR' && 'bg-red-300 text-red-800',
        )}
      >
        {team.status === 'OK'
          ? 'HEALTHY'
          : // @ts-expect-error
            `${team.statusCount?.[team.status.toLowerCase()]} ${team.status}`}
      </div>
    </Link>
  )
}
