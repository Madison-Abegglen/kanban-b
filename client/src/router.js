import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Boards from './views/Boards.vue'
import BoardV from './views/BoardV.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards
    },
    {
      path: '/boardV/:boardId',
      name: 'boardV',
      component: BoardV
    }
  ]
})
