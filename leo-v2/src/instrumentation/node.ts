import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import { Resource } from '@opentelemetry/resources'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node'
import { SEMRESATTRS_SERVICE_NAME } from '@opentelemetry/semantic-conventions'

const sdk = new NodeSDK({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'next-app',
  }),
  spanProcessor: new SimpleSpanProcessor(new OTLPTraceExporter()),
})

sdk.start()

// TODO - CONNECT WITH custom OpenTelemetry exporter

// TODO: Example Implementation on API endpoint / function:

// import { trace } from '@opentelemetry/api'

// export async function fetchGithubStars() {
//   return await trace
//     .getTracer('nextjs-example')
//     .startActiveSpan('fetchGithubStars', async (span) => {
//       try {
//         return await getValue()
//       } finally {
//         span.end()
//       }
//     })
// }
