/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    publicPath: '/assets/', // 指定发布到服务器上，main.js会位于哪个目录下
    path: 'dist/assets/', // 指定main.js的路径
    filename: 'main.js' // 项目编译完成后的出口文件
  },

  debug: false,
  devtool: false,
  entry: './src/components/GalleryByReactApp.js', // 入口文件 ，即从GalleryByReactApp.js开始解析

  stats: {
    colors: true,
    reasons: false
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),  // 把不同文件中相同的部分合并
    new webpack.optimize.UglifyJsPlugin(),  // 压缩js文件
    new webpack.optimize.OccurenceOrderPlugin(), // 按照引用频度排序各个模块
    new webpack.optimize.AggressiveMergingPlugin(), // 提取公共部分的代码段
    new webpack.NoErrorsPlugin() // 保证编辑过程不出错
  ],

  resolve: {

  // 模块解析配置项
    // require('main')解析时，依次寻找main, main.js, main.jsx , 先找到哪个算哪个
    extensions: ['', '.js', '.jsx'],

    // eg: require('../src/styles/main.css') => require('styles/main.css')
    alias: {

    // 为模块解析路径指定一个更加简短的别名
    // __dirname 当前执行脚本所在本机的目录:/Users/Yulia/gallery-by-react

      'styles': __dirname  + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/'
    }
  },

  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}'
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version"]}!sass-loader?outputStyle=expanded'
    }, {
      test:/\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpg|woff|woff2)$/,
      loader: 'url-loader?limit=8192'
    }]
  }
};
