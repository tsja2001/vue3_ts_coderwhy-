<template>
  <div class="department">
    <pageSearch
      @searchHandler="searchHandler"
      @resetHandler="resetHandler"
      :formItems="formItems"
    />
    <pageContent
      :contentConfig="contentConfig"
      ref="pageContentRef"
      @newDataHandler="newDataHandler"
      @editUserHandler="editUserHandler"
    >
    </pageContent>
    <pageModal
      ref="pageModalRef"
      :modalConfig="modalConfigComputed"
    />
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/PageSearch/page-search.vue'
import pageContent from '@/components/PageContent/page-content.vue'
import pageModal from '@/components/PageModal/page-modal.vue'
import { computed, ref } from 'vue'
import { formItems } from './search.config'
import { contentConfig } from './content.config'
import { modalConfig } from './modal.config'
import type { IModalConfig } from '@/components/PageModal/type'
import { useMainStore } from '@/store/main/main'
import { usePageContent } from '@/hook/usePageContent'
import { usePageModal } from '@/hook/usePageModal'

// const pageContentRef =
//   ref<InstanceType<typeof pageContent>>()

// const searchHandler = (query: any) => {
//   pageContentRef.value?.fetchPageData(query)
// }
// const resetHandler = (query: any) => {
//   pageContentRef.value?.fetchPageData(query)
// }
// 使用hook代替上面代码
const { pageContentRef, searchHandler, resetHandler } =
  usePageContent()

// const pageModalRef = ref<InstanceType<typeof pageModal>>()

// const newDataHandler = () => {
//   pageModalRef.value?.setDialogVisible(true)
// }

// const editUserHandler = (data: any) => {
//   pageModalRef.value?.setDialogVisible(false, data)
// }
// 使用hook代替上面代码
const { pageModalRef, newDataHandler, editUserHandler } =
  usePageModal()

const modalConfigComputed = computed<IModalConfig>(() => {
  const mainStore = useMainStore()
  const departments = mainStore.entireDepartments.map(
    (item) => ({
      label: item.name,
      value: item.id,
    })
  )

  modalConfig.formItems.forEach((item: any) => {
    if (item.prop === 'parentId') {
      item.options = departments
    }
  })

  return modalConfig
})
</script>

<style scoped></style>
