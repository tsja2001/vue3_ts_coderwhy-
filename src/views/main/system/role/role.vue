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
      @editHandler="editHandler"
    >
    </pageContent>
    <pageModal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :otherInfo="otherInfo"
    >
      <template #menuList>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          highlight-current
          @check="treeCheckHandler"
          :props="{ label: 'name', children: 'children' }"
        />
      </template>
    </pageModal>
  </div>
</template>

<script setup lang="ts" name="department">
import pageSearch from '@/components/PageSearch/page-search.vue'
import pageContent from '@/components/PageContent/page-content.vue'
import pageModal from '@/components/PageModal/page-modal.vue'
import { computed, nextTick, ref } from 'vue'
import { formItems } from './search.config'
import { contentConfig } from './content.config'
import { modalConfig } from './modal.config'
import type { IModalConfig } from '@/components/PageModal/type'
import { useMainStore } from '@/store/main/main'
import { usePageContent } from '@/hook/usePageContent'
import { usePageModal } from '@/hook/usePageModal'
import { storeToRefs } from 'pinia'
import { mapMenuListToMenuId } from '@/utils/mapMenus'
import type { ElTree } from 'element-plus'

const mValue = ref()
const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)

const otherInfo = ref({})

// 选择事件
const treeCheckHandler = (e1: any, e2: any) => {
  const menuList = [
    ...e2.checkedKeys,
    ...e2.halfCheckedKeys,
  ]
  otherInfo.value = { menuList }
}

const treeRef = ref<InstanceType<typeof ElTree>>()
const editCallback = (editE: any) => {

  nextTick(() => {
    const res = mapMenuListToMenuId(editE.menuList)
    treeRef.value?.setCheckedKeys(res)
  })
}

const { pageContentRef, searchHandler, resetHandler } =
  usePageContent()
const { pageModalRef, newDataHandler, editHandler } =
  usePageModal(editCallback)
</script>

<style scoped></style>
