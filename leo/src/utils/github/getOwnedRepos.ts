export default async function getOwnedRepos(github: {
  userName: string
  accessToken: string
}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${github.accessToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }

  const installationId = await fetch(
    'https://api.github.com/user/installations',
    { headers },
  ).then(async (res) => {
    const data = await res.json()
    return data.installations[0].id as number
  })

  const repos = await fetch(
    `https://api.github.com/user/installations/${installationId}/repositories`,
    { headers },
  ).then(async (res) => {
    const data = await res.json()
    return data.repositories as any[]
  })
  const repositories = repos.filter(
    (repo) => repo.owner.login === github.userName,
  )
  // repo.full_name
  return repositories
}
