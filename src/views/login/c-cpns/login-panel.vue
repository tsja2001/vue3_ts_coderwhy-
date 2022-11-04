<template>
  <div class="login-panel">
    <h2 class="title">tsja后台管理系统</h2>
    <div class="table">
      <el-tabs
        type="border-card"
        :stretch="true"
        v-model="tabSelected"
      >
        <el-tab-pane name="account">
          <AccountPane ref="accountRef"></AccountPane>

          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <div class="text">帐号登陆</div>
            </div>
          </template>
        </el-tab-pane>

        <el-tab-pane name="phone">
          <PhonePane></PhonePane>
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <div class="text">手机登录</div>
            </div>
          </template></el-tab-pane
        >
      </el-tabs>
    </div>
    <div class="select">
      <el-checkbox
        v-model="isRemPassword"
        label="记住密码"
      />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      type="primary"
      class="button"
      @click="loginClick"
      >登陆</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache';
import { ref, watch } from 'vue'
import AccountPane from './account-pane.vue'
import PhonePane from './phone-pane.vue';

// 记住密码
const isRemPassword = ref(localCache.getCache('isRemPassword'))
// 存储记住密码状态
watch(isRemPassword, () => {
  if(isRemPassword.value){
    localCache.setCache('isRemPassword', true)
  }else{
    localCache.setCache('isRemPassword', false)
  }
})


// 当前选择的tab
const tabSelected = ref('account')

const accountRef = ref<InstanceType<typeof AccountPane>>()

const loginClick = () => {
  accountRef.value?.loginAction(isRemPassword.value)
}
</script>
<style lang="less" scoped>
.login-panel {
  margin-top: -100px;
  background-color: #fff;
  // height: 400px;
  padding: 20px 20px;
  width: 350px;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-radius: 8px;
  .table {
    margin-top: 20px;
    width: 100%;
    // &:deep (.
    .label {
      display: flex;
      justify-content: center;
      align-items: center;
      .text {
        margin-left: 5px;
      }
    }
  }

  .select {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
  }
  .button {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
}
</style>
