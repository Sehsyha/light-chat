import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Chat from '@/views/Chat.vue'
import ChooseUser from '@/views/ChooseUser.vue'
import Home from '@/views/Home.vue'
import WaitOnUser from '@/views/WaitOnUser.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/choose-user',
    name: 'choose-user',
    component: ChooseUser
  },
  {
    path: '/wait-on-user',
    name: 'wait-on-user',
    component: WaitOnUser
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
