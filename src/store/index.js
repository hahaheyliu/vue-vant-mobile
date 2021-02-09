import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules/index'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: { // 公共的状态
  },
  mutations: {
  },
  actions: {
  },
  modules
});
console.log(store.state)
export default store;
