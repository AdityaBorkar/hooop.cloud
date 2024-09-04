import BuildCard from './BuildCard'
import Button from '@/components/Form/Button'
import getDeployments from '@/external-api/github/getDeployments'
import getEnvironments from '@/external-api/github/getEnvironments'
import getUserData from '@/utils/getUserData'

export const metadata = {
  title: 'Deployments',
  description: 'View all deployments for your project',
}

export default async function ProjectDeployments(props: {
  params: { projectId: string }
}) {
  const { projectId } = props.params
  const user = await getUserData()

  // TODO - QUERY FROM DB:
  const project = {
    id: 'leo',
    name: 'Leo',
    githubRepo: 'AdityaBorkar/leo',
    organization: 'Aditya Borkar',
    status: 'ERROR',
  }

  const repoName = project.githubRepo
  const headers = {
    'X-GitHub-Api-Version': '2022-11-28',
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${user.accessToken}`,
  }

  // TODO - CHECK IF PROJECT EXISTS
  const webhooks = await fetch(
    `https://api.github.com/repos/${repoName}/hooks`,
    { headers },
  ).then((res) => res.json())

  if (webhooks.length === 0) {
    // TODO - Initialize Repo Webhooks
    console.log('INITIAL')
    // push deployment deployment_status

    const createWebhook = await fetch(
      `https://api.github.com/repos/${repoName}/hooks`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: 'web',
          active: true,
          events: ['push', 'pull_request'],
          config: {
            url: 'https://example.com/webhook', // todo - implement tunneling
            secret: '',
            // If provided, the secret will be used as the key to generate the HMAC hex digest value for delivery signature headers.
            content_type: 'json',
            insecure_ssl: '0',
          },
        }),
      },
    ).then((res) => res.json())
    // -d '{"name":"web","active":true,"events":["push","pull_request"],"config":{"url":"https://example.com/webhook","content_type":"json","insecure_ssl":"0"}}'

    // TODO - Integrate with Database (12 PM)
    // TODO - Integrate Semantic Release
    // TODO - Integrate with Discord (12 PM)
    // TODO - Deploy v1.0.0 on `leo.platipie.com` and staging on `leo-staging.platipie.com`
    // TODO - After this work on OTEL Collection (8 PM)
  }

  console.log({ webhooks })

  const builds = [] as any[]

  return (
    <main className="mx-auto max-w-[1000px]">
      <div className="mt-8 mb-12 flex flex-row gap-4">
        <input
          placeholder="Search"
          className="flex-grow rounded bg-neutral-900 py-2 px-4"
        />
        <div className="rounded bg-neutral-900 py-2 px-24 text-neutral-400">
          Date Range
        </div>
        <div className="col-span-2 rounded bg-neutral-900 py-2 px-8 text-neutral-400">
          Build Status
        </div>
        <div className="col-span-2 rounded bg-neutral-900 py-2 px-8 text-neutral-400">
          Environment
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {builds.map((build: any) => (
          <BuildCard key={build.id} build={build} />
        ))}
      </div>

      <Button className="mt-12">Load More</Button>
    </main>
  )
}

