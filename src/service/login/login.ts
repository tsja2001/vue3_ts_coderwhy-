import type { IAccount } from '@/type/login'
import hyRequest from '..'

export const loginRequest = (data: IAccount) => {
  return hyRequest.post({
    url: '/login',
    data
  })
}
