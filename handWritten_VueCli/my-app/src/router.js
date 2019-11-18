import Vue from 'vue'
import Router from 'vue-router'
import Login from './pages/login.vue'
import Home from './pages/home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
export default router