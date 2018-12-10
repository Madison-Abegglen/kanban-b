import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

let auth = Axios.create({
  baseURL: 'http://localhost:3000/auth',
  timeout: 3000,
  withCredentials: true
})

let boards = Axios.create({
  baseURL: 'http://localhost:3000/api/boards',
  timeout: 3000,
  withCredentials: true
})

let lists = Axios.create({
  baseURL: 'http://localhost:3000/api/lists',
  timeout: 3000,
  withCredentials: true
})

let tasks = Axios.create({
  baseURL: 'http://localhost:3000/api/tasks',
  timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    boards: []
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser
    },
    setBoards(state, boards) {
      state.boards = boards
    }
  },
  actions: {
    // ----- USER ACTIONS -----
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
    logout({ commit }) {
      auth.delete('/logout')
        .then(res => {
          commit('setUser', {})
          router.push({ name: 'home' })
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
    },

    // ----- BOARD ACTIONS -----
    getBoards({ commit }, authorId) {
      boards.get('/', authorId)
        .then(res => {
          commit('setBoards', res.data)
        })
    }
  }
})
