<template>
  <div class="userModal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '创建用户' : '编辑用户'"
      width="600px"
    >
      <el-form
        ref="formRef"
        :model="formList"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="用户名" prop="name">
          <el-input
            placeholder="请输入用户名"
            v-model="formList.name"
          />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input
            placeholder="请输入真实姓名"
            v-model="formList.realname"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
          v-if="isNewRef"
        >
          <el-input
            placeholder="请输入密码"
            v-model="formList.password"
            show-password
          />
        </el-form-item>
        <el-form-item label="手机号" prop="cellphone">
          <el-input
            placeholder="请输入手机号"
            v-model="formList.cellphone"
          />
        </el-form-item>
        <el-form-item label="角色" prop="roleId">
          <el-select
            placeholder="请选择角色"
            v-model="formList.roleId"
            style="width: 100%"
          >
            <el-option
              v-for="item in entireRoles"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门" prop="departmentId">
          <el-select
            placeholder="请选择部门"
            v-model="formList.departmentId"
            style="width: 100%"
          >
            <el-option
              v-for="item in entireDepartments"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">
            取消
          </el-button>
          <el-button type="primary" @click="configHandler">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useMainStore } from '@/store/main/main'
import { storeToRefs } from 'pinia'
import { useSystemStore } from '@/store/main/system/syetem'
import { ElMessage, type ElForm } from 'element-plus'

const dialogVisible = ref(false)

const formList = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: '',
})

const rules: any = {
  name: [
    {
      required: true,
      message: '此项不能为空',
    },
  ],
  realname: [
    {
      required: true,
      message: '此项不能为空',
    },
  ],
  password: [
    {
      required: true,
      message: '此项不能为空',
    },
  ],
  cellphone: [
    {
      required: true,
      message: '此项不能为空',
    },
  ],
  roleId: [
    {
      required: true,
      message: '此项不能为空',
    },
  ],
  departmentId: [
    {
      required: true,
      message: '此项不能为空',
    },
  ],
}
const mainStore = useMainStore()
const { entireRoles, entireDepartments } =
  storeToRefs(mainStore)

const isNewRef = ref(false)
let currentRowUserId: number

const setDialogVisible = (
  isNew: boolean,
  rowFormData?: any
) => {
  dialogVisible.value = true

  isNewRef.value = isNew

  // 如果是编辑
  if (!isNew) {
    currentRowUserId = rowFormData.id

    for (const key in formList) {
      formList[key] = rowFormData[key]
    }
  }
}

defineExpose({ setDialogVisible })

// 点击确定
const systemStore = useSystemStore()
const formRef = ref<InstanceType<typeof ElForm>>()

const configHandler = () => {
  formRef.value?.validate((valid, fields) => {
    if (valid) {
      dialogVisible.value = false

      if(isNewRef.value){
        // 新建操作
        systemStore.postNewUserData(formList)
      }else{
        // 编辑操作
        systemStore.editUserDataAction(currentRowUserId, formList)
      }


      emit('newUserFinishHandler')
    } else {
      ElMessage({
        message: '请填写正确格式',
        type: 'warning',
      })
    }
  })
}
const emit = defineEmits(['newUserFinishHandler'])
</script>
<style lang="less" scoped></style>
