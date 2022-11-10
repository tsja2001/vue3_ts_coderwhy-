<template>
  <div class="department">
    <!-- <pageSearch @searchHandler="searchHandler" /> -->
    <pageSearch
      @searchHandler="searchHandler"
      :formItems="formItems"
      />
    <pageContent
      ref="pageContentRef"
      @newDataHandler="newDataHandler"
      @editUserHandler="editUserHandler"
    />
    <pageModal ref="pageModalRef" />
  </div>
</template>

<script setup lang="ts" name="department">
// import pageSearch from './c-cpns/page-search.vue'
import pageSearch from '@/components/PageSearch/page-search.vue'
import pageContent from './c-cpns/page-content.vue'
import pageModal from './c-cpns/page-modal.vue'
import { ref } from 'vue'
import { formItems } from './search.config'

const pageContentRef =
  ref<InstanceType<typeof pageContent>>()

const searchHandler = (query: any) => {
  pageContentRef.value?.fetchPageData(query)
}

const pageModalRef = ref<InstanceType<typeof pageModal>>()

const newDataHandler = () => {
  pageModalRef.value?.setDialogVisible(true)
}

const editUserHandler = (data: any) => {
  pageModalRef.value?.setDialogVisible(false, data)
}
</script>

<style scoped></style>
