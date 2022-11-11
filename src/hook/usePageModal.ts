import { ref } from 'vue'
import type pageModal from '@/components/PageModal/page-modal.vue'

export const usePageModal = () => {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()

  const newDataHandler = () => {
    pageModalRef.value?.setDialogVisible(true)
  }

  const editUserHandler = (data: any) => {
    pageModalRef.value?.setDialogVisible(false, data)
  }

  return {
    pageModalRef,
    newDataHandler,
    editUserHandler,
  }
}
