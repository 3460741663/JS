<template>
  <div class="child3" @click="change">
    {{msg}}
  </div>

</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '点击改变数据'
    }
  },
  created () {
    this.$bus.$on('toChild3', (param) => {
      console.log(param)
    })
  },
  beforeDestroy () {
    this.$bus.$off('toChild3')
  },
  methods: {
    change () {
      this.$emit('fromChild', this.msg)
    }
  }
}
</script>

<style scoped>

</style>
