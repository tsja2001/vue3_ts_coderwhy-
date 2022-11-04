<template>
  <div class="MainHeader">
    <div class="left">
      <el-icon :size="22" @click="foldHandler">
        <component
          :is="isFold ? 'Expand' : 'Fold'"
        ></component>
      </el-icon>
      <div class="text">面包屑</div>
    </div>
    <div class="right">
      <div class="icons">
        <el-icon class="iconItem"
          ><ChatDotSquare
        /></el-icon>
        <el-icon class="iconItem"><Service /></el-icon>
        <el-icon class="iconItem"><Setting /></el-icon>
      </div>
      <div class="mine">
        <el-avatar class="avatar"> avat </el-avatar>
        <!-- <div class="userName"></div> -->
        <el-dropdown>
          <span class="el-dropdown-link userName">
            tsja<el-icon class="el-icon--right"
              ><arrow-down
            /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :icon="User">
                个人中心
              </el-dropdown-item>
              <el-dropdown-item
                :icon="CircleClose"
                @click="exitHandler"
              >
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { CircleClose, User } from '@element-plus/icons-vue'
import { LOGIN_MENU, LOGIN_TOKEN, LOGIN_USERINFO } from '@/global/constants';
import router from '@/router';

const emit = defineEmits(['foldEmit'])

const isFold = ref(false)
const foldHandler = () => {
  isFold.value = !isFold.value
  emit('foldEmit', isFold.value)
}

// 退出登录
const exitHandler = () => {
  localStorage.removeItem(LOGIN_MENU)
  localStorage.removeItem(LOGIN_TOKEN)
  localStorage.removeItem(LOGIN_USERINFO)

  router.push('/login')
}
</script>
<style lang="less" scoped>
.MainHeader {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  // padding: 0 7px;
  .left {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    flex: 1;
  }
  .right {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    .icons {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .iconItem {
        margin-right: 10px;
      }
    }
    .mine {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      .userName {
        font-size: 13px;
        margin-left: 5px;
      }
      .avatar {
        width: 35px;
        height: 35px;
        font-size: 4px;
      }
    }
  }
}
</style>
