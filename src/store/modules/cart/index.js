/*
 * @Author: liyh
 * @Date: 2020-03-22 14:14:38
 * @LastEditors: liyh
 * @LastEditTime: 2020-03-22 15:10:49
 */
import state from './state.js';
import * as getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}