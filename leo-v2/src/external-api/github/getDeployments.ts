export default async function getDeployments(
  github: { accessToken: string },
  repoName: string,
) {
  const headers = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${github.accessToken}`,
    'X-GitHub-Api-Version': '2022-11-28',
  }

  // TODO - GET LATEST 5 ONLY
  const deployments = await fetch(
    `https://api.github.com/repos/${repoName}/deployments`,
    { headers },
  ).then(res => res.json())

  const builds = await Promise.all(
    deployments.map(async (deployment: any) => {
      // TODO - GET TRIGGER REFERENCE
      const createdAt = new Date(deployment.created_at)
      const updatedAt = new Date(deployment.updated_at)

      const statuses = await fetch(
        // `https://api.github.com/repos/${repoName}/deployments/${deployment.id}/statuses`,
        deployment.statuses_url,
        { headers },
      ).then(res => res.json())
      const latestState = statuses[0]
      const status = latestState.state
      const url = latestState.target_url

      const runId = url
        .replace(`https://github.com/${repoName}/actions/runs/`, '')
        .split('/')[0]
      const runData = await fetch(
        `https://api.github.com/repos/${repoName}/actions/runs/${runId}`,
        { headers },
      ).then(res => res.json())

      // /repos/{owner}/{repo}/actions/runs/{run_id}/jobs

      console.log({ runId, runData })
      // const title = data.display_title

      // TODO - GET ERRORS FROM `Annotations`
      // TODO - GET JOBS FROM `Job Details`

      return {
        id: deployment.id,
        // deploymentUrl,
        createdAt,
        updatedAt,
        status,
        url,
        duration: updatedAt.valueOf() - createdAt.valueOf(),
        envName: deployment.environment,
        createdBy: {
          userName: deployment.creator.login,
          avatar: deployment.creator.avatar_url,
        },
      }
    }),
  )

  return builds
}
