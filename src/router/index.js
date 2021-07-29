import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MediaList from '../views/media/MediaList.vue'
import CreateMedia from '../views/media/CreateMedia.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/media',
    name: 'media list',
    component: MediaList
  },
  {
    path: '/create',
    name: 'create media',
    component: CreateMedia
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
