import Link from 'next/link'

export const metadata = {
  title: 'Alerts',
  description: "Monitor your project's crashes",
}

export default function ProjectAlert() {
  const alert = {
    id: '1',
    type: 'ERROR',
    status: 'UNRESOLVED',
    functionRef: 'aws:region:lambda:projectId:functionId',
    endpoint: '/api/webflow',
    title: 'ValidationError',
    trace: {
      ref: '',
      githubLink: '',
    },
    tests: {
      related: [],
      passing: true,
      input: true,
    },
    reporting: {
      total: 10,
      first: '',
      last: '',
    },
  }

  return (
    <div className='mx-auto max-w-[1000px]'>
      <Link
        className='my-14 block text-neutral-300'
        href='/platipie-socials/alerts'
      >
        Back to "All Alerts"
      </Link>

      <main>
        <div className='inline-block rounded bg-red-600 px-2 py-1 text-sm font-medium text-white'>
          {alert.type}
        </div>
        <div className='ml-2 inline-block align-middle text-xl'>
          {alert.title}
        </div>

        <div className='my-8 text-neutral-300'>
          <div>First Reported: {alert.reporting.first}</div>
          <div>Last Reported: {alert.reporting.first}</div>
        </div>

        <div className='flex flex-row gap-4 border-b border-neutral-800 py-4'>
          <div className='cursor-pointer rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium uppercase text-neutral-400 hover:text-neutral-300'>
            Trace
          </div>
          <div className='cursor-pointer rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium uppercase text-neutral-400 hover:text-neutral-300'>
            Tests
            <span className='ml-2 rounded-full bg-blue-700 px-2 py-0.5 align-baseline text-xs text-white'>
              2
            </span>
          </div>
          <div className='cursor-pointer rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium uppercase text-neutral-400 hover:text-neutral-300'>
            Reports
            <span className='ml-2 rounded-full bg-blue-700 px-2 py-0.5 align-baseline text-xs text-white'>
              10
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}
