import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/index.vue'
import loadable from '@/utils/loadable.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lesson',
    name: 'Lesson',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadable(() => import(/* webpackChunkName: "about" */ '@/views/lesson/index.vue'))
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadable(() => import('@/views/profile/index.vue'))
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
