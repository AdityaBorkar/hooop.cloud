export default function TableStatisticsPage(props: { params: {} }) {
  return (
    <div>
      <div>Auto Scaling Activities</div>
      <div>Availability</div>
      <div>Deadlocks</div>
      <div>Lock Waits</div>
      <div>Query Execution Time</div>
      <div>Query Throughput</div>
      <div>Resource Utilization (Memory / CPU)</div>
      <div>Query Cache</div>
      <div>Index Usage</div>
      <div>Errors: READS / WRITES / Conditional Check Failed</div>
      <div>Transaction Logs</div>
      <div>Database Workload - Peak Usage Time & Peak Periods</div>
      <div>Connection Pooling</div>
      <div>Long Running Transactions</div>
      <div>Cold Starts</div>
      <div>Latency</div>
      <div>Concurrency</div>
      <div>Reads: Usage / Throttled Requests / Throttled Events</div>
      <div>Writes: Usage / Throttled Requests / Throttled Events</div>
      <div>
        INDEX: Reads: Usage / Throttled Events Writes: Usage / Throttled Events
      </div>
      <div>Latency: GET PUT QUERY SCAN</div>
      <div>TTL: Deleted Items</div>
      <div>SCAN: Returned Items Count</div>
      <div>QUERY: Returned Items Count</div>
      <div>Transaction conflict errors</div>
    </div>
  )
}

// Errors and Throttles:
// Client-Side Errors: Monitor the number of client-side errors such as invalid requests or authentication failures.
// Server-Side Errors: Monitor the number of server-side errors such as internal server errors or service unavailable errors.
// Backup and Restore Activity:
// Monitor backup and restore operations to ensure data protection and disaster recovery capabilities meet your SLAs.
// Stream Metrics (if using DynamoDB Streams):
// Monitor the age of records in DynamoDB Streams to ensure timely processing of stream events.
// Read and Write Efficiency:
// Read Efficiency: Monitor the ratio of read capacity units consumed to the number of items read to identify inefficient queries or scans.
// Write Efficiency: Monitor the ratio of write capacity units consumed to the number of items written to identify inefficient write patterns.
// On-Demand Capacity Usage (if using on-demand mode):
// Monitor on-demand capacity usage and associated costs to ensure they remain within budget.
// Auto Scaling Activity:
// Monitor auto-scaling activities to understand how DynamoDB adjusts its capacity based on workload patterns.
// Global Secondary Index (GSI) Activity:
// Monitor read and write activity on global secondary indexes to ensure they are efficiently serving queries and not causing hot partitions.
