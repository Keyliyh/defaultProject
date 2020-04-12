<!--
 * @Author: liyh
 * @Date: 2020-03-21 14:44:02
 * @LastEditors: liyh
 * @LastEditTime: 2020-03-22 16:01:52
 -->
<template>
  <div class="mine">
    {{msg}}
    <h2>我也是H2</h2>
    <div>{{cartName}}</div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Mine",
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapGetters({
      getCarName: "cart/getCarName"
    }),
    ...mapState({
      cartName: state => state.cart.cartName
    })
  },
  created() {
    console.log("Mine created");
  },
  mounted() {
    console.log("Mine mounted");
  }
};
</script>

<style lang="scss" scoped>
.mine {
  font-size: 0.4rem;
}
</style>