import { twMerge } from 'tailwind-merge'

export default function ProjectInfraUpstashRedis() {
  const metrics = {
    lighthouse: 90,
    fcp: 1.2,
    lcp: 1.5,
    inp: 2.5,
    cls: 0.1,
    fid: 100,
    ttfb: 200,
  }
  return (
    <main className='px-10'>
      <div className='flex flex-row-reverse gap-6 text-neutral-400'>
        <div>Last 7 Days</div>
        <div>P75</div>
        <div>P90</div>
        <div>P95</div>
        <div>P99</div>
      </div>

      <div className='mt-8 flex flex-row gap-4'>
        <MetricCard active unit='' value={metrics.lighthouse}>
          Lighthouse Score
        </MetricCard>
        <MetricCard unit='s' value={metrics.fcp}>
          First Contentful Paint
        </MetricCard>
        <MetricCard unit='s' value={metrics.lcp}>
          Largest Contentful Paint
        </MetricCard>
        <MetricCard unit='s' value={metrics.inp}>
          Interaction Next Paint
        </MetricCard>
        <MetricCard unit='' value={metrics.cls}>
          Cumulative Layout Shift
        </MetricCard>
        <MetricCard unit='ms' value={metrics.fid}>
          First Input Delay
        </MetricCard>
        <MetricCard unit='ms' value={metrics.ttfb}>
          Time to First Byte
        </MetricCard>
      </div>

      <div className='flex flex-row gap-6 py-10'>
        <div className='rounded-md border border-neutral-800 px-40 py-48 text-neutral-500'>
          Countries Map. Click on each country to filter analytics.
        </div>

        <div className='grid h-fit grid-cols-[60px_auto] gap-y-2'>
          <div className='text-center text-rose-500'>80</div>
          <div>/api/path-name</div>
          <div className='text-center text-amber-500'>80</div>
          <div>/api/path-name</div>
          <div className='text-center text-emerald-500'>80</div>
          <div>/api/path-name</div>
        </div>
      </div>
    </main>
  )
}

function MetricCard(props: {
  active?: boolean
  unit: string
  value: number
  children: React.ReactNode
}) {
  return (
    <div
      className={twMerge(
        'cursor-pointer rounded-md border border-neutral-800 px-4 py-2 text-neutral-400',
        props.active && 'bg-neutral-300 text-black',
      )}
    >
      <div className='text-xl font-semibold'>
        {props.value} {props.unit}
      </div>
      <div className='text-sm leading-tight tracking-tighter '>
        {props.children}
      </div>
    </div>
  )
}
