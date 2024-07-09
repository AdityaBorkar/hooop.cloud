import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function TeamDashboard() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="font-medium text-neutral-600">
        Make a slot and redirect to /overview?filter-team=teamId
      </div>
    </div>
  )
}

// - Team Name
// - Team Members
// - Link Monorepo
// Packages
// Apps
