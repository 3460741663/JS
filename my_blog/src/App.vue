<template>
  <div id="app">
    <div id="nav">
      <Nav></Nav>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// import Component from 'vue-class-component'
import Nav from "@/components/nav.vue";
@Component({
  components: {
    Nav,
  }
})
export default class App extends Vue {

}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
