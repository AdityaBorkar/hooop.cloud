export default async function getDeployments(
  github: { accessToken: string },
  repoName: string,
) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${github.accessToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }

  const environments = await fetch(
    `https://api.github.com/repos/${repoName}/environments`,
    { headers },
  ).then(async (res) => {
    const data = await res.json()
    return data.environments as any[]
  })

  const envNames = environments.map((env) => env.name)
  return envNames
}
