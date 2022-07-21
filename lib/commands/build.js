const fs = require('fs-extra')
const trash = require('trash')
const glob = require('tiny-glob')
const Router = require('../router')
const Bundler = require('../bundler')
const command = require('../helpers/command')
const { copyNexusPage } = require('../helpers')

async function getPaths() {
  return await glob('pages/**/*.js')
}

module.exports = command('build', {
  async handler(argv) {
    const paths = await getPaths()
    const router = new Router()

    await fs.ensureDir('.nexus')
    await trash('.nexus/**/*')

    const bundler = Bundler.setup({
      production: true
    })

    for (let path of paths) {
      copyNexusPage(path)
    }

    await router.addPaths(paths)
    await router.outputNexusJS()
    await bundler.bundle()
  }
})
