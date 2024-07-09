import NavLink from '../~components/ProjectInfraNavLink'
import ProvidorList from './providors.json'
import ServiceMap from '@/utils/ServiceMap.json'

export const metadata = { title: 'Infra' }

export default async function ProjectInfraLayout(props: {
  children: React.ReactNode
}) {
  // TODO: We give you API Access to build your own workflows.

  // await getResourcesList({ sstAppNames: ['leo'] })
  const ResourceList = [
    { providor: 'cf', id: 'uid', type: 'd2' },
    { providor: 'aws', id: 'uid', type: 's3' },
  ]
  const ServiceList = ['frontend', 'crawlers']

  // TODO: Rescan Button
  return (
    <div className="mx-auto flex w-[64rem] flex-row gap-4 px-6 *:py-8">
      <aside className="flex w-[16rem] flex-col overflow-auto">
        <NavLink link="">Billing</NavLink>
        {ServiceList.map((code) => {
          // @ts-expect-error
          const name = ServiceMap?.[code] || code
          return <NavLink key={name}>{name}</NavLink>
        }).sort()}
      </aside>

      <main className="flex-grow mr-4 w-[1400px] border-l border-neutral-800">
        {props.children}
      </main>
    </div>
  )
}
