import NavLink from '../~components/ProjectInfraNavLink'
import { listResourcesByAppName } from '@/external-api/aws/listResourcesByAppName'

export const metadata = {
  title: 'Infra',
  description: 'Infra your project uses.',
}

export default async function ProjectInfraLayout(props: {
  children: React.ReactNode
}) {
  // TODO: Detect Providers used - Cloudflare & AWS
  const cfResources = []
  // TODO: ALSO INCLUDE OTHER REGIONS
  const awsResources = await listResourcesByAppName({ appName: 'leo' })

  const InfraServices = awsResources.reduce((acc, resource) => {
    const type = resource.type
    const serviceName = ServiceNameList[type] || 'Unknown Services'
    if (!acc.includes(serviceName)) acc.push(serviceName)
    return acc
  }, [] as string[])

  return (
    <div className="mx-auto grid h-full w-fit grid-cols-[200px_1400px] gap-4 px-6 *:py-10">
      <aside className="flex flex-col border-r border-neutral-800 pr-4">
        <NavLink link="">Dashboard</NavLink>
        {InfraServices.map((serviceName) => (
          <NavLink key={serviceName}>{serviceName}</NavLink>
        ))}
        {/* <NavLink>Frontend</NavLink>
        <NavLink>Upstash Redis</NavLink>
        <NavLink>Lambda@EDGE</NavLink>
        <NavLink>Cloudfront</NavLink>
        <NavLink>Eventbridge</NavLink>
        <NavLink>Crawlers</NavLink> */}
      </aside>

      {props.children}
    </div>
  )
}

const ServiceNameList = {
  'Lambda Function': 'Lambda',
  'DynamoDB Table': 'DynamoDB',
  'Logs LogGroup': 'Logs',
  'S3 Bucket': 'S3',
} as Record<string, string>
