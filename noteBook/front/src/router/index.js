import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRegister from '@/components/register/StarRegister'
import noteClass from '@/components/noteClass/noteClass'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StaStarLoginrBanner',
      component: StarLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: StarRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteClass',
      name: 'noteClass',
      component: noteClass,
      meta: {
        title: '笔记分类'
      }
    }
  ]
})
