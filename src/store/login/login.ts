import {
  getUserInfo,
  getUserMenuById,
  loginRequest,
} from '@/service/login/login'
import { defineStore } from 'pinia'
import type { IAccount } from '@/type/login'
import { localCache } from '@/utils/cache'
import { router } from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface IState {
  token: string
  userInfo: any
  userMenu: any[]
}

export const useLoginStore = defineStore('login', {
  state: (): IState => ({
    token: localCache.getCache(LOGIN_TOKEN),
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

      // 获取用户菜单
      const userMenu = await getUserMenuById(
        this.userInfo.id
      )
      this.userMenu = userMenu.data

      router.push('/main')
    },
  },
})
