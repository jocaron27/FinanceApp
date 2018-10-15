const LiveReloadPlugin = require('webpack-livereload-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './client/index.tsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
      // Stage 2
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
  
      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', { 'loose': false }],
      '@babel/plugin-proposal-json-strings'
    ]
};
