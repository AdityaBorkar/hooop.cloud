import NavLink from '../~components/ProjectInfraNavLink'
import { getResourcesList } from './api'
import { ServiceNameList } from '@/utils/ServiceNameList'

export const metadata = {
  title: 'Infra',
  description: 'Infra your project uses.',
}

export default async function ProjectInfraLayout(props: {
  children: React.ReactNode
}) {
  // TODO: Detect Providers used - Cloudflare & AWS
  const cfResources = []
  const awsResources = [] // await getResourcesList({ sstAppNames: ['leo'] })

  const InfraServices = awsResources
    .reduce((acc, resource) => {
      const serviceCode = resource.serviceCode || ''
      if (!acc.includes(serviceCode)) acc.push(serviceCode)
      return acc
    }, [] as string[])
    .map(
      serviceCode => ServiceNameList[serviceCode] || 'Unidentifiable Service',
    )
    .sort()

  return (
    <div className='mx-auto flex max-h-[92vh] w-fit flex-row gap-4 px-6 *:py-8'>
      <aside className='flex w-[200px] flex-col overflow-auto border-r border-neutral-800 pr-4'>
        <NavLink link=''>Dashboard</NavLink>
        <NavLink>Frontend</NavLink>
        <NavLink>Crawlers</NavLink>
        {InfraServices.map(serviceName => (
          <NavLink key={serviceName}>{serviceName}</NavLink>
        ))}
      </aside>

      <main className='w-[1400px] flex-grow'>{props.children}</main>
    </div>
  )
}
