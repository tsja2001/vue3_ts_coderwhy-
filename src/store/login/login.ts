import { loginRequest } from "@/service/login/login";
import { defineStore } from "pinia";
import type { IAccount } from '@/type/login'
import { localCache } from "@/utils/cache";

export const useLoginStore = defineStore('login', {
  state:() => ({
    id: '',
    name: '',
    token: localCache.getCache('token')
  }),
  actions: {
    async login(data: IAccount){
      const res = await loginRequest(data)
      console.log(res.data)
      localCache.setCache('token', res.data.token)

      this.id = res.data.
      this.name = res.data.name
      this.token = res.data.token
    }
  }
})
