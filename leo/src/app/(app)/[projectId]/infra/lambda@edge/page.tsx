export default function ProjectInfraLambda() {
  return (
    <main className="px-10">
      <div>
        <div>Last 7 days</div>
      </div>

      <div className="grid grid-cols-3 gap-4 py-6">
        {/* NUMBERS + % ages */}
        <LineGraph title="Invocations, Success, Error (2xx 4xx 5xx others), Timeouts" />
        <LineGraph title="Resource Utilization (CPU, Memory, Network)" />
        <LineGraph title="Provisioned Concurrency, Concurrent Executions" />
        <LineGraph title="Execution Duration + Cold Starts" />
        {/* min. avg. max. */}
      </div>
    </main>
  )
}

function LineGraph(props: { title: string }) {
  return (
    <div className="h-52 rounded-md border border-neutral-800 px-4 py-2 text-neutral-300">
      {props.title}
    </div>
  )
}

// TODO: LEARN

// Recursive invocations dropped
// Iterator age
// Async event age, Async events received, Async events dropped, Async delivery failures, Dead-letter errors
// Cold Starts

// TODO: SEARCH & SUPPORT

// Throughput
// Heap
// Synchronous invocation, Asynchronous invocation, and Event Source Mapping

// Filters: (HTTP Endpoint / Function ID) + Region

// TODO - DEFAULT MOINTORING PERIOD = Last 7 days
