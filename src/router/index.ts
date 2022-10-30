import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../view/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('../view/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../view/notFound/NotFound.vue')
    }
  ]
})
