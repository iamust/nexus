import webpack from 'webpack'
import type { Compiler } from 'webpack'
import WebpackDevServer from 'webpack-dev-server'

export class Bundler {
  private readonly compiler: Compiler

  constructor() {
    this.compiler = webpack({})
  }

  bundle() {
  }

  serve() {
    const server = new WebpackDevServer({}, this.compiler)
    server.start()
  }
}

//   outputEntryHTML() {
//     outputFileSync(this.entryPath, this.entryHTML)
//   outputEmptyJS(file) {
//     outputFileSync(`.nexus/${file.replace(/\.js$/, '')}.js`, '')
//   static setup(options) {
//     const bundler = new Bundler(options)
//     bundler.outputEmptyJS('app')
//     bundler.outputEmptyJS('404')
//     bundler.outputEntryHTML()
//     return new ParcelBundler(bundler.entryPath, {
//       cacheDir: '.nexus/.cache',
// export default ({ Component, pageProps }) => {
//   return <Component {...pageProps} />
// }

// copyNexusPage(path) {
//   const file = pathFormat(path).file()
//   copySync(path, join('.nexus', file))
// getContent() {
//   return readFileSync(`${__dirname}/entry.mustache`, 'utf-8')
// }
