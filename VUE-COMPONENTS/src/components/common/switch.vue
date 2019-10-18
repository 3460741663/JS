<template>
  <div class="switch">
    <!-- <button @click="open">开关</button> -->
    <!-- <button @click="todo">点击</button> -->
    <child></child>
  </div>
</template>

<script>
import child from '@/components/common/child'
export default {
  data () {
    return {
      switch: false
    }
  },
  components: {
    child
  },
  mounted() {
    this.$on('test', (text) => {
      console.log(text)
    })
  },
  methods: {
    // open() {
    //   this.$emit('test', '666')
    // }
  }
}
</script>

<style>

</style>