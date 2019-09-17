import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  }
}
export default new Vuex.Store({
  state,
  mutations
})
