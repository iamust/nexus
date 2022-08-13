import glob from 'fast-glob'
import mustache from 'mustache'
import sortBy from 'lodash/sortBy'
import filepath from './utils/filepath'
import { readFileSync, outputFileSync } from 'fs-extra'

type Route = {
  file: string
  depth: number
  pattern: string
  component: string
}

function getPaths() {
  return glob.sync('./pages/**/*.{tsx,jsx}')
}

function getMainJS() {
  return `${process.cwd()}/.nexus/main.js`
}

function getTemplate() {
  return readFileSync(`${__dirname}/files/nexus.mustache`, 'utf-8')
}

function outputNexusJS(routes: Route[]) {
  const data = mustache.render(getTemplate(), { routes })
  outputFileSync(getMainJS(), data)
}

class Page {
  private _routes: Route[]

  constructor() {
    for (const path of getPaths()) {
      this.addRoute(path)
    }
  }

  paths() {
    return getPaths()
  }

  routes() {
    return sortBy(this._routes, ['depth', 'file']).filter(
      ({ file }) => !/[404|app]\.js$/.test(file)
    )
  }

  private addRoute(path: string) {
    this._routes.push({
      file: filepath.getFile(path),
      depth: path.split('/').length,
      pattern: filepath.getPattern(path),
      component: filepath.getComponent(path)
    })
  }

  private removeRoute(path: string) {
    const file = filepath.getFile(path)
    this._routes = this._routes.filter((route) => route.file != file)
  }
}
