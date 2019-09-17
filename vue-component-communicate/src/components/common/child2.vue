<template>
  <div class="child2">
    <p @click="emit">{{msg}}</p>
    <p @click="emitOther">{{msg2}}</p>
    <button @click="send">传值给child3</button>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      msg: '女主人派发的事情',
      msg2: '女主人又派发事件了',
      toChild3: 'child2给child3的值'
    }
  },
  created () {
    this.$on(['wash_clothes', 'sweep_floor'], (arg) => {
      console.log(arg)
    })
  },
  methods: {
    emit () {
      this.$emit('wash_clothes', ['baby', 'man'])
    },
    emitOther () {
      this.$emit('sweep_floor', 'good')
    },
    send () {
      this.$bus.$emit('toChild3', this.toChild3)
    }
  }
}
</script>

<style scoped>

</style>
