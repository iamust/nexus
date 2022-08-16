import { defineTask } from '@tossdev/click'
import { build } from 'vite'
// import page from '../page'

export const buildTask = defineTask({
  name: 'build',
  about: 'Build for production',
  handler(args, opts) {
    async function runTask() {
      await build()
    }

    runTask().catch(console.error)
  }
})

// const config = buildOptions(opts)
// const paths = await getPaths()
// await trash('.nexus/**/*')
// for (let path of paths) {
//   copyNexusPage(path)
// }
// addPaths|paths
// outputNexusJS
// copyNexusPage
// getPaths
// await glob('pages/**/*.js')
// getEntryPath
