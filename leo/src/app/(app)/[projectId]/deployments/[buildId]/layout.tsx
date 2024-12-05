<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
import Link from 'next/link'
import { GoGitBranch, GoGitPullRequest, GoInfo, GoServer } from 'react-icons/go'
import { HiArrowLeft } from 'react-icons/hi2'
import { twMerge } from 'tailwind-merge'
<<<<<<< HEAD

export default function ProjectBuilds(props: {
  children: React.ReactNode
  params: { projectId: string; buildId: string }
}) {
  const { projectId, buildId } = props.params

  const projectInfo = {
    githubRepo: 'adityaborkar/docs.platipie.com',
    // branches: ["production", "staging", "development"],
  }

  const buildInfo = {
    id: 'bqsyg232aas',
    branch: 'production',
    environment: 'Production',
    pr: {
      id: 'bqsyg232aas',
      title: 'feat: analytics',
    },
  }

  const baseUrl = `/${projectId}/deployments/${buildId}`

  return (
    <main className="mx-auto max-w-[1000px]">
      <div className="my-8 text-neutral-500">
        <HiArrowLeft className="mr-2 inline align-[-2px]" />
        Back to &ldquo;All Deployments&rdquo;
      </div>

      <div className="my-10 grid grid-cols-4 text-neutral-300">
=======
import Link from "next/link";
import {
  GoGitBranch,
  GoGitPullRequest,
  GoInfo,
  GoServer,
} from "react-icons/go";
import { HiArrowLeft } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";
=======
>>>>>>> 2b593a1 (workflow job: apply formatting changes)

export default function ProjectBuilds(props: {
  children: React.ReactNode
  params: { projectId: string; buildId: string }
}) {
  const { projectId, buildId } = props.params

  const projectInfo = {
    githubRepo: 'adityaborkar/docs.platipie.com',
    // branches: ["production", "staging", "development"],
  }

  const buildInfo = {
    id: 'bqsyg232aas',
    branch: 'production',
    environment: 'Production',
    pr: {
      id: 'bqsyg232aas',
      title: 'feat: analytics',
    },
  }

  const baseUrl = `/${projectId}/deployments/${buildId}`

  return (
    <main className="mx-auto max-w-[1000px]">
      <div className="my-8 text-neutral-500">
        <HiArrowLeft className="mr-2 inline align-[-2px]" />
        Back to &ldquo;All Deployments&rdquo;
      </div>

<<<<<<< HEAD
      <div className="text-neutral-300 my-10 grid grid-cols-4">
>>>>>>> c6904e7 (progress)
=======
      <div className="my-10 grid grid-cols-4 text-neutral-300">
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
        <Link
          href={`https://github.com/${projectInfo.githubRepo}/settings/environments`}
          className="w-fit"
          target="_blank"
        >
          <GoServer className="mr-2 inline align-[-2px]" />
          {buildInfo.environment}
        </Link>
        <Link
          href="https://github.com/AdityaBorkar/leo/settings/environments"
          className="w-fit"
          target="_blank"
        >
          <GoGitBranch className="mr-2 inline align-[-2px]" />
          {buildInfo.branch}
        </Link>
        <Link
          href="https://github.com/AdityaBorkar/leo/settings/environments"
          className="w-fit"
          target="_blank"
        >
          <GoGitPullRequest className="mr-2 inline align-[-2px]" />
<<<<<<< HEAD
<<<<<<< HEAD
          <code className="mr-2 rounded bg-neutral-900 px-1 py-0.5 text-sm text-neutral-400">
=======
          <code className="text-sm bg-neutral-900 px-1 py-0.5 rounded mr-2 text-neutral-400">
>>>>>>> c6904e7 (progress)
=======
          <code className="mr-2 rounded bg-neutral-900 px-1 py-0.5 text-sm text-neutral-400">
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
            {buildInfo.pr.id}
          </code>
          {buildInfo.pr.title}
        </Link>
      </div>

      <div>Test Coverage</div>
      <div>Domains Deployed</div>

      {/* TODO - MAYBE INSTEAD OF SHOWING INFORMATION HERE, REDIRECT TO GITHUB AND LET THEM SEE THE INFO THERE */}
      <div className="my-8 flex flex-row gap-4">
        <TabLink baseUrl={baseUrl}>Changelog</TabLink>
        <TabLink baseUrl={baseUrl}>Build Summary</TabLink>
        <TabLink baseUrl={baseUrl}>Tests Summary</TabLink>
        <TabLink baseUrl={baseUrl}>Deployment Summary</TabLink>
      </div>

      {props.children}
    </main>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
  );
>>>>>>> c6904e7 (progress)
=======
  )
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
}

function TabLink({ children, baseUrl }: { baseUrl: string; children: string }) {
  return (
    <Link
<<<<<<< HEAD
<<<<<<< HEAD
      href={`${baseUrl}/${children.toLowerCase().replaceAll(' ', '-')}`}
      className={twMerge(
        'cursor-pointer rounded bg-neutral-900 px-3 py-1 font-medium text-neutral-400',
=======
      href={`${baseUrl}/${children.toLowerCase().replaceAll(" ", "-")}`}
      className={twMerge(
        "px-3 py-1 rounded font-medium cursor-pointer bg-neutral-900 text-neutral-400"
>>>>>>> c6904e7 (progress)
=======
      href={`${baseUrl}/${children.toLowerCase().replaceAll(' ', '-')}`}
      className={twMerge(
        'cursor-pointer rounded bg-neutral-900 px-3 py-1 font-medium text-neutral-400',
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
        // currentBranch === children
        //   ? "bg-neutral-300 text-neutral-800"
        //   : "hover:bg-neutral-800"
      )}
    >
      {children}
    </Link>
<<<<<<< HEAD
<<<<<<< HEAD
  )
=======
  );
>>>>>>> c6904e7 (progress)
=======
  )
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
}

// Source code Minification.
// JS and CSS transformation for browser compatibility.
// Bundling.
// Image Optimization.
