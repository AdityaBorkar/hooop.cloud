/** @type {import("prettier").Config} */
module.exports = {
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	useTabs: true,
	trailingComma: 'all',
	printWidth: 80,
	experimentalTernaries: true,
	importOrder: [
		'server-only',
		'<THIRD_PARTY_MODULES>|^@/packages(.*)$',
		'^@/schemas(.*)$',
		'^[./|@/]',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	tailwindFunctions: ['clsx', 'tw', 'cva'],
	plugins: [
		require.resolve('@trivago/prettier-plugin-sort-imports'),
		require.resolve('prettier-plugin-tailwindcss'),
	],
}
