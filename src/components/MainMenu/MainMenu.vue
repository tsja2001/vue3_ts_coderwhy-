<template>
  <div class="MainMenu">
    <div class="headerIcon">
      <img class="left" src="../../assets/image/logo.svg" />
      <div class="text" v-show="!isFold">Vue3+TS CMS</div>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#fff"
      text-color="#BBC6DA"
      background-color="#01041D"
      :collapse="isFold"
      :default-active="currentId + ''"
    >
      <el-sub-menu
        :index="item.id + ''"
        v-for="item in menu"
        :key="item.id"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon.split('el-icon-')[1]"
          /></el-icon>
          <span class="menuItemTitle">{{ item.name }}</span>
        </template>
        <el-menu-item
          :index="childItem.id + ''"
          v-for="childItem in item.children"
          @click="menuItemHandler(childItem.url)"
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
import router from '@/router';
import { useLoginStore } from '@/store/login/login'
import { mapPathToMenu } from '@/utils/mapMenus';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['isFold'])

const loginStore = useLoginStore()
const menu = loginStore.userMenu

const menuItemHandler = (e: any) => {
  router.push(e)
}

const route = useRoute()
const submenu = mapPathToMenu(route.path, menu)

const currentId = ref( submenu.id)
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
      text-overflow: clip;
      word-break: keep-all;
      width: 125px;
    }
  }
  .left {
    width: 30px;
    height: 30px;
  }
}
.menuItemTitle {
  font-weight: 800;
}
.el-menu {
  border-right: none;
}
.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    // background-color: #0a1a2b;
    background-color: #04112e;
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
