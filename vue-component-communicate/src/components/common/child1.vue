<template>
  <div id="child1">
    {{msg}}--{{msg2}}
    <button @click="fn">按钮</button>
    <button @click="add">+</button>
    {{count}}
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['msg', 'msg2', 'fn', 'count'],
  methods: {
    add () {
      this.$emit('add')
    }
  }
}
</script>

<style>
#app {
}
</style>
