<template>
  <button @click="handleDispatch">派发事件</button>
</template>

<script>
export default {
  methods: {
    handleDispatch() {
      this.$dispatch('test', 'Hello,Vue.js')
    }
  }
}
</script>

<style>

</style>