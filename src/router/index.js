import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/rechercher',
    name: 'Rechercher',
    component: () => import(/* webpackChunkName: "Recherche" */ '../views/Rechercher.vue')
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: () => import(/* webpackChunkName: "Favoris" */ '../views/Favoris.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router