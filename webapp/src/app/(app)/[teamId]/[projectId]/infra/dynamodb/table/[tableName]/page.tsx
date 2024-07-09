import TableStatisticsPage from './statistics/page'

export default function TablePage(props: {
  params: {
    projectId: string
    tableName: string
  }
}) {
  return <TableStatisticsPage params={props.params} />
}
