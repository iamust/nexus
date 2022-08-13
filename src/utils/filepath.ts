function getFile(path: string) {
  return path.replace(/^pages/, '.').replace(/[\[\]]/g, '_')
}

function getPattern(path: string) {
  return path
    .replace(/\.js$/, '')
    .replace(/^pages/, '')
    .replace(/index$/, '')
    .replace(/\[([_a-z]+)\]/g, ':$1')
}

function getComponent(path: string) {
  return path.replace(/[\[\]\-\/\.]/g, '_').toUpperCase()
}

export default {
  getComponent,
  getPattern,
  getFile
}
