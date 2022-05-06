import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'nizolan',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

// 解决刷新后vuex清空数据问题
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
