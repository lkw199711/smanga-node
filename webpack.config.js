/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.ts',
    // cats: './src/cats/cats.controller.ts',
  },
  target: 'node',
  // 置为空即可忽略webpack-node-externals插件
  externals: {},
  module: {
    // noParse: /sql.js/,
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'ts-loader',
          options: { transpileOnly: true },
        },
        exclude: /node_modules/,
      },
    ],
  },
  // 打包后的文件名称以及位置
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist-electron'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  plugins: [
    // 需要进行忽略的插件
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          '@fastify/static',
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
          '@nestjs/websockets/socket-module',
          'cache-manager',
          'class-validator',
          'class-transformer',
        ];
        if (!lazyImports.includes(resource)) {
          return false;
        }
        try {
          require.resolve(resource, {
            paths: [process.cwd()],
          });
        } catch (err) {
          return true;
        }
        return false;
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    //     new CopyPlugin({
    //       patterns: [{
    //         //  from: './node_modules/sql.js/dist/sql-wasm.wasm'
    //      }]
    //   }),
  ],
//   optimization: {
//     splitChunks: {
//       chunks: 'all', // 启用代码分割的范围，'all' 表示所有的模块都会被分割
//       cacheGroups: {
//         // 创建一个公共的模块组
//         commons: {
//           name: 'commons', // 公共模块的名称
//           chunks: 'initial', // 控制哪些模块被包含进公共模块中，'initial' 表示只有初始块会被提取
//           minChunks: 2, // 模块被引用次数超过该值时，才会被提取到公共模块中
//         },
//       },
//     },
//   },
};
