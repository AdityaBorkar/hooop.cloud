import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	// logging: { fetches: { fullUrl: true } },
	experimental: {
		ppr: true,
		// typedRoutes: true,
		// reactCompiler: true,
		// instrumentationHook: true,
	},
}

export default withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: false,
	analyzerMode: 'json',
})(nextConfig)
