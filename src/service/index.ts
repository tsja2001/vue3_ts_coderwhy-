import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import HYRequest from './request'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    // 请求拦截器
    requestSuccessFn: (config) => {
      const token = localCache.getCache(LOGIN_TOKEN)
      if(config.headers && token){
        config.headers.Authorization = token
      }
      return config
    },
  },
})

export default hyRequest
