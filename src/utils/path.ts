


function getPattern(path: string) {
  return path
    .replace(/\.js$/, '')
    .replace(/^pages/, '')
    .replace(/index$/, '')
    .replace(/\[([_a-z]+)\]/g, ':$1')
}

function getFileName(path: string) {
  return path
    .replace(/^pages/, '.')
    .replace(/[\[\]]/g, '_')
}

function getComponentName(path: string) {
  return path.replace(/[\[\]\-\/\.]/g, '_').toUpperCase()
}

// const file = path.
// const depth = path.split('/').length
// const pattern = path
