'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiChevronRight, HiMinus, HiPlus } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/Form/Button'

export default function GithubPanel(props: {
  github: ProjectRecordType['github']
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const repo = props.github[selectedIndex]

  const checks = [
    { label: 'GitHub Branch Protection', test: true },
    { label: 'Tags Protection', test: true },
    { label: 'Prettier Config', test: true },
    { label: 'Style Guide (Only Warnings)', test: true },
    { label: 'Dependency Updates', test: false },
    { label: 'Security Scanning', test: false },
    { label: 'Vulnerability Checks', test: false },
    { label: 'Environments', test: false },
    { label: 'SST v3 Configuration', test: false },
  ]

  // TODO: Preview & Staging Links

  return (
    <div className="mt-12">
      <h3 className="ml-1 font-medium">GitHub</h3>

      {!repo ? (
        <div className="mt-2 mb-8 flex h-48 flex-row items-center justify-center rounded-lg border border-neutral-800 px-2 text-neutral-200">
          <Link href="settings?modal=github">
            <Button icon={HiPlus}>Link To GitHub Repo</Button>
          </Link>
        </div>
      ) : (
        <div className="mt-2 mb-8 grid grid-cols-[300px_auto] rounded-lg border border-neutral-800 px-2 text-neutral-200">
          <aside className="flex flex-col gap-1 border-r border-neutral-800 py-4 px-4">
            {props.github.map((github, index) => (
              <div
                key={github.full_name}
                onMouseDown={() => setSelectedIndex(index)}
                className={twMerge(
                  'relative cursor-pointer truncate rounded-md border border-neutral-700 bg-neutral-800 py-2 px-4 text-sm',
                  index === selectedIndex
                    ? 'bg-neutral-200 font-medium text-neutral-900'
                    : 'hover:bg-neutral-900',
                )}
              >
                {github.full_name}
                <HiChevronRight className="absolute top-3 right-2 ml-2 stroke-2 text-neutral-400" />
              </div>
            ))}
            <Link
              href="settings?modal=github"
              className="my-4 mx-auto w-fit text-sm"
            >
              <Button>
                <HiPlus className="mr-2 inline align-[-2px]" />
                Link GitHub Repo
              </Button>
            </Link>
          </aside>

          <main className="py-5 px-6">
            <div className="flex w-full flex-row items-center">
              <div className="flex-grow">
                <div
                  className={twMerge(
                    'mr-2 inline-block size-3 rounded-full',
                    repo.connected ? 'bg-green-600' : 'bg-red-600',
                  )}
                />
                {repo.connected
                  ? 'Connected Successfully'
                  : 'Connection Failed'}
              </div>
              <Button className="rounded-full" icon={HiMinus}>
                Remove Repo
              </Button>
            </div>

            <div className="mt-4">
              <div className="text-neutral-400 *:pt-1">
                {checks.map((check, index) => (
                  <div key={index} className="cursor-default">
                    <div
                      className={twMerge(
                        'mr-2 inline-block size-3 rounded',
                        check.test ? 'bg-green-600' : 'bg-red-600',
                      )}
                    />
                    {check.label}
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
