<template>
<div>
  <slide-search :showSearchPage="showSearchPage" />
  <ul class="main">
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
    <li>123456</li>
  </ul>
</div>
</template>

<script>
import SlideSearch from './components/SlideSearch/index'
import HelloWorld from './components/HelloWorld'

export default {
  data () {
    return {
      showSearchPage: false
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    SlideSearch
  },
  // 已经转换为真正 dom
  mounted: function () {
    // ref
    const ul = document.querySelector('.main')
    ul.addEventListener('scroll', () => {
      if (ul.scrollTop === 0) {
        this.showSearchPage = false
      }
      if (ul.scrollTop > 10) {
        this.showSearchPage = true
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;padding: 0;
}
ul {
  height: calc(100vh - 94px);
  overflow: scroll;
}
li {
  margin-top: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
