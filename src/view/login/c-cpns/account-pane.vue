<template>
  <div class="account">
    <el-form
      :model="formValue"
      label-width="70px"
      size="large"
      :rules="rule"
      status-icon
      ref="formRef"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="formValue.name" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input v-model="formValue.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElForm, ElMessage } from 'element-plus'
import type { FormRules } from 'element-plus'
import { reactive, ref, toRaw } from 'vue'
import { useLoginStore } from '@/store/login/login'
import type { IAccount } from '@/type/login'

const formValue = reactive<IAccount>({
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

const formRef = ref<InstanceType<typeof ElForm>>()
const loginStore = useLoginStore()
const loginAction = () => {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      loginStore.login(toRaw(formValue))
    } else {
      ElMessage({
        message: '请填写正确格式',
        type: 'warning',
      })
    }
  })
}

defineExpose({ loginAction })
// defineExpose(loginAction)
</script>
<style lang="less" scoped></style>
