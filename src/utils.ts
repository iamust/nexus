import { pathExistsSync } from 'fs-extra'

export function getUserConfig() {
  const path = `${process.cwd()}/nexus.config.js`
  return pathExistsSync(path)
    ? require(path)
    : {}
}

// import fs from 'fs-extra'
// import chokidar from 'chokidar'
// export default new Page()
// function copyNexusPage(path: string) {
//   const file = filepath.getFile(path)
//   fs.copyFileSync(path, `.nexus/${file}`)
// }
//   watch() {
//     chokidar
//       .watch('pages/**/*.{tsx,jsx}')
//       .on('add', (path) => {
//         copyNexusPage(path)
//         this.addRoute(path)
//         // outputNexusJS(this.routes())
//       })
//       .on('change', (path) => {
//         copyNexusPage(path)
//       })
//       .on('unlink', (path) => {
//         this.removeRoute(path)
//         // outputNexusJS(this.routes())
//       })
//   }
