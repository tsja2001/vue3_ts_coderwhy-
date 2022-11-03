import { LOGIN_TOKEN } from "@/global/constants";
import { localCache } from "@/utils/cache";
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

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if(to.fullPath == '/main' && !token){
    return '/login'
  }

  if(to.fullPath == '/login' && token){
    return '/main'
  }
})
