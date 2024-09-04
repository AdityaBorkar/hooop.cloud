import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

export default function TableLayout(props: {
  children?: React.ReactNode
  params: {
    projectId: string
    tableName: string
  }
}) {
  const tableName = props.params.tableName
  return (
    <div className='px-16'>
      <div className='flex flex-row items-center justify-between text-neutral-300'>
        <div className='text-xl font-medium text-white'>
          All Tables &gt; {tableName}
        </div>
        <div className='flex flex-row gap-4 text-sm'>
          <ExternalLink href={``}>
            AWS Console <HiArrowUpRight className='inline-block align-[-2px]' />
          </ExternalLink>
          <ExternalLink href={``}>
            PartiQL <HiArrowUpRight className='inline-block align-[-2px]' />
          </ExternalLink>
          <ExternalLink href={``}>
            Items Explorer
            <HiArrowUpRight className='inline-block align-[-2px]' />
          </ExternalLink>
        </div>
      </div>

      <div className='mt-6 grid grid-cols-[180px_auto] border-t border-neutral-800 *:pt-6'>
        <aside className='flex flex-col border-r border-neutral-800 pr-4 font-medium text-neutral-400 '>
          <NavLink tableName={tableName} href='statistics'>
            Statistics
          </NavLink>
          <NavLink tableName={tableName} href='alarms'>
            Alarms
          </NavLink>
          <NavLink tableName={tableName} href='about'>
            About
          </NavLink>
          {/* <div>Permissions</div> */}
        </aside>
        <main className='pl-16'>{props.children}</main>
      </div>
    </div>
  )
}

function ExternalLink(props: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={`${props.href}`}
      target='_blank'
      className='border border-neutral-500 px-3 py-1.5 hover:bg-neutral-200 hover:text-black'
    >
      {props.children}
    </Link>
  )
}

function NavLink(props: {
  href: string
  tableName: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={props.href}
      className='cursor-pointer rounded-md px-4 py-2 hover:bg-neutral-900 hover:text-neutral-200'
    >
      {props.children}
    </Link>
  )
}
