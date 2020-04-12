/*
 * @Author: liyh
 * @Date: 2020-03-21 01:27:54
 * @LastEditors: liyh
 * @LastEditTime: 2020-03-21 14:45:04
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home/Home.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/mine",
            name: "Mine",
            component: () => import("@/views/mine/Mine.vue")
        },
    ]
});
