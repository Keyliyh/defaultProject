/*
 * @Author: liyh
 * @Date: 2020-03-20 23:34:19
 * @LastEditors: liyh
 * @LastEditTime: 2020-04-02 17:56:57
 */
/**
 * @description: 开发环境配置文件，开发环境主要实现的是热更新,不要压缩代码，完整的sourceMap
 * @param {type}
 * @return:
 */

const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
module.exports = WebpackMerge(webpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8080,
        hot: true,
        contentBase: './dist',
        host: '127.0.0.1',
        disableHostCheck: true
        // proxy: {
        //     '/v1': {
        //         target: 'https://user-notification-api-ms.juejin.im',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // }
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
})

