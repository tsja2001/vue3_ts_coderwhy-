<template>
  <div class="Main">
    <el-container class="container">
      <el-aside
        class="aside"
        :width="isFold ? '60px' : '200px'"
      >
        <main-menu :isFold="isFold"/>
      </el-aside>
      <el-container>
        <el-header height="50px" class="header">
          <main-header @foldEmit="foldHandler" />
        </el-header>
        <el-main>
          aaa
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/MainMenu/MainMenu.vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import { ref } from 'vue'

const isFold = ref(false)

//header折叠
const foldHandler = (e: boolean) => {
  isFold.value = e
}
</script>
<style lang="less" scoped>
.Main {
  height: 100%;
  .container {
    height: 100%;
  }
}
.header {
  border-bottom: 1px solid #f0f0f0;
}
.aside {
  border-right: 1px solid #f0f0f0;
  transition: width .2s;
}
.text{
  color: #f00;
  :deep(.inner1){
    font-weight: 800;
  }
  .inner2{
    font-weight: 800;
  }
}
</style>
