const Mustache = require('mustache')
const sortBy = require('lodash/sortBy')
const { readFileSync } = require('fs')
const { outputFile } = require('fs-extra')
const { pathFormat } = require('./helpers/format')

class Router {
  constructor() {
    this._routes = []
    this.nexusJS = this.getNexusJS()
    this.nexusPath = this.getNexusPath()
  }

  get routes() {
    return sortBy(this._routes, ['depth', 'file'])
      .filter(({ file }) => !/[404|app]\.js$/.test(file))
  }

  async addPaths(paths) {
    for (let path of paths) {
      this.addRoute({ path })
    }
  }

  addRoute({ path }) {
    this._routes.push({
      file: pathFormat(path).file(),
      depth: path.split('/').length,
      pattern: pathFormat(path).pattern(),
      component: pathFormat(path).component()
    })
  }

  removeRoute({ path }) {
    const file = pathFormat(path).file()
    this._routes = this._routes.filter(route => route.file != file)
  }

  getNexusJS() {
    return readFileSync(`${__dirname}/files/nexus.mustache`, 'utf-8')
  }

  getNexusPath() {
    return `${process.cwd()}/.nexus/nexus.js`
  }

  renderNexusJS() {
    return Mustache.render(this.nexusJS, { routes: this.routes })
  }

  async outputNexusJS() {
    await outputFile(this.nexusPath, this.renderNexusJS())
  }
}

module.exports = Router
