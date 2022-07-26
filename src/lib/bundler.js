const ParcelBundler = require('parcel-bundler')
const { outputFileSync } = require('fs-extra')
const entryHtml = require('./files/entry.html')

class Bundler {
  constructor(parcelOptions) {
    this.entryHTML = this.getEntryHTML()
    this.entryPath = this.getEntryPath()
    this.parcelOptions = parcelOptions || {}
  }

  getEntryHTML() {
    return entryHtml.getContent()
  }

  getEntryPath() {
    return `${process.cwd()}/.nexus/index.html`
  }

  outputEntryHTML() {
    outputFileSync(this.entryPath, this.entryHTML)
  }

  outputEmptyJS(file) {
    outputFileSync(`.nexus/${file.replace(/\.js$/, '')}.js`, '')
  }

  static setup(options) {
    const bundler = new Bundler(options)

    bundler.outputEmptyJS('app')
    bundler.outputEmptyJS('404')
    bundler.outputEntryHTML()

    return new ParcelBundler(bundler.entryPath, {
      cacheDir: '.nexus/.cache',
      ...bundler.parcelOptions,
      autoInstall: false
    })
  }
}

module.exports = Bundler
