import hyRequest from '@/service'
import type { IUserListParamas } from './type'

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
