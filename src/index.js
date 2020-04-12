/*
 * @Author: liyh
 * @Date: 2020-03-20 23:03:07
 * @LastEditors: liyh
 * @LastEditTime: 2020-04-12 23:11:54
 */
import Vue from 'vue';
import './style/reset.css'
import router from './router/index';
import App from './App';
import './util/rem';
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/index.js'

Vue.use(Vant);
console.log(process.env.NODE_ENV)
new Vue({
    render: h => h(App),
    router,
    store,//加入sotre的配置
}).$mount('#app');