const runData = {
  id: 8229325285,
  name: 'Production Release',
  display_title: 'Add: GitHub Workflows and Prettier (#2)',
  run_number: 1,
  run_attempt: 1,
  event: 'push',
  status: 'completed',
  conclusion: 'failure',
  // ---
  run_started_at: '2024-03-11T07:49:23Z',
  created_at: '2024-03-11T07:49:23Z',
  updated_at: '2024-03-11T07:49:53Z',
  // ---
  workflow_id: 89160928,
  check_suite_id: 21581070940,
  jobs_url:
    'https://api.github.com/repos/AdityaBorkar/leo/actions/runs/8229325285/jobs',
  logs_url:
    'https://api.github.com/repos/AdityaBorkar/leo/actions/runs/8229325285/logs',
  workflow_url:
    'https://api.github.com/repos/AdityaBorkar/leo/actions/workflows/89160928',
  // ---
  head_commit: {
    id: 'e7dbfa95ffe2cd7893f9c10599409e7acec490fb',
    tree_id: '852a22473231d0fda0952dbe383683ccea9b83f0',
    message:
      'Add: GitHub Workflows and Prettier (#2)\n' +
      '\n' +
      '* Create dependabot.yml\r\n' +
      '\r\n' +
      '* update to support pnpm\r\n' +
      '\r\n' +
      '* update actions\r\n' +
      '\r\n' +
      '* workflow job: apply formatting changes\r\n' +
      '\r\n' +
      '* update workflows\r\n' +
      '\r\n' +
      '---------\r\n' +
      '\r\n' +
      'Co-authored-by: AdityaBorkar <AdityaBorkar@users.noreply.github.com>',
    timestamp: '2024-03-11T07:49:20Z',
    author: [Object],
    committer: [Object],
  },
  // ---
  node_id: 'WFR_kwLOLdk9O88AAAAB6oGJ5Q',
  head_branch: 'production',
  head_sha: 'e7dbfa95ffe2cd7893f9c10599409e7acec490fb',
  path: '.github/workflows/production-release.yml',
  check_suite_node_id: 'CS_kwDOLdk9O88AAAAFBlUCXA',
  url: 'https://api.github.com/repos/AdityaBorkar/leo/actions/runs/8229325285',
  html_url: 'https://github.com/AdityaBorkar/leo/actions/runs/8229325285',
  pull_requests: [],
  referenced_workflows: [],
  check_suite_url:
    'https://api.github.com/repos/AdityaBorkar/leo/check-suites/21581070940',
  artifacts_url:
    'https://api.github.com/repos/AdityaBorkar/leo/actions/runs/8229325285/artifacts',
  cancel_url:
    'https://api.github.com/repos/AdityaBorkar/leo/actions/runs/8229325285/cancel',
  rerun_url:
    'https://api.github.com/repos/AdityaBorkar/leo/actions/runs/8229325285/rerun',
  previous_attempt_url: null,
  // actor: {
  //   login: 'AdityaBorkar',
  //   id: 26901046,
  //   node_id: 'MDQ6VXNlcjI2OTAxMDQ2',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/26901046?v=4',
  //   gravatar_id: '',
  //   url: 'https://api.github.com/users/AdityaBorkar',
  //   html_url: 'https://github.com/AdityaBorkar',
  //   followers_url: 'https://api.github.com/users/AdityaBorkar/followers',
  //   following_url:
  //     'https://api.github.com/users/AdityaBorkar/following{/other_user}',
  //   gists_url: 'https://api.github.com/users/AdityaBorkar/gists{/gist_id}',
  //   starred_url:
  //     'https://api.github.com/users/AdityaBorkar/starred{/owner}{/repo}',
  //   subscriptions_url:
  //     'https://api.github.com/users/AdityaBorkar/subscriptions',
  //   organizations_url: 'https://api.github.com/users/AdityaBorkar/orgs',
  //   repos_url: 'https://api.github.com/users/AdityaBorkar/repos',
  //   events_url: 'https://api.github.com/users/AdityaBorkar/events{/privacy}',
  //   received_events_url:
  //     'https://api.github.com/users/AdityaBorkar/received_events',
  //   type: 'User',
  //   site_admin: false,
  // },
  // triggering_actor: {
  //   login: 'AdityaBorkar',
  //   id: 26901046,
  //   node_id: 'MDQ6VXNlcjI2OTAxMDQ2',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/26901046?v=4',
  //   gravatar_id: '',
  //   url: 'https://api.github.com/users/AdityaBorkar',
  //   html_url: 'https://github.com/AdityaBorkar',
  //   followers_url: 'https://api.github.com/users/AdityaBorkar/followers',
  //   following_url:
  //     'https://api.github.com/users/AdityaBorkar/following{/other_user}',
  //   gists_url: 'https://api.github.com/users/AdityaBorkar/gists{/gist_id}',
  //   starred_url:
  //     'https://api.github.com/users/AdityaBorkar/starred{/owner}{/repo}',
  //   subscriptions_url:
  //     'https://api.github.com/users/AdityaBorkar/subscriptions',
  //   organizations_url: 'https://api.github.com/users/AdityaBorkar/orgs',
  //   repos_url: 'https://api.github.com/users/AdityaBorkar/repos',
  //   events_url: 'https://api.github.com/users/AdityaBorkar/events{/privacy}',
  //   received_events_url:
  //     'https://api.github.com/users/AdityaBorkar/received_events',
  //   type: 'User',
  //   site_admin: false,
  // },
  // repository: {
  //   id: 769211707,
  //   node_id: 'R_kgDOLdk9Ow',
  //   name: 'leo',
  //   full_name: 'AdityaBorkar/leo',
  //   private: true,
  //   owner: [Object],
  //   html_url: 'https://github.com/AdityaBorkar/leo',
  //   description:
  //     'Single place to manage Analytics, Performance, Crashes, Infra, Deployments and Alerts.',
  //   fork: false,
  //   url: 'https://api.github.com/repos/AdityaBorkar/leo',
  //   forks_url: 'https://api.github.com/repos/AdityaBorkar/leo/forks',
  //   keys_url: 'https://api.github.com/repos/AdityaBorkar/leo/keys{/key_id}',
  //   collaborators_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/collaborators{/collaborator}',
  //   teams_url: 'https://api.github.com/repos/AdityaBorkar/leo/teams',
  //   hooks_url: 'https://api.github.com/repos/AdityaBorkar/leo/hooks',
  //   issue_events_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/issues/events{/number}',
  //   events_url: 'https://api.github.com/repos/AdityaBorkar/leo/events',
  //   assignees_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/assignees{/user}',
  //   branches_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/branches{/branch}',
  //   tags_url: 'https://api.github.com/repos/AdityaBorkar/leo/tags',
  //   blobs_url: 'https://api.github.com/repos/AdityaBorkar/leo/git/blobs{/sha}',
  //   git_tags_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/git/tags{/sha}',
  //   git_refs_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/git/refs{/sha}',
  //   trees_url: 'https://api.github.com/repos/AdityaBorkar/leo/git/trees{/sha}',
  //   statuses_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/statuses/{sha}',
  //   languages_url: 'https://api.github.com/repos/AdityaBorkar/leo/languages',
  //   stargazers_url: 'https://api.github.com/repos/AdityaBorkar/leo/stargazers',
  //   contributors_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/contributors',
  //   subscribers_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/subscribers',
  //   subscription_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/subscription',
  //   commits_url: 'https://api.github.com/repos/AdityaBorkar/leo/commits{/sha}',
  //   git_commits_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/git/commits{/sha}',
  //   comments_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/comments{/number}',
  //   issue_comment_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/issues/comments{/number}',
  //   contents_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/contents/{+path}',
  //   compare_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/compare/{base}...{head}',
  //   merges_url: 'https://api.github.com/repos/AdityaBorkar/leo/merges',
  //   archive_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/{archive_format}{/ref}',
  //   downloads_url: 'https://api.github.com/repos/AdityaBorkar/leo/downloads',
  //   issues_url: 'https://api.github.com/repos/AdityaBorkar/leo/issues{/number}',
  //   pulls_url: 'https://api.github.com/repos/AdityaBorkar/leo/pulls{/number}',
  //   milestones_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/milestones{/number}',
  //   notifications_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/notifications{?since,all,participating}',
  //   labels_url: 'https://api.github.com/repos/AdityaBorkar/leo/labels{/name}',
  //   releases_url: 'https://api.github.com/repos/AdityaBorkar/leo/releases{/id}',
  //   deployments_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/deployments',
  // },
  // head_repository: {
  //   id: 769211707,
  //   node_id: 'R_kgDOLdk9Ow',
  //   name: 'leo',
  //   full_name: 'AdityaBorkar/leo',
  //   private: true,
  //   owner: [Object],
  //   html_url: 'https://github.com/AdityaBorkar/leo',
  //   description:
  //     'Single place to manage Analytics, Performance, Crashes, Infra, Deployments and Alerts.',
  //   fork: false,
  //   url: 'https://api.github.com/repos/AdityaBorkar/leo',
  //   forks_url: 'https://api.github.com/repos/AdityaBorkar/leo/forks',
  //   keys_url: 'https://api.github.com/repos/AdityaBorkar/leo/keys{/key_id}',
  //   collaborators_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/collaborators{/collaborator}',
  //   teams_url: 'https://api.github.com/repos/AdityaBorkar/leo/teams',
  //   hooks_url: 'https://api.github.com/repos/AdityaBorkar/leo/hooks',
  //   issue_events_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/issues/events{/number}',
  //   events_url: 'https://api.github.com/repos/AdityaBorkar/leo/events',
  //   assignees_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/assignees{/user}',
  //   branches_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/branches{/branch}',
  //   tags_url: 'https://api.github.com/repos/AdityaBorkar/leo/tags',
  //   blobs_url: 'https://api.github.com/repos/AdityaBorkar/leo/git/blobs{/sha}',
  //   git_tags_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/git/tags{/sha}',
  //   git_refs_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/git/refs{/sha}',
  //   trees_url: 'https://api.github.com/repos/AdityaBorkar/leo/git/trees{/sha}',
  //   statuses_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/statuses/{sha}',
  //   languages_url: 'https://api.github.com/repos/AdityaBorkar/leo/languages',
  //   stargazers_url: 'https://api.github.com/repos/AdityaBorkar/leo/stargazers',
  //   contributors_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/contributors',
  //   subscribers_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/subscribers',
  //   subscription_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/subscription',
  //   commits_url: 'https://api.github.com/repos/AdityaBorkar/leo/commits{/sha}',
  //   git_commits_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/git/commits{/sha}',
  //   comments_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/comments{/number}',
  //   issue_comment_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/issues/comments{/number}',
  //   contents_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/contents/{+path}',
  //   compare_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/compare/{base}...{head}',
  //   merges_url: 'https://api.github.com/repos/AdityaBorkar/leo/merges',
  //   archive_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/{archive_format}{/ref}',
  //   downloads_url: 'https://api.github.com/repos/AdityaBorkar/leo/downloads',
  //   issues_url: 'https://api.github.com/repos/AdityaBorkar/leo/issues{/number}',
  //   pulls_url: 'https://api.github.com/repos/AdityaBorkar/leo/pulls{/number}',
  //   milestones_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/milestones{/number}',
  //   notifications_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/notifications{?since,all,participating}',
  //   labels_url: 'https://api.github.com/repos/AdityaBorkar/leo/labels{/name}',
  //   releases_url: 'https://api.github.com/repos/AdityaBorkar/leo/releases{/id}',
  //   deployments_url:
  //     'https://api.github.com/repos/AdityaBorkar/leo/deployments',
  // },
}
