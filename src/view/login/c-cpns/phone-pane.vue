<template>
  <div class="account">
    <el-form
      :model="formValue"
      label-width="70px"
      size="large"
      status-icon
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="formValue.name" />
      </el-form-item>
      <el-form-item prop="password" label="验证码">
        <div class="varifyCode">
          <el-input v-model="formValue.password" />
          <el-button class="btn" type="primary" @click="varifyCodeHandler">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, type FormRules } from 'element-plus'
import { reactive, toRaw } from 'vue'

const formValue = reactive({
  name: '',
  password: '',
})

const loginAction = () => {
  console.log(toRaw(formValue))
}

const varifyCodeHandler = () => {
  ElMessage({
    message: '手机号登录功能暂未完成',
    type: 'warning',
  })
}

defineExpose({ loginAction })
</script>
<style lang="less" scoped>
.varifyCode {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  .btn{
    margin-left: 5px;
  }
}
</style>
