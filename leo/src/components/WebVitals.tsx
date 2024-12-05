'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
<<<<<<< HEAD
<<<<<<< HEAD
  // useReportWebVitals((metric) => {
  //   console.log(metric)
  // })
=======
  useReportWebVitals((metric) => {
    console.log(metric)
  })
>>>>>>> ec8a0e3 (update progress)
=======
  // useReportWebVitals((metric) => {
  //   console.log(metric)
  // })
>>>>>>> a530fbf (progress)

  //   useReportWebVitals((metric) => {
  //     const body = JSON.stringify(metric)
  //     const url = 'https://example.com/analytics'

  //     // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  //     if (navigator.sendBeacon) {
  //       navigator.sendBeacon(url, body)
  //     } else {
  //       fetch(url, { body, method: 'POST', keepalive: true })
  //     }
  //   })

  return null
}
