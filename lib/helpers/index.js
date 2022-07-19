const { join } = require('path')
const { copySync } = require('fs-extra')
const { pathFormat } = require('./format')

module.exports = {
  copyNexusPage(path) {
    const file = pathFormat(path).file()
    copySync(path, join('.nexus', file))
  }
}
