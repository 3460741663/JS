<template>
  <div>
    <h3>动态渲染.vue文件的组件--display</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import iDisplay from '@/components/display'
import defaultCode from './default-code.js'
export default {
  data() {
    return {
      code: defaultCode
    }
  },
  components: {
    'i-display' : iDisplay
  }
}
</script>

<style>

</style>