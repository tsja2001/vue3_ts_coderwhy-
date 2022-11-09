<template>
  <div class="user">
    <UserSearch
      @resetHandler="searchResetHandler"
      @searchHandler="searchHandler"
    ></UserSearch>
    <UserContent ref="userContentRef"></UserContent>
  </div>
</template>

<script setup lang="ts">
import UserSearch from './c-cpns/user-search.vue'
import UserContent from './c-cpns/user-content.vue'
import { ref } from 'vue'

const userContentRef = ref<InstanceType<typeof UserContent>>()

const searchResetHandler = (query: any) => {
  console.log('[ query+++ ] >', query)
  // userRef.value.fetchPageData(query)
}
const searchHandler = (query: any) => {
  console.log('[ query+++ ] >', query)

  userContentRef.value?.fetchPageData(query)
}

</script>

<style lang="less" scoped></style>
