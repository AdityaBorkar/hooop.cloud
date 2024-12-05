import Button from '@/components/Button'

export const metadata = {
  title: 'Infra',
  description: "Configure your project's Infra",
}

export default async function ProjectInfraPage() {
  // TODO: Get Resource Cost using "AWS API > CATEGORY TAG" to display ongoing billing costs
  // TODO ON EACH PAGE: Monitoring / Status / Usage / Costing
  // TODO: Summary of Billing Costs using Billing API
  // TODO: Link Resource / Services to respective console links.
  return (
    <main className="px-[10vw]">
      <Button>Re-scan Resources</Button>
    </main>
  )
}
