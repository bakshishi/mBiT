import * as esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import { cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

const args = process.argv.slice(2)
const isProd = args[0] === '--production'

await rimraf('dist')

// Statyczne zasoby (obrazy, favicon, robots.txt) trafiają do dist/ zarówno w trybie dev, jak i produkcyjnym.
if (existsSync('public')) {
  await cp('public', 'dist', { recursive: true })
}

/**
 * Live reload wstrzykiwany wyłącznie w trybie deweloperskim (nie trafia do wersji produkcyjnej).
 */
const devReloadBanner =
  "new EventSource('/esbuild').addEventListener('change', () => location.reload())"

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  banner: isProd ? {} : { js: devReloadBanner },
  loader: {
    '.html': 'copy',
    '.png': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
}

if (isProd) {
  await esbuild.build(esbuildOpts)
} else {
  const ctx = await esbuild.context(esbuildOpts)
  await ctx.watch()
  const { hosts, port } = await ctx.serve()
  console.log(`Running on:`)
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`)
  })
}
