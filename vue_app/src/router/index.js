import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Detail from '../views/Detail.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    //name: 'Home',
    component: Home
  },
  {
    path: '/find',
    
    component: Find
  },
  {
    path: '/order',
   
    component: Home
  },
  {
    path: '/mine',
    
    component: Home
  },
  {
    path:'/detail/:pageNumber',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  linkActiveClass:'active',
  routes
})

export default router
