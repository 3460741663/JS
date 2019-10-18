<template>
  <button 
  :class="'i-button-size'+size" 
  :disabled="disabled"
  @click="handleClick"
  >按钮</button>
</template>

<script>
// 判断参数是否是其中之一
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
}
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '按钮组件的数据'
    }
  },
  methods: {
    handleClick(event) {
      // console.log(event)
      // this.$emit('on-click', this.msg)
      // console.log(123)
    }
  }
}
</script>

<style>
button{
  outline: none;
  border-radius: 5px;
}
.i-button-sizelarge{
  padding: 12px;  
}
.i-button-sizedefault{
  padding: 8px;
}
.i-button-sizesmall{
  padding: 4px;
}
</style>