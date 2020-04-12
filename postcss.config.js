/*
 * @Author: liyh
 * @Date: 2020-03-21 00:35:19
 * @LastEditors: liyh
 * @LastEditTime: 2020-04-12 23:10:27
 */
module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ['Android >= 4.0', 'iOS >= 8']
        },
        'postcss-pxtorem': {
            rootValue: 75,
            propList: ['*']
        }
    }
}