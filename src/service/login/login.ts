import type { IAccount } from '@/type/login'
import hyRequest from '..'

export const loginRequest = (data: IAccount) => {
  return hyRequest.post({
    url: '/login',
    data
  })
}

export const getUserInfo = (id: number) => {
  return hyRequest.get({
    url: '/users/' + id
  })
}

export const getUserMenuById = (id: number) => {
  return hyRequest.get({
    url: `/role/${id}/menu`
  })
}
