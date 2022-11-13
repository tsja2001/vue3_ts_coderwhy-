import { useLoginStore } from "@/store/login/login"

export const usePermission = (pageName: string) => {
  const loginStore = useLoginStore()

  return !!loginStore.permissionList.find(item => item.includes(pageName))
}
