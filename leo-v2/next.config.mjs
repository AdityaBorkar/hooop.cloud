import MillionLint from '@million/lint'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  experimental: {
    ppr: true,
    typedRoutes: true,
    // reactCompiler: true,
    // instrumentationHook: true,
  },
  // logging: { fetches: { fullUrl: true } },
}

export default MillionLint.next({ rsc: true })(
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })(nextConfig),
)
