
const root = process.cwd()
const mode = process.env.NODE_ENV || 'development'

export interface UserConfig {
  basePath?: string
  cacheDir?: string
  distDir?: string
  outDir?: string
  devtool?: boolean
}

export function defineConfig(config: UserConfig) {
  const isProd = mode === 'production'
}
