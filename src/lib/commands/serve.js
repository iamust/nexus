const fs = require('fs-extra')
const chokidar = require('chokidar')
const Router = require('../router')
const Bundler = require('../bundler')
const command = require('../helpers/command')
const { copyNexusPage } = require('../helpers')

module.exports = command('serve', {
  async handler(argv) {
    await fs.ensureDir('.nexus')

    const router = new Router()
    const bundler = Bundler.setup()

    chokidar
      .watch('pages/**/*.js')
        .on('add', (path) => {
          copyNexusPage(path)
          router.addRoute({ path })
          router.outputNexusJS().then(() => {})
        })
        .on('change', (path) => {
          copyNexusPage(path)
        })
        .on('unlink', (path) => {
          router.removeRoute({ path })
          router.outputNexusJS().then(() => {})
        })

    await router.outputNexusJS()
    await bundler.serve(argv.p || 3333)
  }
})
