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
      >
        <el-form-item label="部门名称" prop="name">
          <el-input
            placeholder="请输入部门名称"
            v-model="formList.name"
          />
        </el-form-item>
        <el-form-item label="领导" prop="leader">
          <el-input
            placeholder="请输入领导"
            v-model="formList.leader"
          />
        </el-form-item>
        <el-form-item label="部门" prop="parentId">
          <el-select
            placeholder="请选择上级部门"
            v-model="formList.parentId"
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
  leader: '',
  parentId: '',
})

const mainStore = useMainStore()
const { entireRoles, entireDepartments } =
  storeToRefs(mainStore)

const isNewRef = ref(false)
let currentRowId: number

const setDialogVisible = (
  isNew: boolean,
  rowFormData?: any
) => {
  dialogVisible.value = true

  isNewRef.value = isNew

  // 如果是编辑
  if (!isNew) {
    currentRowId = rowFormData.id

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

      if (isNewRef.value) {
        // 新建操作
        console.log('[ 111 ] >', 111)
        systemStore.postNewDataAction(
          'department',
          formList
        )
      } else {
        // 编辑操作
        systemStore.editDataAction(
          'department',
          currentRowId,
          formList
        )
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
