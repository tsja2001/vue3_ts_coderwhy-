<template>
  <div class="account">
    <el-form
      :model="formValue"
      label-width="70px"
      size="large"
      :rules="rule"
      status-icon
    >
      <el-form-item label="手机号" prop="name">
        <el-input v-model="formValue.name" />
      </el-form-item>
      <el-form-item prop="password" label="验证码">
        <el-input v-model="formValue.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules } from 'element-plus'
import { reactive, toRaw } from 'vue'

const formValue = reactive({
  name: '',
  password: '',
})

const rule: FormRules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
    {
      max: 20,
      min: 3,
      message: '必须是3-20位组成',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
    {
      max: 20,
      min: 3,
      message: '必须是3-20位组成',
      trigger: 'blur',
    },
  ],
}

const loginAction = () => {
  console.log(toRaw(formValue))
}

defineExpose({loginAction})
</script>
<style lang="less" scoped></style>
