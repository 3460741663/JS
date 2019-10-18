import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const _import_ = file => () => import(`@/pages/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: _import_('Home'),
      meta: {
        title: '在线做实验， 高效学编程 - 实验楼'
      }
    },
    {
      path: '/user/:id',
      name: 'user',
      component: _import_('user/user'),
      meta: {
        title: '实验楼'
      }
    }
  ]
})
