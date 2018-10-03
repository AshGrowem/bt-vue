import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  'Default Grid Tab': 'Tracker',
  activeTab: 0,
  activeTabMap: {
    1: false,
    2: false,
    3: false,
    4: false,
  },
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
  setActiveTabMap(state) {
    console.info('boop')
  },
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
}

const getters = {
  activeTabMap(newTabIndex) {
    switch (newTabIndex) {
      case 1:
        return {
          1: true,
          2: false,
          3: false,
          4: false,
        }
      case 2:
        return {
          1: false,
          2: true,
          3: false,
          4: false,
        }
      case 3:
        return {
          1: false,
          2: false,
          3: true,
          4: false,
        }
      case 4:
        return {
          1: false,
          2: false,
          3: false,
          4: true,
        }
      default:
        return {
          1: false,
          2: false,
          3: false,
          4: false,
        }
    }
  },
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
