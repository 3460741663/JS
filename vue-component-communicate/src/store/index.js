import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  count: 1,
  data: '2019.9.20',
  money: 100
}

const mutations = {
  add (state, n = 1) {
    state.count += n
  },
  reduce (state) {
    state.count--
  },
  makeMoney (state) {
    state.money += 1
  }
}
const actions = {
  makeMoneyAction ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    }, 2000)
    console.log('你挣你的钱')
  }
}

const getters = {
  count: function (state) {
    state.count += 100
    return state.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
