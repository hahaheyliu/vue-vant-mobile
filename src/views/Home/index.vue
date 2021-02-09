<template>
  <div>
    <home-header v-model="value"></home-header>
    {{ value }}
  </div>
</template>

<script>
import HomeHeader from "./home-header";
export default {
  data() {
    // -1 全部课程，0 node课程，1 react课程， 2 vue课程
    return {
      value: -1,
    };
  },
  components: {
    HomeHeader,
  },
};
</script>

<style>
</style>