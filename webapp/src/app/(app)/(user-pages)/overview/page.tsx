'use client'

import Link from 'next/link'
import { use, useState } from 'react'
import {
  LuLayoutGrid,
  LuLibrary,
  LuList,
  LuPlus,
  LuUsers,
} from 'react-icons/lu'

import { ProjectGridView, ProjectListView } from './projects'
import { TeamGridView, TeamListView } from './teams'
import ToggleSelector from '@/components/ToggleSelector'
import getUserData from '@/utils/getUserData'

export default function DashboardPage(props: {
  searchParams?: { org?: string }
}) {
  const user = use(getUserData())
  const allTeams = db.teams.batchRead(user.teams)
  const allProjects = db.projects.batchRead(user.projects)

  // ---

  const [display, setDisplay] = useState({
    ...user.settings.overview,
    // TODO: Store these options in URLParams:
    search: '',
  })

  const teams = allTeams
    .filter((team) => {
      // Search Term
    })
    .sort((a, b) => {
      // ACTIVITY | NAME | PRIORITY
      return a
    })

  const projects = allProjects
    .filter((project) => {
      // Search Term
    })
    .sort((a, b) => {
      // ACTIVITY | NAME | PRIORITY
      return a
    })

  return (
    <div>
      <header className="mt-12 flex flex-row gap-4 text-center text-neutral-300">
        <ToggleSelector
          value={display.category}
          setValue={(category) => setDisplay({ ...display, category })}
          options={[
            { icon: LuUsers, value: 'TEAMS' },
            { icon: LuLibrary, value: 'PROJECTS' },
          ]}
        />
        <input
          placeholder={`Search ${display.category.toLowerCase()}`}
          className="block grow rounded-lg border border-neutral-800 bg-neutral-900/50 py-3 px-6"
        />
        <button
          // TODO: Convert to dropdown
          type="button"
          className="rounded-lg border border-neutral-800 pr-12 pl-4"
        >
          Sort by Priority
          {/* Sort by Activity */}
          {/* Sort by Name */}
        </button>
        <ToggleSelector
          value={display.view}
          setValue={(view) => setDisplay({ ...display, view })}
          options={[
            { icon: LuLayoutGrid, value: 'GRID' },
            { icon: LuList, value: 'LIST' },
          ]}
        />
        <Link
          // TODO: Convert to dropdown
          href="/create-project"
          className="rounded-lg border border-neutral-100 bg-neutral-200 py-3 px-4 text-neutral-800 hover:bg-neutral-300"
        >
          <LuPlus className="-mt-1 mr-2 inline-block size-4" />
          <span className="font-medium">New</span>
        </Link>
      </header>

      {display.category === 'TEAMS' ? (
        // TEAMS:
        display.view === 'GRID' ? (
          <main className="mt-16 grid grid-cols-3 gap-8 2xl:grid-cols-4">
            {teams.map((team) => (
              <TeamGridView key={team.id} team={team} />
            ))}
          </main>
        ) : (
          <main className="mt-16 grid grid-cols-1 gap-4">
            {teams.map((team) => (
              <TeamListView key={team.id} team={team} />
            ))}
          </main>
        )
      ) : // PROJECTS:
      display.view === 'GRID' ? (
        <main className="mt-16 grid grid-cols-3 gap-8 2xl:grid-cols-4">
          {projects.map((project) => (
            <ProjectGridView key={project.id} project={project} />
          ))}
        </main>
      ) : (
        <main className="mt-16 grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <ProjectListView key={project.id} project={project} />
          ))}
        </main>
      )}
    </div>
  )
}
