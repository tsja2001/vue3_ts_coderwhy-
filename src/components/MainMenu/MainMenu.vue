<template>
  <div class="MainMenu">
    <div class="headerIcon">
      <img class="left" src="../../assets/image/logo.svg" />
      <div class="text">Vue3+TS CMS</div>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#fff"
      text-color="#BBC6DA"
      background-color="#01041D"
      :default-active="menu[0].children[0].id + ''"
    >
      <!-- @open="handleOpen"
      @close="handleClose" -->

      <el-sub-menu
        :index="item.id + ''"
        v-for="item in menu"
        :key="item.id"
      >
        <template #title>
          <el-icon> <component :is="item.icon.split('el-icon-')[1]" /></el-icon>
          <!-- <el-icon> <el-icon-monitor/></el-icon> -->
          <!-- <el-icon> <template :is="item.icon"></template></el-icon> -->
          <span class="menuItemTitle">{{ item.name }}</span>
        </template>
        <el-menu-item
          :index="childItem.id + ''"
          v-for="childItem in item.children"
        >
        <template #title>
          <div class="item">
            {{ childItem.name }}
          </div>
        </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { pinia } from '@/store'
import { useLoginStore } from '@/store/login/login'
import { storeToRefs } from 'pinia'
import { toRaw } from 'vue'

const loginStore = useLoginStore()
const menu = loginStore.userMenu
</script>
<style lang="less" scoped>
.MainMenu {
  width: 100%;
  height: 100%;
  background-color: #01041d;
  .headerIcon {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    .text {
      font-weight: 800;
      font-size: 18px !important;
      color: white;
    }
  }
  .left {
    width: 30px;
    height: 30px;
  }
}
.menuItemTitle{
  font-weight: 800;
}
.el-menu{
  border-right: none;
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    // background-color: #0a1a2b;
    background-color: #04112E;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #073d77;
    // background-color: #04112E;
    font-weight: 600;
  }
}
</style>
