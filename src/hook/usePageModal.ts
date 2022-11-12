import { ref } from 'vue'
import type pageModal from '@/components/PageModal/page-modal.vue'

type editCBType = (data: any) => any

export const usePageModal = (editCallback?: editCBType) => {
  const pageModalRef = ref<InstanceType<typeof pageModal>>()

  const newDataHandler = () => {
    pageModalRef.value?.setDialogVisible(true)
  }

  const editHandler = (data: any) => {

    pageModalRef.value?.setDialogVisible(false, data)
    if(editCallback) editCallback(data)
  }

  return {
    pageModalRef,
    newDataHandler,
    editHandler,
  }
}
