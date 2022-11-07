<template>
  <div class="HeaderCrumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-if="breadcrumb.length"
        v-for="item in breadcrumb"
        :to="item.path"
      >
        {{ item.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
import { useRoute } from 'vue-router'
import { mapPathToBreadcrumbs } from '@/utils/mapMenus'
import { computed } from 'vue'

const route = useRoute()
const userMenus = useLoginStore().userMenu

const breadcrumb = computed(() => {
  return mapPathToBreadcrumbs(route.path, userMenus)
})

console.log('[ breadcrumb ] >', breadcrumb)
</script>
<style lang="less" scoped></style>
