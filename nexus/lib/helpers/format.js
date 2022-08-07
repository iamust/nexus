module.exports = {
  pathFormat(string) {
    return {
      file() {
        return string
          .replace(/^pages/, '.')
          .replace(/[\[\]]/g, '_')
      },
      pattern() {
        return string
          .replace(/\.js$/, '')
          .replace(/^pages/, '')
          .replace(/index$/, '')
          .replace(/\[([_a-z]+)\]/g, ':$1')
      },
      component() {
        return string.replace(/[\[\]\-\/\.]/g, '_').toUpperCase()
      }
    }
  }
}
