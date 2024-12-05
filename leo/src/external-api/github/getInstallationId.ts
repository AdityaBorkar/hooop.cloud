export default async function getInstallationId(github: {
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

  return installationId
}
