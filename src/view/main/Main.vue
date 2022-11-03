<template>
  <div class="Main">
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px" class="header">
          <main-header />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/MainMenu/MainMenu.vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
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
}
</style>
