export const state = () => ({
  isLoading: false
})

export const getters = {
  getLoading(state) {
    return state.isLoading
  }
}

export const mutations = {
  HANDLE_LOADING(state, status) {
    state.isLoading = status
  }
}

export const actions = {
  showLoading({ commit }) {
    commit("HANDLE_LOADING", true)
  },
  hideLoading({ commit }) {
    commit("HANDLE_LOADING", false)
  },
}