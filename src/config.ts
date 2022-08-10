import type { Configuration } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackManifestPlugin } from 'webpack-manifest-plugin'
import rules from './rules'

type NexusConfig = Configuration

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
  const outDir = config.outDir || 'out'
  const serverPort = 3323
  const serverHmr = !isProd
  const plugins = [
    new WebpackManifestPlugin({}),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
  const nexusConfig: NexusConfig = {
    entry: {
      nexus: './index.js'
    },
    output: {
      path: `${root}/${outDir}`,
      filename: isProd ? '[name].[contenthash].js' : '[name].js'
    },
    devtool: false,
    devServer: {
      hot: serverHmr,
      port: serverPort
    },
    module: {
      rules: rules({ isProd })
    },
    plugins,
  }
}

// build: {
//   manifest: boolean
//   minify: boolean
//   assetsDir: string
// }
// defaultLoaders
// defaultConfig
