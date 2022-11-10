import { deleteUsersById, editUserData, newUserData, postUsersListData } from "@/service/main/system/system";
import type { IUserInfo, IUserListParamas } from "@/service/main/system/type";
import { defineStore } from "pinia";
import type { IState } from "./type";

export const useSystemStore = defineStore('system', {
  state: (): IState => ({
    userList: [],
    totalCount: 0
  }),
  actions: {
    async postUserListAction(data: IUserListParamas){
       const res = await postUsersListData(data)
       this.userList = res.data.list
       this.totalCount = res.data.totalCount
    },

    async deleteUserByIdAction(id: string){
      deleteUsersById(id)
    },

    async postNewUserData(userInfo: IUserInfo){
        console.log('[ userInfo ] >', userInfo)

      newUserData(userInfo)

      this.postUserListAction({
        offset: 0,
        size: 10
      })
    },

    async editUserDataAction(id: number, data: IUserInfo){
      editUserData(id, data)
      // editUserData(id, {
      //  "cellphone": "15566668800"
      // })

      this.postUserListAction({
        offset: 0,
        size: 10
      })
    }
  }
})
