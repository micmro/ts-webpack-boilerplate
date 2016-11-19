const webpack = require('webpack')
const failPlugin = require('webpack-fail-plugin')
const tslint = require('tslint-loader')

const isProd = process.env.NODE_ENV === 'production'
var prodPlugins = []

//plugins that are only used for prod builds
if (isProd) {
  console.log("Building prod version...")
  prodPlugins = [
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: './dist/main.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  plugins: [
    failPlugin
  ].concat(prodPlugins),
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      // { test: /\.css$/, loader: "style!css" }, // CSS
      { test: /\.less$/, loader: "style!css!less" }, //LESS https://github.com/webpack/less-loader
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file?name=dist/fonts/[name].[ext]'}, // Fonts
      { test: /\.(jpg|png|svg)$/, loader: 'file?name=dist/images/[name].[ext]'} // Images
    ],
    preLoaders: [
      {
        test: /\.ts$/,
        loader: "tslint"
      }
    ]
  },
  tslint: {
    emitErrors: true,
    failOnHint: true
  }
}