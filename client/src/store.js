import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

let auth = Axios.create({
  baseURL: 'http://localhost:3000/auth',
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser
    }
  },
  actions: {
    register({ commit }, creds) {
      auth.post('/register', creds)
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(error => {
          console.log('Register Error -', error)
          alert(error)
        })
    },
    login({ commit }, creds) {
      auth.post('/login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
        .catch(error => {
          console.log('Login Error -', error)
          alert(error)
        })
    },
    authenticate({ commit }) {
      auth.get('/authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(error => {
          router.push({ name: 'home' })
        })
    }
  }
})
