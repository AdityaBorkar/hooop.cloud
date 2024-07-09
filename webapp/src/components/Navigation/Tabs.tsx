'use client'

import { useState } from 'react'
import { HiChevronRight, HiPlus } from 'react-icons/hi2'

import Button from '../Form/Button'

type TabsProps = {
  list: {
    [key: string]: any
  }[]
  heading: string
  itemLabel: string
  itemLabelKey: string
  children: React.ReactNode
}

// TODO - DO NOT USE

export default function Tabs(props: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0)
  const item = props.list[selectedTab]

  if (!item)
    return (
      <div className="mt-12">
        <h3 className="ml-1 font-medium">{props.heading}</h3>
        <div className="mt-2 mb-8 flex h-48 flex-row items-center justify-center rounded-lg border border-neutral-800 px-2 text-neutral-200 *:py-4">
          <Button className="!py-2 text-sm">
            <HiPlus className="mr-2 inline align-[-2px]" />
            {props.itemLabel}
          </Button>
        </div>
      </div>
    )
  return (
    <div className="mt-12">
      <h3 className="ml-1 font-medium">{props.heading}</h3>
      <div className="mt-2 mb-8 grid grid-cols-[250px_auto] rounded-lg border border-neutral-800 px-2 text-neutral-200 *:py-4">
        <aside className="flex flex-col gap-1 border-r border-neutral-800 px-4">
          {props.list.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTab(index)}
              className="relative cursor-pointer rounded-md bg-neutral-900 py-2 px-4 hover:bg-neutral-800"
            >
              {item[props.itemLabelKey] ?? 'ERROR: No Label Key'}
              <HiChevronRight className="absolute top-3 right-2 ml-2 stroke-2 text-neutral-400" />
            </div>
          ))}
          <Button className="w-full text-sm">
            <HiPlus className="mr-2 inline align-[-2px]" />
            {props.itemLabel}
          </Button>
        </aside>
        <main className="px-6">{props.children}</main>
      </div>
    </div>
  )
}
