'use client'

import { useState } from 'react'
import { HiChevronRight, HiMinus, HiPlus } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/Button'

export default function GithubSettings(props: {
  github: ProjectRecordType['github']
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const repo = props.github[selectedIndex]

  if (!repo)
    return (
      <div className="mt-12">
        <h3 className="ml-1 font-medium">GitHub</h3>
        <div className="mb-8 mt-2 flex h-48 flex-row items-center justify-center rounded-lg border border-neutral-800 px-2 text-neutral-200 *:py-4">
          <Button className="!py-2 text-sm">
            <HiPlus className="mr-2 inline align-[-2px]" />
            GitHub Repo
          </Button>
        </div>
      </div>
    )
  return (
    <>
      <h3 className="ml-1 mt-12 font-medium">GitHub</h3>
      <div className="mb-8 mt-2 grid grid-cols-[400px_auto] rounded-lg border border-neutral-800 px-2 text-neutral-200 *:py-4">
        <aside className="flex flex-col gap-1 border-r border-neutral-800 px-4">
          {props.github.map((github, index) => (
            <div
              key={github.repo}
              onClick={() => setSelectedIndex(index)}
              className="relative cursor-pointer rounded-md bg-neutral-900 px-4 py-2 hover:bg-neutral-800"
            >
              {github.repo}
              <HiChevronRight className="absolute right-2 top-3 ml-2 stroke-2 text-neutral-400" />
            </div>
          ))}
          <Button className="w-full text-sm">
            <HiPlus className="mr-2 inline align-[-2px]" />
            Add GitHub
          </Button>
        </aside>

        <main className="px-6">
          <div className="flex w-full flex-row justify-between">
            <div className="mt-1">
              <div
                className={twMerge(
                  'mr-2 inline-block size-3 rounded-full',
                  repo.connected ? ' bg-green-600' : ' bg-red-600',
                )}
              />
              {repo.connected ? 'Connected Successfully' : 'Connection Failed'}
            </div>
            <Button className="mx-0 rounded-full bg-neutral-900 text-sm text-neutral-400">
              <HiMinus className="mr-2 inline align-[-2px]" />
              Remove Repo
            </Button>
          </div>

          <div className="mt-4">
            GitHub Repo Checks:
            <ul className="ml-4 list-inside list-disc text-neutral-400 *:pt-1">
              <li>GitHub Branch Protection</li>
              <li>Tags Protection</li>
              <li>Prettier Config</li>
              <li>Style Guide (Only Warnings)</li>
              <li>Dependency Updates</li>
              <li>Security Scanning</li>
              <li>Vulnerability Checks</li>
              <li>Environments</li>
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}

// TODO - Configure Preview Links and Staging Links
// TODO - Do a GitHub Project Setup Checks in Settings:
