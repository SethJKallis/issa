import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../views/RegisterView.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },

  {
    path: '/admin',
    name: 'admin',
    component: function () {
      return import('../views/AdminPageView.vue')
    }
  },

  {
    path: '/getaway',
    name: 'getaway',
    component: function () {
      return import('../views/GetawaysView.vue')
    }
  },

  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    }
  },

  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
