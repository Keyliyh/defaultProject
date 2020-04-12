/*
 * @Author: liyh
 * @Date: 2020-03-22 14:21:08
 * @LastEditors: liyh
 * @LastEditTime: 2020-03-22 15:53:58
 */

function wait(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 1000)
    })
}
export default {
    actionSetCartName(context, payload) {
        console.log('payload', payload);
        context.commit('setCartName', payload)
    },
}