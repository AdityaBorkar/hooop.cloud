import Link from 'next/link'

import Input from '@/components/Form/Input'

export const metadata = {
  title: 'Alerts',
  description: "Monitor your project's crashes",
}

export default function ProjectAlerts() {
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
    },
  ]

  return (
    <div className="mx-auto max-w-[1000px] py-12">
      <div className="rounded-md border border-neutral-800 py-28 px-12">
        {/* Graph - Alerts and Warnings */}
      </div>

      <main>
        <div className="mt-12 mb-8 flex w-full flex-row gap-6">
          <input
            placeholder="Search"
            className="flex-grow block rounded-md border border-neutral-800 bg-neutral-900 py-1 px-3 text-base text-neutral-100 select-none disabled:cursor-not-allowed disabled:text-neutral-400"
          />
          <div className="rounded border border-neutral-800 py-2 px-4 text-sm">
            Filter by Type
            {/* Error | Warning */}
          </div>
          <div className="rounded border border-neutral-800 py-2 px-4 text-sm">
            Filter by Status
            {/* Unresolved | Under Observation | Resolved */}
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-[1fr_1fr_2fr_0.5fr_1fr] border-t border-l border-neutral-800 text-center font-medium text-neutral-200 *:border-r *:border-b *:border-neutral-800 *:p-2">
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
              className="grid grid-cols-[1fr_1fr_2fr_0.5fr_1fr] border-l border-neutral-800 text-center text-neutral-400 *:border-r *:border-b *:border-neutral-800 *:p-2 hover:bg-neutral-900"
            >
              <div>{alert.type}</div>
              <div className="truncate text-ellipsis">{alert.functionRef}</div>
              <div className="text-left">{alert.title}</div>
              <div>{alert.reporting.total}</div>
              <div>{alert.status}</div>
            </Link>
          ))}
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
