/*
 * @Author: liyh
 * @Date: 2020-03-22 14:14:38
 * @LastEditors: liyh
 * @LastEditTime: 2020-03-22 16:16:52
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import cart from './modules/cart';
const debug = process.env.NODE_ENV !== 'production';
//持久化存储Vuex数据
let handleStore = store => {
    let localStorage = window.localStorage
    if (localStorage.store) {
        store.replaceState(JSON.parse(localStorage.store))
        console.log(store.state);

    }
    store.subscribe((mutation, state) => {
        let oldState = JSON.parse(localStorage.getItem('store'))
        let store = oldState && oldState !== '' ? Object.assign(oldState, state) : state
        localStorage.setItem('store', JSON.stringify(store))
    })
}
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        cart,
    },
    strict: debug,
    plugins: debug ? [createLogger(), handleStore] : [handleStore]
})

export default store;