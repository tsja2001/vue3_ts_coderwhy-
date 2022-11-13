<template>
  <div class="department">
    <pageSearch
      @searchHandler="searchHandler"
      @resetHandler="resetHandler"
      :searchConfig="searchConfig"
    />
    <pageContent
      :contentConfig="contentConfig"
      ref="pageContentRef"
      @newDataHandler="newDataHandler"
      @editHandler="editHandler"
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
import { computed } from 'vue'
import { searchConfig } from './search.config'
import { contentConfig } from './content.config'
import { modalConfig } from './modal.config'
import type { IModalConfig } from '@/components/PageModal/type'
import { useMainStore } from '@/store/main/main'
import { usePageContent } from '@/hook/usePageContent'
import { usePageModal } from '@/hook/usePageModal'

const { pageContentRef, searchHandler, resetHandler } =
  usePageContent()
const { pageModalRef, newDataHandler, editHandler } =
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
