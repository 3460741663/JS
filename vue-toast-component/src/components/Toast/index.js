import vue from 'vue'
import ToastComponent from './index.vue'
// console.log(ToastComponent)
// 返回一个构造函数
// EditInPlace
// new EditInPlace()
const ToastConstruct = vue.extend(ToastComponent)

function showMessage (msg, duration = 2000) {
  const instance = new ToastConstruct({
    el: document.createElement('div'),
    propsData: {
      msg: msg,
      visible: true
    }
  })
  document.body.appendChild(instance.$el)
  setTimeout(() => {
    instance.visible = false
  }, duration)
}

export default showMessage
