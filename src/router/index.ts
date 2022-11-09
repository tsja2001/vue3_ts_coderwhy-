import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { firstUrl } from '@/utils/mapMenus'
import {
  createRouter,
  createWebHashHistory,
} from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue'),
    },
    {
      path: '/main',
      component: () => import('../views/main/Main.vue'),
      name: 'main'
    },
    {
      path: '/:pathMatch(.*)',
      component: () =>
        import('../views/notFound/NotFound.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if ((to.fullPath == '/main '|| to.fullPath ==  '/main/') && !token) {
    return '/login'
  }

  if (to.fullPath == '/login' && token) {
    return '/main'
  }

  if(to.fullPath == '/main' || to.fullPath == '/main/'){
    // console.log('[ 111 ] >', 111)
    // console.log('[ firstUrl ] >', firstUrl)
    return firstUrl
  }
})

export default router
