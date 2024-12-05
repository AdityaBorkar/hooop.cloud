export default async function getReposAccessibleByApp(github: {
  userName: string
  accessToken: string
  installationId: number
}) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${github.accessToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }

  const repos = await fetch(
    // `https://api.github.com/installation/repositories`,
    // `https://api.github.com/app/installations/${github.installationId}/access_tokens` // TODO: GENERATE APP INSTALLATION ACCESS TOKEN AND REFRESH IT AND STORE IT IN DATABASE
    `https://api.github.com/user/installations/${github.installationId}/repositories`,
    { headers },
  ).then(async res => {
    const data = await res.json()
    return data.repositories as any[]
  })

  return repos
}
