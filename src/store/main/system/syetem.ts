import {
  deleteUsersById,
  editUserData,
  newUserData,
  postDataListData,
  postUsersListData,
  deleteDataById,
  newPageData,
  editPageData,
} from '@/service/main/system/system'
import type {
  IUserInfo,
  IUserListParamas,
} from '@/service/main/system/type'
import { defineStore } from 'pinia'
import type { IState } from './type'

export const useSystemStore = defineStore('system', {
  state: (): IState => ({
    userList: [],
    totalCount: 0,
    list: [],
  }),
  actions: {
    // 查询
    async postUserListAction(data: IUserListParamas) {
      const res = await postUsersListData(data)
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    },

    async postDataListAction(pageName: string, data: any) {
      const res = await postDataListData(pageName, data)
      this.list = res.data.list
      this.totalCount = res.data.totalCount
    },

    // 删除
    async deleteUserByIdAction(id: string) {
      deleteUsersById(id)

      this.postUserListAction({
        offset: 0,
        size: 10,
      })
    },

    async deleteDataByIdAction(
      pageName: string,
      id: string
    ) {
      await deleteDataById(pageName, id)

      this.postDataListAction(pageName, {
        offset: 0,
        size: 10,
      })
    },

    // 增加
    async postNewUserData(userInfo: IUserInfo) {
      newUserData(userInfo)

      this.postUserListAction({
        offset: 0,
        size: 10,
      })
    },

    async postNewDataAction(pageName: string, data: any) {
      await newPageData(pageName, data)

      this.postDataListAction(pageName, {
        offset: 0,
        size: 10,
      })
    },

    // 编辑
    async editUserDataAction(id: number, data: IUserInfo) {
      editUserData(id, data)

      this.postUserListAction({
        offset: 0,
        size: 10,
      })
    },

    async editDataAction(
      pageName: string,
      id: number,
      data: IUserInfo
    ) {
      await editPageData(pageName, id, data)

      this.postDataListAction(pageName, {
        offset: 0,
        size: 10,
      })
    },
  },
})
