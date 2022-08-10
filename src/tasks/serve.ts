import { defineTask } from '@tossdev/click'
import { buildOptions } from '../utils'
import { Bundler } from '../index'

export const serveTask = defineTask({
  name: 'dev',
  about: 'serve',
  handler(args, opts) {
    const config = buildOptions(opts)
    const bundler = new Bundler()
    bundler.serve()
  }
})

// mustache lodash fs-extra trash chokidar
// html-webpack-plugin
// chokidar
//   .watch('pages/**/*.js')
//     .on('add', (path) => {
//       copyNexusPage(path)
//       router.addRoute({ path })
//       router.outputNexusJS().then(() => {})
//     })
//     .on('change', (path) => {
//       copyNexusPage(path)
//     })
//     .on('unlink', (path) => {
//       router.removeRoute({ path })
//       router.outputNexusJS().then(() => {})
//     })
