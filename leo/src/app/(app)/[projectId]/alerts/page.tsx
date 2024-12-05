<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link'

=======
>>>>>>> ec8a0e3 (update progress)
=======
import Link from 'next/link'

>>>>>>> 91fc705 (progress)
import Input from '@/components/Input'

export const metadata = {
  title: 'Alerts',
  description: "Monitor your project's crashes",
}

export default function ProjectAlerts() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 91fc705 (progress)
  const alerts = [
    {
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
<<<<<<< HEAD
    },
  ]

=======
  const error = {
    name: '',
    trace: '',
    githubLink: '',
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
>>>>>>> ec8a0e3 (update progress)
=======
    },
  ]

>>>>>>> 91fc705 (progress)
  return (
    <div className="mx-auto max-w-[1000px] py-12">
      <div className="rounded-md border border-neutral-800 px-12 py-28">
        {/* Graph - Alerts and Warnings */}
      </div>

      <main>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 91fc705 (progress)
        <div className="mb-8 mt-12 flex w-full flex-row gap-6">
          <input
            placeholder="Search"
            className="block flex-grow select-none rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1 text-base text-neutral-100 disabled:cursor-not-allowed disabled:text-neutral-400"
          />
          <div className="rounded border border-neutral-800 px-4 py-2 text-sm">
<<<<<<< HEAD
            Filter by Type
            {/* Error | Warning */}
          </div>
          <div className="rounded border border-neutral-800 px-4 py-2 text-sm">
=======
        <div className="my-4 flex w-full flex-row gap-6">
          <Input label="Search" defaultValue="" />
          <div className="mt-7 rounded border border-neutral-800 px-4 py-2 text-sm">
            Filter by Type
            {/* Error | Warning */}
          </div>
          <div className="mt-7 rounded border border-neutral-800 px-4 py-2 text-sm">
>>>>>>> ec8a0e3 (update progress)
=======
            Filter by Type
            {/* Error | Warning */}
          </div>
          <div className="rounded border border-neutral-800 px-4 py-2 text-sm">
>>>>>>> 91fc705 (progress)
            Filter by Status
            {/* Unresolved | Under Observation | Resolved */}
          </div>
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 91fc705 (progress)
        <div className="">
          <div className="grid grid-cols-[1fr_1fr_2fr_0.5fr_1fr] border-l border-t border-neutral-800 text-center font-medium text-neutral-200 *:border-b *:border-r *:border-neutral-800 *:p-2">
            <div>Type</div>
            <div>Resource</div>
            <div>ERROR_SHORT_NAME</div>
            <div>Total</div>
            <div>Status</div>
          </div>
          {alerts.map((alert) => (
            <Link
              key={alert.id}
              href={`alerts/${alert.id}`}
              className="grid grid-cols-[1fr_1fr_2fr_0.5fr_1fr] border-l border-neutral-800 text-center text-neutral-400 *:border-b *:border-r *:border-neutral-800 *:p-2 hover:bg-neutral-900"
            >
              <div>{alert.type}</div>
              <div className="truncate text-ellipsis">{alert.functionRef}</div>
              <div className="text-left">{alert.title}</div>
              <div>{alert.reporting.total}</div>
              <div>{alert.status}</div>
            </Link>
          ))}
<<<<<<< HEAD
=======
        <div className="mt-12 grid grid-cols-[1fr_250px_250px_1fr_1fr]">
          <div>Function Ref</div>
          <div>Endpoint</div>
          <div>ERROR_SHORT_NAME</div>
          <div>Total Reported</div>
          <div>Status</div>
>>>>>>> ec8a0e3 (update progress)
=======
>>>>>>> 91fc705 (progress)
        </div>
      </main>
    </div>
  )
}

// attributes: {
//   [SemanticAttributes.FAAS_EXECUTION]: context.awsRequestId,
//   [SemanticResourceAttributes.FAAS_ID]: context.invokedFunctionArn,
//   [SemanticResourceAttributes.CLOUD_ACCOUNT_ID]:
//     AwsLambdaInstrumentation._extractAccountId(
//       context.invokedFunctionArn
//     ),
// },
