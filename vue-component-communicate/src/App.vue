<template>
  <div id="app">
    <router-view/>
    <!-- <child1 :msg="msg1" :msg1="msg2" :fn="appFu" :count="count" @addCount="countAdd"></child1>
    <child2></child2>
    <child3 @fromChild="fromChild"></child3>
    <span>{{msg}}</span> -->
  </div>
</template>

<script>
import child1 from '@/components/common/child1'
import child2 from '@/components/common/child2'
import child3 from '@/components/common/child3'
export default {
  name: 'App',
  components: {
    child1,
    child2,
    child3
  },
  data () {
    return {
      msg1: '给child1的礼物',
      msg2: '再次个child1的礼物',
      count: 0,
      msg: '父组件默认数据'
    }
  },
  methods: {
    appFu () {
      this.count++
    },
    countAdd () {
      this.count++
    },
    fromChild (e) {
      console.log(e)
      this.msg = e
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
