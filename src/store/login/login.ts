import {
  getUserInfo,
  getUserMenuById,
  loginRequest,
} from '@/service/login/login'
import { defineStore } from 'pinia'
import type { IAccount } from '@/type/login'
import { localCache } from '@/utils/cache'
import { router } from '@/router'
import {
  LOGIN_MENU,
  LOGIN_TOKEN,
  LOGIN_USERINFO,
} from '@/global/constants'
import type { RouteRecordRaw } from 'vue-router'
import { mapMenuToRouters } from '@/utils/mapMenus'

interface IState {
  token: string
  userInfo: any
  userMenu: any[]
}

export const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: '',
    userInfo: {},
    userMenu: [],
  }),
  actions: {
    async login(data: IAccount) {
      // 发送登陆请求
      const res = await loginRequest(data)
      localCache.setCache(LOGIN_TOKEN, res.data.token)
      this.token = res.data.token

      // 获取用户详细信息
      const userInfo = await getUserInfo(res.data.id)
      this.userInfo = userInfo.data
      localCache.setCache(LOGIN_USERINFO, userInfo.data)

      // 获取用户菜单
      const userMenu = await getUserMenuById(
        this.userInfo.id
      )
      this.userMenu = userMenu.data
      localCache.setCache(LOGIN_MENU, userMenu.data)

      // 路由动态添加
      // console.log('[ userMenu ] >', userMenu)
      const routes = mapMenuToRouters(userMenu.data)
      routes.forEach((item) =>
        router.addRoute('main', item)
      )

      router.push('/main')
    },

    loadLoaclCacheAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const userInfo = localCache.getCache(LOGIN_USERINFO)
      const userMenu = localCache.getCache(LOGIN_MENU)
      if (token && userInfo && userMenu) {
        this.token = token
        this.userInfo = userInfo
        this.userMenu = userMenu

        const routes = mapMenuToRouters(userMenu)
        routes.forEach((item) =>
          router.addRoute('main', item)
        )
      }
    },
  },
})
