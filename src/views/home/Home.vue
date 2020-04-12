<!--
 * @Author: liyh
 * @Date: 2020-03-21 14:41:30
 * @LastEditors: liyh
 * @LastEditTime: 2020-04-12 23:12:19
 -->
<template>
  <div class="container">
    <!-- <div class="testrem" @click="toMine">点击跳转toMine</div>
    <div>
      <span @click="setCartName">点击修改cartName</span>
      =>
      <span>{{cartName}}</span>
    </div>
    <div>{{getCarName}}</div>-->
    <div @click="getCookie">获取cookie</div>
    <br />
    <div @click="tologin">登录</div>
    <br />
    <div @click="tologout">退出登录</div>
  </div>
</template>


<script>
import { getAd, getUser_php, getUser_node, login, logout } from "@/service/api";
import { mapState, mapGetters, mapActions } from "vuex";
import { setCookie, getCookie, delCookie } from "@/util/cookie";
import Vue from "vue";
import { Lazyload, Toast } from "vant";
Vue.use(Lazyload);
Vue.use(Toast);
export default {
  name: "Home",
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App",
      swipeImages: [
        require("@/assets/img/banner/2x/1.png"),
        require("@/assets/img/banner/2x/2.png"),
        require("@/assets/img/banner/2x/3.png"),
        require("@/assets/img/banner/2x/4.png"),
        require("@/assets/img/banner/2x/5.png")
      ]
    };
  },
  created() {
    console.log("Home created");
  },
  mounted() {
    console.log("Home mounted");
    // this.ajax_node();
  },
  computed: {
    ...mapGetters({
      getCarName: "cart/getCarName"
    }),
    ...mapState({
      cartName: state => state.cart.cartName
    })
  },
  methods: {
    ...mapActions({
      actionSetCartName: "cart/actionSetCartName" // 将 `this.actionSetCartName()` 映射为 `this.$store.dispatch('actionSetCartName')`
    }),
    getCookie() {
      getUser_node();
    },
    tologin() {
      //TODO
      login({ account: "15361158702", password: "qqq" });
    },
    tologout() {
      logout();
      delCookie("token");
    },
    toMine() {
      this.$router.push({ path: "mine" });
    },
    setCartName() {
      this.actionSetCartName("我是修改后的cartName");
    },
    ajax_node() {
      let xhr = new XMLHttpRequest();
      xhr.open("get", "http://192.168.31.54:8383/getAllUsers.json", true);
      xhr.send();
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            //TODO
          }
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./home.scss";
</style>