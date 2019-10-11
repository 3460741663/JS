- vuex数据管理
组件 + 共享数据
1. 共享状态
- this.$store
 Vue.use(Vuex) Vue.$store
- this.$store.state
  new Vue({store})
  store = new Vuex.Store({
    state,
    ...
  })

  myVuex  Vue.use()
  new  myVuex.Store(options)
  options 四大家

- es6的模块化机制
  export default xxx
  index.js Vuex { Store }

- class get 方法
  Store是一个类，四大家族是它的属性
  this.$store 对vue.prototypy扩展后，所有的组件都可以调用
   Vue 钩子函数， beforeCreated 除了它该做做的，再做下vuex的初始化
   Vue.mixin({
     beforeCreated: 
   })
- 让唯一的store对象， state是属性
  beforeCreated vue该怎么样，再多this.$store =
  this Vue单例 根组件
  beforeCreated 之前的代码也要运行，
  Vue.mixin({beforeCreate: vuexInit})
  通过源码 认识到 所有组件都可以访问$store,是因为它已经为vue单例，加入了这个属性
  每个组件里的this->本组件->prototype->vue单例

- this.$store.getters.xxx
  跟state不一样的地方 这里是方法，会返回更具state的新的值
  Object.defineProperty (this.$store.getters, xxx, {
    get: () => {
      数据劫持
      return getterFn(store.state);
    }
  })

  defineProperty 是一个个属性定义
  [key, fn]
  forEachVal()
  registerGetter(this, key, fn)