'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { LuSearch, LuSubtitles } from 'react-icons/lu'
import { twMerge } from 'tailwind-merge'

import DropdownMenu from '@/components/Dropdown/DropdownMenu'

export default function Navbar(props: {
  team?: {
    id: string
    name: string
  }
  project?: {
    id: string
    name: string
  }
  children?: React.ReactNode
}) {
  const { team, project, children } = props
  // TODO: Add Dropdowns to BreadcrumbLink to select projects from there itself!
  return (
    <header className="sticky top-0 left-0 z-50 flex w-full flex-row items-center justify-between border-b border-neutral-800 py-4 px-10 text-neutral-300 backdrop-blur-md">
      <nav>
        <BreadcrumbLink href="/overview" className="font-semibold">
          <img
            src="/logo.png"
            alt=""
            className="-mt-1 mr-2 inline-block size-6 rounded-full border border-neutral-600 p-1"
          />
          hooop.cloud
        </BreadcrumbLink>
        {team && (
          <BreadcrumbLink href={`/${team.id}`}>
            <span className="mr-1">/</span>
            {team.name}
          </BreadcrumbLink>
        )}
        {project && team && (
          <BreadcrumbLink href={`/${team.id}/${project.id}`}>
            <span className="mr-1">/</span>
            {project.name}
          </BreadcrumbLink>
        )}
      </nav>

      <nav className="flex flex-row justify-center gap-4">{children}</nav>

      <div className="flex flex-row gap-4 pr-8 text-neutral-300">
        <NavLink
          icon={LuSearch}
          onClick={() => {
            // TODO: Open Modal
          }}
        />
        <NavLink
          icon={LuSubtitles}
          onClick={() => {
            // TODO: Open Modal
          }}
        />
        <DropdownMenu
          className="w-36"
          title={
            <img
              // TODO: Use user's image
              src="user.img"
              alt="Account options"
              className="mt-0.5 size-8 rounded-full bg-neutral-700 text-neutral-700"
            />
          }
        >
          <Link href="/account">Account</Link>
          <button
            type="submit"
            onClick={() => signOut({ callbackUrl: '/login' })}
          >
            Logout
          </button>
          <Link href="/" className="">
            Switch Account
          </Link>
        </DropdownMenu>
      </div>
    </header>
  )
}

function BreadcrumbLink({
  href,
  children,
  className,
}: {
  href: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={twMerge(
        'rounded py-2 px-2 font-medium hover:bg-neutral-900',
        className,
      )}
    >
      {children}
    </Link>
  )
}

function NavLink({
  icon: Icon,
  onClick,
}: {
  icon: IconType
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-neutral-800 bg-neutral-950 p-2.5 text-sm text-neutral-400 hover:bg-neutral-900 hover:text-neutral-300"
    >
      <Icon className="size-4 stroke-3" />
    </button>
  )
}
