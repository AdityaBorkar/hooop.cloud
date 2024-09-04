'use client'

import Link from 'next/link'
import { useState } from 'react'
import { HiChevronRight, HiMinus, HiPlus } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'

import Button from '@/components/Form/Button'
import Input from '@/components/Form/Input'

export default function DiscordPanel(props: {
  discord: ProjectRecordType['discord']
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const server = props.discord[selectedIndex]

  return (
    <div className='mt-12'>
      <h3 className='ml-1 font-medium'>Discord</h3>

      {!server ? (
        <div className='mb-8 mt-2 flex h-48 flex-row items-center justify-center rounded-lg border border-neutral-800 px-2 text-neutral-200'>
          <Link href='settings?modal=discord'>
            <Button icon={HiPlus}>Link To Discord Server</Button>
          </Link>
        </div>
      ) : (
        <div className='mb-8 mt-2 grid grid-cols-[250px_auto] rounded-lg border border-neutral-800 px-2 text-neutral-200'>
          <aside className='flex flex-col gap-1 border-r border-neutral-800 px-4'>
            {props.discord.map((discord, index) => (
              <div
                key={discord.server}
                onMouseDown={() => setSelectedIndex(index)}
                className='relative cursor-pointer rounded-md bg-neutral-900 px-4 py-2 hover:bg-neutral-800'
              >
                {discord.server}
                <HiChevronRight className='absolute right-2 top-3 ml-2 stroke-2 text-neutral-400' />
              </div>
            ))}
            <Button className='w-full text-sm'>
              <HiPlus className='mr-2 inline align-[-2px]' />
              Add Server
            </Button>
          </aside>

          <main className='px-6'>
            <div className='flex w-full flex-row justify-between'>
              <div className='mt-1'>
                <div
                  className={twMerge(
                    'mr-2 inline-block size-3 rounded-full',
                    server.connected ? ' bg-green-600' : ' bg-red-600',
                  )}
                />
                {server.connected
                  ? 'Connected Successfully'
                  : 'Connection Failed'}
              </div>
              <Button className='mx-0 rounded-full bg-neutral-900 text-sm text-neutral-400'>
                <HiMinus className='mr-2 inline align-[-2px]' />
                Remove Server
              </Button>
            </div>

            <div className='mt-8 grid grid-cols-3 gap-6'>
              <Input
                label='Channel for Alerts'
                defaultValue={server.channels.alerts}
              />
              <Input
                label='Channel for Monitoring'
                defaultValue={server.channels.monitoring}
              />
              <Input
                label='Channel for Deployments'
                defaultValue={server.channels.deployments}
              />
            </div>
          </main>
        </div>
      )}
    </div>
  )
}
