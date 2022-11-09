import {
  getEntireDepartments,
  getEntireRoles,
} from '@/service/main/main'
import { defineStore } from 'pinia'
import type { IMainState } from './type'

export const useMainStore = defineStore('main', {
  state: (): IMainState => ({
    entireRoles: [],
    entireDepartments: [],
  }),
  actions: {
    async fetchEntireDataAction() {
      const entireRoles = await getEntireRoles()
      this.entireRoles = entireRoles.data.list
      const entireDepartments = await getEntireDepartments()
      this.entireDepartments = entireDepartments.data.list
    },
  },
})
