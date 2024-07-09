import { Fragment } from 'react'
import { HiRefresh } from 'react-icons/hi'

import Button from '@/components/Form/Button'

export const metadata = {
  title: 'Infra',
  description: "Configure your project's Infra",
}

export default async function ProjectInfraPage() {
  // TODO ON EACH PAGE: Monitoring / Status / Usage / Costing
  // TODO: Link Resource / Services to respective console links.

  // TODO: Get Cost Profile for Cloudflare
  // const CostProfile = await getCostProfile({
  //   sstAppNames: ['leo'],
  //   startDate: '2024-05-01',
  //   endDate: '2024-05-31',
  // })

  // TODO: COST PROFILE IS COSTLY AT $0.01 PER REQUEST. KINDLY REPLACE IT.

  return (
    <main className="cursor-default px-[10vw]">
      <Button icon={HiRefresh}>Re-scan Resources</Button>

      <div className="mt-12 mb-6 flex flex-row justify-between text-2xl font-semibold">
        <div className="align-middle">
          Billing Costs
          {/* {CostProfile.estimated && (
            <span className="ml-4 rounded-full bg-blue-600 px-2 py-1 align-middle text-sm text-white">
              Estimated
            </span>
          )} */}
        </div>
        <div>May 2024</div>
      </div>
      <div className="grid grid-cols-2 divide-x divide-y divide-neutral-600 border border-neutral-600 text-neutral-300 *:py-1 *:px-2">
        <div className="text-center font-medium">Service Name</div>
        <div className="text-center font-medium">Usage Costs</div>
        {/* {CostProfile.services?.map((service, index) => (
          <Fragment key={index}>
            <div>{service.name}</div>
            <div>
              {service.cost?.Unit} {service.cost?.Amount}
            </div>
          </Fragment>
        ))} */}
      </div>
      <div className="p-2">
        <div>
          Total Actual Costs:
          <span className="ml-2 font-medium">
            {/* {CostProfile.total
              .map((total) => `${total?.Unit} ${total?.Amount}`)
              .join(' + ')} */}
          </span>
        </div>
        <div className="mt-1">
          Total Forecasted Costs:
          <span className="ml-2 font-medium">{}</span>
        </div>
      </div>
    </main>
  )
}
