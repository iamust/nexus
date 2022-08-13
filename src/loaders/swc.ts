export default function swcLoader() {
  return [
    {
      loader: 'swc-loader',
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
            jsx: true
          }
        }
      }
    }
  ]
}
