import * as fb from 'firebase'

class User {
  constructor (id) {
    this.id = id
    console.log(this.id)
  }
}

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async registerUser ({ commit }, { email, password }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const user = await fb.auth().createUserWithEmailAndPassword(email, password)
        commit('setUser', new User(user.uid))
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    async loginUser ({ commit }, { email, password }) {
      // Если уже залогинены, то на выход
      // if (user) {
      //   return
      // }
      commit('clearError')
      commit('setLoading', true)
      try {
        // eslint-disable-next-line no-unused-vars
        const user = await fb.auth().signInWithEmailAndPassword(email, password)
        // let localUser = new User(user.uid)
        // commit('setUser', localUser)
        commit('setLoading', false)
      } catch (error) {
        commit('setLoading', false)
        commit('setError', error.message)
        throw error
      }
    },
    autoLoginUser ({ commit }, payload) {
      commit('setUser', new User(payload.uid))
    },
    logoutUser ({ commit }) {
      fb.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      console.log(state.user)
      return state.user
    },
    isUserLoggedIn (state) {
      return state.user !== null
    }
  }
}
