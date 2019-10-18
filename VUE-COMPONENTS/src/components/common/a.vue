<template>
  <div class="components-A">
    组件A--{{app.user}}
    <comb></comb>
  </div>
</template>

<script>
import comb from './b.vue'
export default {
  inject: ['app'],
  components: {
    comb
  },
  data () {
    return {
      test: '我是aaaaa'
    }
  },
  provide: {
    name: 'wn'
  }
}
</script>

<style>

</style>