// var str = 'babel';
// var func = s => {
//   document.getElementById('app').innerHTML = `hello ${s}`
// }

// func(str)

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App />',
  components: {App}
})