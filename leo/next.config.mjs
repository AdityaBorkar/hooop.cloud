/** @type {import('next').NextConfig} */
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const nextConfig = {
  poweredByHeader: false,
  logging: { fetches: { fullUrl: true } },
  // experimental: {
  //   instrumentationHook: true,
  //   typedRoutes: true,
  // },
}

export default nextConfig
=======
const nextConfig = {};

export default nextConfig;
>>>>>>> aab19bd (init)
=======
const nextConfig = {}

export default nextConfig
>>>>>>> 2b593a1 (workflow job: apply formatting changes)
=======
import withBundleAnalyzer from '@next/bundle-analyzer'
=======
>>>>>>> a530fbf (progress)

const nextConfig = {
  poweredByHeader: false,
  // logging: { fetches: { fullUrl: true } },
  // experimental: {
  //   instrumentationHook: true,
  //   typedRoutes: true,
  // },
}

<<<<<<< HEAD
export default withBundleAnalyzer({
  enabled: true,
  openAnalyzer: false,
  analyzerMode: 'json',
})(nextConfig)
>>>>>>> ec8a0e3 (update progress)
=======
export default nextConfig
>>>>>>> a530fbf (progress)
