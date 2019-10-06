import * as types from '../type'
const state = {
  showSideBar: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSideBar = status
  }
}

const actions = {
  setShowSiderbar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

const getters = {
  showSideBar: state => state.showSideBar
}

export default {
  state,
  mutations,
  actions,
  getters
}
