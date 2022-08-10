import cssLoader from './loaders/css'
import swcLoader from './loaders/swc'

export default function build({ isProd }: { isProd: boolean }) {
  return [
    {
      test: /\.module\.css$/,
      use: cssLoader({ extract: isProd, modules: true })
    },
    {
      test: /\.css$/,
      use: cssLoader({ extract: isProd })
    },
    {
      test: /\.(jsx?|tsx?)$/,
      use: swcLoader()
    },
    {
      test: /\.(png|svg|gif)$/,
      type: 'asset/resource'
    }
  ]
}
