const { readFileSync } = require('fs')

module.exports = {
  getContent() {
    return readFileSync(`${__dirname}/entry.mustache`, 'utf-8')
  }
}
