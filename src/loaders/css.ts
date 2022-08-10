import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const cssExtractLoader = MiniCssExtractPlugin.loader
const cssModulesLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    importLoaders: 1
  }
}

const postcssLoader = 'postcss-loader'
const styleLoader = 'style-loader'
const cssLoader = 'css-loader'

export default function _cssLoader({
  extract,
  modules
}: {
  extract?: boolean
  modules?: boolean
}) {
  return [
    extract ? cssExtractLoader : styleLoader,
    modules ? cssModulesLoader : cssLoader,
    postcssLoader
  ]
}
