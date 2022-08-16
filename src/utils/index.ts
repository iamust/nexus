import { pathExistsSync } from 'fs-extra'

export function getUserConfig() {
  const path = `${process.cwd()}/nexus.config.js`
  return pathExistsSync(path)
    ? require(path)
    : {}
}
