<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = {
  title: 'Performance',
  description: "Monitor your resources's performance",
}

export default function ProjectPerformance() {
  return (
    <div>
      <div className="mt-[40vh] text-center font-medium text-neutral-600">
        TODO: Discuss with Onkar about this page
      </div>
    </div>
  )
}
=======
=======
export const metadata = {
  title: 'Performance',
  description: "Monitor your project's performance",
}

>>>>>>> c6904e7 (progress)
export default function ProjectPerformance() {
  const FrontendMetrics = [
    { name: 'First Contentful Paint' },
    { name: 'Largest Contentful Paint' },
    { name: 'Interaction Next Paint' },
    { name: 'Cumulative Layout Shift' },
    { name: 'First Input Delay' },
    { name: 'Time to First Byte' },
  ]
  return (
    <div>
      <div>
        <h3>Frontend Performance</h3>

        <div>
          <aside>
            {FrontendMetrics.map((metric) => (
              <div key={metric.name}>{metric.name}</div>
            ))}
          </aside>
          <main></main>
        </div>
      </div>

      <div>
        <h3>Backend Performance</h3>

        <div>
          <aside></aside>
          <main></main>
        </div>
      </div>
    </div>
  )
}

// TODO - TOGGLE: Analytics Collection | Unlighthouse
// TODO - KEEP DEPLOYMENT UNDER 10 MINUTES
>>>>>>> aab19bd (init)
