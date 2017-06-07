/* This webpack config is based on https://github.com/krasimir/webpack-library-starter */

const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

let libraryName = 'journey';
let plugins = [];
let outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  context: __dirname,
  entry: [
    __dirname + '/src/index.js'
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    inline: true
  },
  output: {
    path: __dirname + '/build',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
