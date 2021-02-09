<template>
  <div>
    <home-header v-model="currentCategory"></home-header>
    {{ currentCategory }}
  </div>
</template>

<script>
import HomeHeader from "./home-header";
import { createNamespacedHelpers } from "vuex";
import * as Types from "@/store/action-types";

const { mapState, mapMutations } = createNamespacedHelpers("home");

export default {
  data() {
    return {};
  },
  components: {
    HomeHeader,
  },
  computed: {
    ...mapState(["category"]),
    currentCategory: {
      get() {
        // 取值走他
        return this.category; // s-1 全部课程，0 node课程，1 react课程， 2 vue课程
      },
      set(value) {
        // 修改状态走这里 ， 默认会调用mutation更改状态
        this[Types.SET_CATEGORY](value);
      },
    },
  },
  methods: {
    ...mapMutations([Types.SET_CATEGORY]),
  },
};
</script>

<style>
</style>