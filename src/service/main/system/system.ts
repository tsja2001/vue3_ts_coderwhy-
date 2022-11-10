import hyRequest from '@/service'
import type { IUserInfo, IUserListParamas } from './type'

export function postUsersListData(data: IUserListParamas) {
  return hyRequest.post({
    url: '/users/list',
    data,
  })
}

// 通用查
export function postDataListData(pageName:string, data: any) {
  return hyRequest.post({
    url: `/${pageName}/list`,
    data,
  })
}

export function deleteUsersById(id: string) {
  return hyRequest.delete({
    url: '/users/' + id
  })
}

// 通用删
export function deleteDataById(pageName:string, id: string) {
  return hyRequest.delete({
    url: `/${pageName}/${id}`
  })
}

export function newUserData(userInfo: IUserInfo){
  return hyRequest.post({
    url: '/users',
    data: userInfo
  })
}

// 通用新建
export function newPageData(pageName:string, data: any){
  return hyRequest.post({
    url: `/${pageName}`,
    data: data
  })
}

export function editUserData(id: number, userInfo: IUserInfo){
  return hyRequest.patch({
    url: '/users/' + id,
    data: userInfo
  })
}

// 通用编辑
export function editPageData(pageName:string, id: number, data: any){
  return hyRequest.patch({
    url: `/${pageName}/${id}`,
    data: data
  })
}
