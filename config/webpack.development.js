const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',
  mode: 'devalopment',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    hot: true,
    static: path.join(__dirname, '../build'),
    open: true,
    devMiddleware: {
      publicPath: '/',
    }
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({
                    overrideBrowserlist: ['last 3 versions']
                  })
                ]
              }
            }
          },
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    publicPath: 'assets',
                },
            },
        ],
    },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../src/pages/index.html'),
      filename: path.join(__dirname, '../build/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}  