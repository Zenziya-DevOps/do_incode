const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true

  const htmlPlugin = new HtmlWebpackPlugin({
    template: './index.html',
    filename: './index.html'
  });

  return {
    mode: 'development',

    entry: {
      index: { dependOn: 'shared', import: './src/index.js' },
      print: { dependOn: 'shared', import: './src/index.js' },
      shared: 'lodash'
    },

    devtool: 'inline-source-map',

    devServer: {
      contentBase: './dist'
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development'
      })
    ],

    output: {
      filename: './Incode/[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/'
    },

    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },

        {
          test: /\.tsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        },

        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },

        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },

        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        },

        {
          test: /\.(csv|tsv)$/i,
          use: ['csv-loader']
        },
        {
          test: /\.xml$/i,
          use: ['xml-loader']
        },

        {
          test: /\.json$/i,
          type: 'json'
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },

    plugins: [htmlPlugin, new Dotenv()]
  };
};
