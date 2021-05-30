const path = require('path')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    include: [path.resolve(__dirname, '../src')],
    exclude: [/node_modules/, /.*.spec.ts$/],
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  })
  config.module.rules.push({
    test: /\.png$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8000,
        },
      },
    ],
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return {
    ...config,
    node: {
      fs: 'empty',
    },
  }
}
