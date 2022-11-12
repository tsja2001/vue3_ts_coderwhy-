<template>
  <div class="user">
    <UserSearch
      @resetHandler="searchResetHandler"
      @searchHandler="searchHandler"
    ></UserSearch>
    <UserContent
      ref="userContentRef"
      @newUserHandler="newUserHandler"
      @editHandler="editHandler"
    ></UserContent>
    <UserModal
      ref="userModalRef"
    />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import { ref } from 'vue'
import UserModal from './c-cpns/user-modal.vue'

const userContentRef =
  ref<InstanceType<typeof UserContent>>()

const searchResetHandler = () => {
  userContentRef.value?.fetchPageData()
}
const searchHandler = (query: any) => {
  userContentRef.value?.fetchPageData(query)
}

const userModalRef = ref<InstanceType<typeof UserModal>>()

const newUserHandler = () => {
  userModalRef.value?.setDialogVisible(true)
}
const editHandler = (data: any) => {
  userModalRef.value?.setDialogVisible(false, data)
}
</script>

<style lang="less" scoped></style>
