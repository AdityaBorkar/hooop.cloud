module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    'server-only',
<<<<<<< HEAD
<<<<<<< HEAD
    '<THIRD_PARTY_MODULES>|^@/packages(.*)$',
    '^@/actions(.*)$',
    '^[./|@/]',
=======
    '<THIRD_PARTY_MODULES>',
    '^[./|@/]',
    '^@/schemas(.*)$',
>>>>>>> d6c0451 (test workflows)
=======
    '<THIRD_PARTY_MODULES>|^@/packages(.*)$',
    '^@/schemas(.*)$',
    '^[./|@/]',
>>>>>>> a530fbf (progress)
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['clsx', 'tw', 'cva'],
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
}
