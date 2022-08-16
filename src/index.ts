import type { Compiler } from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpack from 'webpack'

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
//     const bundler = new Bundler(options)
//     bundler.outputEmptyJS('app')
//     bundler.outputEmptyJS('404')
//     bundler.outputEntryHTML()

// export default ({ Component, pageProps }) => {
//   return <Component {...pageProps} />
// }

// getContent() {
//   return readFileSync(`${__dirname}/entry.mustache`, 'utf-8')
// }
