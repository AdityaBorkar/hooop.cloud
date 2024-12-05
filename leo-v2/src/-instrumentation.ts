import traceExporter from './instrumentation/traceExporter'
import { registerOTel } from '@vercel/otel'

export function register() {
  // registerOTel({
  //   serviceName: 'leo',
  //   traceExporter: new traceExporter(),
  // })
  // console.log('REGISTERED')
}

// export async function register() {
//   if (process.env.NEXT_RUNTIME === 'nodejs') {
//     await import('./instrumentation/node.ts')
//   } else if (process.env.NEXT_RUNTIME === 'edge') {
//     await import('./instrumentation/edge.ts')
//   } else {
//     // TODO - RAISE A ERROR ALERT
//     console.error('UNSUPPORTED RUNTIME: ', process.env.NEXT_RUNTIME)
//   }
// }
