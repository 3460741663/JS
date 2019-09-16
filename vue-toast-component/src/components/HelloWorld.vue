<template>
  <div>
    <button @click="handleToast">购买</button>
    <!-- v-bind v-show v-if指令 -->
    <!-- <toast msg="测试弹窗1" :visible="visible"/> -->

  </div>
</template>

<script>
// import Toast from './Toast/index'
import showMessage from './Toast/index.js'
export default {
  name: 'HelloWorld',
  methods: {
    handleToast () {
      // this.visible = true
      // setTimeout(() => {
      //   this.visible = false
      // }, 3000)
      showMessage('没到开售时间')
    }
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
<style scoped>
</style>
