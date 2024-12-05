'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import db from '@/packages/database'

import Button from '@/components/Button'
import useUser from '@/hooks/useUser'
import getUser from '@/utils/getUser'

export default function HomePage(props: { searchParams?: { org?: string } }) {
  const user = useUser()
  // const userData = await db.read<UserRecordType>({
  //   table: 'Users',
  //   key: { id: user?.id },
  // })

  // const projectsList =
  //   (props.searchParams?.org
  //     ? userData?.projectList.filter(
  //         (project) => project.organization === props.searchParams?.org,
  //       )
  //     : userData?.projectList) || []

  // const projects = projectsList.length
  //   ? await db.batchReads<ProjectRecordType>({
  //       table: 'Projects',
  //       keys: projectsList.map(({ id }) => ({ id })),
  //     })
  //   : []

  return (
    <main className='mx-auto max-w-[1260px]'>
      {/* <div className="mb-12 flex flex-row gap-10">
        <input
          placeholder="Search Project"
          className="flex-grow rounded bg-neutral-900 px-4 py-2"
        />
      </div> */}

      <div className='mb-20 mt-12 flex flex-row items-center justify-between'>
        <div className='text-3xl font-semibold text-neutral-700'>
          <Link href='/' className='transition-all hover:text-neutral-300'>
            All Projects
          </Link>
          {props.searchParams?.org && (
            <>
              <span className='mx-2'>&gt;</span>
              <Link
                href={`/?org=${props.searchParams?.org}`}
                className='transition-all hover:text-neutral-300'
              >
                {props.searchParams?.org}
              </Link>
            </>
          )}
        </div>

        <Link href='/~/create'>
          <Button>Create Project</Button>
        </Link>
      </div>

      <div className='mx-auto flex flex-row flex-wrap gap-8'>
        {/* {projectsList.map((project) => (
          <Link
            key={project.id}
            href={`/${project.id}`}
            className="relative rounded-lg border border-neutral-700 hover:border-neutral-500"
          >
            <div className="h-40 w-72 rounded-t-md bg-neutral-800"></div>
            <div className="px-4 py-2">
              <div
                className={twMerge(
                  'mr-2 inline-block size-3 rounded-full',
                  project.status === 'OK'
                    ? 'bg-green-500'
                    : project.status === 'WARN'
                      ? 'bg-amber-500'
                      : 'bg-red-600',
                )}
              />
              {project.name}
              <div className="ml-5 text-sm text-neutral-400">
                {project.organization}
              </div>
            </div>
          </Link>
        ))} */}
      </div>
    </main>
  )
}
