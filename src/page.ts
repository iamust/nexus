import glob from 'fast-glob'

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

  private addRoute(path: string) {


// ({  }) {
//   this._routes.push({
//     : pathFormat(path).pattern(),
//     component: pathFormat(path).component()
  }

  private removeRoute(path: string) {

//   const file = pathFormat(path).file()
//   this._routes = this._routes.filter(route => route.file != file)

  }
}


// get routes() {
//   return sortBy(this._routes, ['depth', 'file'])
//     .filter(({ file }) => !/[404|app]\.js$/.test(file))

// () {
//   return readFileSync(`${__dirname}/files/nexus.mustache`, 'utf-8')
// getNexusPath() {
// renderNexusJS() {
//   return Mustache.render(this.nexusJS, { routes: this.routes })
// async outputNexusJS() {
//   await outputFile(this.nexusPath, this.renderNexusJS())
