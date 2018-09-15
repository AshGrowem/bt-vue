import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  'Default Grid Tab': 'Tracker',
  activeTab: 0,
  Tracker: {
    Height: 42,
    Fullscreen: true,
    Theme: 'balham',
    Pagination: false,
    Animation: true,
    Virtualisation: true,
  },
  HODLings: {
    Height: 42,
    Fullscreen: true,
    Theme: 'balham',
    Pagination: false,
    Animation: true,
    Virtualisation: true,
    'Remember Grid Changes': true,
  },
  Rebalancer: {
    Height: 42,
    Fullscreen: true,
    Theme: 'balham',
    Pagination: false,
    Animation: true,
    Virtualisation: true,
    'Remember Grid Changes': true,
  },
  Settings: {
    Height: 42,
    Fullscreen: true,
    Theme: 'balham',
    Pagination: false,
    Animation: true,
    Virtualisation: true,
    'Remember Grid Changes': true,
  },
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
