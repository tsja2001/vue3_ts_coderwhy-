import hyRequest from '@/service'
import type { IUserInfo, IUserListParamas } from './type'

export function postUsersListData(data: IUserListParamas) {
  return hyRequest.post({
    url: '/users/list',
    data,
  })
}

export function deleteUsersById(id: string) {
  return hyRequest.delete({
    url: '/users/' + id
  })
}

export function newUserData(userInfo: IUserInfo){
  console.log('[ formList ] >', userInfo)
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

export function editUserData(id: number, userInfo: IUserInfo){
  return hyRequest.patch({
    url: '/users/' + id,
    data: userInfo
  })
}
