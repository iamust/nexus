import { defineTask } from '@tossdev/click'
import { buildOptions } from '../utils'
import page from '../page'

export const buildTask = defineTask({
  name: 'build',
  about: '!!!!!!',
  handler(args, opts) {
    const config = buildOptions(opts)
  }
})

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
